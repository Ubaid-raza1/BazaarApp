import React from "react";
import { Link } from "react-router-dom";

const FooterNavbarHelper = ({ icon, txt, path, item }) => {
  return (
    <div className="FooterNavbarhelper">
      <Link to={path}>
        <span className="footerHelperFirstChild">
          {icon}
          {!!item?.length && (
            <span className="sidebarItemValue">{item?.length}</span>
          )}
        </span>
        <span>{txt}</span>
      </Link>
    </div>
  );
};

export default FooterNavbarHelper;
