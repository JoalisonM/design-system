import { o as ot, g as defaultTheme } from "./index-CAHOwpYa.js";
import { d as dedent } from "./index-BdOSk9or.js";
import { R as React } from "./index-XyBrGLi6.js";
import "./index-BonoolKb.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./index-CVqyR_EW.js";
import "./polished.esm-Be2v7kFA.js";
const { useParameter, addons, useEffect, useMemo, definePreview } = __STORYBOOK_MODULE_PREVIEW_API__;
const { deprecate } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var preview_exports = {};
__export(preview_exports, { initialGlobals: () => initialGlobals });
var PARAM_KEY = "themes", ADDON_ID = `storybook/${PARAM_KEY}`, GLOBAL_KEY = "theme";
var DEFAULT_THEME_PARAMETERS = {}, THEMING_EVENTS = { REGISTER_THEMES: `${ADDON_ID}/REGISTER_THEMES` };
var initialGlobals = { [GLOBAL_KEY]: "" };
var helpers_exports = {};
__export(helpers_exports, { initializeThemeState: () => initializeThemeState, pluckThemeFromContext: () => pluckThemeFromContext, useThemeParameters: () => useThemeParameters });
function pluckThemeFromContext({ globals }) {
  return globals[GLOBAL_KEY] || "";
}
function useThemeParameters(context) {
  return deprecate(dedent`The useThemeParameters function is deprecated. Please access parameters via the context directly instead e.g.
    - const { themeOverride } = context.parameters.themes ?? {};
    `), context ? context.parameters[PARAM_KEY] ?? DEFAULT_THEME_PARAMETERS : useParameter(PARAM_KEY, DEFAULT_THEME_PARAMETERS);
}
function initializeThemeState(themeNames, defaultTheme2) {
  addons.getChannel().emit(THEMING_EVENTS.REGISTER_THEMES, { defaultTheme: defaultTheme2, themes: themeNames });
}
var pluckThemeFromKeyPairTuple = ([_, themeConfig]) => themeConfig, withThemeFromJSXProvider = ({ Provider, GlobalStyles, defaultTheme: defaultTheme2, themes = {} }) => {
  let themeNames = Object.keys(themes), initialTheme = defaultTheme2;
  return initializeThemeState(themeNames, initialTheme), (storyFn, context) => {
    let { themeOverride } = context.parameters[PARAM_KEY] ?? {}, selected = pluckThemeFromContext(context), theme = useMemo(() => {
      let selectedThemeName = themeOverride || selected || initialTheme, pairs = Object.entries(themes);
      return pairs.length === 1 ? pluckThemeFromKeyPairTuple(pairs[0]) : themes[selectedThemeName];
    }, [selected, themeOverride]);
    return Provider ? React.createElement(Provider, { theme }, GlobalStyles && React.createElement(GlobalStyles, null), storyFn()) : React.createElement(React.Fragment, null, GlobalStyles && React.createElement(GlobalStyles, null), storyFn());
  };
};
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: "dark"
    }
  },
  tags: ["autodocs", "autodocs"],
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: defaultTheme
      },
      defaultTheme: "light",
      Provider: ot
    })
  ]
};
export {
  preview as default
};
