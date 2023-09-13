import EmailEditor from "@editex/react-email-editor";
import { useRef, useState } from "react";
import defaultBlockList from "./defaultBlockList.json";
import Header from "./Header";
import { useEffect } from "react";

function Dashboard() {
  const emailEditorRef = useRef(null);
  const [emailData, setEmailData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setEmailData(defaultBlockList);
    }, 300);
  }, []);

  return (
    <div className="dashboard">
      <Header emailEditorEl={emailEditorRef} />
      <div className="dashboard-content">{emailData && <EmailEditor ref={emailEditorRef} defaultBlockList={emailData} />}</div>
    </div>
  );
}

export default Dashboard;
