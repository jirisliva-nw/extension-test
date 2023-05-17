
### Chaneged

Web-Extension uses in content scripts 
[custom-elements polyfill](https://github.com/webcomponents/polyfills/tree/master/packages/custom-elements)
from [Web Components](https://github.com/webcomponents) project.

In order to avoid issues with accepting minified scripts by Google and Microsoft it's used script untouched by minification 
as possible. The custom-elements polyfill used Google Closure Compiler to bundle source scripts into single file. There is description how to configuje project settings to generate polyfill script without minification.

```
git clone https://github.com/webcomponents/polyfills.git
```

Modify `gulpfile.js`

#### compilation level

Replace 
```
compilation_level: 'ADVANCED',
```

with
```
compilation_level: 'WHITESPACE_ONLY',
```

(see [Closure Compiler Compilation Levels](https://developers.google.com/closure/compiler/docs/compilation_levels))

#### formatting

Add line 
```
formatting: 'pretty_print'
```

#### Build

```
npm install
npm run build
```

#### Post Build

* Rename `custom-element.min.js` to `custom-elements.js`.
* Remove line wih reference to _map file_
  ```
  //# sourceMappingURL=custom-elements.min.js.map
  ```
