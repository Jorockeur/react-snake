import { computed, observable } from "mobx";

export const PIXELS_UNIT = 10;

export class Position {
    @observable x = 0;
    @observable y = 0;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    @computed get xPixels() {
        return this.x * PIXELS_UNIT;
    }

    @computed get yPixels() {
        return this.y * PIXELS_UNIT;
    }

    equals(position) {
        return position && position instanceof Position && position.x === this.x && position.y === this.y;
    }
}

export default Position;