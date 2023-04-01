import React from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';
import { usePlan } from '../hooks/usePlan';
import { useAddons } from '../hooks/useAddons';
import { useUpdateEffect } from '../hooks/useUpdateEffect';

const AppContext = React.createContext({});

export const AppProvider = ({ children }) => {
  const { getUserData, getUserSelections, checkPeriod } = useLocalStorage();

  const [userData, setUserData] = React.useState(getUserData);
  const [userSelections, setUserSelections] = React.useState(getUserSelections);
  const [isMonthPeriod, setIsMonthPeriod] = React.useState(checkPeriod);

  const { activePlan, handleChangePlan, isPlanActive } = usePlan(
    userSelections,
    setUserSelections,
    isMonthPeriod
  );

  const { selectedAddons, handleToggleAddon, isAddonSelected } = useAddons(
    userSelections,
    setUserSelections,
    isMonthPeriod
  );

  useUpdateEffect(() => {
    localStorage.setItem('user-selections', JSON.stringify(userSelections));
  }, [userSelections]);

  const onTogglePeriod = () => {
    localStorage.setItem('period', !isMonthPeriod ? 'mo' : 'yr');

    setIsMonthPeriod((prev) => !prev);
  };

  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,
        userSelections,
        setUserSelections,
        activePlan,
        handleChangePlan,
        isPlanActive,
        isMonthPeriod,
        setIsMonthPeriod,
        onTogglePeriod,
        selectedAddons,
        handleToggleAddon,
        isAddonSelected,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
