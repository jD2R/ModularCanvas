# ModularCanvas

ModularCanvas is a hobby project that I've been working on. It aims to replicate all of the major features of a canvas manipulation library such as [Processing.js](https://github.com/processing-js/processing-js) or, more notably in my specific case, [ski.js](https://github.com/thelegendski/ski.js). In addition, I'm adding some features that I thought would be nice to have.

 - A custom import ecosystem style. This way, it doesn't have to come with everything out of the box (though it'll still be the default for those who don't know/care about this feature).

 - Support to run multiple canvas objects at once (and keep track of relative statistics like mouse position and keys pressed while the canvas is focused).

 - A modular design, which enables cleaner, shorter files.

## Usage

To use the features of the library, you need to import the `Canvas` class from the `canvas.js` file located inside the repository; place the import into the JavaScript file or tag where you want to write your code.

```js
// Using the URL from jsDelivr
import Canvas from "https://cdn.jsdelivr.net/gh/jD2R/ModularCanvas@main/canvas.js";
```

From there, you can attach a set of ModularCanvas tools to a canvas element.

```js
const canvas = new Canvas(document.getElementById("canvas"), [
	"Text", "Color", "Size", "Animate"
]);
canvas.size(600, 600);
```

This creates a set of tools, attaches it to the first argument (a canvas with an ID of `canvas`, in this case), and imports some modules from the toolkit. If you're unfamiliar with how this latter feature works, just omit the argument; it'll import all of the modules automatically.

Finally, `size` sets the size of the canvas in pixels. Any further styling must be done by hand using CSS properties (which is not difficult if you know what you're doing - they play well with the library).

## Demo Program
_Located inside of the index.html file found in the repository_

```js
import Canvas from "https://cdn.jsdelivr.net/gh/jD2R/ModularCanvas@main/canvas.js";

const canvas = new Canvas(document.getElementById("canvas"), [
	"Text", "Color", "Size", "Animate"
]);
canvas.size(600, 600);

canvas.draw(() => {
	canvas.background("red");
	canvas.fill("white");
	canvas.text(`${canvas.mouseX}, ${canvas.mouseY}`, 20, 20);
	canvas.text(`${canvas.frameRate.toFixed(1)}`, 20, 40);
});
```

