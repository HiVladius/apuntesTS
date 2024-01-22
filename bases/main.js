"use strict";
var Validation;
(function (Validation) {
    Validation.validateText = (text) => {
        return text.length > 3 ? true : false;
    };
    Validation.validateDate = (date) => {
        return isNaN(date.valueOf()) ? false : true;
    };
})(Validation || (Validation = {}));
console.log(Validation.validateText("Hola"));
//# sourceMappingURL=main.js.map