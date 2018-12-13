<template>
  <div>
    <Cards :tiles="tiles"></Cards>
    <div class="content">
      sdf
    </div>
  </div>

</template>

<script>
  import ConfigManager from '~/src/services/configManager'
  import Cards from '~/components/Cards'

  export default {
    components: {Cards},
    computed: {
      pageConfig () {
        let currentPath = this.$router.currentRoute.path

        return ConfigManager.getMetaById(currentPath)
      },
      tiles () {
        return this.pageConfig.tiles
      }
    },
    head () {
      return {
        title: 'Playbook'
      }
    }
  }
</script>
