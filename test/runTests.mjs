import fs from "fs";
import path from "path";

import _ from "lodash";
import { ESLint } from "eslint";
import glob from "glob";
import chalk from "chalk";

(async () => {
  const eslint = new ESLint({
    // be explicit about which config we are using
    overrideConfigFile: path.resolve(".eslintrc"),
  });

  const globPattern = "{sources,with-nested}/*.{js,ts,jsx,tsx}";

  const expectations = glob.sync(globPattern).map((filePath) => {
    const absPath = path.resolve(filePath);

    const contents = fs.readFileSync(absPath, "utf-8");

    const expects = contents
      .split("\n")
      .map((line) => {
        const m = line.match(
          /^\s*\/\/\s*eslint-(warn|error):\s*([@\/\w-]+)\s*$/
        );
        if (m)
          return {
            ruleId: m[2],
            severity: m[1],
          };
        return null;
      })
      .filter(Boolean);

    return {
      fileLabel: path.join("test", filePath),
      filePath: absPath,
      expects: _.sortBy(expects, "ruleId", "severity"),
    };
  });

  const results = await eslint.lintFiles([globPattern]);

  let failed = 0,
    passed = 0;
  for (const exp of expectations) {
    console.log(
      `${chalk.bold(exp.fileLabel)} should have ${
        exp.expects.length > 0
          ? _.map(
              _.countBy(exp.expects, "severity"),
              (count, severity) => `${count} ${severity}(s)`
            ).join(", ")
          : "no problems"
      }`
    );

    const res = results.find((r) => exp.filePath === r.filePath);
    if (!res) {
      console.error(
        chalk.bold.red("  Failed"),
        `\n  Missing eslint results for ${exp.filePath}!`
      );
      failed++;
      continue;
    }

    const given = _.sortBy(
      [...res.messages].map((m) => {
        return {
          ruleId: m.ruleId,
          severity:
            m.severity === 2 ? "error" : m.severity === 1 ? "warn" : "???",
          message: m.message,
        };
      }),
      "ruleId",
      "severity"
    );

    const expected = exp.expects;

    if (
      !_.isEqual(
        given.map((g) => _.omit(g, "message")),
        expected
      )
    ) {
      console.error(
        chalk.bold.red("  Failed"),
        "\n  Given:",
        given,
        "\n  Expected:",
        expected,
        "\n"
      );
      failed++;
    } else {
      console.log(chalk.bold.green("  Passed"));
      passed++;
    }
  }

  console.log(
    `\n${passed} passed. ${failed} failed. Test suite ${
      failed > 0 ? "failed" : "passed"
    }.\n`
  );
  if (failed > 0) {
    process.exit(1);
  }
})().catch((err) => {
  console.error("Test suite fatal error:\n", err);
  process.exit(1);
});
