const core = require('@actions/core');

async function run() {
  try {
    // Get all input names dynamically
    const inputs = {};
    const inputNames = Object.keys(process.env).filter(key => key.startsWith('INPUT_'));

    inputNames.forEach((envVar) => {
      const inputName = envVar.replace('INPUT_', '').toLowerCase(); // Convert to lowercase
      inputs[inputName] = process.env[envVar];
    });

    if (Object.keys(inputs).length === 0) {
      console.log('No inputs were provided to this workflow.');
      return;
    }

    // Print each input
    console.log('Workflow inputs:');
    for (const [key, value] of Object.entries(inputs)) {
      console.log(`${key}: ${value}`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
