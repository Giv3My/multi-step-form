import React from 'react';

import { useUpdateEffect } from './useUpdateEffect';
import { planCards } from '../pages/Plan/data';

const getInitialPlan = (userSelections) => {
  return Object.keys(userSelections.plan).length
    ? userSelections.plan
    : {
        index: 0,
        title: planCards[0].title,
        price: planCards[0].pricePerMonth,
      };
};

export const usePlan = (userSelections, setUserSelections, isMonthPeriod) => {
  const [activePlan, setActivePlan] = React.useState(getInitialPlan(userSelections));

  useUpdateEffect(() => {
    setUserSelections((prev) => ({
      ...prev,
      plan: activePlan,
    }));
  }, [activePlan]);

  React.useEffect(() => {
    setActivePlan((prev) => ({
      ...prev,
      price: isMonthPeriod
        ? planCards[activePlan.index].pricePerMonth
        : planCards[activePlan.index].pricePerYear,
    }));
  }, [isMonthPeriod]);

  const handleChangePlan = (idx) => () => {
    if (activePlan.index === idx) {
      return;
    }

    setActivePlan({
      index: idx,
      title: planCards[idx].title,
      price: isMonthPeriod ? planCards[idx].pricePerMonth : planCards[idx].pricePerYear,
    });
  };

  const isPlanActive = (idx) => {
    return activePlan.index === idx;
  };

  return {
    activePlan,
    handleChangePlan,
    isPlanActive,
  };
};
