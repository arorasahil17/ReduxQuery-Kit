#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const projectName = process.argv[2] || "my-app";

console.log(`Creating project: ${projectName}`);

// Clone the repository
execSync(
  `git clone https://github.com/arorasahil17/ReduxQuery-Kit.git ${projectName}`,
  {
    stdio: "inherit",
  }
);

// Navigate to the project directory
const projectPath = path.resolve(process.cwd(), projectName);

if (fs.existsSync(projectPath)) {
  console.log("Installing dependencies...");
  execSync(`npm install`, {
    stdio: "inherit",
    cwd: projectPath,
  });

  console.log("Project setup complete!");
  console.log(`cd ${projectName} and run 'npm run dev' to start your project.`);
} else {
  console.error("Project folder not found. Please check the repository.");
}
