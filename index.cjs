#!/usr/bin/env node

const { execSync } = require("child_process");
const projectName = process.argv[2] || "my-app";

console.log(`Creating project: ${projectName}`);
// console.log(`echo Creating project: ${projectName}`);
execSync(
  `git clone https://github.com/arorasahil17/ReduxQuery-Kit.git ${projectName}`
);
execSync(`cd ${projectName} && npm install`, {
  stdio: "inherit",
});
console.log("Installing dependencies...");
