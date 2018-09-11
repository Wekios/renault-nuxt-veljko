importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "renault-nuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.246e05202538b4ae6d76.js",
    "revision": "7b52c0d2398b53cda3273afc288d962f"
  },
  {
    "url": "/_nuxt/layouts/default.99dbafedb04f9bdf06fc.js",
    "revision": "6a65723c6c1a7e50e1058636c1502ccc"
  },
  {
    "url": "/_nuxt/manifest.cdd336f0418a506ac92a.js",
    "revision": "c4f41550b840c37c0996f49f8d8747b6"
  },
  {
    "url": "/_nuxt/pages/article/_id/index.5312a29fce2a3f875537.js",
    "revision": "a0b90e429dd88783901778cab5384ff1"
  },
  {
    "url": "/_nuxt/pages/index.2ffa822307c727383793.js",
    "revision": "5613bd39411107c79b9b39992ec1ed76"
  },
  {
    "url": "/_nuxt/pages/tag/_id/index.79b2364693d273ca8b06.js",
    "revision": "9f39b3a69ff3eeddbe3f8c72dd54ce8e"
  },
  {
    "url": "/_nuxt/pages/tag/faq/index.ba750e41e9c4765fd10d.js",
    "revision": "f9ae16060a0fe252652c506400d68be1"
  },
  {
    "url": "/_nuxt/pages/tag/mybusiness/index.c71eea27250e0d34503c.js",
    "revision": "c5c950d4b091bdc2da5439d7a63b5970"
  },
  {
    "url": "/_nuxt/pages/test/index.6be1daf75e16e5d6fd5e.js",
    "revision": "043699f3806c22f366b4fbce5a5b69b2"
  },
  {
    "url": "/_nuxt/vendor.0457a777be447dc6db86.js",
    "revision": "81e2f4947917df44b520fa66af7f195a"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

