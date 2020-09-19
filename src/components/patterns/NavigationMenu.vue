<template>
  <menu class="navigation-menu">
    <Button
      variant="textual"
      :onClick="openDialog"
    >
      <Icon
        id="Menu"
        titleText="Open main menu"
      />
    </Button>
    <!-- <ClientOnly> -->
    <dialog
      class="sanstream-grid-layout-full-viewport"
      ref="dialog"
    >
      <div
        class="sanstream-fluid-layout navigation-menu--dialog-content"
      >
        <header>
          <h1
            class="sanstream-heading"
          >Main menu</h1>
          <Button
            variant="textual"
            :onClick="closeDialog"
            class="navigation-menu--close-dialog"
          >
            <Icon
              id="CloseCross"
              titleText="Close main menu"
            />
          </Button>
        </header>
        <ul
          class="navigation-menu-links"
          v-if="collectionPages.length"
        >
          <li
            v-for="page in collectionPages"
            :key="page.href"
          >
            <SpecialLink
              :href="page.href"
              triangleToText="right"
              :hasDarkParent="true"
            >
              {{page.label}}
            </SpecialLink>
          </li>
        </ul>
        <ul
          class="navigation-menu-links"
          v-if="singlePages.length"
        >
          <li
            v-for="page in singlePages"
            :key="page.href"
          >
            <SpecialLink
              :href="page.href"
              triangleToText="right"
              :hasDarkParent="true"
            >
              {{page.label}}
            </SpecialLink>
          </li>
        </ul>
      </div>
    </dialog>
    <!-- </ClientOnly> -->
  </menu>
</template>

<script>
import VueTypes from 'vue-types'
import SpecialLink from '../elements/SpecialLink'
import Button from '../elements/Button'
import Icon from '../elements/Icon'

const arrayOfLinks = VueTypes.arrayOf(VueTypes.shape({
  href: VueTypes.string,
  label: VueTypes.string
}))

export default {
  name: 'NavigationMenu',
  components: {
    SpecialLink,
    Button,
    Icon
  },
  props: {
    collectionPages: arrayOfLinks,
    singlePages: arrayOfLinks
  },

  data () {
    return {
      isDialogVisible: false
    }
  },

  mounted () {
    import('dialog-polyfill')
      .then(m => m.default.registerDialog(this.$refs.dialog))
      .catch()
  },

  methods: {
    openDialog () {
      if (this.$refs.dialog.showModal) {
        this.$refs.dialog.showModal()
      } else {
        console.log(this.$refs.dialog)
        this.$refs.dialog.show()
      }
    },

    closeDialog () {
      this.$refs.dialog.classList.add('hide')
      this.$refs.dialog.addEventListener('animationend', () => {
        this.$refs.dialog.classList.remove('hide')
        this.$refs.dialog.close()
      }, {
        once: true
      })
    }
  }
}
</script>

<style scoped>
menu button {
  color: var(--sanstream-orange);
}

menu dialog:not([open]) {
  display: none;
}

@keyframes show-dialog {
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
}
@keyframes hide-dialog{
  from {
      opacity: 1;
  }
  to {
      opacity: 0;
  }
}

menu dialog[open]::backdrop {
  background-color: rgba(0,0,0,0);
}

menu dialog[open] {
  color: #ffffff;
  border: none 0;
  position: fixed;
  background-color: #4d4d4d;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;
  animation: show-dialog 0.25s ease-in-out;
}

menu dialog.hide {
  animation: hide-dialog 0.25s ease-in-out;
}
.navigation-menu--dialog-content {
  position: relative;
}

.navigation-menu--close-dialog {
  position: absolute;
  top: var(--base-size);
  right: calc(-0.5 * var(--base-size));
}

dialog header h1 {
  width: calc(100% - 3 * var(--base-size));
  color: inherit;
  margin-bottom: 2em;
}

dialog ul.navigation-menu-links {
  padding: 0;
  margin: 3em 0 2em 0;
  list-style: none;
}

dialog ul.navigation-menu-links li {
  margin: 0.75em 0;
  text-align: right;
  display: flex;
}

dialog ul.navigation-menu-links li > a {
  flex: 0 0 auto;
}

dialog ul.navigation-menu-links li::before {
  content: '';
  border-bottom: 2px dashed var(--dark-grey-fill);
  display: inline-block;
  flex: 2 1 auto;
  position: relative;
  top: 1px;
  margin-right: 1em;
  opacity: 0.4;
}

</style>

<docs>
```vue
<script>
export default {
  data () {
    return {
      collectionPages: [
        {
          href:"/blog/",
          label: 'blog',
        },
        {
          href:"/portfolio/",
          label: 'portfolio',
        },
      ],
      singlePages: [
        {
          href:"/cv/",
          label: 'my CV',
        },
      ],
    }
  }
}
</script>

<template>
  <NavigationMenu
    :collectionPages="collectionPages"
    :singlePages="singlePages"
  />
</template>
```
</docs>
