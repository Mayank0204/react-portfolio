import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary"
    : "text-foreground border-slate-600 hover:border-secondary";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-5 py-2.5 text-lg cursor-pointer transition-colors duration-300`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
