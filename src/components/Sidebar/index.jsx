import React from 'react';
import { useLocation } from 'react-router';

import { steps } from './data';

import './styles.scss';

export const Sidebar = () => {
  const { pathname } = useLocation();
  const [activeIndex, setActiveIndex] = React.useState(null);

  React.useEffect(() => {
    if (pathname === '/confirm') {
      setActiveIndex(4);
      return;
    }

    setActiveIndex(steps.find((step) => step.path === pathname)?.id ?? null);
  }, [pathname]);

  const checkActiveIndexClass = (idx) => {
    return idx === activeIndex ? 'active' : '';
  };

  return (
    <div className="sidebar">
      {steps.map((step) => (
        <div key={step.id} className={`step ${checkActiveIndexClass(step.id)}`}>
          <div className="step-circle">
            <p className="step-index">{step.id}</p>
          </div>
          <div className="step-info">
            <p className="step-number">Step {step.id}</p>
            <h3 className="step-title">{step.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};
