import React, { useEffect, useState } from "react";
import { app } from "../Config/firebase.config";
import { getDatabase, ref, get } from "firebase/database";
import UploadedCodesCard from "./UploadedCodesCard";
import "./Style/uploadedcodescontainer.css";
import { UserFunction } from "../Context/UserContext";
import { Link } from "react-router-dom";
const UploadedCodesContainer = () => {
  const userCtx = UserFunction();
  useEffect(() => {
    fetchCodes();
  }, [userCtx.dialogAppear]);
  const fetchCodes = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "code");
    const snapShot = await get(dbRef);
    if (snapShot.exists()) {
      userCtx.setCodeArray(Object.values(snapShot.val()));
    } else {
      alert("error");
    }
  };
  return (
    <>
      <div className="code-uploaded-container">
        {userCtx.codeArray &&
          userCtx.codeArray.map((ele) => (
            <Link
            to={`/editor/${ele.id}`}
            state={{ title: ele.title, code: ele.code, id: ele.id }}
            key={ele.id}

            >
              <UploadedCodesCard
                title={ele.title}
                code={ele.code}
                id={ele.id}
              />
            </Link>
          ))}
      </div>
    </>
  );
};

export default UploadedCodesContainer;
