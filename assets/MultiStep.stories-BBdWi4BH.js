var _a, _b, _c, _d, _e, _f;
import { j as jsxRuntimeExports } from "./index-BonoolKb.js";
import { M as MultiStep, a as Box } from "./index-CAHOwpYa.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./index-CVqyR_EW.js";
import "./index-XyBrGLi6.js";
import "./polished.esm-Be2v7kFA.js";
const MultiStep_stories = {
  title: "Form/Multi Step",
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1
  },
  decorators: [(Story) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: Story() });
  }]
};
const Primary = {};
const Full = {
  args: {
    size: 4,
    currentStep: 4
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
Full.parameters = {
  ...Full.parameters,
  docs: {
    ...(_d = Full.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 4,\n    currentStep: 4\n  }\n}",
      ...(_f = (_e = Full.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["Primary", "Full"];
export {
  Full,
  Primary,
  __namedExportsOrder,
  MultiStep_stories as default
};
