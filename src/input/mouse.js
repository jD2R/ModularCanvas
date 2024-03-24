export default function() {
    return {
        onMouseClick ( callback ) {
            this.canvasElement.addEventListener('mouseup', (e) => {
                e.preventDefault();
                callback(this.mouseButtons[e.button]);
            });
        },
        onMousePress ( callback ) {
            this.canvasElement.addEventListener('mousedown', (e) => {
                callback(this.mouseButtons[e.button]);
            });
        },
        onMouseRelease ( callback ) {
            this.canvasElement.addEventListener('mouseup', (e) => {
                callback(this.mouseButtons[e.button]);
            });
        },
        onMouseScroll ( callback ) {
            this.canvasElement.addEventListener('wheel', (e) => {
                callback(e.deltaY);
            });
        },
        onMouseMove ( callback ) {
            this.canvasElement.addEventListener('mousemove', (e) => {
                callback();
            });
        },
        onMouseOut ( callback ) {
            this.canvasElement.addEventListener('mouseout', (e) => {
                callback();
            });
        },
        onMouseOver ( callback ) {
            this.canvasElement.addEventListener('mouseover', (e) => {
                callback();
            });
        },
    };
}