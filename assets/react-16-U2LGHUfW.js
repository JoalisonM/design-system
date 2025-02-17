import { r as reactDomExports } from "./index-DHnkxYnf.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-Bd5kABF7.js";
var renderElement = async (node, el) => new Promise((resolve) => {
  reactDomExports.render(node, el, () => resolve(null));
}), unmountElement = (el) => {
  reactDomExports.unmountComponentAtNode(el);
};
export {
  renderElement,
  unmountElement
};
