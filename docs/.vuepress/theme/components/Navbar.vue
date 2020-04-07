<template>
    <header class="cust-navbar">
        <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>

        <router-link
                :to="$localePath"
                class="home-link">
            <img
                    v-if="$themeConfig.logo"
                    class="logo"
                    :src="$themeConfig.logo"
                    :alt="$siteTitle">

            <img class="logo2" src="../../public/title_20200331141723.png" alt="title"/>
        </router-link>
        <div
                class="links"
                :style="linksWrapMaxWidth ? {'max-width': linksWrapMaxWidth + 'px'} : {}">
            <NavLinks class="can-hide"/>
            <AlgoliaSearchBox
                    v-if="isAlgoliaSearch"
                    :options="algolia"
            />
            <SearchBox v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"/>
        </div>
    </header>
</template>

<script>
    import AlgoliaSearchBox from '@AlgoliaSearchBox'
    import SearchBox from '@SearchBox'
    import SidebarButton from '@theme/components/SidebarButton.vue'
    import NavLinks from '@theme/components/NavLinks.vue'
    import RSS from './RSS'

    export default {
        components: {SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox, RSS},

        data() {
            return {
                linksWrapMaxWidth: null
            }
        },

        mounted() {
            const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
            const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
            const handleLinksWrapWidth = () => {
                if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
                    this.linksWrapMaxWidth = null
                } else {
                    this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
                        - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
                }
            }
            handleLinksWrapWidth()
            window.addEventListener('resize', handleLinksWrapWidth, false)
        },

        computed: {
            algolia() {
                return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
            },

            isAlgoliaSearch() {
                return this.algolia && this.algolia.apiKey && this.algolia.indexName
            }
        }
    }

    function css(el, property) {
        // NOTE: Known bug, will return 'auto' if style value is 'auto'
        const win = el.ownerDocument.defaultView
        // null means not to return pseudo styles
        return win.getComputedStyle(el, null)[property]
    }
</script>

<style lang="stylus">
    $navbar-height = 3.75rem

    .cust-navbar {
        box-sizing border-box
        background-color white
        height $navbar-height
        line-height $navbar-height
        position fixed
        top 0
        left 0
        z-index 12
        right 0
        width: 100vw;
        box-shadow 0px 0px 15px 0px rgba(132, 132, 132, 0.2) !important;
        transition: padding-left, display .5s cubic-bezier(.25, .8, .25, 1);

        .home-link {
            margin-left 1.2rem
            display inline-block
            height $navbar-height

            .logo {
                vertical-align middle
                height 2.5rem
                margin-right .8rem
            }

            .logo2 {
                vertical-align middle
                height 1.5rem
            }
        }

        .links {
            padding-left 1.5rem;
            box-sizing border-box;
            white-space nowrap;
            font-size 1.2rem;
            position absolute
            right 1.5rem
            top 50%
            transform translateY(-50%)
            display flex
            align-items center

            .nav-links {
                a {
                    display block
                    white-space: nowrap;
                    position: relative;
                    border none !important;
                    line-height $navbar-height
                    font-weight bold
                    color: $colorInactive
                    font-family PT Serif, Serif;
                }

                a.router-link-active {
                    color: #000;

                    &:after {
                        content: "";
                        height 1px;
                        left 50%;
                        transform translateX(-50%);
                        width 100%;
                        position: absolute;
                        bottom -1px;
                        transition background-color 0.2s;
                        background-color: lighten(#000, 50%);
                    }
                }

                a:hover {
                    text-decoration: none !important;
                    color: #000;

                    &:after {
                        background-color: $colorDark;
                    }
                }
            }

            .search-box {
                margin-left 2rem
                margin-right 0 !important

                input {
                    background: #fff url(https://gw.alipayobjects.com/zos/bmw-prod/72262c89-1d96-442d-bdcf-e4e50d10bd42.svg) 0.1rem 0.4rem no-repeat;
                    background-size: 1.2rem;
                    -webkit-appearance: none;
                    border-radius 0
                    border-style: solid;
                    border-style: unset;
                    border-bottom: .5px solid lighten($colorInactive, 80%);
                    transition all 0.3s;

                    &.focused {
                        border-bottom: .5px solid lighten($colorInactive, 20%);
                    }
                }


                ul.suggestions {
                    position fixed
                    right 0

                    a {
                        font-size 14px
                        color #111111
                    }
                }
            }
        }
    }

    @media (max-width: $MQMobile)
        .sidebar {
            .nav-links {
                a {
                    color: $colorInactive
                    white-space: nowrap;
                }

                a.router-link-active {
                    color: #000 !important;
                }
            }
        }
        .cust-navbar
            padding-left 4rem

            .home-link{
                margin-left 0
            }

            .can-hide
                display none

            .links {
                padding-left 1.5rem
            }

            .search-box {
                input {
                    border-bottom 0 solid transparent !important
                }

                input.focused {
                    border-bottom .05rem solid #272727 !important
                }
            }
</style>
