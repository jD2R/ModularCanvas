import getModules from "./src/util/modules.js";

export default class Canvas {

    constructor ( canvasElement, imports ) {

        this.canvasElement = canvasElement;
        this.context = canvasElement.getContext("2d");

        let modules = getModules(imports);
        Object.assign(this, ...modules);

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