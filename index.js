const core = require('@actions/core');

async function run() {
  try {
    // Get all input names dynamically
    const inputs = {};
    const inputNames = Object.keys(process.env).filter(key => key.startsWith('INPUT_'));

    inputNames.forEach((envVar) => {
      const inputName = envVar.replace('INPUT_', '').toLowerCase(); // Convert to lowercase
      let value = process.env[envVar];

      // Attempt to parse JSON inputs if applicable
      try {
        value = JSON.parse(value);
      } catch (error) {
        // Keep value as string if not valid JSON
      }

      inputs[inputName] = value;
    });

    if (Object.keys(inputs).length === 0) {
      console.log('No inputs were provided to this workflow.');
      return;
    }

    // Print each input
    console.log('Workflow Inputs:');
    Object.entries(inputs).forEach(([key, value]) => {
      console.log(`${key}: ${typeof value === 'object' ? JSON.stringify(value, null, 2) : value}`);
    });

    // Optionally, set output for downstream steps
    core.setOutput('parsedInputs', JSON.stringify(inputs));

  } catch (error) {
    core.setFailed(`Error processing inputs: ${error.message}`);
  }
}

run();
