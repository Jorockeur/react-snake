import Position from './Position'
import {computed, observable} from "mobx";

const COLORS = ['#FF2600', '#FF9300', '#FEFB00', '#8DF900', '#0096FF', '#9437FF', '#FF40FF', '#FF2F92'];

export class Brick extends Position {
    @observable color;

    @computed get position() {
        return this;
    }

    set position(p) {
        this.x = p.x;
        this.y = p.y;
    }

    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
}

//TODO: refactor createBlackBrick to createRedBrick
export function createBlackBrick(position) {
    return new Brick(position.x, position.y, '#ff0000');
}

export function createGreyColorBrick(position) {
    const i = Math.floor(Math.random() * COLORS.length);
    return new Brick(position.x, position.y, '#333333');
}
