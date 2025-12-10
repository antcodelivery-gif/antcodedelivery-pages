
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/antcodelivery-pages/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/antcodelivery-pages"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9072, hash: 'af05904a004f06d5f668e07b8efe9bbe7ddef96c73f6e2dd2c32d9926ecff900', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 989, hash: '555a539e8d0e18db934f12d92705fe91119da4b84f0349f2f5ed021882b4a0ac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 16732, hash: '6d39e0c785c1792af05a9c955e78141b2758a05c46ccd23df354b8078a64f6ab', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZG2M4FAA.css': {size: 235112, hash: 'Z6baI1/o+MI', text: () => import('./assets-chunks/styles-ZG2M4FAA_css.mjs').then(m => m.default)}
  },
};
