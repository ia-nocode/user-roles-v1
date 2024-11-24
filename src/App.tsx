import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './lib/firebase';
import Login from './components/Login';
import UserManagement from './components/UserManagement';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {user ? <UserManagement /> : <Login />}
    </div>
  );
}

export default App;