# Email Editor

Email Editor is a React component that allows users to create emails using a drag-and-drop interface.

## Live Demo

http://emaileditordnd.netlify.app/

## Installation

To use Email Editor, simply run the following command:

```bash
npm i @editex/react-email-editor
```

## Usage/Examples

To use Email Editor in your React project, import the component and include it in your JSX code:

### index.js

```javascript
import EmailEditor from "zgm-email-editor";
import { useEffect, useRef, useState } from "react";

function MyEmailEditor() {
  const emailEditorRef = useRef(null);
  const [emailData, setEmailData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setEmailData([]);
    }, 1000);
  }, []);

  const exportHtml = () => {
    emailEditorRef.current.exportHtml();
  };

  const showEmailData = () => {
    console.log(emailEditorRef.current.blockList);
  };

  return (
    <div class="page">
      <div className="page-header">
        <button onClick={exportHtml}>Export HTML</button>
        <button onClick={showEmailData}>Show email data</button>
      </div>
      <div className="page-content">{emailData ? <EmailEditor ref={emailEditorRef} defaultBlockList={emailData} /> : <>Loading....</>}</div>
    </div>
  );
}
```

### index.js

```javascript
import EmailEditor from "@editex/react-email-editor";
import { useEffect, useRef, useState } from "react";

function MyEmailEditor() {
  const emailEditorRef = useRef(null);
  const [emailData, setEmailData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setEmailData([]);
    }, 1000);
  }, []);

  const exportHtml = () => {
    const html = emailEditorEl.current.exportHtml();
    const blob = new Blob([html], { type: "text/html" });
    const a = document.createElement("a");
    a.download = "email.html";
    a.href = URL.createObjectURL(blob);
    a.click();
  };

  const showEmailData = () => {
    console.log(emailEditorRef.current.blockList);
  };

  return (
    <div class="page">
      <div className="page-header">
        <button onClick={exportHtml}>Export HTML</button>
        <button onClick={showEmailData}>Show email data</button>
      </div>
      <div className="page-content">{emailData ? <EmailEditor ref={emailEditorRef} defaultBlockList={emailData} /> : <>Loading....</>}</div>
    </div>
  );
}
```

### index.css

```css
.page {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.page-header {
  padding: 8px 12px;
  background-color: #374151;
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 10px;
}

.page-content {
  flex: 1;
  overflow: auto;
}
```

## Localization

This Email Editor component has built-in Chinese and English.

This project supports localization for multiple languages. Currently, the following languages are supported:

- English(en)
- Chinese(zh)

### Example usage:

```javascript
const MyEmailEditor = () => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (language) => () => {
    setLanguage(language);
  };

  return (
    <>
      <div>
        <span onClick={changeLanguage("en")}>EN</span>/<span onClick={changeLanguage("zh")}>中文</span>
      </div>
      <EmailEditor language={language} />
    </>
  );
};
```

#### en.js

```javascript
const en = {
  drag_block_here: "Drag block here",
  blocks: "Blocks",
  photos: "Photos",
  powered_by_pexels: "Powered by Pexels",
  loading: "Loading...",
  content: "Content",
  body_settings: "Theme Settings",
  pre_header: "Pre-header",
  pre_header_description: "The pre-header is a short summary text that follows the subject line when viewing an email in the inbox.",
  confirm: "Confirm",
  cancel: "Cancel",

  // column block
  column: "Column",
  columns: "Columns",
  column_settings: "Column Settings",
  column_styles: "Column Styles",
  column_delete: "Delete Column",
  column_delete_desc: "Are you sure you want to delete {{count}} extra columns? ",

  // text block
  text: "Text",
  text_content: "This is a text, click to edit text",
  text_settings: "Text Settings",
  text_styles: "Text Styles",
  text_align: "Text Align",

  // heading block
  heading: "Heading",
  heading_content: "This is a heading, click to edit heading",
  heading_settings: "Heading Settings",
  heading_type: "Heading Type",

  // button block
  button: "Button",
  button_settings: "Button Settings",
  button_action: "Button Action",
  button_styles: "Button Styles",
  button_padding: "Button Padding",

  // divider block
  divider: "Divider",
  divider_settings: "Divider Settings",
  divider_type: "Divider Type",
  divider_styles: "Divider Styles",

  // image block
  image: "Image",
  image_action: "Image Action",
  image_url: "Image URL",
  image_alt: "Image Alt",
  image_styles: "Image Styles",
  image_settings: "Image Settings",

  // social link block
  social_link: "Social Link",
  social_link_settings: "Social Link Settings",
  add_social_link: "Add Social Link",
  social_link_size: "Social Link Size",
  social_links: "Social Links",

  // colors
  content_background_color: "Content Background Color",
  background_color: "Background Color",
  text_color: "Text Color",
  email_theme_background_color: "Email Theme Background Color",
  font_color: "Font Color",
  button_color: "Button Color",
  divider_color: "Divider Color",

  //styles
  action_type: "Action Type",
  top: "Top",
  right: "Right",
  left: "Left",
  bottom: "Bottom",
  line_height: "Line Height",
  link: "Link",
  link_url: "Link URL",
  padding_settings: "Padding Settings",
  width: "Width",
  height: "Height",
  width_auto: "Width Auto",
  font_size: "Font Size",
  font_family: "Font Family",
  solid: "Solid",
  dotted: "Dotted",
  dashed: "Dashed",
  align: "Align",
  spacing: "Spacing",
};

export default en;
```

#### zh.js

```javascript
const zh = {
  drag_block_here: "请将模块拖放到此处",
  blocks: "模块",
  photos: "图片",
  powered_by_pexels: "图片由Pexels提供",
  loading: "加载中...",
  content: "内容",
  body_settings: "邮件主题设置",
  pre_header: "预标题",
  pre_header_description: "预标题是在收件箱中查看电子邮件时跟随主题行的简短摘要文本。",
  confirm: "确认",
  cancel: "取消",

  // column block
  column: "列",
  columns: "列排版",
  column_settings: "列设置",
  column_styles: "列样式",
  column_delete: "删除列",
  column_delete_desc: "您确定删除多余的{{count}}列吗？",

  //text block
  text: "文本",
  text_content: "这是一个文本，点击修改文本",
  text_settings: "文本设置",
  text_styles: "文本样式",
  text_align: "文本对齐方式",

  // heading block
  heading: "标题",
  heading_content: "这是一个标题，点击修改标题",
  heading_settings: "标题设置",
  heading_type: "标题类型",

  // button block
  button: "按钮",
  button_settings: "按钮设置",
  button_action: "点击按钮触发",
  button_styles: "按钮样式",
  button_padding: "按钮内边距",

  // divider block
  divider: "分割线",
  divider_settings: "分割线设置",
  divider_type: "分割线类型",
  divider_styles: "分割线样式",

  // image block
  image: "图片",
  image_settings: "图片设置",
  image_action: "点击图片跳转",
  image_url: "图片URL",
  image_alt: "图片alt",
  image_styles: "图片样式",

  // social link block
  social_link: "社交链接",
  add_social_link: "添加社交链接",
  social_link_size: "社交链接大小",
  social_links: "社交链接",
  social_link_settings: "社交链接设置",

  // colors
  content_background_color: "内容背景颜色",
  background_color: "背景颜色",
  text_color: "文本颜色",
  email_theme_background_color: "邮件主题色",
  font_color: "字体颜色",
  button_color: "按钮颜色",
  divider_color: "分割线颜色",

  // styles
  action_type: "按钮类型",
  top: "上",
  right: "右",
  left: "左",
  bottom: "下",
  line_height: "行高",
  link: "超链接",
  link_url: "超链接URL",
  padding_settings: "内边距设置",
  width_auto: "宽度自适应",
  width: "宽度",
  height: "高度",
  font_size: "字体大小",
  font_family: "字体",
  align: "对齐方式",
  solid: "实线",
  dotted: "虚线（点）",
  dashed: "虚线（破折号）",
  spacing: "间距",
};

export default zh;
```

#### Modify en / zh text content

```javascript
const MyEmailEditor = () => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (language) => () => {
    setLanguage(language);
  };

  return (
    <>
      <div>
        <span onClick={changeLanguage("en")}>EN</span>/<span onClick={changeLanguage("zh")}>中文</span>
      </div>
      <EmailEditor
        language={language}
        customLanguageLibraries={{
          en: {
            column: "Column",
            columns: "Columns",
          },
          zh: {
            column: "列",
            columns: "列",
          },
        }}
      />
    </>
  );
};
```

### Custom language

To add support for a new language, follow these steps:

```javascript
const MyEmailEditor = () => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (language) => () => {
    setLanguage(language);
  };

  return (
    <>
      <div>
        <span onClick={changeLanguage("en")}>EN</span>/<span onClick={changeLanguage("zh")}>中文</span>/
        <span onClick={changeLanguage("zh_TW")}>繁体中文</span>
      </div>
      <EmailEditor
        language={language}
        customLanguageLibraries={{
          en: {
            column: "Column",
            columns: "Columns",
          },
          zh: {
            column: "列",
            columns: "列",
          },
          zh_TW: {
            drag_block_here: "請將模組拖曳到此處",
            blocks: "模組",
            photos: "圖片",
            loading: "載入中...",
            content: "內容",
            body_settings: "郵件主旨設定",
            pre_header: "預標題",
            pre_header_description: "預標題是在收件匣中查看電子郵件時跟隨主題行的簡短摘要文字。",
            confirm: "確認",
            cancel: "取消",
            // ........
          },
        }}
      />
    </>
  );
};
```

## Features

- Drag-and-drop interface for easy email creation
- Customizable email templates
- Support for multiple email clients and devices
- Responsive design for mobile and desktop viewing
