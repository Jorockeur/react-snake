import { computed, observable } from "mobx";

class DirectionManager{
    @observable _direction;
    @observable _blockDirection = false;

    constructor() {
        this.reset();
        this.startListening();
    }

    startListening() {
        let handler = this.captureKeyboard.bind(this); //bind le contexte courant
        window.addEventListener('keydown', handler, true);
    }

    captureKeyboard(e) {
        if (this._blockDirection) return;
        if (e.key === 'ArrowUp' && this._direction !== 'down') {
            this._direction = 'up';
            this._blockDirection = true;
        } else if (e.key === 'ArrowDown' && this._direction !== 'up') {
            this._direction = 'down';
            this._blockDirection = true;
        } else if (e.key === 'ArrowLeft' && this._direction !== 'right') {
            this._direction = 'left';
            this._blockDirection = true;
        } else if (e.key === 'ArrowRight' && this._direction !== 'left') {
            this._direction = 'right';
            this._blockDirection = true;
        }
        e.preventDefault();
    }

    reset() {
        this._direction = 'right';
    }

    @computed get direction() {
        //retourne "up", "down", "left" ou "right"
        return this._direction;
    }
}

export default DirectionManager;