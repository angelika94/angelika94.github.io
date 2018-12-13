<template>
  <div id="app">
    <app-header @toggleMenu="toggleMenu"/>
    <main>
      <Navigation :class="{ active: isNavOpen }"/>
      <div class="container" @scroll="handleScroll">
        <Breadcrumb></Breadcrumb>
        <nuxt/>
      </div>
    </main>
  </div>
</template>
<script>
  import AppHeader from '~/components/Header'
  import Navigation from '~/components/Navigation'
  import Breadcrumb from '~/components/Breadcrumb'

  export default {
    components: {
      AppHeader,
      Navigation,
      Breadcrumb
    },
    data () {
      return {
        isNavOpen: false,
        isActive: false
      }
    },
    methods: {
      toggleMenu () {
        this.isNavOpen = !this.isNavOpen
      },
      handleScroll (event) {
        this.isActive = event.target.scrollTop >= 155
      }
    }
  }
</script>
<style>


</style>

