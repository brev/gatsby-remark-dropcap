# gatsby-remark-dropcap

[Gatsby.js][gatsby] [Remark][remark] plugin wrapper for
[remark-dropcap][remarkdropcap].

Modifies the first letter of the first paragraph from your markdown, converting
it into a cross-browser Drop Cap typography span.

## Syntax

Input Markdown:

```markdown
# Hello World

When in the course of human events.

Things go **wild**.
```

Output HTML:

```html
<h1>Hello World</h1>
<p>
  <span class="dropcap">W</span>hen in the course of human events.
</p>
<p>
  Things go <strong>wild</stong>.
</p>
```

## Install

```bash
npm install --save gatsby-remark-dropcap
```

## Usage

In your `gatsby-config.js`:

```javascript
plugins: [
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        'gatsby-remark-dropcap'
      ],
    },
  },
];
```

## Test

```bash
npm test
```

## License

[MIT][mit]

© 2019 Brev Patterson <me@brev.name> (https://brev.name)

[gatsby]: https://www.gatsbyjs.org/
[mit]: https://github.com/brev/gatsby-remark-contianers/blob/master/LICENSE
[remark]: https://remark.js.org/
[remarkdropcap]: https://github.com/brev/remark-dropcap

