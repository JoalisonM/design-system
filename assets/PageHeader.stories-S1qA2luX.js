var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { j as jsxRuntimeExports } from "./index-BonoolKb.js";
import { P as PageHeader, a as Box, b as Button, T as Text } from "./index-CAHOwpYa.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./index-CVqyR_EW.js";
import "./index-XyBrGLi6.js";
import "./polished.esm-Be2v7kFA.js";
const PageHeader_stories = {
  title: "Navigation/PageHeader",
  component: PageHeader,
  args: {
    title: "Lorem Ipsum Dolor"
  },
  decorators: [(Story) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: Story() });
  }]
};
const Primary = {};
const WithSubTitle = {
  args: {
    subTitle: "consectetur adipiscing"
  }
};
const WithButtons = {
  args: {
    buttons: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { children: "Test" }) })
  }
};
const WithContent = {
  args: {
    subTitle: "consectetur adipiscing",
    buttons: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { children: "Test" }) }),
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { size: "sm", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, reiciendis rem nesciunt unde suscipit perspiciatis facilis repellendus sunt nulla sit in possimus ullam libero quis expedita hic non, fugiat quidem." }) })
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
WithSubTitle.parameters = {
  ...WithSubTitle.parameters,
  docs: {
    ...(_d = WithSubTitle.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  args: {\n    subTitle: "consectetur adipiscing"\n  }\n}',
      ...(_f = (_e = WithSubTitle.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
WithButtons.parameters = {
  ...WithButtons.parameters,
  docs: {
    ...(_g = WithButtons.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  args: {\n    buttons: <>\n                <Button>Test</Button>\n            </>\n  }\n}",
      ...(_i = (_h = WithButtons.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
WithContent.parameters = {
  ...WithContent.parameters,
  docs: {
    ...(_j = WithContent.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  args: {\n    subTitle: "consectetur adipiscing",\n    buttons: <>\n                <Button>Test</Button>\n            </>,\n    children: <>\n                <Text size="sm">\n                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,\n                    reiciendis rem nesciunt unde suscipit perspiciatis facilis repellendus\n                    sunt nulla sit in possimus ullam libero quis expedita hic non, fugiat\n                    quidem.\n                </Text>\n            </>\n  }\n}',
      ...(_l = (_k = WithContent.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["Primary", "WithSubTitle", "WithButtons", "WithContent"];
export {
  Primary,
  WithButtons,
  WithContent,
  WithSubTitle,
  __namedExportsOrder,
  PageHeader_stories as default
};
