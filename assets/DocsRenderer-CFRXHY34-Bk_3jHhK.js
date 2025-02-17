const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-2Z_ABzls.js","assets/index-Bd5kABF7.js","assets/_commonjsHelpers-CcAunmGO.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./iframe-BKMQZX8F.js";
import { R as React, r as reactExports } from "./index-Bd5kABF7.js";
import { ah as CodeOrSourceMdx, ai as AnchorMdx, aj as HeadersMdx, ak as Docs } from "./index-BaPxJf4u.js";
import { renderElement, unmountElement } from "./react-16-U2LGHUfW.js";
import "../sb-preview/runtime.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./_baseUniq-15kV4T39.js";
import "./index-DHnkxYnf.js";
import "./index-DJdTjTnu.js";
import "./_getPrototype-Yz62ep6F.js";
import "./index-B6TI3DWQ.js";
import "./index-BdOSk9or.js";
var defaultComponents = { code: CodeOrSourceMdx, a: AnchorMdx, ...HeadersMdx }, ErrorBoundary = class extends reactExports.Component {
  constructor() {
    super(...arguments);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err) {
    let { showException } = this.props;
    showException(err);
  }
  render() {
    let { hasError } = this.state, { children } = this.props;
    return hasError ? null : React.createElement(React.Fragment, null, children);
  }
}, DocsRenderer = class {
  constructor() {
    this.render = async (context, docsParameter, element) => {
      let components = { ...defaultComponents, ...docsParameter == null ? void 0 : docsParameter.components }, TDocs = Docs;
      return new Promise((resolve, reject) => {
        __vitePreload(async () => {
          const { MDXProvider } = await import("./index-2Z_ABzls.js");
          return { MDXProvider };
        }, true ? __vite__mapDeps([0,1,2]) : void 0).then(({ MDXProvider }) => renderElement(React.createElement(ErrorBoundary, { showException: reject, key: Math.random() }, React.createElement(MDXProvider, { components }, React.createElement(TDocs, { context, docsParameter }))), element)).then(() => resolve());
      });
    }, this.unmount = (element) => {
      unmountElement(element);
    };
  }
};
export {
  DocsRenderer,
  defaultComponents
};
