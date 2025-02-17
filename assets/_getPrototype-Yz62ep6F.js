import { _ as _defineProperty, a as _overArg } from "./_baseUniq-15kV4T39.js";
var defineProperty = _defineProperty;
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty) {
    defineProperty(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue;
var overArg = _overArg;
var getPrototype = overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype;
export {
  _baseAssignValue as _,
  _getPrototype as a
};
