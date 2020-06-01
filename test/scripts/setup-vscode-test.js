const fs = require('fs');
const path = require('path');

const problemMatchersDir = '.github'
const vscodeTasksDir = '.vscode'
const tasksTemplate = {
  "version": "2.0.0",
  "tasks": []
};

const files = fs.readdirSync(problemMatchersDir).filter(file => file.startsWith('shellcheck-'));
files.forEach((fileName) => {
  const format = fileName.match(/^shellcheck-(\w+).json$/)[1];
  const rawMatcher = fs.readFileSync(path.join(problemMatchersDir, fileName), 'utf8');
  const matcher = JSON.parse(rawMatcher);

  tasksTemplate.tasks.push({
    "label": `Test ${format} matcher`,
    "type": "shell",
    "command": `shellcheck -f ${format} test/fixtures/*.sh`,
    "problemMatcher": {
      "fileLocation": [
        "relative",
        "${workspaceFolder}"
      ],
      "pattern": matcher.problemMatcher[0].pattern
    }
  })
});

fs.writeFileSync(path.join(vscodeTasksDir, 'tasks.json'), JSON.stringify(tasksTemplate, undefined, 2))
