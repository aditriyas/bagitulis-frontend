import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _488c89c1 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _57559872 = () => interopDefault(import('..\\pages\\artikel\\index.vue' /* webpackChunkName: "pages/artikel/index" */))
const _06993d32 = () => interopDefault(import('..\\pages\\hubungi-kami\\index.vue' /* webpackChunkName: "pages/hubungi-kami/index" */))
const _48c9ddbd = () => interopDefault(import('..\\pages\\lupa-password.vue' /* webpackChunkName: "pages/lupa-password" */))
const _22d7f3b2 = () => interopDefault(import('..\\pages\\karya-tulis\\index.vue' /* webpackChunkName: "pages/karya-tulis/index" */))
const _f17a60b8 = () => interopDefault(import('..\\pages\\masuk.vue' /* webpackChunkName: "pages/masuk" */))
const _d24bbbda = () => interopDefault(import('..\\pages\\akun-saya\\index.vue' /* webpackChunkName: "pages/akun-saya/index" */))
const _41b9bb9d = () => interopDefault(import('..\\pages\\daftar.vue' /* webpackChunkName: "pages/daftar" */))
const _11b889e1 = () => interopDefault(import('..\\pages\\karya-tulis\\ilmiah.vue' /* webpackChunkName: "pages/karya-tulis/ilmiah" */))
const _4c8748ad = () => interopDefault(import('..\\pages\\karya-tulis\\jurnal.vue' /* webpackChunkName: "pages/karya-tulis/jurnal" */))
const _15dacf61 = () => interopDefault(import('..\\pages\\karya-tulis\\non-ilmiah.vue' /* webpackChunkName: "pages/karya-tulis/non-ilmiah" */))
const _4e302786 = () => interopDefault(import('..\\pages\\akun-saya\\karya-tulis-saya.vue' /* webpackChunkName: "pages/akun-saya/karya-tulis-saya" */))
const _25598bc7 = () => interopDefault(import('..\\pages\\akun-saya\\karya-tulis-tersimpan.vue' /* webpackChunkName: "pages/akun-saya/karya-tulis-tersimpan" */))
const _351c932f = () => interopDefault(import('..\\pages\\akun-saya\\unggah.vue' /* webpackChunkName: "pages/akun-saya/unggah" */))
const _d5b8fe6a = () => interopDefault(import('..\\pages\\akun-saya\\_slug.vue' /* webpackChunkName: "pages/akun-saya/_slug" */))
const _5ac2db02 = () => interopDefault(import('..\\pages\\artikel\\_slug.vue' /* webpackChunkName: "pages/artikel/_slug" */))
const _26453642 = () => interopDefault(import('..\\pages\\karya-tulis\\_slug.vue' /* webpackChunkName: "pages/karya-tulis/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/en",
    component: _488c89c1,
    name: "index___en"
  }, {
    path: "/id",
    component: _488c89c1,
    name: "index___id"
  }, {
    path: "/en/article",
    component: _57559872,
    name: "artikel___en"
  }, {
    path: "/en/contact-us",
    component: _06993d32,
    name: "hubungi-kami___en"
  }, {
    path: "/en/forgot-password",
    component: _48c9ddbd,
    name: "lupa-password___en"
  }, {
    path: "/en/karya-tulis",
    component: _22d7f3b2,
    name: "karya-tulis___en"
  }, {
    path: "/en/login",
    component: _f17a60b8,
    name: "masuk___en"
  }, {
    path: "/en/profile",
    component: _d24bbbda,
    name: "akun-saya___en"
  }, {
    path: "/en/register",
    component: _41b9bb9d,
    name: "daftar___en"
  }, {
    path: "/id/akun-saya",
    component: _d24bbbda,
    name: "akun-saya___id"
  }, {
    path: "/id/artikel",
    component: _57559872,
    name: "artikel___id"
  }, {
    path: "/id/daftar",
    component: _41b9bb9d,
    name: "daftar___id"
  }, {
    path: "/id/hubungi-kami",
    component: _06993d32,
    name: "hubungi-kami___id"
  }, {
    path: "/id/karya-tulis",
    component: _22d7f3b2,
    name: "karya-tulis___id"
  }, {
    path: "/id/lupa-password",
    component: _48c9ddbd,
    name: "lupa-password___id"
  }, {
    path: "/id/masuk",
    component: _f17a60b8,
    name: "masuk___id"
  }, {
    path: "/en/karya-tulis/ilmiah",
    component: _11b889e1,
    name: "karya-tulis-ilmiah___en"
  }, {
    path: "/en/karya-tulis/jurnal",
    component: _4c8748ad,
    name: "karya-tulis-jurnal___en"
  }, {
    path: "/en/karya-tulis/non-ilmiah",
    component: _15dacf61,
    name: "karya-tulis-non-ilmiah___en"
  }, {
    path: "/en/my-account/my-writings",
    component: _4e302786,
    name: "akun-saya-karya-tulis-saya___en"
  }, {
    path: "/en/my-account/saved-writings",
    component: _25598bc7,
    name: "akun-saya-karya-tulis-tersimpan___en"
  }, {
    path: "/en/profile/upload-writing",
    component: _351c932f,
    name: "akun-saya-unggah___en"
  }, {
    path: "/id/akun-saya/karya-tulis-saya",
    component: _4e302786,
    name: "akun-saya-karya-tulis-saya___id"
  }, {
    path: "/id/akun-saya/karya-tulis-tersimpan",
    component: _25598bc7,
    name: "akun-saya-karya-tulis-tersimpan___id"
  }, {
    path: "/id/akun-saya/unggah",
    component: _351c932f,
    name: "akun-saya-unggah___id"
  }, {
    path: "/id/karya-tulis/ilmiah",
    component: _11b889e1,
    name: "karya-tulis-ilmiah___id"
  }, {
    path: "/id/karya-tulis/jurnal",
    component: _4c8748ad,
    name: "karya-tulis-jurnal___id"
  }, {
    path: "/id/karya-tulis/non-ilmiah",
    component: _15dacf61,
    name: "karya-tulis-non-ilmiah___id"
  }, {
    path: "/en/akun-saya/:slug?",
    component: _d5b8fe6a,
    name: "akun-saya-slug___en"
  }, {
    path: "/en/artikel/:slug",
    component: _5ac2db02,
    name: "artikel-slug___en"
  }, {
    path: "/en/karya-tulis/:slug?",
    component: _26453642,
    name: "karya-tulis-slug___en"
  }, {
    path: "/id/akun-saya/:slug?",
    component: _d5b8fe6a,
    name: "akun-saya-slug___id"
  }, {
    path: "/id/artikel/:slug",
    component: _5ac2db02,
    name: "artikel-slug___id"
  }, {
    path: "/id/karya-tulis/:slug?",
    component: _26453642,
    name: "karya-tulis-slug___id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
