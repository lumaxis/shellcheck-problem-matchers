const core = require('@actions/core');

const AVAILABLE_FORMATS = ['gcc', 'json', 'tty'];

async function run() {
  try { 
    const inputFormat = core.getInput('format');
    const formats = inputFormat ? [inputFormat] : AVAILABLE_FORMATS;

    for (const format of formats) {
      console.log(`Activating shellcheck problem matcher for format '${format}'`);
      console.log(`::add-matcher::problem-matchers/shellcheck-${format}-problem-matcher.json`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run()
