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

## Features

- Drag-and-drop interface for easy email creation
- Customizable email templates
- Support for multiple email clients and devices
- Responsive design for mobile and desktop viewing
