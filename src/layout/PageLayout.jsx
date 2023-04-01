import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import { useAppContext } from '../context/AppContext';
import { useFormContext } from '../context/FormContext';
import { pagesData } from './data';

export const PageLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { userData, userSelections } = useAppContext();
  const { formError, setErrorFields } = useFormContext();

  React.useEffect(() => {
    if (!userData) {
      navigate('/', { replace: true });
    } else if (!Object.keys(userSelections?.plan).length) {
      navigate('/plan', { replace: true });
    }
  }, []);

  return (
    <>
      <h1 className="page-title">{pagesData[pathname].title}</h1>
      <p className="page-desc">{pagesData[pathname].desc}</p>
      <Outlet />
      <div className="bottom-links">
        {pagesData[pathname].prevLink && (
          <Link to={pagesData[pathname].prevLink} className="prev-step">
            Go Back
          </Link>
        )}
        {pathname === '/' && formError ? (
          <button onClick={setErrorFields} className="next-step">
            <p>Next Step</p>
          </button>
        ) : pagesData[pathname].nextLink ? (
          <Link to={pagesData[pathname].nextLink} className="next-step">
            <p>Next Step</p>
          </Link>
        ) : (
          <Link to="/confirm" className="next-step confirm">
            <p>Confirm</p>
          </Link>
        )}
      </div>
    </>
  );
};
