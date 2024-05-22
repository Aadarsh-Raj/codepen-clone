import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./Style/linkseditor.css";
import Prism from "prismjs";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "prismjs/themes/prism.css";

const LinksEditor = () => {
  const location = useLocation();
  const { title, code, id } = location.state || {};
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);
  return (
    <>
      <SearchBar />
      <Sidebar />
      <div className="editor-result-container">
        <Box sx={{ width: "100%" }}>
          <Tabs value={activeTab} onChange={handleTabChange} centered>
            <Tab
              label="Editor"
              sx={{ color: activeTab === 0 ? "white" : "white" }}
            />
            <Tab
              label="Result"
              sx={{ color: activeTab === 1 ? "white" : "white" }}
            />
          </Tabs>
          <Box sx={{ p: 3 }}>
            {activeTab === 0 && (
              <div className="editor">
                <h1>{title}</h1>
                <pre style={{background:"transparent"}}>
                  <code className="language-markup">{code}</code>
                </pre>
              </div>
            )}
            {activeTab === 1 && (
              <div className="result-container">
                <iframe srcDoc={code} frameborder="0"></iframe>
              </div>
            )}
          </Box>
        </Box>
      </div>
    </>
  );
};

export default LinksEditor;
