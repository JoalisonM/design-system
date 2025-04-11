import { j as jsxRuntimeExports } from "./index-BonoolKb.js";
import { useMDXComponents } from "./index-DI9R5y6E.js";
import { M as Meta } from "./index-Dt0lL7yK.js";
import { c as colors } from "./index-B46fzyHE.js";
import { g as getContrast } from "./polished.esm-Be2v7kFA.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./index-CVqyR_EW.js";
import "./index-XyBrGLi6.js";
import "./iframe-Diheixuq.js";
import "./index-XG6mIJUL.js";
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
