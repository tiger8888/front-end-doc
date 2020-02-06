import doc from './README.md'

export default { 
  title: 'JavaScript/ES6/箭头函数(Arrow Function)',
  parameters: {
    componentSubtitle: '',
    notes: doc,
    previewTabs: {
      'canvas': {hidden: false}, // 交互Demo
      'storybook/docs/panel': {hidden: true},
    }
  }
}

export const Main = () => `
<div>
  
</div>
`

Main.story = {
  name: '基础用法'
}