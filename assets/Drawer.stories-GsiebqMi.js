import{j as o}from"./jsx-runtime-RAT1XdAw.js";import{D as S,o as f,t as E,B as v,b as c,d as i}from"./theme-BoZTW-WW.js";import"./index-DhXULflY.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BBFzS1Xs.js";const{Channel:w}=__STORYBOOK_MODULE_CHANNELS__,{global:h}=__STORYBOOK_MODULE_GLOBAL__,{logger:l}=__STORYBOOK_MODULE_CLIENT_LOGGER__,{STORY_RENDERED:I,UPDATE_STORY_ARGS:D,RESET_STORY_ARGS:A,UPDATE_GLOBALS:J,FORCE_RE_RENDER:K}=__STORYBOOK_MODULE_CORE_EVENTS__;function k(){let e={setHandler:()=>{},send:()=>{}};return new w({transport:e})}var x=class{constructor(){this.getChannel=()=>{if(!this.channel){let e=k();return this.setChannel(e),e}return this.channel},this.getServerChannel=()=>{if(!this.serverChannel)throw new Error("Accessing non-existent serverChannel");return this.serverChannel},this.ready=()=>this.promise,this.hasChannel=()=>!!this.channel,this.hasServerChannel=()=>!!this.serverChannel,this.setChannel=e=>{this.channel=e,this.resolve()},this.setServerChannel=e=>{this.serverChannel=e},this.promise=new Promise(e=>{this.resolve=()=>e(this.getChannel())})}},d="__STORYBOOK_ADDONS_PREVIEW";function R(){return h[d]||(h[d]=new x),h[d]}var T=R(),y=(e,t)=>e.length===t.length&&e.every((n,s)=>n===t[s]),g=()=>new Error("Storybook preview hooks can only be called inside decorators and story functions.");function B(){return h.STORYBOOK_HOOKS_CONTEXT||null}function C(){let e=B();if(e==null)throw g();return e}function b(e,t,n){let s=C();if(s.currentPhase==="MOUNT"){n!=null&&!Array.isArray(n)&&l.warn(`${e} received a final argument that is not an array (instead, received ${n}). When specified, the final argument must be an array.`);let r={name:e,deps:n};return s.currentHooks.push(r),t(r),r}if(s.currentPhase==="UPDATE"){let r=s.getNextHook();if(r==null)throw new Error("Rendered more hooks than during the previous render.");return r.name!==e&&l.warn(`Storybook has detected a change in the order of Hooks${s.currentDecoratorName?` called by ${s.currentDecoratorName}`:""}. This will lead to bugs and errors if not fixed.`),n!=null&&r.deps==null&&l.warn(`${e} received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.`),n!=null&&r.deps!=null&&n.length!==r.deps.length&&l.warn(`The final argument passed to ${e} changed size between renders. The order and size of this array must remain constant.
Previous: ${r.deps}
Incoming: ${n}`),(n==null||r.deps==null||!y(n,r.deps))&&(t(r),r.deps=n),r}throw g()}function L(e,t,n){let{memoizedState:s}=b(e,r=>{r.memoizedState=t()},n);return s}function m(e,t){return L("useCallback",()=>e,t)}function j(){let{currentContext:e}=C();if(e==null)throw g();return e}function N(){let e=T.getChannel(),{id:t,args:n}=j(),s=m(u=>e.emit(D,{storyId:t,updatedArgs:u}),[e,t]),r=m(u=>e.emit(A,{storyId:t,argNames:u}),[e,t]);return[n,s,r]}const U={title:"Feedback/Drawer",component:S,args:{title:"Lorem Ipsum Dolor",open:!1,onOpenChange:()=>{}},decorators:[e=>o.jsx(f,{theme:E,children:o.jsx(v,{children:e()})})]},a=()=>{const[{open:e},t]=N(),n=()=>{t({open:!e})};return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Abrir Drawer"}),o.jsx(S,{title:"Lorem Ipsum Dolor",open:e,onOpenChange:n,footer:o.jsxs(o.Fragment,{children:[o.jsx(c,{size:"sm",variant:"ghost",onClick:()=>n(),children:"Cancelar"}),o.jsx(c,{size:"sm",children:"Salvar"})]}),children:o.jsxs(i,{placeholder:"Selecione o usuário",children:[o.jsx(i.Option,{value:"João",children:"João"}),o.jsx(i.Option,{value:"Maria",children:"Maria"}),o.jsx(i.Option,{value:"José",children:"José"})]})})]})};a.__docgenInfo={description:"",methods:[],displayName:"Primary"};var p,O,_;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [{
    open
  }, updateArgs] = useArgs();
  const toggleDrawer = () => {
    updateArgs({
      open: !open
    }); // Alterna o estado de "open"
  };
  return <>
      <Button onClick={toggleDrawer}>
        Abrir Drawer
      </Button>

      <Drawer title="Lorem Ipsum Dolor" open={open} onOpenChange={toggleDrawer} footer={<>
            <Button size="sm" variant="ghost" onClick={() => toggleDrawer()}>
              Cancelar
            </Button>
            <Button size="sm">Salvar</Button>
          </>}>
        <Select placeholder="Selecione o usuário">
          <Select.Option value="João">João</Select.Option>
          <Select.Option value="Maria">Maria</Select.Option>
          <Select.Option value="José">José</Select.Option>
        </Select>
      </Drawer>
    </>;
}`,...(_=(O=a.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};const $=["Primary"];export{a as Primary,$ as __namedExportsOrder,U as default};
