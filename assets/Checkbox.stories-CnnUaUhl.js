var _a, _b, _c;
import { j as jsxRuntimeExports } from "./_baseUniq-15kV4T39.js";
import { c as Checkbox2, a as Box, T as Text } from "./index-CwmuUYRK.js";
import "./index-Bd5kABF7.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-DHnkxYnf.js";
import "./debounce-DbD7Aq5F.js";
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
