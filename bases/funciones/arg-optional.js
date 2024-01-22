"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "No lastName"}`;
    };
    const name = fullName("Tony");
    console.log({ name });
})();
//# sourceMappingURL=arg-optional.js.map