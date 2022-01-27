import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function PrivateRoute({children}) {
    const location=useLocation();
    const {user, isLoading}=useAuth()
    if (isLoading) {
        return (
          <div className="d-flex align-items-center justify-content-center h-100 position-absolute w-100">
            <div
              class="spinner-border"
              style={{ width: "4rem ", height: "4rem" }}
              role="status"
            ></div>
          </div>
        );
      }
    return (user.email ? children : <Navigate to="/login" state={{ from: location }} />);
}

export default PrivateRoute;
