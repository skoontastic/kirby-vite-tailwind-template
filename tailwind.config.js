/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './site/(templates|snippets|controllers|models|layouts)/**/*.php',
    './site/(templates|snippets|controllers|models|layouts)/**/*.twig',
    './content/**/*',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

