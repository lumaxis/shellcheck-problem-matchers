
<p align="center">
  <a href="https://github.com/lumaxis/shellcheck-problem-matchers/actions"><img alt="shellcheck-problem-matchers status" src="https://github.com/lumaxis/shellcheck-problem-matchers/workflows/Test%20shellcheck%20problem%20matchers/badge.svg"></a>
</p>

# shellcheck problem matchers for GitHub Actions

A set of problem matchers for [`shellcheck`](https://github.com/koalaman/shellcheck) that automatically decorate log output and generate [GitHub annotations](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-status-checks) on for example a Pull Request.
This currently supports the `gcc` and `tty` formats.

## Usage

To enable the shellcheck problem matchers, simply add this Action as a step **before** running the actual `shellcheck` command:

```yaml
uses: lumaxis/shellcheck-problem-matchers@v1
run: shellcheck -f gcc *.sh
```

> **Note:** You will get the best results when specifying `gcc` as the `shellcheck` output format: `shellcheck -f gcc`

See the [actions tab](https://github.com/lumaxis/shellcheck-problem-matchers/actions) for runs of this action! :rocket:

### Additional Options

By default, this Action installs all available problem matchers but you can specify one of the available formats explicitly:

```yaml
uses: lumaxis/shellcheck-problem-matchers@v1
with:
  format: gcc # Available options are "gcc" or "tty"
```
