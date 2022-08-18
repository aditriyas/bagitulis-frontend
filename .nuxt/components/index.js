export const BreadCrumbs = () => import('../..\\components\\BreadCrumbs.vue' /* webpackChunkName: "components/bread-crumbs" */).then(c => wrapFunctional(c.default || c))
export const Demo = () => import('../..\\components\\Demo.vue' /* webpackChunkName: "components/demo" */).then(c => wrapFunctional(c.default || c))
export const Empty = () => import('../..\\components\\Empty.vue' /* webpackChunkName: "components/empty" */).then(c => wrapFunctional(c.default || c))
export const ErrorCode = () => import('../..\\components\\ErrorCode.vue' /* webpackChunkName: "components/error-code" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const ImgResponsive = () => import('../..\\components\\ImgResponsive.vue' /* webpackChunkName: "components/img-responsive" */).then(c => wrapFunctional(c.default || c))
export const LinkCopied = () => import('../..\\components\\LinkCopied.vue' /* webpackChunkName: "components/link-copied" */).then(c => wrapFunctional(c.default || c))
export const Logo = () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const Pagination = () => import('../..\\components\\Pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => wrapFunctional(c.default || c))
export const TabList = () => import('../..\\components\\TabList.vue' /* webpackChunkName: "components/tab-list" */).then(c => wrapFunctional(c.default || c))
export const ArticlesArticleInsights = () => import('../..\\components\\articles\\ArticleInsights.vue' /* webpackChunkName: "components/articles-article-insights" */).then(c => wrapFunctional(c.default || c))
export const ArticlesEmpty = () => import('../..\\components\\articles\\Empty.vue' /* webpackChunkName: "components/articles-empty" */).then(c => wrapFunctional(c.default || c))
export const ArticlesHead = () => import('../..\\components\\articles\\Head.vue' /* webpackChunkName: "components/articles-head" */).then(c => wrapFunctional(c.default || c))
export const CardJournal = () => import('../..\\components\\card\\CardJournal.vue' /* webpackChunkName: "components/card-journal" */).then(c => wrapFunctional(c.default || c))
export const FaqEmpty = () => import('../..\\components\\faq\\Empty.vue' /* webpackChunkName: "components/faq-empty" */).then(c => wrapFunctional(c.default || c))
export const FaqSearchBar = () => import('../..\\components\\faq\\SearchBar.vue' /* webpackChunkName: "components/faq-search-bar" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../..\\components\\header\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const HeaderNav = () => import('../..\\components\\header\\HeaderNav.vue' /* webpackChunkName: "components/header-nav" */).then(c => wrapFunctional(c.default || c))
export const HeaderLangSwitcher = () => import('../..\\components\\header\\LangSwitcher.vue' /* webpackChunkName: "components/header-lang-switcher" */).then(c => wrapFunctional(c.default || c))
export const HeaderMainNav = () => import('../..\\components\\header\\MainNav.vue' /* webpackChunkName: "components/header-main-nav" */).then(c => wrapFunctional(c.default || c))
export const HeaderMobileNavbar = () => import('../..\\components\\header\\MobileNavbar.vue' /* webpackChunkName: "components/header-mobile-navbar" */).then(c => wrapFunctional(c.default || c))
export const HeaderNotif = () => import('../..\\components\\header\\Notif.vue' /* webpackChunkName: "components/header-notif" */).then(c => wrapFunctional(c.default || c))
export const HeaderSiteSearch = () => import('../..\\components\\header\\SiteSearch.vue' /* webpackChunkName: "components/header-site-search" */).then(c => wrapFunctional(c.default || c))
export const HeaderUserNav = () => import('../..\\components\\header\\UserNav.vue' /* webpackChunkName: "components/header-user-nav" */).then(c => wrapFunctional(c.default || c))
export const HomepageArticles = () => import('../..\\components\\homepage\\Articles.vue' /* webpackChunkName: "components/homepage-articles" */).then(c => wrapFunctional(c.default || c))
export const HomepageHero = () => import('../..\\components\\homepage\\Hero.vue' /* webpackChunkName: "components/homepage-hero" */).then(c => wrapFunctional(c.default || c))
export const HomepageJournals = () => import('../..\\components\\homepage\\Journals.vue' /* webpackChunkName: "components/homepage-journals" */).then(c => wrapFunctional(c.default || c))
export const HomepageOurProduct = () => import('../..\\components\\homepage\\OurProduct.vue' /* webpackChunkName: "components/homepage-our-product" */).then(c => wrapFunctional(c.default || c))
export const JournalsMostLiked = () => import('../..\\components\\journals\\MostLiked.vue' /* webpackChunkName: "components/journals-most-liked" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
