var _a, _b, _c;
import { j as jsxRuntimeExports } from "./index-BonoolKb.js";
import { b as Button, a as Box, C as Card, H as Heading, T as Text, I as Input } from "./index-CAHOwpYa.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./index-CVqyR_EW.js";
import "./index-XyBrGLi6.js";
import "./polished.esm-Be2v7kFA.js";
const Card_stories = {
  title: "Data Display/Card",
  component: Button,
  args: {
    children: "Enviar"
  },
  decorators: [(Story) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card.Root, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card.Header, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { size: "xl", children: "Lorem ipsum dolor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { size: "sm", children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quos fugit adipisci, dolorem, vitae placeat distinctio illum cumque similique quis enim nulla nemo excepturi temporibus cum fugiat magnam aut sapiente?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card.Content, { style: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "lorem ipsum dolor" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card.Footer, { children: Story() })
    ] }) });
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
  Card_stories as default
};
