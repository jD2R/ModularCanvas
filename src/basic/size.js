export default function() {
    return {
        size ( width, height ) {
            this.width = width;
            this.canvasElement.width = width;
    
            this.height = height;
            this.canvasElement.height = height;
        },    
    };
}