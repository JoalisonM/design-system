const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DocsRenderer-CFRXHY34-BJl2cu0S.js","assets/iframe-Diheixuq.js","assets/index-XyBrGLi6.js","assets/_commonjsHelpers-DWwsNxpa.js","assets/index-Dt0lL7yK.js","assets/index-BonoolKb.js","assets/index-CVqyR_EW.js","assets/index-XG6mIJUL.js","assets/index-BdOSk9or.js","assets/react-18-BJuFiAvZ.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./iframe-Diheixuq.js";
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var preview_exports = {};
__export(preview_exports, { parameters: () => parameters });
var excludeTags = Object.entries(globalThis.TAGS_OPTIONS ?? {}).reduce((acc, entry) => {
  let [tag, option] = entry;
  return option.excludeFromDocsStories && (acc[tag] = true), acc;
}, {}), parameters = { docs: { renderer: async () => {
  let { DocsRenderer } = await __vitePreload(() => import("./DocsRenderer-CFRXHY34-BJl2cu0S.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]) : void 0);
  return new DocsRenderer();
}, stories: { filter: (story) => {
  var _a;
  return (story.tags || []).filter((tag) => excludeTags[tag]).length === 0 && !((_a = story.parameters.docs) == null ? void 0 : _a.disable);
} } } };
export {
  parameters
};
