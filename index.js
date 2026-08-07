const path = require('path');

const AVAILABLE_FORMATS = ['gcc', 'tty'];

function getInput(name) {
  const key = `INPUT_${name.replace(/ /g, '_').toUpperCase()}`;
  return (process.env[key] || '').trim();
}

function setFailed(message) {
  console.log(`::error::${message}`);
  process.exitCode = 1;
}

async function run() {
  try {
    const inputFormat = getInput('format');
    const formats = inputFormat ? [inputFormat] : AVAILABLE_FORMATS;
    const matchersPath = path.join(__dirname, '.github');

    for (const format of formats) {
      console.log(`Activating shellcheck problem matcher for format '${format}'`);
      console.log(`##[add-matcher]${path.join(matchersPath, `shellcheck-${format}.json`)}`);
    }
  } catch (error) {
    setFailed(error.message);
  }
}

run()
