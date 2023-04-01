import React from 'react';

import Checkmark from '../../assets/images/icon-checkmark.svg';

import './styles.scss';

export const AddonCard = ({ card, isActive, isMonthPeriod, onClick }) => {
  return (
    <div className={`addon-card ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div className="checkmark">
        <img src={Checkmark} alt="checkmark" />
      </div>
      <div className="addon-card-info">
        <h4 className="addon-title">{card.title}</h4>
        <p className="addon-desc">{card.desc}</p>
      </div>
      <div className="addon-card-price">
        {isMonthPeriod ? (
          <p>+{card.pricePerMonth}$/mo</p>
        ) : (
          <p>+{card.pricePerYear}$/yr</p>
        )}
      </div>
    </div>
  );
};
