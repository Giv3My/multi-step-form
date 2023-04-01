import React from 'react';

import { useUpdateEffect } from './useUpdateEffect';
import { addons } from '../pages/Addons/data';

export const useAddons = (userSelections, setUserSelections, isMonthPeriod) => {
  const [selectedAddons, setSelectedAddons] = React.useState(userSelections.addons);

  useUpdateEffect(() => {
    setUserSelections((prev) => ({
      ...prev,
      addons: selectedAddons,
    }));
  }, [selectedAddons]);

  React.useEffect(() => {
    setSelectedAddons((prev) =>
      prev.map((addon) => ({
        ...addon,
        price: isMonthPeriod
          ? addons[addon.index].pricePerMonth
          : addons[addon.index].pricePerYear,
      }))
    );
  }, [isMonthPeriod]);

  const handleToggleAddon = (idx) => () => {
    const exist = selectedAddons.find((addon) => addon.index === idx);

    if (exist) {
      setSelectedAddons((prev) => prev.filter((addon) => addon.index !== idx));
    } else {
      setSelectedAddons((prev) => [
        ...prev,
        {
          index: idx,
          title: addons[idx].title,
          price: isMonthPeriod ? addons[idx].pricePerMonth : addons[idx].pricePerYear,
        },
      ]);
    }
  };

  const isAddonSelected = (idx) => {
    return selectedAddons.find((addon) => addon.index === idx);
  };

  return {
    selectedAddons,
    handleToggleAddon,
    isAddonSelected,
  };
};
