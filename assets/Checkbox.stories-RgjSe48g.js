var _a, _b, _c;
import { j as jsxRuntimeExports } from "./index-BonoolKb.js";
import { c as Checkbox2, a as Box, T as Text } from "./index-CAHOwpYa.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./index-CVqyR_EW.js";
import "./index-XyBrGLi6.js";
import "./polished.esm-Be2v7kFA.js";
const Checkbox_stories = {
  title: "Form/Checkbox",
  component: Checkbox2,
  decorators: [(Story) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { as: "label", style: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      gap: "0.5rem"
    }, children: [
      Story(),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { size: "sm", children: "Accept terms of use" })
    ] });
  }]
};
const Primary = {};
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...(_a = Primary.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{}",
      ...(_c = (_b = Primary.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["Primary"];
export {
  Primary,
  __namedExportsOrder,
  Checkbox_stories as default
};
