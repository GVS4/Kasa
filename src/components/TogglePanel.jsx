import { useState } from "react";
import PropTypes from "prop-types";

const TogglePanel = ({ title, children }) => {
  const [isVisible, setIsVisible] = useState(false); // Initializing state for visibility of panel
  const handleToggle = () => { // Function to toggle panel visibility
    setIsVisible(!isVisible);
  };

  const arrow = ( 
    <svg
      width="24"
      height="15"
      viewBox="0 0 24 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`arrow ${isVisible ? "down" : ""}`} // Adding class based on panel visibility
    >
      <path
        d="M10.7897 1.43154C11.4591 0.762119 12.5462 0.762119 13.2157 1.43154L23.4979 11.7138C24.1674 12.3832 24.1674 13.4704 23.4979 14.1398C22.8285 14.8092 21.7414 14.8092 21.072 14.1398L12 5.06782L2.92804 14.1344C2.25862 14.8039 1.17148 14.8039 0.502064 14.1344C-0.167355 13.465 -0.167355 12.3779 0.502064 11.7085L10.7843 1.42618L10.7897 1.43154Z"
        fill="white"
      />
    </svg>
  );

  return (
    <div className={`toggle-panel ${isVisible ? "visible" : ""}`}> {/* Panel container with conditional class for visibility */}
      <div className="panel-header" onClick={handleToggle}> {/* Panel head with toggle function */}
        <h3>{title}</h3>
        {arrow}
      </div>
      <div className={`panel-content ${isVisible ? "animate" : ""}`}> {/* Panel content with conditional class for animation */}
        {children} {/* Displaying children content */}
      </div>
    </div>
  );
};

TogglePanel.propTypes = {
  title: PropTypes.string.isRequired, 
  children: PropTypes.node.isRequired, // Validating children prop as a node (any renderable React child)
};

export default TogglePanel;
