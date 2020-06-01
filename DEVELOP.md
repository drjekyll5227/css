# @cavilha-ui/css development

If you've made it this far, **thank you**! We appreciate your contribution, and hope that this document helps you along the way. If you have any questions or problems, don't hesitate to [file an issue](https://github.com/cavilha-ui/css/issues/new).

## Structure
Cavilha CSS is published to [npm] as [@cavilha-ui/css]. Each of Cavilha CSS's "modules" lives in a subfolder under `sass/` with an `cavilha-ui-light.sass` or `cavilha-ui.dark.sass` in it.

* **components** styles (in `components/`) are common dependencies, which include support variables, native element and typography styles, buttons, navigation, tooltips, etc.
* **utilities** styles (in `utilities/`) are common dependencies, wich include mixins.
* **helpers** styles (in `helpers/`) are common dependencies, wich include mixins.
* **base** styles (in `base/`) are common dependencies, wich include mixins.
* **themes** styles (in `themes/`) are common dependencies, wich include mixins.
* **variables** styles (in `variables/`) are common dependencies, wich include mixins.

### Paths
Here's what you need to know about how the files are structured in both git and in the published npm module:

* In git, all of the SASS source files live in the `sass/` directory.
* When published, all of the files in `sass/` are "hoisted" to the package root so that you can import, say, utilities with:

    ```scss
    @import "@cavilha-ui/css/sass/components/grid.sass";
    ```

* All bundle interdependencies within Cavilha CSS are defined as relative imports (e.g. with `../`), so everything should work fine as long as the `@cavilha-ui/css` directory is in one of your Sass include paths (i.e. `node_modules`).


## Workflow
The typical Cavilha workflow looks something like this:

1. `npm install` to install the development dependencies.
1. Navigate to the module you're working on and modify the SASS and/or markdown files.
1. Push your work to a new branch.
1. Request a review from one of the Cavilha "core" team members.

## Install
Run `npm install` to install the npm dependencies.


## Scripts
Our [`package.json`](package.json) houses a collection of [run-scripts] that we use to maintain, test, build, and publish Cavilha CSS. Run `npm run <script>` with any of the following values for `<script>`:

* `fresh` does a "fresh" npm install (like `npm install -f`)
* `dist` runs `script/dist`, which creates CSS bundles of all the `cavilha.sass` and `cavilha.dark.sass` files in `sass/`.
* `sass-build-autoprefix` used by `dist` to use `postcss` to manage `sass` files.
* `sass-build-cleancss` used by `dist` to use `cleancss` to manage `sass` files.
* `sass-build-clean` used by `dist` to clear `css` files.
* `sass-build-sass` used by `dist` to use `node-sass` to compile `sass` files inside `sass` folder.themes.
* `linter` lints both our SCSS and JavaScript source files.
* `start` generat bundle of css in runtime (alias: `dev`).
* `watch:light` generat bundle of css in runtime about light `default` theme (alias: `dev`).
* `watch:dark` generat bundle of css in runtime about dark theme.

The above list may not always be up-to-date. You can list all of the available scripts by calling `npm run` with no other arguments.

[@madeiramadeira/css]: https://www.npmjs.com/package/@cavilha-ui/css
[run-scripts]: https://docs.npmjs.com/cli/run-script
[npm]: https://www.npmjs.com/

# Author

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/williamnvk">
        <img src="https://avatars0.githubusercontent.com/u/2616847?v=4" width="100px;" alt="William Novak"/>
        <br />
        <sub><b>William Novak</b></sub>
      </a>
    </td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
