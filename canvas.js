import getModules from "./src/util/modules.js";

export default class Canvas {

    constructor ( canvasElement, imports ) {

        this.canvasElement = canvasElement;
        this.context = canvasElement.getContext("2d");

        let modules = getModules(imports);
        Object.assign(this, ...modules);

        this.canvasSetup();

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

    canvasSetup () {
        // Removes the outline when the canvas is selected
        this.canvasElement.style.outline = "none";
        // Adds the tab index so the canvas can be focused
        this.canvasElement.tabIndex = 1;
        // Focuses the canvas by default for key interaction
        this.canvasElement.focus();

        // ✅
        this.canvasElement.addEventListener('mousemove', (event) => {
            let rect = this.canvasElement.getBoundingClientRect();

            this.pmouseX = this.mouseX;
            this.pmouseY = this.mouseY;
    
            this.mouseX = event.clientX - rect.left;
            this.mouseY = event.clientY - rect.top;
        });

        // ✅
        this.canvasElement.addEventListener('click', (event) => {
            this.canvasElement.focus();
        });

        // ✅
        this.canvasElement.addEventListener('mousedown', (e) => {
            e.preventDefault();
            this.mouse[this.mouseButtons[e.button]] = true;
        });
        // ✅
        this.canvasElement.addEventListener('mouseup', (e) => {
            e.preventDefault();
            delete this.mouse[this.mouseButtons[e.button]];
        });

        // ✅
        this.canvasElement.addEventListener('keydown', (e) => {
            e.preventDefault();
            this.keys[String(e.key)] = true;
        });
        // ✅
        this.canvasElement.addEventListener('keyup', (e) => delete this.keys[String(e.key)]);

        // ✅
        this.canvasElement.addEventListener('blur', () => {
            this.keys = {};
            this.mouse = {};
        });

        // ✅
        this.canvasElement.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }
}