import React, { useEffect } from "react";
import { UserFunction } from "../Context/UserContext";
import { Snackbar, Alert as MuiAlert, LinearProgress } from "@mui/material";
const DialogueBox = ({ duration, onClose }) => {
  const userCtx = UserFunction();
  useEffect(() => {
    if (userCtx.dialogAppear) {
      userCtx.setProgress(0);
      const start = Date.now();

      const timer = setInterval(() => {
        const timeElapsed = Date.now() - start;
        const percentage = Math.min((timeElapsed / duration) * 100, 100);
        userCtx.setProgress(percentage);
        if (percentage >= 100) {
          clearInterval(timer);
          onClose();
        }
      }, 100);
      return () => clearInterval(timer);
    }
  }, [userCtx.dialogAppear, onclose, duration]);
  return (
    <>
      <Snackbar
        open={userCtx.dialogAppear}
        onClose={onClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{
          position: "absolute",
          top: "1rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <MuiAlert
          onClose={onClose}
          severity="success"
          sx={{
            width: "100%",
            color: "green",
            backgroundColor: "#FBAB7E;",
            backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
          }}
        >
          {userCtx.dialogMessage}
          <LinearProgress variant="determinate" value={userCtx.progress} />
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default DialogueBox;
