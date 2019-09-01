# pure-accordion
Accordion working with pure Vainilla Javascript and SASS

## Context: Frontend Exercise

With the next markup, you must create an accordion (JS / CSS) show only the contents of a section at a time.
Sure to follow the [SUIT](https://suitcss.github.io/) convention when working with CSS.


```html
<dl>
  <dt>Section 1</dt>
  <dd>
    <p>Section 1 Content...</p>
  </dd>
  <dt>Section 2</dt>
  <dd>
    <p>Section 2 Content...</p>
  </dd>
  <dt>Section 3</dt>
  <dd>
    <p>Section 3 Content...</p>
  </dd>
</dl>
```

### Conditions
* Use Sass for generate CSS
* Use ES6
* Use only Vanilla JS, without any JS framework
* Generate gh-page for publish

### Bonus
* Add new section with Ajax content

## Deployment

As mentioned [here](https://medium.com/linagora-engineering/deploying-your-js-app-to-github-pages-the-easy-way-or-not-1ef8c48424b7) the deployment process consist in pushing the changes into gh-pages branch. The ``/dist`` folder is "connected" with that branch.

To pubblish a new version 

git subtree

```
git subtree
```

## Icons

image of the available icons

icomoon link

## API disclaimer

This product uses the TMDb API but is not endorsed or certified by TMDb.

## Tooling

- webpack (for bundle)
- jest (for testing)
