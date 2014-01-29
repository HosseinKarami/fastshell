# FastShell

inspiration from [FireShell](http://getfireshell.com)
Fiercely quick front-end boilerplate and workflows.

The opinionated FastShell framework. Built for the modern developer. For teams and the individual, encouraging a better workflow. JavaScript task running, build processes, autominification and file concatenation, wrapped with an enhanced HTML5 boilerplated framework.

* Source: [github.com/athreepik/fastshell](http://github.com/athreepik/fastshell)

## Project setup and Gulp installation
FastShell utilises open source components running on the Terminal/command-line for it's workflow, you'll need to install Node and Gulp. Here's a walkthrough of how to get a project up and running in minutes. Once Node and Gulp are installed all future projects running Gulp are instant.

1. Install [Node.js](http://nodejs.org/download), [Sass](http://sass-lang.com/tutorial.html) and [Git](http://git-scm.com) on your machine. If you're a Windows user you'll also need to install [Ruby](http://rubyinstaller.org/downloads).
2. [Install Gulp](http://gulpjs.com/) using `npm install -g gulp`. You may need to use `sudo` in front of the Gulp install command to give it permissions. 
3. Fork/Clone/Download the FastShell repository into your machine, you should hopefully see all the files and folders.
4. Navigate to the `gulp-dev.command` file and double-click it. This will open the Terminal and install the necessary `node_modules` folder, which are FastShell's dependencies. The `gulp-dev.command` file includes a `sudo` prefix so you'll need to enter your password to install.
5. The `gulp-dev.command` should install all the dependencies, which you can check back to see in your folder, and then run the commands associated with FastShell, and automatically open a new FastShell project running on `localhost:9000`.
6. From now on, just double-click the `gulp-dev.command` file to automatically run FastShell's Gulp tasks, it's setup using the following script to automatically `cd` you into the correct directory and run the necessary commands:

````sh
cd "$(dirname "$0")"
if [ ! -d node_modules ];then
    sudo npm install
fi
gulp
````

## Features

Here are some of the main features of FastShell:

* HTML5 framework, WAI-ARIA roles and HTML5 semantics
* Baseline HTML5 features, DNS prefetching, responsive meta
* Encourages one-file CSS/JS in the view (HTML) for performance
* Includes jQuery CDN and relative fallback
* Includes Modernizr and HTML5 Shiv
* Google Universal Analytics snippet
* Open source workflow with Gulp.js running on Node.js
* Two `.command` (Mac OS X) and `.bat` (Windows) files for double-click command-line execution of FastShell
* Automatic Gulp dependency installation, directory relocation and Gulp tasks
* Livereloading the browser and file injection upon changes
* Annotated Gulpfile.js for extending
* Built-in build script for auto-minification of CSS and JavaScript files for production
* Minify PNG, JPEG and GIF images
* Pre-setup Sass/SCSS files and folders for baseline project structure and imports
* Includes .editorconfig for consistent coding styles in IDEs
* Standard .gitignore to ignore minified files and standard ignorables such as .DS_Store
* JSHint .jshintrc file for configuring JavaScript linting


## Scaffolding

````
├── app
│   ├── apple-touch-icon-precomposed.png
│   ├── assets
│   │   ├── css
│   │   ├── fonts
│   │   ├── img
│   │   └── js
│   ├── favicon.ico
│   └── index.html
├── src
│	├── img
│   ├── js
│   │   └── scripts.js
│   └── scss
│       ├── mixins
│       ├── modules
│       ├── partials
│       ├── vendor
│       └── style.scss
├── docs
├── gulp-build.command
├── gulp-build.bat
├── gulp-dev.command
├── gulp-dev.bat
├── package.json
├── README.md
├── gulpfile.js
├── .editorconfig
├── .gitignore
└── .jshintrc
````

## License

#### The MIT License (MIT)

Copyright (c) FastShell

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
