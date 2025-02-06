import{j as e}from"./polished.esm-DNUF9YvO.js";import{H as p,o as m,t as d,a as c}from"./theme-DorejDH4.js";import"./index-DhXULflY.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BBFzS1Xs.js";const z={title:"Typography/Heading",component:p,args:{children:"Lorem ipsum dolor"}},r={args:{size:"xl"},argTypes:{size:{type:"string",description:"sm | lg | xxs | xs | md | xl | 2xl | 4xl | 5xl | 6xl | 7xl | 8xl | 9xl",options:["sm","lg","xxs","xs","md","xl","2xl","4xl","5xl","6xl","7xl","8xl","9xl"],control:{type:"select"}},as:{type:"string",description:"h1 | h2 | h3 | h4 | 45 | h6",options:["h1","h2","h3","h4","h5","h6"],control:{type:"select"}}},decorators:[x=>e.jsx(m,{theme:d,children:e.jsx(c,{children:x()})})]},s={args:{as:"h1",size:"4xl",children:"Lorem ipsum dolor"},parameters:{docs:{description:{story:"Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`"}}}};var o,n,t;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    size: 'xl'
  },
  argTypes: {
    size: {
      type: 'string',
      description: 'sm | lg | xxs | xs | md | xl | 2xl | 4xl | 5xl | 6xl | 7xl | 8xl | 9xl',
      options: ['sm', 'lg', 'xxs', 'xs', 'md', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'select'
      }
    },
    as: {
      type: 'string',
      description: 'h1 | h2 | h3 | h4 | 45 | h6',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {
        type: 'select'
      }
    }
  },
  decorators: [Story => {
    return <ThemeProvider theme={theme}>
          <Box>
            {Story()}
          </Box>
        </ThemeProvider>;
  }]
}`,...(t=(n=r.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var a,l,i;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    as: 'h1',
    size: '4xl',
    children: 'Lorem ipsum dolor'
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão o heading sempre será um \`h2\`, mas podemos alterar isso com a propriedade \`as\`'
      }
    }
  }
}`,...(i=(l=s.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const P=["Primary","CustomTag"];export{s as CustomTag,r as Primary,P as __namedExportsOrder,z as default};
