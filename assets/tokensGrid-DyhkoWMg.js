import { j as jsxRuntimeExports } from "./index-BonoolKb.js";
function TokensGrid({ tokens, hasRemValue = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "tokens-grid", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Value" }),
      hasRemValue && /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Pixels" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: Object.entries(tokens).map(([key, value]) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: key }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: value }),
        hasRemValue && /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
          Number(value.replace("rem", "")) * 16,
          "px"
        ] })
      ] }, key);
    }) })
  ] });
}
try {
  TokensGrid.displayName = "TokensGrid";
  TokensGrid.__docgenInfo = { "description": "", "displayName": "TokensGrid", "props": { "tokens": { "defaultValue": null, "description": "", "name": "tokens", "required": true, "type": { "name": "Record<string, string>" } }, "hasRemValue": { "defaultValue": { value: "false" }, "description": "", "name": "hasRemValue", "required": false, "type": { "name": "boolean" } } } };
} catch (__react_docgen_typescript_loader_error) {
}
export {
  TokensGrid as T
};
