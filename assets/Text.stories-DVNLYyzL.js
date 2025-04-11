var _a, _b, _c, _d, _e, _f;
import { j as jsxRuntimeExports } from "./index-BonoolKb.js";
import { T as Text, a as Box } from "./index-CAHOwpYa.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./index-CVqyR_EW.js";
import "./index-XyBrGLi6.js";
import "./polished.esm-Be2v7kFA.js";
const Text_stories = {
  title: "Typography/Text",
  component: Text,
  args: {
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatem unde sequi debitis voluptatum, impedit iusto sit veniam soluta. Illo magnam non reiciendis quis tempore repellat beatae veritatis quibusdam eaque?"
  },
  argTypes: {
    size: {
      type: "string",
      description: "sm | lg | xxs | xs | md | xl | 2xl | 4xl | 5xl | 6xl | 7xl | 8xl | 9xl",
      options: ["sm", "lg", "xxs", "xs", "md", "xl", "2xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"],
      control: {
        type: "select"
      }
    }
  },
  decorators: [(Story) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: Story() });
  }]
};
const Primary = {
  args: {
    size: "4xl"
  }
};
const CustomTag = {
  args: {
    as: "strong",
    size: "xl",
    children: "Lorem ipsum dolor"
  },
  parameters: {
    docs: {
      description: {
        story: "Por padrão o text sempre será um `p`, mas podemos alterar isso com a propriedade `as`"
      }
    }
  }
};
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...(_a = Primary.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  args: {\n    size: "4xl"\n  }\n}',
      ...(_c = (_b = Primary.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
CustomTag.parameters = {
  ...CustomTag.parameters,
  docs: {
    ...(_d = CustomTag.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  args: {\n    as: "strong",\n    size: "xl",\n    children: "Lorem ipsum dolor"\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "Por padrão o text sempre será um `p`, mas podemos alterar isso com a propriedade `as`"\n      }\n    }\n  }\n}',
      ...(_f = (_e = CustomTag.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["Primary", "CustomTag"];
export {
  CustomTag,
  Primary,
  __namedExportsOrder,
  Text_stories as default
};
