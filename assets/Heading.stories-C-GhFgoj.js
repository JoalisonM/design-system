var _a, _b, _c, _d, _e, _f;
import { j as jsxRuntimeExports } from "./index-BonoolKb.js";
import { H as Heading, a as Box } from "./index-CAHOwpYa.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./index-CVqyR_EW.js";
import "./index-XyBrGLi6.js";
import "./polished.esm-Be2v7kFA.js";
const Heading_stories = {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Lorem ipsum dolor"
  }
};
const Primary = {
  args: {
    size: "xl"
  },
  argTypes: {
    size: {
      type: "string",
      description: "sm | lg | xxs | xs | md | xl | 2xl | 4xl | 5xl | 6xl | 7xl | 8xl | 9xl",
      options: ["sm", "lg", "xxs", "xs", "md", "xl", "2xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"],
      control: {
        type: "select"
      }
    },
    as: {
      type: "string",
      description: "h1 | h2 | h3 | h4 | 45 | h6",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: {
        type: "select"
      }
    }
  },
  decorators: [(Story) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: Story() });
  }]
};
const CustomTag = {
  args: {
    as: "h1",
    size: "4xl",
    children: "Lorem ipsum dolor"
  },
  parameters: {
    docs: {
      description: {
        story: "Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`"
      }
    }
  }
};
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...(_a = Primary.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  args: {\n    size: "xl"\n  },\n  argTypes: {\n    size: {\n      type: "string",\n      description: "sm | lg | xxs | xs | md | xl | 2xl | 4xl | 5xl | 6xl | 7xl | 8xl | 9xl",\n      options: ["sm", "lg", "xxs", "xs", "md", "xl", "2xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"],\n      control: {\n        type: "select"\n      }\n    },\n    as: {\n      type: "string",\n      description: "h1 | h2 | h3 | h4 | 45 | h6",\n      options: ["h1", "h2", "h3", "h4", "h5", "h6"],\n      control: {\n        type: "select"\n      }\n    }\n  },\n  decorators: [Story => {\n    return <Box>{Story()}</Box>;\n  }]\n}',
      ...(_c = (_b = Primary.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
CustomTag.parameters = {
  ...CustomTag.parameters,
  docs: {
    ...(_d = CustomTag.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  args: {\n    as: "h1",\n    size: "4xl",\n    children: "Lorem ipsum dolor"\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`"\n      }\n    }\n  }\n}',
      ...(_f = (_e = CustomTag.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["Primary", "CustomTag"];
export {
  CustomTag,
  Primary,
  __namedExportsOrder,
  Heading_stories as default
};
