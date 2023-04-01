import React from 'react';
import { Link } from 'react-router-dom';

import { useAppContext } from '../../context/AppContext';

import './styles.scss';

export const Summary = () => {
  const {
    userSelections: { plan, addons },
    isMonthPeriod,
  } = useAppContext();

  const sortedAddons = [...addons].sort((a, b) => a.index - b.index);

  const totalPrice = plan.price + addons.reduce((sum, addon) => sum + addon.price, 0);

  return (
    <>
      <div className="summary">
        <div className="plan">
          <div className="selected-plan">
            <h4 className="title">{`${plan.title} (${
              isMonthPeriod ? 'Monthly' : 'Yearly'
            })`}</h4>
            <Link className="change-link" to="/plan">
              Change
            </Link>
          </div>
          <p className="price">
            ${plan.price}/{isMonthPeriod ? 'mo' : 'yr'}
          </p>
        </div>
        {addons.length > 0 && (
          <div className="addons">
            {sortedAddons.map((addon) => (
              <div key={addon.index} className="selected-addon">
                <p className="title">{addon.title}</p>
                <p className="price">
                  +${addon.price}/{isMonthPeriod ? 'mo' : 'yr'}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="total-price">
        <p className="period">Total (per {isMonthPeriod ? 'month' : 'year'})</p>
        <h3 className="price">
          +${totalPrice}/{isMonthPeriod ? 'mo' : 'yr'}
        </h3>
      </div>
    </>
  );
};
