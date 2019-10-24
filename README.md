# gatsby-remark-dropcap

[Gatsby.js][gatsby] [Remark][remark] plugin wrapper for
[remark-dropcap][remarkdropcap].

Modifies the first letter of the first paragraph from your markdown, converting
it into accessible, cross-browser Drop Cap typography markup.

## Syntax

Input Markdown:

```markdown
# Hello World

When in the course of human events.

Things go wild.
```

Output HTML:

```html
<h1>Hello World</h1>
<p>
  <span aria-hidden="true">
    <span class="dropcap">W</span>hen
  </span>
  <span class="invisible">When</span>
  in the course of human events. 
</p>
<p>
  Things go wild.
</p>
```

## Install

```bash
npm install --save gatsby-remark-dropcap
```

## Usage

The following snippets are for the `gatsby-config.js` file.

Simple usage:

```javascript
plugins: [
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        'gatsby-remark-dropcap'
      ]
    }
  }
]
```

Advanced usage, with options:

```javascript
plugins: [
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-dropcap',
          options: {
            classDropcap:   'dropcap',
            classInvisible: 'invisible'
          }
        }
      ]
    }
  }
]
```

## Styling

Example CSS classes to get you started:

```css
.dropcap {
  color: red;
  float: left;
  font-size: 5rem;
  line-height: 3.5rem;
  margin: 0;
  padding: 0.5rem;
}

/* hide visually from eyes, but not aurally from screen readers */
.invisible {
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  top: auto;
  white-space: nowrap;
  width: 1px;
}
```

## License

[MIT][mit]

© 2019 Brev Patterson <me@brev.name> (https://brev.name)

[gatsby]: https://www.gatsbyjs.org/
[mit]: https://github.com/brev/gatsby-remark-contianers/blob/master/LICENSE
[remark]: https://remark.js.org/
[remarkdropcap]: https://github.com/brev/remark-dropcap

