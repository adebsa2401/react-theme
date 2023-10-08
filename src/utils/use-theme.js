"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var theme_context_1 = __importDefault(require("../theme-context"));
var react_1 = require("react");
var useTheme = function () {
    var context = (0, react_1.useContext)(theme_context_1.default);
    return context;
};
exports.default = useTheme;
//# sourceMappingURL=use-theme.js.map