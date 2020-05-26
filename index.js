const core = require('@actions/core');
const path = require('path');

const AVAILABLE_FORMATS = ['gcc', 'tty'];

async function run() {
  try { 
    const inputFormat = core.getInput('format');
    const formats = inputFormat ? [inputFormat] : AVAILABLE_FORMATS;
    const matchersPath = path.join(__dirname, '..', '.github');

    for (const format of formats) {
      console.log(`Activating shellcheck problem matcher for format '${format}'`);
      console.log(`##[add-matcher]${path.join(matchersPath, `shellcheck-${format}.json`)}`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run()
