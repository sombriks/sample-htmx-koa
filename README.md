# [sample-htmx-koa][repo]

Sampling htmx using nodejs ecosystem so i can compare with [this one][other].

## How to run

```bash
npm install
npm run dev
```

## How to test

```bash
npm install
npm run test:coverage
```

## Noteworthy

- [Koa][koa] has a nice [render/view middleware][koa-view] supporting a lot of
  [templating languages][temp-langs].
- [Nunjucks][njk] was chosen by no special reason except the good documentation.

## Next steps

- docker
- other database engine
- detailed comparison with javalin version

[repo]: https://github.com/sombriks/sample-htmx-koa
[other]: https://github.com/sombriks/sample-htmx-javalin
[koa]: https://koajs.com/
[koa-view]: https://github.com/ladjs/koa-views
[temp-langs]: https://github.com/tj/consolidate.js#supported-template-engines
[njk]: https://mozilla.github.io/nunjucks/getting-started.html
