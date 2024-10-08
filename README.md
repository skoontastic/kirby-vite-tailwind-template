# Kirby Vite Basic Kit + Tailwind + Twig

## Features

- ⚡️ Uses [Vite](https://vitejs.dev/) with [kirby-vite](https://github.com/arnoson/kirby-vite) plugin
- 🌱 [Twig](https://twig.symfony.com/) for templating
- 💅 [Tailwindcss](https://tailwindcss.com) for styling
- 🔄 Live Reloading for Kirby and Twig templates, snippets, content, ... changes
- 📂 [Public folder structure](https://getkirby.com/docs/guide/configuration#custom-folder-setup__public-folder-setup)

## Installation

Clone this repository and run:

```
composer install
```

```
npm install
```

## Development

If using Herd or Valet, change your `site/config/config.localhost.php` file to match your site's dev URL.

Start vite's dev server and a simple php dev server by running:

```
npm run dev
```

Visit `localhost:8888` in the browser. Vite's dev server (`localhost:5173`) is only used for serving js, css and assets.

## Preview

Get a local production preview by running:

```
npm run preview
```

## Production

Build your optimized frontend assets to `public/dist`:

```
npm run build
```

## Deployment

### Manually

Upload the repository to your web server and point your web server to the repository's `public` folder.

### Rsync

If you have ssh access you can use rsync to automate the upload/sync.

### Git

You can also deploy your repository with git. Then you have to run the [installation](#installation) steps again on your web server.
