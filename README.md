# stylelint-config

stylelint config for gmo-media.

## Basic Usage

Install

```bash
$ npm install --save-dev stylelint @gmo-media/stylelint-config
```

`.stylelintrc`

```json
{
  "extends": "@gmo-media/stylelint-config",
  "rules": {
    "indentation": 4
  }
}
```

Please set the indentation. (default: 4)

## Rule sets

### `@gmo-media/stylelint-config/regular`
* Regular configuration. (default)

### `@gmo-media/stylelint-config/loose`
* Loose configuration.

### `@gmo-media/stylelint-config/extra`
* Extra configuration.

## Development
1. Edit the rules.
2. `npm test`
3. `git commit`
4. `npm version XXX`
5. `git push origin master`
6. `git push origin v1.x.x`
7. `npm publish --access=public`

## License

MIT
