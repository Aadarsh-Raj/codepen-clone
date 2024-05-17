import React, { useEffect } from "react";
// import Split from "react-split";
// import MonacoEditor from "react-monaco-editor";
import SplitPane from "react-split-pane";
import "./Style/editor.css";
import LanguageEditor from "./LanguageEditor";
import { UserFunction } from "../Context/UserContext.js";

const Editor = () => {
  const userCtx = UserFunction();
console.log(userCtx);
  useEffect(() => {
    updateOutput();
  }, [userCtx.htmlValue, userCtx.cssValue, userCtx.jsValue]);

  const updateOutput = () => {
    const combinedOutput = `
    <html>
        <head> <style> ${userCtx.cssValue} </style>
        </head>
        <body> 
        ${userCtx.htmlValue}
        <script> ${userCtx.jsValue} </script>
        </body>
    </html>
    `;

    userCtx.setOutputValue(combinedOutput);
  };
  const updateEditorValue = (language, value) => {
   
    if (language === "HTML") {
      userCtx.setHtmlValue(value);
    } else if (language === "CSS") {
      userCtx.setCssValue(value);
    } else if (language === "JS") {
      userCtx.setJsValue(value);
    }
  };

  return (
    <>
      <div className="editor">
        <SplitPane
          split="horizontal"
          minSize={100}
          maxSize={-100}
          defaultSize={"50%"}
        >
          <div className="input-container">
            <SplitPane split="vertical" defaultSize={"33.33%"}>
              <LanguageEditor
                languageTitle="HTML"
                callUpdateFunction={(language, value) => {
                  updateEditorValue(language, value);
                }}
              />

              <SplitPane split="vertical" defaultSize={"50%"}>
                <div className="css-editor">
                  <LanguageEditor
                    languageTitle="CSS"
                    callUpdateFunction={(language, value) => {
                      updateEditorValue(language, value);
                    }}
                  />
                </div>
                <div className="js-editor">
                  <LanguageEditor
                    languageTitle="JS"
                    callUpdateFunction={(language, value) => {
                      updateEditorValue(language, value);
                    }}
                  />
                </div>
              </SplitPane>
            </SplitPane>
          </div>
          <div
            className="output-container"
            style={{ backgroundColor: "white" }}
          >
            <iframe
              title="Result"
              srcDoc={userCtx.output}
              style={{ border: "none", width: "100%", height: "100%" }}
            />
          </div>
        </SplitPane>
      </div>
    </>
  );
};

export default Editor;
