# Tom Ossowski

Serve with live reload

```
bundle exec jekyll serve --incremental --config=_config.yml,_config.dev.yml --host=0.0.0.0 & bundle exec guard
```

aliased on Don's local machine as

```
jkserve & be guard
```

## Deploy

1. Be sure to run both `npm i` and `bundle`
2. `sh deploy` (from master)
