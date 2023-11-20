import fs from "fs";
import { execSync } from "child_process";

// get eslint config from the current project
const eslintConfig = JSON.parse(
  execSync("npx eslint --print-config ./index.js").toString("utf8").trim(),
);

for (const [rule, conf] of Object.entries(eslintConfig.rules)) {
  const level = Array.isArray(conf) ? conf[0] : conf;
  if (level === 0 || level === "off") {
    eslintConfig.rules[rule] = ["off"];
  }
}

function sortJSON(json) {
  if (json === null) return json;
  if (typeof json !== "object") return json;
  if (Array.isArray(json)) return json.map(sortJSON);
  const sorted = {};
  Object.keys(json)
    .sort()
    .forEach((key) => {
      sorted[key] = sortJSON(json[key]);
    });
  return sorted;
}

fs.writeFileSync(
  "normalized-eslint.json",
  JSON.stringify(sortJSON(eslintConfig), null, 2),
);

// run prettier on it
execSync("npx prettier normalized-eslint.json --write");
