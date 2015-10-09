# Boilerplate for Typescript, React, Webpack

### About

Get started with Typescript and React quickly, using Webpack.
This boilerplate also sets up Bootstrap and Font-Awesome.

Here are some arguments, why you might consider this stack for larger code bases:
https://docs.google.com/presentation/d/1XB6lYXLjKFADEYdexXDI8Wqvll55LOhcEw2layqNI5Q

### Prerequisites

git, npm


### Usage 1) Get the code

``` bash
git clone git@github.com:julius/boilerplate-webpack-typescript-react.git
cd boilerplate-webpack-typescript-react && npm i
```

### Usage 2) Run the code in development mode

``` bash
npm run dev
```

Open this up in your browser:
[http://localhost:8080/webpack-dev-server/index.html](http://localhost:8080/webpack-dev-server/index.html)

HTML is in the **public** folder (where you also put other assets like images, videos, Zip-files).
Code is in the **src** folder.
Browser will refresh automatically when you change code.


### Usage 3) Build the code for production use

``` bash
npm run build
```

Look into the **dist** folder.
Note that the assets in public folder are not copied.


### Sidenotes

**No JSX**
As of TypeScript 1.6, the tag-notation of JSX for React is supported.
It is not used here, because some IDEs do not support TSX yet.

Check out the tsx-branch for that.


### License

MIT (http://www.opensource.org/licenses/mit-license.php)