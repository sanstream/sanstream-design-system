<template>
  <svg
    class="link-pointer"
    width="16"
    height="18"
    viewBox="0 0 16 18"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.511413
    1.05792L14.073
    8.67267L0.715917
    16.6426L0.511413
    1.05792Z"
      fill="#FF5C00"
    />
  </svg>
</template>

<script>
/**
 * PointerTriangle is a visual decorative element and therefore has no semantic meaning,
 * instead that it indicates that user will move away from a state to a new one,
 * when they click on in it. Using with links and buttons.
 */
export default {
  name: 'PointerTriangle',
}
</script>

<docs>
```jsx
<PointerTriangle/>
```
</docs>
