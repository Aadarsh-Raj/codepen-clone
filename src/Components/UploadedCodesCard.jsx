import React from "react";
import "./Style/uploadedcodescard.css";
const UploadedCodesCard = (props) => {
  return (
    <>
      <div className="small-frame">
        <iframe
        className="ui-iframe"
        title={props.title}
        srcDoc={props.code}
        style={{
          width: "400px",
          height: "200px",
          borderRadius: "0.8rem",
       
        }}
      >

      </iframe>
        <div className="card-title-container">
          {props.title}
        </div>
      </div>
    </>
  );
};

export default UploadedCodesCard;
