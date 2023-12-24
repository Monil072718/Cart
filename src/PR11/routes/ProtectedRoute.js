// ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import AuthContext from '../authContext';


const ProtectedRoute = ({ element, ...props }) => {
    
    const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? (
    <Route {...props} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
