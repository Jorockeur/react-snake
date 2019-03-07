import Position from './Position'

const COLORS = ['#FF2600', '#FF9300', '#FEFB00', '#8DF900', '#0096FF', '#9437FF', '#FF40FF', '#FF2F92'];

export class Brick extends Position {
    color;

    constructor(x, y, color){
        super(x, y);
        this.color = color;
    }
}

export function createBlackBrick(position){
    return new Brick(position.x, position.y, '#000000');
}

export function createRandomColorBrick(position){
    const i = Math.floor(Math.random * COLORS.length);
    return new Brick(position.x, position.y, COLORS[i]);
}