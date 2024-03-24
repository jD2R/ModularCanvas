export default function() {
    return {
        keyPressed ( key, callback ) { //?
            this.canvasElement.addEventListener('keydown', (e) => {
                e.preventDefault();
                e.key === key && callback();
            });
        },
        keyReleased ( key, callback ) { //?
            this.canvasElement.addEventListener('keyup', (e) => {
                e.preventDefault();
                e.key === key && callback();
            });
        },
        onKeyPress ( callback, exclude ) {
            this.canvasElement.addEventListener('keydown', (e) => {
                e.preventDefault();
                if (!exclude || !exclude.includes(e.key)) {
                    callback(e.key, e.code);
                }
            });
        },
        onKeyRelease ( callback, exclude ) {
            this.canvasElement.addEventListener('keyup', (e) => {
                e.preventDefault();
                if (!exclude || !exclude.includes(e.key)) {
                    callback(e.key, e.code);
                }            
            });
        },
        onKeyType ( callback, exclude ) {
            this.canvasElement.addEventListener('keydown', (e) => {
                e.preventDefault();
                if (e.key.length === 1 && (!exclude || !exclude.includes(e.key))) {
                    callback(e.key, e.code);
                }
            });
        },
    };
}