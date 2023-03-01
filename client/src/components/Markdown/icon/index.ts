import bold from "./bold.svg";
import codeblock from "./codeblock.svg";
import italic from "./italic.svg";
import link from "./link.svg";
import ordList from "./ordList.svg";
import quote from "./quote.svg";
import strThrough from "./strThrough.svg";
import title from "./title.svg";
import unOrdList from "./unOrdList.svg";
import todo from "./todo.svg";

// import img from "./img.svg";
// import reCall from "./reCall.svg";
// import save from "./save.svg";
// import split from "./split.svg";

// export const svgLfIcons = [
//   bold,
//   italic,
//   title,
//   strThrough,
//   ordList,
//   unOrdList,
//   todo,
//   quote,
//   codeblock,
//   img,
//   link,
//   reCall,
//   save,
// ];
// export const svgLfText = [
//   "加粗",
//   "斜体",
//   "标题",
//   "删除线",
//   "有序",
//   "无序",
//   "代办",
//   "引用",
//   "代码块",
//   "图片",
//   "链接",
//   "回退",
//   "保存",
// ];
// export const svgRtIcons = [split];
// export const svgRtText = ["分屏"];

export const svgS = [
  {
    svgIcon: bold,
    svgIntro: "加粗",
    lfChar: "**",
    rtChar: "**",
    str: "加粗样式",
  },
  {
    svgIcon: italic,
    svgIntro: "斜体",
    lfChar: "***",
    rtChar: "***",
    str: "斜体样式",
  },
  {
    svgIcon: strThrough,
    svgIntro: "删除线",
    lfChar: "~~",
    rtChar: "~~",
    str: "删除线样式",
  },
  {
    svgIcon: title,
    svgIntro: "标题",
    lfChar: "## ",
    rtChar: "",
    str: "标题",
  },
  {
    svgIcon: ordList,
    svgIntro: "有序",
    lfChar: "\n1. ",
    rtChar: "",
    str: "List item",
  },
  {
    svgIcon: unOrdList,
    svgIntro: "无序",
    lfChar: "\n- ",
    rtChar: "",
    str: "List item",
  },
  {
    svgIcon: todo,
    svgIntro: "代办",
    lfChar: "\n- [ ] ",
    rtChar: "",
    str: "List item",
  },
  {
    svgIcon: quote,
    svgIntro: "引用",
    lfChar: "> ",
    rtChar: "\n",
    str: "这里是引用",
  },
  {
    svgIcon: codeblock,
    svgIntro: "代码块",
    lfChar: "`",
    rtChar: "`",
    str: "在这里插入代码片",
  },
  {
    svgIcon: link,
    svgIntro: "链接",
    lfChar: "[",
    rtChar: "](添加链接url)",
    str: "添加链接描述",
  },
];
