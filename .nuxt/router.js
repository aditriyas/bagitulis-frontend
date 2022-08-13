import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6054b9bc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _055863a8 = () => interopDefault(import('..\\pages\\artikel\\index.vue' /* webpackChunkName: "pages/artikel/index" */))
const _430459ed = () => interopDefault(import('..\\pages\\hubungi-kami\\index.vue' /* webpackChunkName: "pages/hubungi-kami/index" */))
const _080be2b8 = () => interopDefault(import('..\\pages\\lupa-password.vue' /* webpackChunkName: "pages/lupa-password" */))
const _2f7633e8 = () => interopDefault(import('..\\pages\\karya-tulis\\index.vue' /* webpackChunkName: "pages/karya-tulis/index" */))
const _c1ea00c2 = () => interopDefault(import('..\\pages\\masuk.vue' /* webpackChunkName: "pages/masuk" */))
const _7a9bb738 = () => interopDefault(import('..\\pages\\akun-saya\\index.vue' /* webpackChunkName: "pages/akun-saya/index" */))
const _22f78b02 = () => interopDefault(import('..\\pages\\daftar.vue' /* webpackChunkName: "pages/daftar" */))
const _4e23a69c = () => interopDefault(import('..\\pages\\karya-tulis\\ilmiah.vue' /* webpackChunkName: "pages/karya-tulis/ilmiah" */))
const _ee1b3530 = () => interopDefault(import('..\\pages\\karya-tulis\\jurnal.vue' /* webpackChunkName: "pages/karya-tulis/jurnal" */))
const _8cb9d2c8 = () => interopDefault(import('..\\pages\\karya-tulis\\non-ilmiah.vue' /* webpackChunkName: "pages/karya-tulis/non-ilmiah" */))
const _8c874d7e = () => interopDefault(import('..\\pages\\akun-saya\\karya-tulis-saya.vue' /* webpackChunkName: "pages/akun-saya/karya-tulis-saya" */))
const _24439228 = () => interopDefault(import('..\\pages\\akun-saya\\karya-tulis-tersimpan.vue' /* webpackChunkName: "pages/akun-saya/karya-tulis-tersimpan" */))
const _6ce4baac = () => interopDefault(import('..\\pages\\akun-saya\\unggah.vue' /* webpackChunkName: "pages/akun-saya/unggah" */))
const _78e515f0 = () => interopDefault(import('..\\pages\\akun-saya\\_slug.vue' /* webpackChunkName: "pages/akun-saya/_slug" */))
const _08c5a638 = () => interopDefault(import('..\\pages\\artikel\\_slug.vue' /* webpackChunkName: "pages/artikel/_slug" */))
const _32e37678 = () => interopDefault(import('..\\pages\\karya-tulis\\_slug.vue' /* webpackChunkName: "pages/karya-tulis/_slug" */))

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
    component: _6054b9bc,
    name: "index___en"
  }, {
    path: "/id",
    component: _6054b9bc,
    name: "index___id"
  }, {
    path: "/en/article",
    component: _055863a8,
    name: "artikel___en"
  }, {
    path: "/en/contact-us",
    component: _430459ed,
    name: "hubungi-kami___en"
  }, {
    path: "/en/forgot-password",
    component: _080be2b8,
    name: "lupa-password___en"
  }, {
    path: "/en/karya-tulis",
    component: _2f7633e8,
    name: "karya-tulis___en"
  }, {
    path: "/en/login",
    component: _c1ea00c2,
    name: "masuk___en"
  }, {
    path: "/en/profile",
    component: _7a9bb738,
    name: "akun-saya___en"
  }, {
    path: "/en/register",
    component: _22f78b02,
    name: "daftar___en"
  }, {
    path: "/id/akun-saya",
    component: _7a9bb738,
    name: "akun-saya___id"
  }, {
    path: "/id/artikel",
    component: _055863a8,
    name: "artikel___id"
  }, {
    path: "/id/daftar",
    component: _22f78b02,
    name: "daftar___id"
  }, {
    path: "/id/hubungi-kami",
    component: _430459ed,
    name: "hubungi-kami___id"
  }, {
    path: "/id/karya-tulis",
    component: _2f7633e8,
    name: "karya-tulis___id"
  }, {
    path: "/id/lupa-password",
    component: _080be2b8,
    name: "lupa-password___id"
  }, {
    path: "/id/masuk",
    component: _c1ea00c2,
    name: "masuk___id"
  }, {
    path: "/en/karya-tulis/ilmiah",
    component: _4e23a69c,
    name: "karya-tulis-ilmiah___en"
  }, {
    path: "/en/karya-tulis/jurnal",
    component: _ee1b3530,
    name: "karya-tulis-jurnal___en"
  }, {
    path: "/en/karya-tulis/non-ilmiah",
    component: _8cb9d2c8,
    name: "karya-tulis-non-ilmiah___en"
  }, {
    path: "/en/my-account/my-writings",
    component: _8c874d7e,
    name: "akun-saya-karya-tulis-saya___en"
  }, {
    path: "/en/my-account/saved-writings",
    component: _24439228,
    name: "akun-saya-karya-tulis-tersimpan___en"
  }, {
    path: "/en/profile/upload-writing",
    component: _6ce4baac,
    name: "akun-saya-unggah___en"
  }, {
    path: "/id/akun-saya/karya-tulis-saya",
    component: _8c874d7e,
    name: "akun-saya-karya-tulis-saya___id"
  }, {
    path: "/id/akun-saya/karya-tulis-tersimpan",
    component: _24439228,
    name: "akun-saya-karya-tulis-tersimpan___id"
  }, {
    path: "/id/akun-saya/unggah",
    component: _6ce4baac,
    name: "akun-saya-unggah___id"
  }, {
    path: "/id/karya-tulis/ilmiah",
    component: _4e23a69c,
    name: "karya-tulis-ilmiah___id"
  }, {
    path: "/id/karya-tulis/jurnal",
    component: _ee1b3530,
    name: "karya-tulis-jurnal___id"
  }, {
    path: "/id/karya-tulis/non-ilmiah",
    component: _8cb9d2c8,
    name: "karya-tulis-non-ilmiah___id"
  }, {
    path: "/en/akun-saya/:slug?",
    component: _78e515f0,
    name: "akun-saya-slug___en"
  }, {
    path: "/en/artikel/:slug",
    component: _08c5a638,
    name: "artikel-slug___en"
  }, {
    path: "/en/karya-tulis/:slug?",
    component: _32e37678,
    name: "karya-tulis-slug___en"
  }, {
    path: "/id/akun-saya/:slug?",
    component: _78e515f0,
    name: "akun-saya-slug___id"
  }, {
    path: "/id/artikel/:slug",
    component: _08c5a638,
    name: "artikel-slug___id"
  }, {
    path: "/id/karya-tulis/:slug?",
    component: _32e37678,
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
