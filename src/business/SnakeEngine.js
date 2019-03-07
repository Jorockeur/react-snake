import Position from './Position';
import { createBlackBrick, createRandomBrick } from '../components/GraphicBrick/GraphicBrick'

class SnakeEngine{
    isBlocked = false;
    snake; //tableau de briques
    food = null; //une brique
    gridSize;
    initialSnakeSize = 5;

    constructor(gridSize) {
        this.gridSize = gridSize;
        this.reset();
    }

    move(direction) {
        if (this.isBlocked){
            return -1;
        }
        if (this.food === null) {
            this.createNewFood();
        }
        //calcule la nouvelle position de la tête du serpent
        let futurHead = this.computeFuturHead(direction);
        //vérifie que le serpent mange la nourriture
        if (futurHead.equals(this.food.position)){
            //faire grandir le serpent
            this.growSnakeWithFood();
            //créer une nouvelle nourriture
            this.createNewFood();
            return 1;
        }
        //vérifie si le serpent se mord
        if (this.snakeIsOn(futurHead)) {
            this.isBlocked = true;
            return -1;
        }
        //sinon, le serpent avance
        this.moveSnake(futurHead);
    }

    //créer une nouvelle nourriture aléatoirement qui n'est pas sur le serpent
    createNewFood() {
        //vérifier s'il y a encore de la place
        const T = this.gridSize * this.gridSize; //nombre de cases au total

        if (this.snake.length === T) return;

        //calculer au hasard un indice entre [0 ; T - taille du serpent - 1]
        let i = Math.floor(Math.random() * (T - this.snake.length));

        //créer un tableau trié des indices du serpent à une dimension
        const t2 = this.snake.map(pos => pos.y * this.gridSize + pos.x).sort();

        //ajuster la valeur de i avec t2
        for (let j = 0 ; j < t2.length && t2[j] <= i; j++) {
            i++;
        }

        //ici, i est l'indice d'une case libre dans la grille en version unidimensionnel
        const p = new Position(i % this.gridSize, Math.floor(i / this.gridSize));
        this.food = createRandomColorBrick(p);

//        //créer un tableau des positions possibles
//        const availablePositions = [];
//        for (let x = 0; x < this.gridSize ; x++){
//            for (let y = 0; y < this.gridSize; y ++){
//                let pos = new Position(x,y);
//                if (!this.snakeIsOn(pos)){
//                    availablePositions.push(pos);
//                }
//            }
//        }
//        const i = Math.floor(Math.random() * availablePositions.length);
//        return availablePositions[i];

    }

    //calcule et retroune la position de la nouvelle tête du serpent
    computeFuturHead(direction) {
        const currentHeadPos = this.snake[this.snake.length - 1].position;
        switch(direction){
            case "up":
                return new Position(currentHeadPos.x, currentHeadPos.y === 0 ? this.gridSize - 1 : currentHeadPos.y - 1);
            case "down":
                return new Position(currentHeadPos.x, currentHeadPos.y === this.gridSize - 1 ? 0 : currentHeadPos.y + 1);
            case "left":
                return new Position(currentHeadPos.x === 0 ? this.gridSize - 1 : currentHeadPos.x - 1, currentHeadPos.y);
            case "right":
                return new Position(currentHeadPos.x === this.gridSize - 1 ? 0 : currentHeadPos.x + 1, currentHeadPos.y);
            default:
                throw Illegal direction ${direction};
        }
    }

    growSnakeWithFood() {
        if (this.food === null) return;
        this.snake.push(this.food);
        this.food = null;
    }

    //retourne true ou false
    snakeIsOn(position) {
        return this.snake.some((brick) => brick.position.equals(position));
    }

    moveSnake(newHead) {
        let i;
        for (i=0; i < this.snake.length - 1; i++){
            this.snake[i].position = this.snake[i+1].position;
        }
        //avancer la tête
        this.snake[i].position = newHead;
    }

    reset() {
        this.snake = new Array(this.initialSnakeSize);
        const xBase = Math.ceil((this.gridSize - this.initialSnakeSize) / 2);
        const y = Math.ceil(this.gridSize / 2);
        for (let i=0; i < this.initialSnakeSize; i++){
            let p = new Position(xBase + i,y);
            this.snake[i] = createBlackBrick(p);
        }
        this.food = null;
        this.isBlocked = false;
    }
}

export default SnakeEngine;