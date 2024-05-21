import React, { useEffect, useState } from "react";

import SplitPane from "react-split-pane";
import "./Style/editor.css";
import LanguageEditor from "./LanguageEditor";
import { UserFunction } from "../Context/UserContext.js";
import Sidebar from "./Sidebar.jsx";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Editor = () => {
  const userCtx = UserFunction();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
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
      <Sidebar />
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

      <div className="editor-mobile">
        <Box sx={{ width: "100%" }}>
          <Tabs value={activeTab} onChange={handleTabChange} centered>
            <Tab
              label="HTML"
              sx={{ color: activeTab === 0 ? "white" : "white" }}
            />
            <Tab
              label="CSS"
              sx={{ color: activeTab === 1 ? "white" : "white" }}
            />
            <Tab
              label="JS"
              sx={{ color: activeTab === 2 ? "white" : "white" }}
            />
            <Tab
              label="Result"
              sx={{ color: activeTab === 2 ? "white" : "white" }}
            />
          </Tabs>
          <Box sx={{ p: 3 }}>
            {activeTab === 0 && (
              <div className="single-editor">
                <LanguageEditor
                  languageTitle="HTML"
                  callUpdateFunction={(language, value) => {
                    updateEditorValue(language, value);
                  }}
                />
              </div>
            )}
            {activeTab === 1 && (
              <div className="single-editor">
                <LanguageEditor
                  languageTitle="CSS"
                  callUpdateFunction={(language, value) => {
                    updateEditorValue(language, value);
                  }}
                />
              </div>
            )}
            {activeTab === 2 && (
              <div className="single-editor">
                <LanguageEditor
                  languageTitle="JS"
                  callUpdateFunction={(language, value) => {
                    updateEditorValue(language, value);
                  }}
                />
              </div>
            )}
            {activeTab === 3 && (
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
            )}
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Editor;
