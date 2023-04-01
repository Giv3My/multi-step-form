import React from 'react';

import { useAppContext } from '../../context/AppContext';
import { planCards } from './data';

import { PlanCard, ToggleButton } from '../../components';

import './styles.scss';

export const Plan = () => {
  const { isPlanActive, handleChangePlan, isMonthPeriod, onTogglePeriod } =
    useAppContext();

  return (
    <>
      <div className="plan-card-list">
        {planCards.map((card, index) => (
          <PlanCard
            key={index}
            card={card}
            isActive={isPlanActive(index)}
            isMonthPeriod={isMonthPeriod}
            onClick={handleChangePlan(index)}
          />
        ))}
      </div>
      <div className="choose-period">
        <h5 className={`period-name ${isMonthPeriod ? 'active' : ''}`}>Monthly</h5>
        <ToggleButton
          className="toggle-period"
          checked={!isMonthPeriod}
          onClick={onTogglePeriod}
        />
        <h5 className={`period-name ${!isMonthPeriod ? 'active' : ''}`}>Yearly</h5>
      </div>
    </>
  );
};
