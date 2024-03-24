export default function() {
    return {
        fill ( color ) {
            this.context.fillStyle = color;
        },
        background ( color ) {
            this.context.fillStyle = color;
            this.context.fillRect(0, 0, this.width, this.height);
        },
    };
}