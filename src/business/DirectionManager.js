class DirectionManager{
    _direction;

    constructor() {
        this.reset();
        this.startListening();
    }

    startListening() {
        let monHandler = this.captureKeyboard.bind(this); //bind le contexte courant
        window.addEventListener('keydown', monHandler, true);
    }

    captureKeyboard(e) {
        if (e.key === 'ArrowUp' && this._direction !== 'down') {
            this._direction = 'up';
        } else if (e.key === 'ArrowDown' && this._direction !== 'up') {
            this._direction = 'down';
        } else if (e.key === 'ArrowLeft' && this._direction !== 'right') {
            this._direction = 'left';
        } else if (e.key === 'ArrowRight' && this._direction !== 'left') {
            this._direction = 'right';
        }
        e.preventDefault();
    }

    reset() {
        this._direction = 'right';
    }

    get direction() {
        //retourne "up", "down", "left" ou "right"
        return this._direction;
    }
}

export default DirectionManager;