"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function useDocumentTitle(count) {
  (0, _react.useEffect)(function () {
    document.title = "Count ".concat(count);
  }, [count]);
}

var _default = useDocumentTitle;
exports["default"] = _default;