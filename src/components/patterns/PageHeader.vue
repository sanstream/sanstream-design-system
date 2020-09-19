<template>
  <header class="PageHeader sanstream-grid-layout-full-viewport">
    <TopDecoration/>
    <nav class="sanstream-grid-layout">
      <g-link class="PageHeader--logo-link" to="/">
        <g-image
          class="PageHeader--logo"
          src="/logos/logo-emblem.svg" alt="sanstream logo" />
      </g-link>

      <NavigationMenu
        class="main-navigation"
        :collectionPages="linksToCollections"
        :singlePages="linksToSinglePages"
      />
    </nav>
  </header>
</template>

<script>
import TopDecoration from '../patterns/TopDecoration'
import NavigationMenu from '../patterns/NavigationMenu'

export default {
  name: 'PageHeader',
  components: {
    TopDecoration,
    NavigationMenu
  },

  data () {
    return {
      linksToCollections: [
        {
          href: '/blog/',
          label: 'blog'
        }
      ],
      linksToSinglePages: [
        {
          href: '/cv/',
          label: 'my CV'
        }
      ]
    }
  }
}
</script>

<style>
.PageHeader {
  position: relative;
  position: sticky;
  top: 0;
  left: 0;
  height: calc(6 * var(--base-size));
  background-color: var(--colour-background);
  width: 100vw;
  z-index: 20;
}

.PageHeader .TopDecoration {
  z-index: 3;
  position: absolute;
}

.PageHeader nav {
  position: relative;
  z-index: 4;
  position: relative;
  padding: calc(2.5 * var(--base-size)) 0 0 0;
}

.PageHeader nav::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: calc(-1 * var(--base-size));
  border-bottom: 1px solid var(--toned-down-border-colour);
  height: 1px;
  width: calc(100% + 2 * var(--base-size));
}

.PageHeader nav.sanstream-grid-layout a {
  grid-area: 1 / 1 / 1 / 9;
  place-self: center;
}

.PageHeader nav.sanstream-grid-layout .main-navigation {
  grid-area: 1 / 8 / 1 / 9;
  place-self: center;
}

@media (max-width: 920px) {
  .PageHeader {
    height: calc(3 * var(--base-size));
  }

  .PageHeader .TopDecoration {
    opacity: 0.3;
  }

  .PageHeader--logo-link img {
    transform-origin: left center;
    transform: scale(0.8);
  }

  .PageHeader nav {
    padding: 0 0 0 0;
    height: 100%;
    position: relative;
  }

  .PageHeader nav.sanstream-grid-layout .main-navigation {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
