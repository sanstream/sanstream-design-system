```jsx
<div>
  <SpecialLink
    triangleToText="left"
    href="https://duckduckgo.com"
  >
    arrow to the left
  </SpecialLink>
  <br />
  <SpecialLink
    triangleToText="none"
    href="https://duckduckgo.com"
  >
    no arrow
  </SpecialLink>
  <br />
  <SpecialLink
    triangleToText="right"
    href="https://duckduckgo.com"
  >
    arrow to the right
  </SpecialLink>
  <br />
</div>
```

```jsx
<div
  style="backgroundColor: var(--darkest-colour)"
>
  <SpecialLink
    triangleToText="left"
    href="https://duckduckgo.com"
    :hasDarkParent="true"
  >
    arrow to the left
  </SpecialLink>
  <br />
  <SpecialLink
    triangleToText="none"
    href="https://duckduckgo.com"
    :hasDarkParent="true"
  >
    no arrow
  </SpecialLink>
  <br />
  <SpecialLink
    triangleToText="right"
    href="https://duckduckgo.com"
    :hasDarkParent="true"
  >
    arrow to the right
  </SpecialLink>
  <br />
</div>
```