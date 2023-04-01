import React from 'react';
import { useNavigate } from 'react-router';

import { useAppContext } from '../../context/AppContext';

import ConfirmImg from '../../assets/images/icon-thank-you.svg';

import './styles.scss';

export const Confirm = () => {
  const navigate = useNavigate();
  const { userData } = useAppContext();

  React.useEffect(() => {
    if (!userData) {
      navigate('/', { replace: true });
    } else {
      clearUserSelections();
    }
  }, []);

  const clearUserSelections = () => {
    setTimeout(() => {
      localStorage.removeItem('user-data');
      localStorage.removeItem('user-selections');
    }, 0);
  };

  return (
    <div className="confirm-page">
      <img src={ConfirmImg} />
      <h2 className="title">Thank You!</h2>
      <p className="text">
        Thanks for confirming your subscription! We hope you have fun using our platform.
        If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
};
