var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { j as jsxRuntimeExports } from "./_baseUniq-15kV4T39.js";
import { A as Avatar2, a as Box } from "./index-CwmuUYRK.js";
import { r as reactExports } from "./index-Bd5kABF7.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-DHnkxYnf.js";
import "./debounce-DbD7Aq5F.js";
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => {
    return reactExports.createElement(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
      ...props
    })
  );
  Component.displayName = `${iconName}`;
  return Component;
};
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("User", __iconNode);
const Avatar_stories = {
  title: "Data Display/Avatar",
  component: Avatar2.Root,
  args: {
    src: "https://github.com/JoalisonM.png",
    size: 12
  },
  argTypes: {
    size: {
      type: "string",
      description: "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 12 | 16 | 20 | 40 | 64 | 80",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "10", "12", "16", "20", "40", "64", "80"],
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
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar2.Image, { src: "https://github.com/JoalisonM.png" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar2.Fallback, { children: "JM" })
    ] })
  }
};
const Size = {
  args: {
    size: 16,
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar2.Image, { src: "https://github.com/JoalisonM.png" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar2.Fallback, { children: "JM" })
    ] })
  }
};
const WithAvatarFallback = {
  args: {
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar2.Image, { src: void 0 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar2.Fallback, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, {}) })
    ] })
  }
};
const WithWordFallback = {
  args: {
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar2.Image, { src: void 0 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar2.Fallback, { children: "JM" })
    ] })
  }
};
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...(_a = Primary.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  args: {\n    children: <>\n                <Avatar.Image src="https://github.com/JoalisonM.png" />\n                <Avatar.Fallback>JM</Avatar.Fallback>\n            </>\n  }\n}',
      ...(_c = (_b = Primary.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Size.parameters = {
  ...Size.parameters,
  docs: {
    ...(_d = Size.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  args: {\n    size: 16,\n    children: <>\n                <Avatar.Image src="https://github.com/JoalisonM.png" />\n                <Avatar.Fallback>JM</Avatar.Fallback>\n            </>\n  }\n}',
      ...(_f = (_e = Size.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
WithAvatarFallback.parameters = {
  ...WithAvatarFallback.parameters,
  docs: {
    ...(_g = WithAvatarFallback.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  args: {\n    children: <>\n                <Avatar.Image src={undefined} />\n                <Avatar.Fallback>\n                    <User />\n                </Avatar.Fallback>\n            </>\n  }\n}",
      ...(_i = (_h = WithAvatarFallback.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
WithWordFallback.parameters = {
  ...WithWordFallback.parameters,
  docs: {
    ...(_j = WithWordFallback.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  args: {\n    children: <>\n                <Avatar.Image src={undefined} />\n                <Avatar.Fallback>JM</Avatar.Fallback>\n            </>\n  }\n}",
      ...(_l = (_k = WithWordFallback.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["Primary", "Size", "WithAvatarFallback", "WithWordFallback"];
export {
  Primary,
  Size,
  WithAvatarFallback,
  WithWordFallback,
  __namedExportsOrder,
  Avatar_stories as default
};
