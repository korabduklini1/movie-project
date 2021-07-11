import React from "react";

const Message = (props) => {
  const icon = props.icon || "info";

  return (
    <div className="ui icon message">
      <i className={`icon ${icon}`} />
      <div className="content">
        <div className="header">{props.text}</div>
      </div>
    </div>
  );
};

export default Message;
