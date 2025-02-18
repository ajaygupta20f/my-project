import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const authUser = useSelector((state: RootState) => state.user.authUser);

  if (!authUser) {
    return <Navigate to="/signin" replace />;
  }
  return <>{children}</>;
};

export default PrivateRoute;
