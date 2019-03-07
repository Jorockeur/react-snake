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

    captureKeyboard(evt) {
        if(evt.key === 'ArrowUp' && this._direction !== 'down') {
            this._direction = 'up';
        } else if(evt.key === 'ArrowDown' && this._direction !== 'up') {
            this._direction = 'down';
        } else if(evt.key === 'ArrowLeft' && this._direction !== 'right') {
            this._direction = 'left';
        } else if(evt.key === 'ArrowRight' && this._direction !== 'left') {
            this._direction = 'right';
        }
        evt.preventDefault();
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