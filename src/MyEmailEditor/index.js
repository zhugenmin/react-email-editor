import EmailEditor from "@editex/react-email-editor";
import { useRef, useState } from "react";
import defaultBlockList from "./defaultBlockList.json";
import Header from "./Header";
import { useEffect } from "react";

function Dashboard() {
  const emailEditorRef = useRef(null);
  const [emailData, setEmailData] = useState(null);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    setTimeout(() => {
      setEmailData(defaultBlockList);
    }, 300);
  }, []);

  return (
    <div className="dashboard">
      <Header emailEditorEl={emailEditorRef} setLanguage={setLanguage} />
      <div className="dashboard-content">
        {emailData && (
          <EmailEditor
            ref={emailEditorRef}
            defaultBlockList={emailData}
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
        )}
      </div>
    </div>
  );
}

export default Dashboard;
