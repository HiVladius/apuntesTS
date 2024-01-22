"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent', 'Superman', 'El mas capo', 'El mas groso');
    console.log({ superman });
})();
//# sourceMappingURL=arg-rest.js.map