# Quadra Next.js

## Why Next.js?

Next.js is a production-ready React framework that comes with niceties out of the box. 5 Reasons To Use Next.js Over Plain React [Video](https://www.youtube.com/watch?v=I-zhncvdEGU). Docs for migrating from `create-react-app` are [here](https://nextjs.org/docs/migrating/from-create-react-app). Next basically has features like routing, code splitting, image optimization, and static site generation that make our lives as developers easier:

1. file system-based routing
   - Files and folders generate the URL structure for us.
   - routing with the app directory is controlled via the folders inside of it. The UI for a particular route is defined by a page.jsx file inside of the folder. e.g. `app/profile/settings/page.tsx` is the UI for the `/profile/settings` route.
2. Automatic code splitting
   - Next.js automatically code splits our app. This means that only the code needed for the current page is loaded. This makes our app load faster.
   - Dont need to use something like `react-loadable` or lazy load components. It is out of the box.
3. API Routes
   - Might need backend server to do more processing than a frontend server can do.
   - In the API folder, we have access to serverless functions that can run in a node environment. Can use node packages we need here.
   - This is useful for calculations that we may need to do on the frontend.
   - I want to use these for storing API Secret key etc. so we don't have this in the React front-end code. Have it hidden from the browser. This is a good place to store API keys.
4. Image Optomisation
   - Next.js optimizes images for us. It will automatically serve images in the best format for the browser. It will also resize images to the size they are displayed at. This means that we don't have to worry about resizing images ourselves.
   - For this, we use the `next/image` component. This component is a wrapper around the html `img` tag.
   - prop `layout='responsive'` will also serve the correct image file size based on the current browser size
   - Note that this requires a node server, so you **cannot do this in a static site.**
5. static site generation
   - Can choose how we generate the site (statically, server-side rendered or (combined) dynamic incremental generation)
   - `export function getStaticProps() {}`
   - `export function getStaticPaths() {}`
   - Use Incremental Static Regeneration to update existing pages by re-rendering them in the background as traffic comes in.
6. Choose which data fetching strategy we want on a per-page basis.

## Next.Js Changes made to old repository

Useful Reference for [Working with the app directory in Next.js 13](https://blog.logrocket.com/next-js-13-app-directory/)

Changes:

1. Next doesn't have an entry HTML file.
   - Any `<head>` code should be moved to a custom `_document.js`.
   - Any shared layout between all pages should be moved to a custom `_app.js`.
2. For routing, instead of using a third-party library (React Router), Next.js includes its own file-system based routing.
   - While still supporting the same file system-based routing, which uses the pages directory, the new `app` directory introduces the concepts of layouts, error components, and loading components while also leveraging React’s server components for building the UI
3. For global styles, made a custom `\_app.js` to add a global stylesheet.
4. Accessing web API's
   - With client-side rendered applications (like Create React App), you can access `window`, `localStorage`, `navigator`, and other Web APIs out of the box.
   - Since Next.js uses pre-rendering, we need to safely access those Web APIs only on the client-side
   - e.g:

```javascript
if (typeof window !== "undefined") {
  // You now have access to `window`
}
// =============OR================
import { useEffect } from "react";

useEffect(() => {
  // You now have access to `window`
}, []);
```

5. Environment Variables:
   - Changed all environment variables with the `REACT_APP_` prefix to `NEXT_PUBLIC_`.
   - Server-side environment variables will be available at build-time and in API Routes.
6. SEO. For this, we don't need `react-helmet` package anymore. With Next.js, we use `next/head` to add meta tags to `<head />` element

Next Features:

- `loading.tsx` file
  - An optional file that you can create within any directory inside of the app folder. It automatically wraps the page inside of a `React suspense boundary`. The component will be shown immediately on the first load as well as when you’re navigating between the sibling routes.
- `error.tsx` file
  - An optional file that isolates the error to the smallest possible subsection of the app. Creating the error.tsx file automatically wraps the page inside of a React error boundary. Whenever any error occurs inside the folder where this file is placed, the component will be replaced with the contents of this component.
- `layout.tsx` file
  - Used to define a UI that is shared across multiple places. A layout can render another layout or a page inside of it. Whenever a route changes to any component that is within the layout, its state is preserved because the layout component is not unmounted.
- `template.tsx` file
  - similar to the `layout.tsx` file, but upon navigation, a new instance of the component is mounted and the state is not preserved.
  - Using layouts and templates allows us to take advantage of a concept known as **partial rendering**.
  - While moving between routes inside of the same folder, only the layouts and pages inside of that folder are fetched and rendered:

## Commands

First, run the development server:

```bash
npm run dev
```

## Notes

Open [http://localhost:3000](http://localhost:3000) with browser to see the result.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Resources

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js GitHub repository](https://github.com/vercel/next.js/)
