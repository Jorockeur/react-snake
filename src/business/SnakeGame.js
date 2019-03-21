import Engine from './SnakeEngine';
import DirectionManager from './DirectionManager';
import { computed, observable } from "mobx";

class SnakeGame {
    @observable state = "new_game";
    @observable score = 0;
    @observable _level = 1;
    @observable size = 48;
    @observable engine;
    @observable directionManager;
    @observable intervalId;

    constructor() {
        this.engine = new Engine(this.size);
        this.directionManager = new DirectionManager();
    }

    //j'ai changé un poil les conditions vu que j'ai revu le fonctionnement sur les boutons start, pause et reset
    start() {
        if (this.state !== "new_game" && this.state !== "paused") {
            return;
        }

        setInterval(() => { this.playATurn() }, this.computeInterval());
        this.state = "running";
    }

    pause() {
        if (this.state !== "running") {
            return;
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

    stopTurn() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    incrementScore() {
        this.score += 5 * (this.level + 1);
    }

    computeInterval() {
        return -10 * this.level + 80;
    }
}

export default SnakeGame;