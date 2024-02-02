export function polyfillCanvas2dContext() {
    if (import.meta.server) return
    CanvasRenderingContext2D.prototype.myCurrentCoordinates = {
        x: 0,
        y: 0,
    }
    CanvasRenderingContext2D.prototype.moveToTracked = function (...args: Parameters<CanvasRenderingContext2D['moveTo']>) {
        CanvasRenderingContext2D.prototype.moveTo.call(this, ...args)
        const [x, y] = args
        this.myCurrentCoordinates.x = x;
        this.myCurrentCoordinates.y = y
    }
    CanvasRenderingContext2D.prototype.lineToTracked = function (...args: Parameters<CanvasRenderingContext2D['lineTo']>) {
        CanvasRenderingContext2D.prototype.lineTo.call(this, ...args)
        const [x, y] = args
        this.myCurrentCoordinates.x = x;
        this.myCurrentCoordinates.y = y
    }
}