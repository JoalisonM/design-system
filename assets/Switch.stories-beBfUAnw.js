var _a, _b, _c, _d, _e, _f;
import { j as jsxRuntimeExports } from "./_baseUniq-15kV4T39.js";
import { e as Switch, a as Box, T as Text } from "./index-CwmuUYRK.js";
import "./index-Bd5kABF7.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-DHnkxYnf.js";
import "./debounce-DbD7Aq5F.js";
const Switch_stories = {
  title: "Form/Switch",
  component: Switch,
  args: {
    id: "terms"
  },
  decorators: [(Story) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { style: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      gap: "0.5rem"
    }, children: [
      Story(),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { as: "label", size: "sm", children: "Accept terms of use" })
    ] });
  }]
};
const Primary = {};
const Disabled = {
  args: {
    disabled: true,
    value: "someone@nefex.io"
  }
};
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
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...(_d = Disabled.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  args: {\n    disabled: true,\n    value: "someone@nefex.io"\n  }\n}',
      ...(_f = (_e = Disabled.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["Primary", "Disabled"];
export {
  Disabled,
  Primary,
  __namedExportsOrder,
  Switch_stories as default
};
