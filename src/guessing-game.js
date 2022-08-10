class GuessingGame {
    constructor() {

    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.middle = Math.round((this.max - this.min)/2 + this.min);
      


        return this.middle;
    }

    lower() {
        this.max = this.middle;
        this.guess();
    }

    greater() {
        this.min = this.middle;
        this.guess();
    }
}

module.exports = GuessingGame;
