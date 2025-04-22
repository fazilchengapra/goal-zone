'use client'
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const mode = useSelector((store:RootState) => store.app.theme);
    console.log(mode);
    
  return <div className={mode}>{children}</div>;
};

export default ThemeProvider;
