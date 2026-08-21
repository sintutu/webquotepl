# Configure Github actions

The existing `.github/worfkows/playwright.yml` comes from npm init playwright@latest. Configurations are currently modifications on that workflow.

[`workflow_dispatch`](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/manually-run-a-workflow (Manually run a workflow, accessed 21 August 2026)) allows the pipelne to be triggered on code already in the remote, with a few clicks.