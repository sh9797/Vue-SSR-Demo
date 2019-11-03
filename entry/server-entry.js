import createApp from '../src/app.js';

export default function (url) {
   const app = createApp();
         app.$router.push(url);
   return app;
}