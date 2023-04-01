import React from 'react';

import './styles.scss';

export const PlanCard = ({ card, isActive, isMonthPeriod, onClick }) => {
  return (
    <div
      className={`plan-card ${isActive ? 'active' : ''} ${!isMonthPeriod ? 'offer' : ''}`}
      onClick={onClick}
    >
      <img src={card.icon} className="plan-icon" alt="plan-icon"></img>
      <div className="plan-info">
        <h4 className="plan-title">{card.title}</h4>
        {isMonthPeriod ? (
          <p className="plan-price">${card.pricePerMonth}/mo</p>
        ) : (
          <p className="plan-price">${card.pricePerYear}/yr</p>
        )}
        <p className="plan-offer">2 month free</p>
      </div>
    </div>
  );
};
