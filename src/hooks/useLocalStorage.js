export const useLocalStorage = () => {
  const getUserData = () => {
    return JSON.parse(localStorage.getItem('user-data'));
  };

  const getUserSelections = () => {
    const intialSelections = {
      plan: {},
      addons: [],
    };

    const selections = JSON.parse(localStorage.getItem('user-selections'));

    if (!selections) {
      localStorage.setItem('period', 'mo');
      localStorage.setItem('user-selections', JSON.stringify(intialSelections));

      return intialSelections;
    }

    return {
      plan: selections.plan,
      addons: selections.addons,
    };
  };

  const checkPeriod = () => {
    if (!localStorage.getItem('period')) {
      localStorage.setItem('period', 'mo');
    }

    return localStorage.getItem('period') === 'mo';
  };

  return {
    getUserData,
    getUserSelections,
    checkPeriod,
  };
};
