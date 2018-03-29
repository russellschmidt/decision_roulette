# Run this app

From the root folder, two terminal windows running two separate commands

` $ yarn run serve `
` $ yarn run build `


```
$ live-server public
$ babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
OR
$ babel src/playgrounds/yourfilehere.js --out-file=public/scripts/app.js --presets=env,react --watch
$ babel src/playground/es6-arrow-function.js --out-file=public/scripts/app.js --presets=env,react --watch
$ babel src/playground/es6-arrow-function2.js --out-file=public/scripts/app.js --presets=env,react --watch
$ babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch
$ babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch
$ babel src/playground/counter-example.js --out-file=public/scripts/app.js --presets=env,react --watch
```

This should open a browser in port 8080. If not, 
<localhost:8080> or <127.0.0.1:8080>
