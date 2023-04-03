# Contributing

## Testing problem matchers locally

Since GitHub Actions are functionally very similar to [VS Code's problem matchers](https://code.visualstudio.com/Docs/editor/tasks#_defining-a-problem-matcher) (outside of some [exceptions](https://github.com/actions/runner/blob/main/docs/adrs/0276-problem-matchers.md#where-we-diverge-from-vscode)), we can use VS Code locally to quickly test the matcher patterns.

1. Make sure VS Code `.vscode/tasks.json` file is in sync with actual problem matchers
    ```bash
    # Run helper script to setup VS Code tasks
    npm run setup-tasks
    ```
1. Run task in VS Code using the `Tasks: Run Task` command from the command palette


## Release a new version

GitHub Actions will run the entry point from the action.yml. Packaging assembles the code into one file that can be checked in to Git, enabling fast and reliable execution and preventing the need to check in node_modules.

Actions are run from GitHub repos.  Packaging the action will create a packaged action in the dist folder.

Run package

```bash
npm run package
```

Since the packaged index.js is run from the dist folder, make sure to commit its contents.

```bash
git add dist
```
