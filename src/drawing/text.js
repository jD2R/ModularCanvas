export default function() {
    return {
        text ( string, x, y ) {
            this.context.fillText(string, x, y);
        },
    };
}