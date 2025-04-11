var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
import { j as jsxRuntimeExports } from "./index-BonoolKb.js";
import { I as Input, a as Box, T as Text } from "./index-CAHOwpYa.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./index-CVqyR_EW.js";
import "./index-XyBrGLi6.js";
import "./polished.esm-Be2v7kFA.js";
const Input_stories = {
  title: "Form/Input",
  component: Input,
  args: {
    placeholder: "Please type something"
  },
  decorators: [(Story) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { as: "label", style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { size: "sm", children: "Something:" }),
      Story()
    ] });
  }]
};
const Primary = {};
const InputNumber = {
  args: {
    type: "number"
  }
};
const Disabled = {
  args: {
    disabled: true,
    value: "someone@nefex.io"
  }
};
const WithPrefix = {
  args: {
    prefix: "+55"
  }
};
const WithSuffix = {
  args: {
    suffix: "@nefex.io"
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
InputNumber.parameters = {
  ...InputNumber.parameters,
  docs: {
    ...(_d = InputNumber.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  args: {\n    type: "number"\n  }\n}',
      ...(_f = (_e = InputNumber.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...(_g = Disabled.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  args: {\n    disabled: true,\n    value: "someone@nefex.io"\n  }\n}',
      ...(_i = (_h = Disabled.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
WithPrefix.parameters = {
  ...WithPrefix.parameters,
  docs: {
    ...(_j = WithPrefix.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  args: {\n    prefix: "+55"\n  }\n}',
      ...(_l = (_k = WithPrefix.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
WithSuffix.parameters = {
  ...WithSuffix.parameters,
  docs: {
    ...(_m = WithSuffix.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: '{\n  args: {\n    suffix: "@nefex.io"\n  }\n}',
      ...(_o = (_n = WithSuffix.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
const __namedExportsOrder = ["Primary", "InputNumber", "Disabled", "WithPrefix", "WithSuffix"];
export {
  Disabled,
  InputNumber,
  Primary,
  WithPrefix,
  WithSuffix,
  __namedExportsOrder,
  Input_stories as default
};
