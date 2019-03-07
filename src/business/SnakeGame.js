import Engine from './SnakeEngine';
import DirectionManager from './DirectionManager';

class SnakeGame {
    state = "new_game";
    score = 0;
    _level = 1;
    size = 32;
    engine;
    directionManager;
    intervalId;

    constructor() {
        this.engine = new Engine(this.size);
        this.directionManager = new DirectionManager();
    }

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
        if (this.state === "new_game") {
            return;
        }
        if (this.state === "running") {
            this.stopTurn();
        }
        this.engine.reset();
        this.directionManager.reset();
        this.score = 0;
        this.state = "new_game";
    }

    get level() {
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
        return -80 * this.level + 580;
    }
}