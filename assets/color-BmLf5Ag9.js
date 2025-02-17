import { j as jsxRuntimeExports, g as getContrast } from "./_baseUniq-15kV4T39.js";
import { useMDXComponents } from "./index-2Z_ABzls.js";
import { af as Meta } from "./index-BaPxJf4u.js";
import { c as colors } from "./index-B46fzyHE.js";
import "./index-Bd5kABF7.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-BKMQZX8F.js";
import "../sb-preview/runtime.js";
import "./index-DHnkxYnf.js";
import "./index-DJdTjTnu.js";
import "./_getPrototype-Yz62ep6F.js";
import "./index-B6TI3DWQ.js";
import "./index-BdOSk9or.js";
function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { backgroundColor: color, padding: "2rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "monospace",
          color: getContrast(color, "#FFF") < 3.5 ? "#000" : "#FFF"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            "$",
            key
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: color })
        ]
      }
    ) }, key);
  });
}
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Tokens/Colors"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "colors",
      children: "Colors"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Essas são as cores utilizadas na Nefex."
    }), "\n", jsxRuntimeExports.jsx(ColorsGrid, {})]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsxRuntimeExports.jsx(MDXLayout, {
    ...props,
    children: jsxRuntimeExports.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
export {
  MDXContent as default
};
