"use strict";(self.webpackChunkreact_ui=self.webpackChunkreact_ui||[]).push([[747],{"./src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Color:()=>Color,DisabledButton:()=>DisabledButton,IconButton:()=>IconButton,Size:()=>Size,__namedExportsOrder:()=>__namedExportsOrder,controls:()=>controls,default:()=>Button_stories});var emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),chunk_OPEUWD42=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs"),index_esm=__webpack_require__("./node_modules/react-icons/ai/index.esm.js"),Box=__webpack_require__("./src/components/Box/index.ts"),Stack=__webpack_require__("./src/components/Stack/index.ts"),Button=__webpack_require__("./src/components/Button/Button.tsx");const Button_stories={title:"components/Button",component:Button.z},Template=args=>(0,emotion_react_browser_esm.tZ)(Button.z,args);Template.displayName="Template";const controls=Template.bind({});controls.args={children:"button",onClick:(0,chunk_OPEUWD42.aD)("click"),variant:"solid"};const variants=["outlined","soft","solid","text"],colors=["neutral","primary","danger","warning"],Color=()=>(0,emotion_react_browser_esm.tZ)(Stack.K,{direction:"column",spacing:2},colors.map((color=>(0,emotion_react_browser_esm.tZ)(Stack.K,{key:color,direction:"row",spacing:2},variants.map((variant=>(0,emotion_react_browser_esm.tZ)(Button.z,{key:variant,color,variant},`${color}-${variant}`)))))));Color.displayName="Color";const DisabledButton=()=>(0,emotion_react_browser_esm.tZ)(Stack.K,{direction:"column",spacing:2},colors.map((color=>(0,emotion_react_browser_esm.tZ)(Stack.K,{key:color,direction:"row",spacing:2},variants.map((variant=>(0,emotion_react_browser_esm.tZ)(Button.z,{key:variant,color,variant,disabled:!0},`${color}-${variant}`)))))));DisabledButton.displayName="DisabledButton";const Size=()=>{const theme=(0,emotion_element_c39617d8_browser_esm.u)();return(0,emotion_react_browser_esm.tZ)(Box.x,{css:(0,emotion_react_browser_esm.iv)("& button{margin:",theme.spacing.base,"px;}","")},(0,emotion_react_browser_esm.tZ)(Button.z,{size:"lg"},"lg"),(0,emotion_react_browser_esm.tZ)(Button.z,{size:"md"},"md"),(0,emotion_react_browser_esm.tZ)(Button.z,{size:"sm"},"sm"))};Size.displayName="Size";const IconButton={args:{children:(0,emotion_react_browser_esm.tZ)(index_esm.oHP,null)}};controls.parameters={...controls.parameters,docs:{...controls.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...controls.parameters?.docs?.source}}},Color.parameters={...Color.parameters,docs:{...Color.parameters?.docs,source:{originalSource:'() => {\n  return <Stack direction="column" spacing={2}>\n      {colors.map(color => <Stack key={color} direction="row" spacing={2}>\n          {variants.map(variant => <Button key={variant} color={color} variant={variant}>\n              {`${color}-${variant}`}\n            </Button>)}\n        </Stack>)}\n    </Stack>;\n}',...Color.parameters?.docs?.source}}},DisabledButton.parameters={...DisabledButton.parameters,docs:{...DisabledButton.parameters?.docs,source:{originalSource:'() => {\n  return <Stack direction="column" spacing={2}>\n      {colors.map(color => <Stack key={color} direction="row" spacing={2}>\n          {variants.map(variant => <Button key={variant} color={color} variant={variant} disabled>\n              {`${color}-${variant}`}\n            </Button>)}\n        </Stack>)}\n    </Stack>;\n}',...DisabledButton.parameters?.docs?.source}}},Size.parameters={...Size.parameters,docs:{...Size.parameters?.docs,source:{originalSource:'() => {\n  const theme = useTheme();\n  return <Box css={css`\n        & button {\n          margin: ${theme.spacing.base}px;\n        }\n      `}>\n      <Button size="lg">lg</Button>\n      <Button size="md">md</Button>\n      <Button size="sm">sm</Button>\n    </Box>;\n}',...Size.parameters?.docs?.source}}},IconButton.parameters={...IconButton.parameters,docs:{...IconButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <AiOutlineClose />\n  }\n}",...IconButton.parameters?.docs?.source}}};const __namedExportsOrder=["controls","Color","DisabledButton","Size","IconButton"]},"./src/components/Box/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Box});var _emotion_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Box=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)((function Box({children,css:_css,...props},ref){return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.tZ)("div",_extends({css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(_css,";",""),ref},props),children)}));try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"SerializedStyles"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Box/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/components/Box/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Box/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>_Box__WEBPACK_IMPORTED_MODULE_0__.x});var _Box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Box/Box.tsx")}}]);