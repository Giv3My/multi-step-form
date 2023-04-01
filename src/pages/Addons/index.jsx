import React from 'react';

import { useAppContext } from '../../context/AppContext';
import { addons } from './data';

import { AddonCard } from '../../components';

import './styles.scss';

export const Addons = () => {
  const { isAddonSelected, handleToggleAddon, isMonthPeriod } = useAppContext();

  return (
    <div className="addons-list">
      {addons.map((card, index) => (
        <AddonCard
          key={index}
          card={card}
          isActive={isAddonSelected(index)}
          isMonthPeriod={isMonthPeriod}
          onClick={handleToggleAddon(index)}
        />
      ))}
    </div>
  );
};
