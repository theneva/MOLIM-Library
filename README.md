# MOLIM-Library

An app for displaying information about molecules.

## Run the app

1. `npm install`
2. `npm run build` (build the React app with Webpack to `./static/js/bundle.js`)
3. `npm start` (serve the app)

`npm start` runs `server.js`, which responds with `./static/index.html` to _all_ requests except to `/static/…`. This is required to make `browserHistory` work seamlessly.

Other options:

- `npm run webpack:watch` automatically rebuilds the app on code changes.
- `npm run dev` runs both `npm run webpack:watch` and `npm start`
- `PORT=5050 npm run dev` does the same thing, but serves the app on http://localhost:5050/
