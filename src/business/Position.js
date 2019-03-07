export const PIXELS_UNIT = 10;

export class Position {
    x = 0;
    y = 0;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get xPixels(){
        return this.x * PIXELS_UNIT;
    }

    get yPixels(){
        return this.y * PIXELS_UNIT;
    }

    equals(position){
        return position && position instanceof Position && position.x === this.x && position.y === this.y;
    }
}

export default Position;