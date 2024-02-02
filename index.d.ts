declare global {
    export interface CanvasRenderingContext2D {
        myCurrentCoordinates: { x: number, y: number };
        /**
         * this is a custom method for tracking the coordinates after a successful line plot action
         */
        moveToTracked: CanvasRenderingContext2D['moveTo'];
        /**
         * this is a custom method for tracking the coordinates after a successful line plot action
         */
        lineToTracked: CanvasRenderingContext2D['lineTo'];
    }
}
export { }