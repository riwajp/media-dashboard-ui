"use client";

import React from "react";

import { Toaster, ToastBar } from "react-hot-toast";

const getToastClasses = (type: string | undefined) => {
  switch (type) {
    case "success":
      return "bg-success text-success-content border border-success";
    case "error":
      return "bg-error text-error-content border border-error";
    case "warning":
      return "bg-warning text-warning-content border border-warning";
    case "info":
    default:
      return "bg-info text-info-content border border-info";
  }
};

const ToasterContainer: React.FC = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 4000,
        style: { padding: 0 },
        className: "",
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <div
              className={
                "max-w-md mx-auto px-4 py-3 rounded-lg shadow-lg flex items-center space-x-3 " +
                getToastClasses(t.type)
              }
            >
              <div className="flex-shrink-0">{icon}</div>
              <div className="flex-1 text-sm">{message}</div>
            </div>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};

export default ToasterContainer;
