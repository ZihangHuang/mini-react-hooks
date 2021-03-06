"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useHoverDirty = function (ref, enabled) {
    if (enabled === void 0) { enabled = true; }
    if (process.env.NODE_ENV === 'development') {
        if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
            console.error('useHoverDirty expects a single ref argument.');
        }
    }
    var _a = react_1.useState(false), value = _a[0], setValue = _a[1];
    react_1.useEffect(function () {
        var onMouseOver = function () { return setValue(true); };
        var onMouseOut = function () { return setValue(true); };
        if (enabled && ref && ref.current) {
            ref.current.addEventListener('mouseover', onMouseOver);
            ref.current.addEventListener('mouseout', onMouseOut);
        }
        return (function () {
            if (enabled && ref && ref.current) {
                ref.current.removeEventListener('mouseover', onMouseOver);
                ref.current.removeEventListener('mouseout', onMouseOut);
            }
        });
    }, [enabled, ref]);
    return value;
};
exports["default"] = useHoverDirty;
