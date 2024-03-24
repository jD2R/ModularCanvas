import KeyInput from "./src/input/keys.js";
import MouseInput from "./src/input/mouse.js";
import Text from "./src/drawing/text.js"
import Color from "./src/drawing/color.js"
import Animate from "./src/basic/animate.js"
import Size from "./src/basic/size.js"

const moduleImports = [
    Text(),
    Color(),
    Animate(),
    Size(),
    KeyInput(),
    MouseInput(),
];

export default class Canvas {

    constructor ( canvasElement ) {

        this.canvasElement = canvasElement;
        this.context = canvasElement.getContext("2d");

        this.#canvasSetup();

        this.width = canvasElement.width;
        this.height = canvasElement.height;

        this.mouseX = 0;
        this.mouseY = 0;
        this.pmouseX = 0;
        this.pmouseY = 0;

        this.targetFPS = 60;
        this.frameRate = this.targetFPS;
        this.frameCount = 0;
        this.then, this.delta, this.drawFunction;

        this.keys = {};
        this.mouse = {};

        this.mouseButtons = ['Left', 'Center', 'Right'];

    }

    #canvasSetup () {
        this.canvasElement.style.outline = "none";
        this.canvasElement.tabIndex = 1;

        this.canvasElement.addEventListener('mousemove', this.#handleMouseOver.bind(this));

        this.canvasElement.addEventListener('mousedown', (e) => {
            e.preventDefault();
            this.mouse[this.mouseButtons[e.button]] = true;
        });
        this.canvasElement.addEventListener('mouseup', (e) => {
            e.preventDefault();
            delete this.mouse[this.mouseButtons[e.button]];
        });

        this.canvasElement.addEventListener('keydown', (e) => this.keys[String(e.key)] = true);
        this.canvasElement.addEventListener('keyup', (e) => delete this.keys[String(e.key)]);

        this.canvasElement.addEventListener('blur', () => {
            this.keys = {};
            this.mouse = {};
        });

        this.canvasElement.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }

    #handleMouseOver ( event ) {
        let rect = this.canvasElement.getBoundingClientRect();

        this.pmouseX = this.mouseX;
        this.pmouseY = this.mouseY;

        this.mouseX = event.clientX - rect.left;
        this.mouseY = event.clientY - rect.top;
    }
     
}

Object.assign(Canvas.prototype, ...moduleImports);