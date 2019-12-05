class Calculator {
    constructor(){
        this._value = 0;
      }

    add (num) {
        this._value = this._value + num;
        return         this;
      }

      subtract (num) {
        this._value = this._value - num;
        return         this;
    }
    divide (num) {
        if(num!=0){
        this._value = this._value / num;
        return         this;
        }
    }

    multiply (num) {
        this._value = this._value * num;
        return         this;
    }


    clear () {
        this._value = 0;
        return         this._value;
    }

    get value() {
        return this._value;
    }
 
}

module.exports = { Calculator };
