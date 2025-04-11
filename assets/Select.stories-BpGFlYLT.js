var _a, _b, _c, _d, _e, _f;
import { j as jsxRuntimeExports } from "./index-BonoolKb.js";
import { d as Select, a as Box } from "./index-CAHOwpYa.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./index-CVqyR_EW.js";
import "./index-XyBrGLi6.js";
import "./polished.esm-Be2v7kFA.js";
const Select_stories = {
  title: "Form/Select",
  component: Select,
  args: {
    placeholder: "Select something",
    showSearch: true,
    defaultValue: "Orange",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Option, { value: "Apple", children: "Apple" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Option, { value: "Orange", children: "Orange" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Option, { value: "A", children: "A" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Option, { value: "B", children: "B" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Option, { value: "C", children: "C" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Option, { value: "D", children: "D" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Option, { value: "E", children: "E" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Option, { value: "F", children: "F" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Option, { value: "G", children: "G" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Option, { value: "H", children: "H" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Option, { value: "J", children: "J" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Option, { value: "K", children: "K" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Option, { value: "L", children: "L" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Option, { value: "M", children: "M" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Option, { value: "N", children: "N" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Option, { value: "O", children: "O" })
    ] })
  },
  decorators: [(Story) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: Story() });
  }]
};
const Primary = {};
const Disabled = {
  args: {
    disabled: true
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
      originalSource: "{\n  args: {\n    disabled: true\n  }\n}",
      ...(_f = (_e = Disabled.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["Primary", "Disabled"];
export {
  Disabled,
  Primary,
  __namedExportsOrder,
  Select_stories as default
};
