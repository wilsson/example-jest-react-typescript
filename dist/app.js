webpackJsonp([0],{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(2);
var ReactDOM = __webpack_require__(8);
var example_1 = __webpack_require__(27);
ReactDOM.render(React.createElement(example_1.Link, { page: "http://www.facebook.com" }, "Facebook"), document.getElementById("container"));


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(2);
var STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};
var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link(props) {
        var _this = _super.call(this, props) || this;
        _this._onMouseEnter = _this._onMouseEnter.bind(_this);
        _this._onMouseLeave = _this._onMouseLeave.bind(_this);
        _this.state = {
            class: STATUS.NORMAL,
        };
        return _this;
    }
    Link.prototype._onMouseEnter = function () {
        this.setState({ class: STATUS.HOVERED });
    };
    Link.prototype._onMouseLeave = function () {
        this.setState({ class: STATUS.NORMAL });
    };
    Link.prototype.render = function () {
        return (React.createElement("a", { className: this.state.class, href: this.props.page || '#', onMouseEnter: this._onMouseEnter, onMouseLeave: this._onMouseLeave }, this.props.children));
    };
    return Link;
}(React.Component));
exports.Link = Link;


/***/ })

},[15]);
//# sourceMappingURL=app.js.map