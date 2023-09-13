import React, { ReactNode } from "react";
import "./styles.css";

interface HomeContainerProps {
  children: ReactNode;
}

const HomeContainer: React.FC<HomeContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default HomeContainer;
