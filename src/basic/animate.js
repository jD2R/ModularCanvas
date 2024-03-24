export default function() {
    return {
        setFrameRate ( rate ) {
            this.targetFPS = rate;
        },
        animate ( time ) {
            requestAnimationFrame(this.animate.bind(this));
            this.delta = time - this.then;
            if (this.delta > (1000 / this.targetFPS)) {
                let overflow = this.delta % (1000 / this.targetFPS);
                this.then = time - overflow;
                this.delta -= overflow;
                this.drawFunction();
                this.frameCount++;
                this.frameRate = 1000 / this.delta;
            }
        },
        draw ( drawFunction ) {
            this.drawFunction = drawFunction;
            this.then = performance.now();
            requestAnimationFrame(this.animate.bind(this));
        },
    };
}