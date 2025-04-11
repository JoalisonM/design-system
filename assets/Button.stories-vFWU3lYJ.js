var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A;
import { j as jsxRuntimeExports } from "./index-BonoolKb.js";
import { b as Button, a as Box } from "./index-CAHOwpYa.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./index-CVqyR_EW.js";
import "./index-XyBrGLi6.js";
import "./polished.esm-Be2v7kFA.js";
const Button_stories = {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Enviar",
    variant: "default",
    size: "default",
    disabled: false
  },
  argTypes: {
    variant: {
      type: "string",
      description: "default | destructive | success | outline | ghost | link",
      options: ["default", "destructive", "success", "outline", "ghost", "link"],
      control: {
        type: "select"
      }
    },
    size: {
      type: "string",
      description: "default | sm | lg | icon",
      options: ["default", "sm", "lg", "icon"],
      control: {
        type: "select"
      }
    },
    onClick: {
      action: "click"
    },
    disabled: {
      control: {
        type: "boolean"
      }
    }
  },
  decorators: [(Story) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: Story() });
  }]
};
const Default = {
  args: {
    size: "default"
  }
};
const Success = {
  args: {
    variant: "success",
    size: "lg"
  }
};
const Destructive = {
  args: {
    variant: "destructive",
    size: "sm"
  }
};
const Ghost = {
  args: {
    variant: "ghost",
    size: "default"
  }
};
const Link = {
  args: {
    variant: "link",
    size: "default"
  }
};
const Outline = {
  args: {
    variant: "outline",
    size: "default"
  }
};
const Disabled = {
  args: {
    variant: "success",
    size: "default",
    disabled: true
  }
};
const Icon = {
  args: {
    children: "J",
    size: "icon"
  }
};
const AsChild = {
  args: {
    asChild: true,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/JoalisonM", target: "_blank", children: "Enviar" }) })
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...(_a = Default.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  args: {\n    size: "default"\n  }\n}',
      ...(_c = (_b = Default.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Success.parameters = {
  ...Success.parameters,
  docs: {
    ...(_d = Success.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  args: {\n    variant: "success",\n    size: "lg"\n  }\n}',
      ...(_f = (_e = Success.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Destructive.parameters = {
  ...Destructive.parameters,
  docs: {
    ...(_g = Destructive.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  args: {\n    variant: "destructive",\n    size: "sm"\n  }\n}',
      ...(_i = (_h = Destructive.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Ghost.parameters = {
  ...Ghost.parameters,
  docs: {
    ...(_j = Ghost.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  args: {\n    variant: "ghost",\n    size: "default"\n  }\n}',
      ...(_l = (_k = Ghost.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Link.parameters = {
  ...Link.parameters,
  docs: {
    ...(_m = Link.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: '{\n  args: {\n    variant: "link",\n    size: "default"\n  }\n}',
      ...(_o = (_n = Link.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
Outline.parameters = {
  ...Outline.parameters,
  docs: {
    ...(_p = Outline.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: '{\n  args: {\n    variant: "outline",\n    size: "default"\n  }\n}',
      ...(_r = (_q = Outline.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...(_s = Disabled.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: '{\n  args: {\n    variant: "success",\n    size: "default",\n    disabled: true\n  }\n}',
      ...(_u = (_t = Disabled.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
Icon.parameters = {
  ...Icon.parameters,
  docs: {
    ...(_v = Icon.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: '{\n  args: {\n    children: "J",\n    size: "icon"\n  }\n}',
      ...(_x = (_w = Icon.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
AsChild.parameters = {
  ...AsChild.parameters,
  docs: {
    ...(_y = AsChild.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: '{\n  args: {\n    asChild: true,\n    children: <>\n        <a href="https://github.com/JoalisonM" target="_blank">\n          Enviar\n        </a>\n      </>\n  }\n}',
      ...(_A = (_z = AsChild.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
const __namedExportsOrder = ["Default", "Success", "Destructive", "Ghost", "Link", "Outline", "Disabled", "Icon", "AsChild"];
export {
  AsChild,
  Default,
  Destructive,
  Disabled,
  Ghost,
  Icon,
  Link,
  Outline,
  Success,
  __namedExportsOrder,
  Button_stories as default
};
