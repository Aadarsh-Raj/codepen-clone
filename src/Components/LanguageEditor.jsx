import React, { useEffect, useState } from "react";
import "./Style/languageeditor.css";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { UserFunction } from "../Context/UserContext";
import { app } from "../Config/firebase.config";
import { getDatabase, ref, set, push } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';
const LanguageEditor = (props) => {
  const [svg, setSvg] = useState("");
  const userCtx = UserFunction();

  const updateLanguageEditorValue = (value, viewUpdate) =>
    props.callUpdateFunction(value, viewUpdate);

  useEffect(() => {
    if (props.languageTitle == "HTML") {
      setSvg(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 32 32"
          viewBox="0 0 32 32"
          id="html"
        >
          <path
            fill="#FFE6E2"
            d="M26,32H6c-3.314,0-6-2.686-6-6V6c0-3.314,2.686-6,6-6h20c3.314,0,6,2.686,6,6v20C32,29.314,29.314,32,26,32z"
          ></path>
          <path
            fill="#FFE6E2"
            d="M26,32H6c-3.314,0-6-2.686-6-6V6c0-3.314,2.686-6,6-6h20c3.314,0,6,2.686,6,6v20C32,29.314,29.314,32,26,32z"
          ></path>
          <path
            fill="#FC573B"
            d="M21.592,22.136L22.834,8H9.167H9.166l1.242,14.136L15.982,24L21.592,22.136z M12.468,19.632l-0.213-2.707h1.698l0.125,1.361l1.904,0.518l1.911-0.518l0.213-2.222h-5.94l-0.456-5.2h8.581l-0.156,1.704h-6.541l0.146,1.765h6.249l-0.484,5.3l-3.484,0.965v0.011h-0.039L12.468,19.632z"
          ></path>
        </svg>
      );
    } else if (props.languageTitle == "CSS") {
      setSvg(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="css">
          <path
            fill="#2196F3"
            d="m1 0 1.275 14.4L8 16l5.723-1.599L15 0z"
          ></path>
          <path
            fill="#FAFAFA"
            d="m12.274 4.709-.161 1.809-.486 5.423L8 12.944l-.003.001-3.625-1.004-.253-2.836h1.776l.132 1.471 1.971.532.001-.001 1.974-.532.269-2.451-6.208.017-.176-1.676 6.533-.077.132-1.794-6.84.019-.115-1.669h8.864z"
          ></path>
        </svg>
      );
    } else if (props.languageTitle == "JS") {
      setSvg(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          id="js"
        >
          <path
            fill="yellow"
            d="M.384.67v31.296H31.68V.67H.384zm16.334 26.772c-.461.937-1.342 1.553-2.362 1.85-1.568.36-3.067.155-4.183-.515-.747-.458-1.33-1.163-1.725-1.975.794-.485 1.586-.973 2.38-1.458.021.009.083.122.167.268.303.509.565.869 1.08 1.121.506.172 1.615.283 2.044-.607.262-.452.178-1.936.178-3.545 0-2.529.012-5.016.012-7.576h2.927c0 2.688.015 5.383 0 8.067.006 1.645.149 3.14-.518 4.369zm12.144-.827c-1.017 3.481-6.691 3.594-8.957 1.294-.479-.541-.779-.824-1.065-1.449 1.205-.693 1.205-.693 2.377-1.371.637.979 1.226 1.517 2.285 1.737 1.437.175 2.883-.318 2.559-1.844-.333-1.247-2.942-1.55-4.718-2.883-1.803-1.211-2.225-4.153-.744-5.834.494-.622 1.336-1.086 2.219-1.309l.922-.119c1.77-.036 2.877.431 3.689 1.339.226.229.41.476.756 1.012-.943.601-.94.595-2.291 1.47-.289-.622-.767-1.012-1.273-1.181-.785-.238-1.776.021-1.981.851-.071.256-.056.494.057.916.318.726 1.386 1.041 2.344 1.481 2.758 1.119 3.689 2.317 3.918 3.745.22 1.229-.054 2.026-.095 2.145z"
          ></path>
        </svg>
      );
    }
  }, []);

  function saveOnDb() {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "code"));
    set(newDocRef, {
      id:uuidv4(),
      title: userCtx.title,
      code: userCtx.output,
    })
      .then(() => {
        userCtx.setDialogMessage("Data saved");
        userCtx.setDialogAppear(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function changeTitle(e) {
    userCtx.setTitle(e.target.value);
  }
  function refreshValue() {
    userCtx.setHtmlValue("");
    userCtx.setCssValue("");
    userCtx.setJsValue("");
  }
  return (
    <>
    
      <div className="language-editor">
        <div className="editor-header">
          <div className="language-heading">
            {svg} {props.languageTitle}
          </div>
          <div className="title-input">
            {userCtx.title}
            <input type="text" onChange={changeTitle} />
          </div>
          <div className="editor-functions">
            <button title="Save" onClick={saveOnDb}>
              <svg
                fill="black"
                version="1.1"
                id="Capa_1"
                viewBox="0 0 407.096 407.096"
                {...props}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <path d="M402.115,84.008L323.088,4.981C319.899,1.792,315.574,0,311.063,0H17.005C7.613,0,0,7.614,0,17.005v373.086c0,9.392,7.613,17.005,17.005,17.005h373.086c9.392,0,17.005-7.613,17.005-17.005V96.032C407.096,91.523,405.305,87.197,402.115,84.008z M300.664,163.567H67.129V38.862h233.535V163.567z"></path>
                      <path d="M214.051,148.16h43.08c3.131,0,5.668-2.538,5.668-5.669V59.584c0-3.13-2.537-5.668-5.668-5.668h-43.08c-3.131,0-5.668,2.538-5.668,5.668v82.907C208.383,145.622,210.92,148.16,214.051,148.16z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </button>

            <button title="Refress All" onClick={refreshValue}>
              <svg
                fill="#000000"
                height="200px"
                width="200px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 489.698 489.698"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path d="M468.999,227.774c-11.4,0-20.8,8.3-20.8,19.8c-1,74.9-44.2,142.6-110.3,178.9c-99.6,54.7-216,5.6-260.6-61l62.9,13.1c10.4,2.1,21.8-4.2,23.9-15.6c2.1-10.4-4.2-21.8-15.6-23.9l-123.7-26c-7.2-1.7-26.1,3.5-23.9,22.9l15.6,124.8c1,10.4,9.4,17.7,19.8,17.7c15.5,0,21.8-11.4,20.8-22.9l-7.3-60.9c101.1,121.3,229.4,104.4,306.8,69.3c80.1-42.7,131.1-124.8,132.1-215.4C488.799,237.174,480.399,227.774,468.999,227.774z"></path>
                    <path d="M20.599,261.874c11.4,0,20.8-8.3,20.8-19.8c1-74.9,44.2-142.6,110.3-178.9c99.6-54.7,216-5.6,260.6,61l-62.9-13.1c-10.4-2.1-21.8,4.2-23.9,15.6c-2.1,10.4,4.2,21.8,15.6,23.9l123.8,26c7.2,1.7,26.1-3.5,23.9-22.9l-15.6-124.8c-1-10.4-9.4-17.7-19.8-17.7c-15.5,0-21.8,11.4-20.8,22.9l7.2,60.9c-101.1-121.2-229.4-104.4-306.8-69.2c-80.1,42.6-131.1,124.8-132.2,215.3C0.799,252.574,9.199,261.874,20.599,261.874z"></path>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="editor-body">
          <CodeMirror
            value={
              props.languageTitle === "HTML"
                ? userCtx.htmlValue
                : props.languageTitle === "CSS"
                ? userCtx.cssValue
                : userCtx.jsValue
            }
            height="100%"
            theme={"dark"}
            extensions={[javascript({ jsx: true })]}
            onChange={(value, viewUpdate) => {
              updateLanguageEditorValue(props.languageTitle, value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default LanguageEditor;
