# GitHub Action: Identify Workflow

## Overview
`universal-actions/identify-workflow` is a GitHub Action designed to identify itself in a triggered workflow. This is useful when a workflow is triggered by [`universal-actions/dispatch-workflow`](https://github.com/universal-actions/dispatch-workflow), and additional context or verification is required within the triggered workflow.

## Features
- Identifies and logs workflow execution details.
- Captures triggering event information.
- Supports contextual logging for debugging.

## Usage
To use this action, include it in a workflow YAML file:

```yaml
name: Identify Workflow

on:
  workflow_dispatch:

jobs:
  identify:
    runs-on: ubuntu-latest
    steps:
      - name: Identify Workflow
        uses: universal-actions/identify-workflow@v1
```

## Example Use Cases
- Identifying workflows triggered by `dispatch-workflow`.
- Ensuring correct workflow execution flow.

## Behavior
This action takes no inputs and provides no outputs. It simply prints the wrapping workflow parameters to be identified by the `dispatch-workflow` action.

## License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
