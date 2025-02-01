#!/usr/bin/env node

const { execSync } = require("child_process");
const projectName = process.argv[2] || "my-app";

console.log(`Creating project: ${projectName}`);
execSync(`git clone <github-repo-url> ${projectName}`);
execSync(`cd ${projectName} && rm -rf .git && npm install`, {
  stdio: "inherit",
});
