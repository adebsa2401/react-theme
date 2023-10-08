"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var createTheme = function (theme) {
    var _a, _b, _c, _d;
    var lightTheme = __assign(__assign(__assign({}, ((_a = theme.dark) !== null && _a !== void 0 ? _a : {})), theme.default), ((_b = theme.light) !== null && _b !== void 0 ? _b : {}));
    var darkTheme = __assign(__assign(__assign({}, ((_c = theme.light) !== null && _c !== void 0 ? _c : {})), theme.default), ((_d = theme.dark) !== null && _d !== void 0 ? _d : {}));
    return function (colorScheme) {
        switch (colorScheme) {
            case "light":
                return lightTheme;
            case "dark":
                return darkTheme;
        }
    };
};
exports.default = createTheme;
//# sourceMappingURL=create-theme.js.map