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
        // Keep value as a string if not valid JSON
      }

      inputs[inputName] = value;
    });

    // Check if uuid is supplied
    if (inputs.uuid && inputs.uuid !== 'NOT_PROVIDED') {
      console.log(`uuid: ${inputs.uuid}`);
    } else {
      console.log('Workflow Dispatch Inputs:');
      Object.entries(inputs).forEach(([key, value]) => {
        console.log(`${key}: ${typeof value === 'object' ? JSON.stringify(value, null, 2) : value}`);
      });
    }

  } catch (error) {
    core.setFailed(`Error processing inputs: ${error.message}`);
  }
}

run();
