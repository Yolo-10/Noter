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
import hr from "./hr.svg";
import img from "./img.svg";
import upload from "./upload.svg";
import submit from "./submit.svg";
import save from "./save.svg";
import left from "./left.svg";
import split from "./split.svg";
import right from "./right.svg";

export const svgLf = [
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
    svgIcon: hr,
    svgIntro: "分割",
    lfChar: "\n\n---\n",
    rtChar: "",
    str: "",
  },
  {
    svgIcon: quote,
    svgIntro: "引用",
    lfChar: "\n> ",
    rtChar: "",
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
  {
    svgIcon: img,
    svgIntro: "图片",
    lfChar: "![](",
    rtChar: ")",
    str: "https://example.com/your-image.png",
  },
];

export const svgCe = [
  {
    svgIcon: upload,
    svgIntro: "上传",
  },
  {
    svgIcon: save,
    svgIntro: "保存",
  },
  {
    svgIcon: submit,
    svgIntro: "提交",
  },
];

export const svgRt = [
  {
    svgIcon: left,
    svgIntro: "左屏",
  },
  {
    svgIcon: split,
    svgIntro: "分屏",
  },
  {
    svgIcon: right,
    svgIntro: "右屏",
  },
];
