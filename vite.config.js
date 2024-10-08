import { resolve } from 'path'
import kirby from 'vite-plugin-kirby'

export default ({ mode }) => ({
  root: 'src',
  base: mode === 'development' ? '/' : '/dist/',

  build: {
    outDir: resolve(process.cwd(), 'public/dist'),
    emptyOutDir: true,
    rollupOptions: { input: resolve(process.cwd(), 'src/index.js') }
  },

  plugins: [kirby({
    watch: [
      '../site/(templates|snippets|controllers|models|layouts)/**/*.php',
      '../site/(templates|snippets|controllers|models|layouts)/**/*.twig',
      '../content/**/*',
    ]
  })]
})