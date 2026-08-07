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

The action runs `index.js` directly from the repository root. It has no runtime dependencies (only Node's built-in `path` module), so there is no bundling or build step — nothing needs to be compiled or committed before a release.

Releasing is just tagging:

```bash
git tag -a v2.x.y -m "v2.x.y"
git push origin v2.x.y
```

Then move the major version tag so consumers pinned to `@v2` pick up the release:

```bash
git tag -fa v2 -m "v2"
git push --force origin v2
```
