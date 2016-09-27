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
    "indentation": 2
  }
}
```

Please set the indentation. (default: 4)

## Rule sets

### `@gmo-media/stylelint-config/regular`
* Regular configuration. (default)

### `@gmo-media/stylelint-config/strict`
* Strict configuration.

### `@gmo-media/stylelint-config/loose`
* Loose configuration.

## Development
1. Edit the rules.
2. `npm test`
3. `npm version XXX -m 'message'`
4. `git push origin master`
5. `git push origin v1.x.x`
6. `npm publish --access=public`

## License

MIT
