import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // Kullanıcı giriş yapmış mı kontrolü, burada localStorage veya başka bir yöntem kullanılabilir ilerde güncellenecek pirvate route kullanıldı react router dom 6
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
