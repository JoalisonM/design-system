var _a, _b, _c;
import { j as jsxRuntimeExports } from "./_baseUniq-15kV4T39.js";
import { D as Drawer, a as Box, b as Button, d as Select } from "./index-CwmuUYRK.js";
import "./index-Bd5kABF7.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-DHnkxYnf.js";
import "./debounce-DbD7Aq5F.js";
const { Channel } = __STORYBOOK_MODULE_CHANNELS__;
const { global } = __STORYBOOK_MODULE_GLOBAL__;
const { logger } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
const { STORY_RENDERED, UPDATE_STORY_ARGS, RESET_STORY_ARGS, UPDATE_GLOBALS, FORCE_RE_RENDER } = __STORYBOOK_MODULE_CORE_EVENTS__;
function mockChannel() {
  let transport = { setHandler: () => {
  }, send: () => {
  } };
  return new Channel({ transport });
}
var AddonStore = class {
  constructor() {
    this.getChannel = () => {
      if (!this.channel) {
        let channel = mockChannel();
        return this.setChannel(channel), channel;
      }
      return this.channel;
    };
    this.getServerChannel = () => {
      if (!this.serverChannel) throw new Error("Accessing non-existent serverChannel");
      return this.serverChannel;
    };
    this.ready = () => this.promise;
    this.hasChannel = () => !!this.channel;
    this.hasServerChannel = () => !!this.serverChannel;
    this.setChannel = (channel) => {
      this.channel = channel, this.resolve();
    };
    this.setServerChannel = (channel) => {
      this.serverChannel = channel;
    };
    this.promise = new Promise((res) => {
      this.resolve = () => res(this.getChannel());
    });
  }
}, KEY = "__STORYBOOK_ADDONS_PREVIEW";
function getAddonsStore() {
  return global[KEY] || (global[KEY] = new AddonStore()), global[KEY];
}
var addons = getAddonsStore();
var areDepsEqual = (deps, nextDeps) => deps.length === nextDeps.length && deps.every((dep, i) => dep === nextDeps[i]), invalidHooksError = () => new Error("Storybook preview hooks can only be called inside decorators and story functions.");
function getHooksContextOrNull() {
  return global.STORYBOOK_HOOKS_CONTEXT || null;
}
function getHooksContextOrThrow() {
  let hooks = getHooksContextOrNull();
  if (hooks == null) throw invalidHooksError();
  return hooks;
}
function useHook(name, callback, deps) {
  let hooks = getHooksContextOrThrow();
  if (hooks.currentPhase === "MOUNT") {
    deps != null && !Array.isArray(deps) && logger.warn(`${name} received a final argument that is not an array (instead, received ${deps}). When specified, the final argument must be an array.`);
    let hook = { name, deps };
    return hooks.currentHooks.push(hook), callback(hook), hook;
  }
  if (hooks.currentPhase === "UPDATE") {
    let hook = hooks.getNextHook();
    if (hook == null) throw new Error("Rendered more hooks than during the previous render.");
    return hook.name !== name && logger.warn(`Storybook has detected a change in the order of Hooks${hooks.currentDecoratorName ? ` called by ${hooks.currentDecoratorName}` : ""}. This will lead to bugs and errors if not fixed.`), deps != null && hook.deps == null && logger.warn(`${name} received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.`), deps != null && hook.deps != null && deps.length !== hook.deps.length && logger.warn(`The final argument passed to ${name} changed size between renders. The order and size of this array must remain constant.
Previous: ${hook.deps}
Incoming: ${deps}`), (deps == null || hook.deps == null || !areDepsEqual(deps, hook.deps)) && (callback(hook), hook.deps = deps), hook;
  }
  throw invalidHooksError();
}
function useMemoLike(name, nextCreate, deps) {
  let { memoizedState } = useHook(name, (hook) => {
    hook.memoizedState = nextCreate();
  }, deps);
  return memoizedState;
}
function useCallback(callback, deps) {
  return useMemoLike("useCallback", () => callback, deps);
}
function useStoryContext() {
  let { currentContext } = getHooksContextOrThrow();
  if (currentContext == null) throw invalidHooksError();
  return currentContext;
}
function useArgs() {
  let channel = addons.getChannel(), { id: storyId, args } = useStoryContext(), updateArgs = useCallback((updatedArgs) => channel.emit(UPDATE_STORY_ARGS, { storyId, updatedArgs }), [channel, storyId]), resetArgs = useCallback((argNames) => channel.emit(RESET_STORY_ARGS, { storyId, argNames }), [channel, storyId]);
  return [args, updateArgs, resetArgs];
}
const Drawer_stories = {
  title: "Feedback/Drawer",
  component: Drawer,
  args: {
    title: "Lorem Ipsum Dolor",
    open: false,
    onOpenChange: () => {
    }
  },
  decorators: [(Story) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: Story() });
  }]
};
const Primary = () => {
  const [{
    open
  }, updateArgs] = useArgs();
  const toggleDrawer = () => {
    updateArgs({
      open: !open
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: toggleDrawer, children: "Abrir Drawer" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Drawer, { title: "Lorem Ipsum Dolor", open, onOpenChange: toggleDrawer, footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => toggleDrawer(), children: "Cancelar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", children: "Salvar" })
    ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { placeholder: "Selecione o usuário", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Option, { value: "João", children: "João" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Option, { value: "Maria", children: "Maria" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select.Option, { value: "José", children: "José" })
    ] }) })
  ] });
};
Primary.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Primary"
};
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...(_a = Primary.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '() => {\n  const [{\n    open\n  }, updateArgs] = useArgs();\n  const toggleDrawer = () => {\n    updateArgs({\n      open: !open\n    }); // Alterna o estado de "open"\n  };\n  return <>\n      <Button onClick={toggleDrawer}>Abrir Drawer</Button>\n\n      <Drawer title="Lorem Ipsum Dolor" open={open} onOpenChange={toggleDrawer} footer={<>\n            <Button size="sm" variant="ghost" onClick={() => toggleDrawer()}>\n              Cancelar\n            </Button>\n            <Button size="sm">Salvar</Button>\n          </>}>\n        <Select placeholder="Selecione o usuário">\n          <Select.Option value="João">João</Select.Option>\n          <Select.Option value="Maria">Maria</Select.Option>\n          <Select.Option value="José">José</Select.Option>\n        </Select>\n      </Drawer>\n    </>;\n}',
      ...(_c = (_b = Primary.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["Primary"];
export {
  Primary,
  __namedExportsOrder,
  Drawer_stories as default
};
