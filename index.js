const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    // Access the context to get inputs
    const inputs = github.context.payload.inputs;

    if (!inputs) {
      console.log('No inputs were provided to this workflow.');
      return;
    }

    // Print each input
    console.log('Workflow dispatch inputs:');
    for (const [key, value] of Object.entries(inputs)) {
      console.log(`${key}: ${value}`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
