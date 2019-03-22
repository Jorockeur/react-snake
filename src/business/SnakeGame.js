import Engine from './SnakeEngine';
import DirectionManager from './DirectionManager';
import { computed, observable } from "mobx";

class SnakeGame {
    @observable state = "new_game";
    @observable score = 0;
    @observable _level = 1;
    @observable size = 32;
    @observable engine;
    @observable directionManager;
    @observable intervalId;
    @observable rainbowInterval;

    constructor() {
        this.engine = new Engine(this.size);
        this.directionManager = new DirectionManager();
    }

    start() {
        if (this.state !== "new_game" && this.state !== "paused") {
            return;
        }
        this.intervalId = setInterval(() => { this.playATurn() }, this.computeInterval());
        // l'interval pour les couleurs du snake est indépendant de l'autre
        this.rainbowInterval = setInterval(() => { this.handleRainbowInterval() }, 20);
        this.state = "running";
    }

    pause() {
        if (this.state !== "running") {
        }
        this.stopTurn();
        this.state = "paused";
    }

    reset() {
        if (this.state === "new_game" || this.state === "running") {
            return;
        }
        this.engine.reset();
        this.directionManager.reset();
        this.score = 0;
        this.state = "new_game";
    }

    @computed get level() {
        return this._level;
    }

    set level(l) {
        if (l < 1 || l > 5) {
            throw "Illegal level";
        }
        if (this.state === "running" || this.state === "paused") {
            return;
        }
        this._level = l;
    }

    playATurn() {
        if (this.state !== 'running') {
            return;
        }
        this.directionManager._blockDirection = false;
        switch (this.engine.move(this.directionManager.direction)) {
            case 0: //le serpent a bougé, il ne s'est rien passé
                break;
            case 1: //le serpent a grandi
                this.incrementScore();
                break;
            case -1: //le serpent s'est mordu
                this.state = "game_over";
                this.stopTurn();
                break;
            default:
                throw "Illegal return of Engine";
        }
    }

    // la fonction qui va gérer la couleur du snake
    handleRainbowInterval() {
        if (this.state === 'running') this.rainbowInterval++;
        if (this.rainbowInterval > 360) this.rainbowInterval = 0;
        for (let brick of this.engine.snake) {
            brick.color = `hsl(${this.rainbowInterval}, 100%, 50%)`;
        }
    }

    stopTurn() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    incrementScore() {
        this.score += 5 + (this.level * 5);
    }

    // j'ai changé un poil la vitesse du snake, et la façon dont elle augmente en changeant le niveau
    computeInterval() {
        return -8 * this.level + 88;
    }
}

export default SnakeGame;