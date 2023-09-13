const Header = (props) => {
  const { emailEditorEl } = props;

  const exportHTML = () => {
    const html = emailEditorEl.current.exportHtml();
    const blob = new Blob([html], { type: "text/html" });
    const a = document.createElement("a");
    a.download = "email.html";
    a.href = URL.createObjectURL(blob);
    a.click();
  };
  return (
    <div className="dashboard-header">
      <div className="dashboard-header-title">Email Editor</div>
      <button className="dashboard-header-subtitle" onClick={exportHTML}>
        导出html
      </button>
    </div>
  );
};

export default Header;
