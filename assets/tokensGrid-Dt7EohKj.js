import { j as jsxRuntimeExports } from "./_baseUniq-15kV4T39.js";
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
TokensGrid.__docgenInfo = { "description": "", "methods": [], "displayName": "TokensGrid", "props": { "tokens": { "required": true, "tsType": { "name": "Record", "elements": [{ "name": "string" }, { "name": "string" }], "raw": "Record<string, string>" }, "description": "" }, "hasRemValue": { "required": false, "tsType": { "name": "boolean" }, "description": "", "defaultValue": { "value": "false", "computed": false } } } };
export {
  TokensGrid as T
};
