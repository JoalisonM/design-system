const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DocsRenderer-CFRXHY34-Bk_3jHhK.js","assets/iframe-BKMQZX8F.js","assets/index-Bd5kABF7.js","assets/_commonjsHelpers-CcAunmGO.js","assets/index-BaPxJf4u.js","assets/_baseUniq-15kV4T39.js","assets/index-DHnkxYnf.js","assets/index-DJdTjTnu.js","assets/_getPrototype-Yz62ep6F.js","assets/index-B6TI3DWQ.js","assets/index-BdOSk9or.js","assets/react-16-U2LGHUfW.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./iframe-BKMQZX8F.js";
import "../sb-preview/runtime.js";
const { global } = __STORYBOOK_MODULE_GLOBAL__;
var excludeTags = Object.entries(global.TAGS_OPTIONS ?? {}).reduce((acc, entry) => {
  let [tag, option] = entry;
  return option.excludeFromDocsStories && (acc[tag] = true), acc;
}, {}), parameters = { docs: { renderer: async () => {
  let { DocsRenderer } = await __vitePreload(() => import("./DocsRenderer-CFRXHY34-Bk_3jHhK.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]) : void 0);
  return new DocsRenderer();
}, stories: { filter: (story) => {
  var _a;
  return (story.tags || []).filter((tag) => excludeTags[tag]).length === 0 && !((_a = story.parameters.docs) == null ? void 0 : _a.disable);
} } } };
export {
  parameters
};
