import React from 'react';

export const ToggleButton = ({ className, checked, onClick }) => {
  return (
    <div
      className={`toggle ${className ?? ''} ${checked ? 'checked' : ''}`}
      onClick={onClick}
    >
      <div className="toggle-wrapper">
        <div className="switch" />
      </div>
    </div>
  );
};
