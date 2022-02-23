import { ESLint } from "eslint";
import fs from "fs";
import path from "path";
import _ from "lodash";

(async () => {
  const eslint = new ESLint({
    overrideConfigFile: path.resolve("../index.js"),
  });

  const expectations = fs.readdirSync("sources").map((fileName) => {
    const absPath = path.resolve("sources", fileName);

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
      fileName,
      filePath: absPath,
      expects: _.sortBy(expects, "ruleId", "severity"),
    };
  });

  const results = await eslint.lintFiles(["./sources/*"]);

  let failed = 0,
    passed = 0;
  for (const exp of expectations) {
    console.log(
      `File ${exp.fileName} should have ${exp.expects.length} eslint messages`
    );

    const res = results.find((r) => exp.filePath === r.filePath);
    if (!res) throw new Error(`Missing eslint results for ${exp.filePath}!`);

    const given = _.sortBy(
      [...res.messages].map((m) => {
        return {
          ruleId: m.ruleId,
          severity:
            m.severity === 2 ? "error" : m.severity === 1 ? "warn" : "???",
        };
      }),
      "ruleId",
      "severity"
    );

    const expected = exp.expects;

    if (!_.isEqual(given, expected)) {
      console.error(
        "\n*Test Failed*",
        "\nGiven:",
        given,
        "\nExpected:",
        expected,
        "\n"
      );
      failed++;
    } else {
      console.log("  Passed");
      passed++;
    }
  }

  console.log(
    `\n${passed} passed. ${failed} failed. Test suite ${
      failed > 0 ? "failed" : "passed"
    }.`
  );
  if (failed > 0) {
    process.exit(1);
  }
})();
