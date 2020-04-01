<template>
  <ParentLayout>
    <template slot="page-top">
      <div class="blog-layout">
        <BaseListLayout/>
      </div>
      <Pagination v-if="$pagination.length > 1"/>
    </template>
  </ParentLayout>
</template>

<script>
  import ParentLayout from '@parent-theme/layouts/Layout.vue'
  import { Pagination } from '@vuepress/plugin-blog/lib/client/components'
  import BlogBlockLayout from './BlogBlockLayout'
  import BlogSimpleLayout from './BlogSimpleLayout'

  export default {
    components: {
      ParentLayout,
      Pagination,
      BlogBlockLayout,
      BlogSimpleLayout,
    },

    computed: {
      pages() {
        return this.$pagination.pages
          .filter(page => {
            return page.frontmatter && page.frontmatter.date
          })
          .sort((prev, next) => {
            const prevDate = prev.frontmatter && prev.frontmatter.date
            const nextDate = next.frontmatter && next.frontmatter.date
            return new Date(prevDate) > new Date(nextDate)
              ? 1 : -1
          })
      }
    }
  }
</script>

<style lang="stylus">
  $collapse = 1rem
  $semiCollapse = $collapse/ 2
  
  .blog-layout {
    padding 120px 15px 80px
    max-width 740px
    margin 0 auto
  }
  
  .rest-posts {
    padding $collapse
  }
  
  @media (min-width: $MQMobile) {
    .blog-simple-layout {
      display none
    }
  }
  
  @media (max-width: $MQMobile) {
    .blog-block-layout {
      display none
    }
  }
</style>
