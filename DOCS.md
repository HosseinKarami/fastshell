# FastShell Docs

## Project setup and Gulp installation
FastShell utilises open source components running on the Terminal/command-line for it's workflow, you'll need to install Node and Gulp. Here's a walkthrough of how to get a project up and running in minutes. Once Node and Gulp are installed all future projects running Gulp are instant.

1. Install [Node.js](http://nodejs.org/download), [Sass](http://sass-lang.com/tutorial.html) and [Git](http://git-scm.com) on your machine. If you're a Windows user you'll also need to install [Ruby](http://rubyinstaller.org/downloads).
2. [Install Gulp](http://Gulpjs.com/) using `npm install -g gulp`. You may need to use `sudo` in front of the Gulp install command to give it permissions.
3. Fork/Clone/Download the FastShell repository into your machine, you should hopefully see all the files and folders.
4. Open Terminal and install FastShell's dependencies to `node_modules` directory in your project directory using `npm install`. You don't need `sudo` to do this.
5. The `npm install` you did in previous step should install all the dependencies, which you can confirm by visiting the `node_modules` in your project directory. Then use `gulp` (again in your project directory) to run the commands associated with FastShell and to automatically open a new FastShell project running on `localhost:3002`.
6. From now on, just run `gulp` in your project directory to automatically run FastShell's Gulp tasks.

## How to use FastShell
Using FastShell is very easy, it's based on an easy philosphy of keeping things simple so that anybody can use it, even with zero experience on the command-line. FastShell uses Gulp to manage all the essential tasks for building with the web.

### Scaffolding
FastShell's scaffolding is lightweight and super easy. It takes into account a build directory of which you'll compile all your necessary code into. It keeps precious development files (raw `.scss` and `.js`) out of deployment, with a view that you'll be deploying just the contents of the `app` folder onto the server.

Once running, FastShell does the following:

1. Mounts the `app` folder onto a local server
2. Listens for changes inside the `src` directory, and compiles the necessary files into the `app` directory, which will then automaticaly livereload or inject changes. CSS changes are injected, all other changes force a page reload.

### Dynamic copyright/project banners
The package.json includes the dependencies for the project as well as information about the project. Entries here will be dynamically appended to the top of generated `.css` and `.js` files, by default it ships with FastShell's banner:

````js
/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.0
 * Copyright 2014. MIT licensed.
 */
````

### Browser-Sync
Gulp's browser-sync will inject the following script into your HTML for you (not included when you deploy):

````html
<script type='text/javascript'>//<![CDATA[
;document.write("<script defer src='//HOST:3000/socket.io/socket.io.js'><\/script><script defer src='//HOST:3001/client/browser-sync-client.0.9.1.js'><\/script>".replace(/HOST/g, location.hostname));
//]]></script>
````

It's pretty useful when used with a single browser, watching a CSS file for changes & injecting it. But the real power comes when you're building responsive sites and using multiple devices/monitors because it can keep all browsers in sync & make your workflow much faster.

### Extending Gulp tasks
If you're including more Gulp tasks in your project, remember to use the `npm install <Gulp package> --save-dev` inside your Terminal so that it gets added to your `package.json` file for future dependencies.

Add new tasks to either the default `gulp` task at the `gulpfile.js`:

## JavaScript
FastShell comes with a single `scripts.js` to get you started, of course if you're building an AngularJS project or other type you're going to need to customise the structure, but this gets you started. The generic scripts file ships with an immediately-invoked function expression (IIFE):

````js
(function ($, window, document, undefined) {
  'use strict';
  // FastShell
})(jQuery, window, document);
````

This helps with all your minification and not polluting with global variables, for instance before minification you've got very readable code and variable names (including the `document` and `window` objects):

````js
(function ($, window, document, undefined) {
  'use strict';
  var test = document.createElement('script');
})(jQuery, window, document);
````

When minified will be as follows, reducing many instances of the :

````js
(function (a,b,c,d) {
  'use strict';
  // Also not global
  var test = a.createElement('script');
})(jQuery,window,document);
````

Thus saving many bytes and reducing file size and performance, as well as keeping the global namespace clean. Passing in the `jQuery` object and giving it the dollar alias also makes it play nicely if you're including other frameworks that use the `$` namespace.

## Why just style.min.css and scripts.min.js?
Including only two of your custom CSS and JavaScript files in your HTML aligns with best practices in modern web development, minifying your code and limiting HTTP requests is a huge performance enhancer.

## Sass/SCSS setup
FastShell comes with a `.scss` file setup and existing `@import` declarations to the very common web components. FastShell hopes to help those out who aren't sure about structuring a CSS project confidently as well as getting them setup with using a CSS PreProcessor. The basic idea:

* `mixins` holds all Sass/SCSS mixins, FastShell ships with a few helpers
* `module` holds modules, more Object-Orientated components and a generic `app.scss` for everything else, all file names should be modular/OO.
* `partials` holds the blueprints for the project, the header, footer, sidebar and so on.
* `vendor` holds any files that are third party, such as the font awesome icons CSS
* `style.scss` imports all the necessary files from the above folders, when adding new files be sure to add it inside this file.

## Hidden files explained

It's a good idea to expose hidden files so you can configure your `.editorconfig`, `.jshintrc`, `.gitignore` files. On the command line, enter:

````
defaults write com.apple.Finder AppleShowAllFiles YES
````

To hide hidden files enter:

````
defaults write com.apple.Finder AppleShowAllFiles NO
````

### .editorconfig
EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs. The `.editorconfig` file consists of a format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles.

### .gitignore
Ignores minified and generated files, this is best for working in teams to avoid constant conflict, only the source files are needed.

### .travis.yml
This is used on [travis-ci.org](http://travis-ci.org) for continuous integration tests, which monitor the FastShell build.

## Platform support

FastShell runs on Mac OS X, Linux and Windows. Automated command-line scripts are only supported on Mac OS X and Windows.
