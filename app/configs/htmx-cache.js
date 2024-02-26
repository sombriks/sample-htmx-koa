// in java there is the [webjars initiative][1], it helps us to download and
// cache browser libraries along java dependencies. for node we don't quite need
// something like that because we can already declare the dependency on
// `package.json` and if the package is able to provide a frontend version of the
// dep then we can do something like this hack.
// 
// [1]: https://www.webjars.org/
//
import fs from "node:fs"
import { htmxRoot } from "./project-paths.js"

export const getHtmx = fs
  .readFileSync(`${htmxRoot}/dist/htmx.min.js`)
  .toString()
