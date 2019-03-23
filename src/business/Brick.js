import Position from './Position'

import { computed, observable } from "mobx";

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

export function createGreyBrick(position) {
    return new Brick(position.x, position.y, '#333333');
}

export function createRandomColorBrick(position){
    // c'est mieux que de se restreindre à juste une liste de couleurs hein !
    const i = Math.floor(Math.random() * 360);
    return new Brick(position.x, position.y, `hsl(${i}, 100%, 50%)`);
}
