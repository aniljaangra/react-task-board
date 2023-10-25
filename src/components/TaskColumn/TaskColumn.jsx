import React from "react";
import "./taskColumn.css";

export default function TaskColumn({ title, children }) {
  return (
    <div className="column">
      <div className="title">
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
}
