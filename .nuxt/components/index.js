export { default as BreadCrumbs } from '../..\\components\\BreadCrumbs.vue'
export { default as Demo } from '../..\\components\\Demo.vue'
export { default as Empty } from '../..\\components\\Empty.vue'
export { default as ErrorCode } from '../..\\components\\ErrorCode.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as ImgResponsive } from '../..\\components\\ImgResponsive.vue'
export { default as LinkCopied } from '../..\\components\\LinkCopied.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Pagination } from '../..\\components\\Pagination.vue'
export { default as TabList } from '../..\\components\\TabList.vue'
export { default as ArticlesArticleInsights } from '../..\\components\\articles\\ArticleInsights.vue'
export { default as ArticlesEmpty } from '../..\\components\\articles\\Empty.vue'
export { default as ArticlesHead } from '../..\\components\\articles\\Head.vue'
export { default as CardJournal } from '../..\\components\\card\\CardJournal.vue'
export { default as FaqEmpty } from '../..\\components\\faq\\Empty.vue'
export { default as FaqSearchBar } from '../..\\components\\faq\\SearchBar.vue'
export { default as Header } from '../..\\components\\header\\Header.vue'
export { default as HeaderNav } from '../..\\components\\header\\HeaderNav.vue'
export { default as HeaderLangSwitcher } from '../..\\components\\header\\LangSwitcher.vue'
export { default as HeaderMainNav } from '../..\\components\\header\\MainNav.vue'
export { default as HeaderMobileNavbar } from '../..\\components\\header\\MobileNavbar.vue'
export { default as HeaderNotif } from '../..\\components\\header\\Notif.vue'
export { default as HeaderSiteSearch } from '../..\\components\\header\\SiteSearch.vue'
export { default as HeaderUserNav } from '../..\\components\\header\\UserNav.vue'
export { default as HomepageArticles } from '../..\\components\\homepage\\Articles.vue'
export { default as HomepageHero } from '../..\\components\\homepage\\Hero.vue'
export { default as HomepageJournals } from '../..\\components\\homepage\\Journals.vue'
export { default as HomepageOurProduct } from '../..\\components\\homepage\\OurProduct.vue'
export { default as JournalsMostLiked } from '../..\\components\\journals\\MostLiked.vue'

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
