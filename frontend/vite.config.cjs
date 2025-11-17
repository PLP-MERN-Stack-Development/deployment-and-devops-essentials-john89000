const { defineConfig } = require('vite')
const autoprefixer = require('autoprefixer')

// CommonJS Vite config (vite.config.cjs) — keeps PostCSS plugins local and
// avoids requiring ESM-only plugins in the config.
module.exports = defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer()]
    }
  }
})
