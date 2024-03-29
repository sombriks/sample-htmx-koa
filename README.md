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
npm run coverage
```

Check the small todo list on <http://localhost:3000>

## Noteworthy

- [Koa][koa] has a nice [render/view middleware][koa-view] supporting a lot of
  [templating languages][temp-langs].
- [Nunjucks][njk] was chosen by no special reason except the good documentation.
  It is superior to velocity in some ways, but the point isn't that but show how
  [htmx][htmx] behaves well with literally any server side templating engine.
- Thanks to [koa-bodyparser][body-parser] the ui sends form data to controller
  and tests send json yet no problem due the simple nature of data. The
  middleware does the conversion in a very transparent way. I might need to
  improve testcase in future to send form data as well.

## Next steps

- [X] ~~better logging~~ we configured [cabin][cabin]/[signale][signale]
- [X] write tests with [ava][ava]
- [ ] field to search for todos
- [ ] detailed comparison with javalin version
- [ ] docker
- [ ] other database engine

[repo]: https://github.com/sombriks/sample-htmx-koa
[other]: https://github.com/sombriks/sample-htmx-javalin
[koa]: https://koajs.com/
[koa-view]: https://github.com/ladjs/koa-views
[temp-langs]: https://github.com/tj/consolidate.js#supported-template-engines
[njk]: https://mozilla.github.io/nunjucks/getting-started.html
[htmx]: https://htmx.org
[cabin]: https://cabinjs.com
[signale]: https://github.com/klaudiosinani/signale
[ava]: https://github.com/avajs/ava
[body-parser]: https://github.com/koajs/bodyparser
