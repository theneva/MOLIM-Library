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

## Deploy the app to Heroku

Assuming you have push access to the Heroku instance:

1. Download the [Heroku toolbelt](https://devcenter.heroku.com/articles/heroku-cli) (`brew install heroku-toolbelt` on Mac)
2. `heroku login`
3. `git push heroku master`

Steps 1-2 are only required once per machine.

`./Procfile` states that Heroku should run `npm start` after installing dependencies. The JS bundle is built on `postinstall`.

### Set up a new Heroku instance

This will configure a completely new Heroku instance running the app.

1. [Download the Heroku toolbelt](https://devcenter.heroku.com/articles/heroku-cli) (`brew install heroku-toolbelt` on Mac)
2. `heroku login`
3. `heroku create` (configures everything for you)
4. `heroku config:set NPM_CONFIG_PRODUCTION=false` (enables installing devDependencies)
5. `git push heroku master`
6. `heroku open` (launches the website in your favourite browser)

If you're looking to deploy from a branch that's not `master`, do `git push heroku your-branch-name:master` in step 5.
