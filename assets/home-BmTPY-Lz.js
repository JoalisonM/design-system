import { j as jsxRuntimeExports } from "./_baseUniq-15kV4T39.js";
import { useMDXComponents } from "./index-2Z_ABzls.js";
import { af as Meta } from "./index-BaPxJf4u.js";
import "./index-Bd5kABF7.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-BKMQZX8F.js";
import "../sb-preview/runtime.js";
import "./index-DHnkxYnf.js";
import "./index-DJdTjTnu.js";
import "./_getPrototype-Yz62ep6F.js";
import "./index-B6TI3DWQ.js";
import "./index-BdOSk9or.js";
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Home"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "nefex-ui",
      children: "Nefex Ui"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Design System da Nefex"
    })]
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
