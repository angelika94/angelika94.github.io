<template>
  <header class="header">
    <div class="header__brand">
      <svg
        ref="nav__open"
        tabindex="0"
        @keyup.enter="openNavigation"
        @click="openNavigation"
        class="header__hamburger"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M424 394H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 265H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 135H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16z"/>
      </svg>
      <span class="header__name">Git <b>Playbook</b></span>
    </div>
    <nav class="nav"
         v-if="isVisible || isDesktop">
      <svg
        ref="nav__close"
        class="nav__icon nav__icon--close"
        tabindex="0"
        @keyup.enter="closeNavigation"
        @click="closeNavigation"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M77.6 21.1l-28 28.1-28.1-28.1-1.9 1.9 28 28.1-28 28.1 1.9 1.9L49.6 53l28 28.1 2-1.9-28.1-28.1L79.6 23z"/>
      </svg>
      <ul class="nav__list">
        <!--<nuxt-link-->
          <!--:to="$routes.index.path"-->
          <!--class="nav__item">-->
          <!--{{ $routes.index.title }}-->
        <!--</nuxt-link>-->
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'header-component',
    data() {
      return {
        isVisible: false,
        isDesktop: false
      }
    },
    mounted() {
      this.isDesktop = window.innerWidth >= 780;

      window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize)
    },
    methods: {
      handleResize(event) {
        this.isDesktop = event.currentTarget.innerWidth >= 780;
      },
      openNavigation() {
        this.$emit('toggleMenu')
      },
      closeNavigation(event) {
        this.$emit('toggleMenu')
      }
    }
  }
</script>
<style lang="scss">
  @import '../src/assets/scss/colors';

  $nav-width: 200px;

  .header {
    display: flex;
    flex-direction: column;
    min-height: 55px;
    max-height: 55px;
    overflow: hidden;
    color: $color-core-white;
    background: $color-core-blue;
  }

  .header__hamburger {
    width: 45px;
    height: 45px;
    padding: 5px;
    margin: 5px;
    fill: $color-core-white;
  }

  .header__hamburger:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.2);
  }

  .header__name {
    display: flex;
    flex: 1;
    align-items: center;
    padding: 10px;
    font-weight: 200;
    color: $color-core-white;
    white-space: nowrap;
  }

  .header__name b {
    margin-left: 5px;
    font-weight: 800;
  }

  .header__brand {
    display: flex;
    flex: 1;
    align-items: center;
  }

  .nav {
    position: absolute;
    top: 0;
    left: -$nav-width;
    display: flex;
    flex-direction: column;
    width: $nav-width;
    height: 100vh;
    background-color: $color-core-blue;
    border-right: 1px solid $color-core-white;
    transition: left 0.45s;
    transition-timing-function: ease-in-out;
  }

  .nav.active {
    left: 0;
  }

  .nav__icon--close {
    align-self: flex-end;
    height: 48px;
    margin: 5px;
  }

  .nav__icon--close:hover {
    cursor: pointer;
    fill: $color-core-white;
  }

  .nav__list {
    height: 100vh;
    padding: 0;
    margin: 0;
  }

  .nav__item {
    display: block;
    padding: 15px;
    color: $color-core-white;
    text-decoration: none;
    border-left: 5px solid transparent;
  }

  .nav__item:first-child {
    border-top: 1px solid $color-core-white;
  }

  .nav__item.router-link-active {
    border-left: 5px solid $color-core-white;
  }

  @media (min-width: 780px) {

    .header {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 0.5rem;
    }

    .header__hamburger,
    .nav__icon--close {
      display: none;
    }

    .nav {
      position: initial;
      top: initial;
      left: initial;
      width: initial;
      height: initial;
      border: none;
    }

    .nav__list {
      display: flex;
      height: initial;
      padding: initial;
      margin: initial;
    }

    .nav__item {
      display: inherit;
      color: $color-core-white;
      border: none;
    }

    .nav__item:first-child {
      border: none;
    }

    .nav__item.router-link-active {
      color: $color-core-white;
      background-color: inherit;
      border-bottom: 2px solid $color-core-white;
      border-left: none;
    }
  }


</style>
