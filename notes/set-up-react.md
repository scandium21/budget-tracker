## Setting up env from scratch

1. include following tags in `index.html`

- `<script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>`
- `<script>https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js</script>`
- `<script src="/scripts/app.js"></script>`

2. folder setup:

- public/scripts/app.js
- src/app.js

3. install `babel-cli@<version>`

4. `yarn init` or `npm init`

5. install `babel-preset-react@<version> babel-preset-env@<version>`

6. transpile src/app.js into public/scritps/app,js `babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch`

7. update in `package.json`:
   ```
   "scripts": {
     "dev": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch"
   },
   ```
