import { j as jsxRuntimeExports } from "./index-BonoolKb.js";
import { useMDXComponents } from "./index-DI9R5y6E.js";
import { M as Meta, U as Unstyled } from "./index-Dt0lL7yK.js";
import { f as fontSizes } from "./index-B46fzyHE.js";
import { T as TokensGrid } from "./tokensGrid-DyhkoWMg.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./index-CVqyR_EW.js";
import "./index-XyBrGLi6.js";
import "./iframe-Diheixuq.js";
import "./index-XG6mIJUL.js";
import "./index-BdOSk9or.js";
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Tokens/Font Sizes"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "font-sizes",
      children: "Font sizes"
    }), "\n", jsxRuntimeExports.jsx(Unstyled, {
      children: jsxRuntimeExports.jsx(TokensGrid, {
        tokens: fontSizes,
        hasRemValue: true
      })
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
