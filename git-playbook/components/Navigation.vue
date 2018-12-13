<template>
  <nav class="main__nav">
    <div class="nav__search">
      <input class="nav__search-input" placeholder="Type to search" v-model="searchKeywords" @keyup="search"/>
      <svg v-if="searchResultsVisible" class="nav__search-icon" tabindex="0"
           @click="reset"
           @keyup.enter="reset"
           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <path
          d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z"/>
        <path
          d="M35.707 16.293a.999.999 0 0 0-1.414 0L26 24.586l-8.293-8.293a.999.999 0 1 0-1.414 1.414L24.586 26l-8.293 8.293a.999.999 0 1 0 1.414 1.414L26 27.414l8.293 8.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L27.414 26l8.293-8.293a.999.999 0 0 0 0-1.414z"/>
      </svg>
    </div>
    <vue-tree-navigation :items="tocItems" :defaultOpenLevel="1"/>
  </nav>
</template>

<script>
  import ConfigManager from '../src/services/configManager'

  export default {
    data() {
      return {
        tocItems: ConfigManager.getPages(),
        searchResultsVisible: false,
        searchResults: null,
        searchKeywords: null
      }
    },
    methods: {
      toggleMenu() {
        this.isNavOpen = !this.isNavOpen
      },
      search($event) {
        if (this.searchKeywords) {
          let query = Object.assign({}, this.$route.query, {search: this.searchKeywords})
          this.$router.push({query})

          this.searchResultsVisible = true
          let filter = 'topic:'
          if (this.searchKeywords.indexOf('topic:') > -1) {
            this.searchResults = this.content.filter(result => {
              let topics = (result.topics || []).map((topic) => {
                return topic.toLowerCase()
              })

              let topicExists = false

              for (let i = 0; i < topics.length; i++) {
                if (topics[i].indexOf(this.searchKeywords.toLowerCase().replace(filter, '')) > -1) {
                  topicExists = true
                }
              }

              return topicExists
            })
          } else {
            this.searchResults = this.content.filter(result => {
              return (result.text || '').toLowerCase().indexOf(this.searchKeywords.toLowerCase()) > -1 ||
                (result.name || '').toLowerCase().indexOf(this.searchKeywords.toLowerCase()) > -1
            })
          }
        } else {
          let query = this.$route.query
          delete query.search
          this.$router.push({query})
          this.reset()
        }
      },
      searchTopic(topic) {
        let filter = `topic:${topic}`
        let query = Object.assign({}, this.$route.query, {search: filter})
        this.searchKeywords = filter
        this.search()
        this.$router.push({query})
      },
      reset() {
        this.searchResultsVisible = false
        this.searchKeywords = ''
        this.searchResults = []
      }
    },
  };
</script>
<style lang="scss">
  @import '../src/assets/scss/colors';

  div.TreeNavigation {
    width: 100%;
    padding: 1rem 0.5rem;
  }

  .TreeNavigation * {
    overflow: hidden;
    font-size: 0.9rem;
    line-height: 1.2rem;
    color: $color-core-black;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .NavigationItem {
    width: 100%;
    padding-top: 1px;
    padding-bottom: 2px;
  }

  .NavigationLevel__parent {
    display: flex;
    align-items: center;
    font-weight: 900;
  }

  .NavigationItem--active,
  .NavigationItem--active a {
    color: $color-core-blue;
  }

  .NavigationItem a {
    margin: 0 0.25rem;
  }

  .TreeNavigation > .NavigationLevel > ul > li {
    padding: 0;
  }


</style>
