# mdast-lint-trailing-slash

This [mdast-lint](https://github.com/wooorm/mdast-lint) rule was created for [free-programming-books-lint](https://github.com/vhf/free-programming-books-lint) to enforce [free-programming-books](https://github.com/vhf/free-programming-books) [formatting guidelines](https://github.com/vhf/free-programming-books/blob/master/CONTRIBUTING.md#formatting).

This rule checks that the host part of a URL has no extra trailing slash. It only applies to links.

```Text
<!-- Invalid -->

[example.com](http://example.com/)

<!-- Valid -->

[example.com](http://example.com)
```

## Using the rule

### Via `.mdastrc`

```bash
npm install -g mdast
npm install -g mdast-lint
npm install mdast-lint-trailing-slash # local install!
```

Then, set up your `.mdastrc`:

```JSON
{
  "plugins": {
    "mdast-lint": {
      "external": ["mdast-lint-trailing-slash"]
    }
  }
}
```

Now you can use the following command to run the lint:

```bash
mdast --no-stdout xxx.md
```

### Via CLI

```bash
npm install -g mdast
npm install -g mdast-lint
npm install -g mdast-lint-trailing-slash # global install!
mdast --no-stdout -u mdast-lint="external:[\"mdast-lint-trailing-slash\"]" xxx.md
```

Note that the `lint=<lint_options>` option only works with `mdast >= 1.1.1`.

This `README.md` is based on [this one](https://github.com/chcokr/mdast-lint-sentence-newline/blob/250b106c9e19b387270099cf16f17a84643f8944/README.md) by [@chcokr](https://github.com/chcokr) (MIT).
