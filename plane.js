"use strict";
var Fruits;
(function (Fruits) {
    class ind_fruit {
        constructor(n, c, p) {
            this.name = n;
            this.color = c;
            this.price = p;
        }
        get Name() {
            return this.name;
        }
        set Name(n) {
            this.name = n;
        }
    }
    Fruits.ind_fruit = ind_fruit;
})(Fruits || (Fruits = {}));
