import React from "react";
import "./PageView.css";
import { PageViewProps } from "./types";

const PageView: React.FC<PageViewProps> = ({ children }) => {
  return <div className="PageView">{children}</div>;
};

export default PageView;
