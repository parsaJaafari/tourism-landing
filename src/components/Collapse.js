import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useCollapse } from "react-collapsed";

const Collapse = ({ title, children }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    defaultExpanded: false,
    collapsedHeight: 0,
  });

  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps()}>
        <div className="title">{title}</div>
        <FontAwesomeIcon icon={isExpanded ? faArrowUp : faArrowDown} />
      </div>
      <div {...getCollapseProps()}>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Collapse;
