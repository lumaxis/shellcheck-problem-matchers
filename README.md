
<p align="center">
  <a href="https://github.com/lumaxis/shellcheck-problem-matchers/actions"><img alt="shellcheck-problem-matchers status" src="https://github.com/lumaxis/shellcheck-problem-matchers/workflows/Test%20shellcheck%20problem%20matchers/badge.svg"></a>
</p>

# shellcheck problem matchers for GitHub Actions


## Create a release branch

Users shouldn't consume the action from master since that would be latest code and actions can break compatibility between major versions.

Checkin to the v1 release branch

```bash
$ git checkout -b v1
$ git commit -a -m "v1 release"
```

```bash
$ git push origin v1
```

Your action is now published! :rocket: 

See the [versioning documentation](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md)

## Usage

You can now consume the action by referencing the v1 branch

```yaml
uses: lumaxis/shellcheck-problem-matchers@v1
with:
  milliseconds: 1000
```

See the [actions tab](https://github.com/lumaxis/shellcheck-problem-matchers/actions) for runs of this action! :rocket:

## Contributing

### Release a new version

GitHub Actions will run the entry point from the action.yml. Packaging assembles the code into one file that can be checked in to Git, enabling fast and reliable execution and preventing the need to check in node_modules.

Actions are run from GitHub repos.  Packaging the action will create a packaged action in the dist folder.

Run package

```bash
npm run package
```

Since the packaged index.js is run from the dist folder.

```bash
git add dist
```
