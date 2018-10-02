# ESLint-plugin-ts

TypeScript specific linting rules for ESLint

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

```sh
$ npm i eslint --save-dev
```

If you installed `ESLint` globally, you have to install the plugin globally too. Otherwise, install it locally.

```sh
$ npm i eslint-plugin-ts --save-dev
```

Install [typescript-eslint-parser](https://github.com/eslint/typescript-eslint-parser) either locally or globally.

```sh
$ npm i typescript-eslint-parser --save-dev
```

# Configuration

Use [the recommended preset](#recommended) to get reasonable defaults:

```json
  "extends": [
    "eslint:recommended",
    "plugin:ts/recommended"
  ]
```

If you do not use a preset you will need to specify individual rules and add extra configuration.

Add "ts" to the plugins section.

```json
{
  "plugins": ["ts"]
}
```

You will need to configure the TypeScript parser.

```json
{
  "parser": "eslint-typescript-parser"
}
```

Enable the rules that you would like to use.

```json
  "rules": {
    "ts/no-any": "error"
  }
```

# List of supported rules

- [ts/no-any](docs/rules/no-any.md): Forbid the usage of the "any" type annotation

# License

ESLint-plugin-ts is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
