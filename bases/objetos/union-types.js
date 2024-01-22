"use strict";
(() => {
    let myCustomVariable = 'Jose';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Jose',
        age: 20,
        powers: [1, 2, 3],
    };
    console.log(typeof myCustomVariable);
})();
//# sourceMappingURL=union-types.js.map