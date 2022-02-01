import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // eslint-disable-line no-unused-vars
  const [useObject, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(user);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    setUserObj(authService.currentUser);
  };
  
  return (
    <>
    {init ? (
      <AppRouter 
      refreshUser={refreshUser}
      isLoggedIn={isLoggedIn} 
      setUserObj={useObject}/>
    ) : (
      "initializing..."
    )}
    </>
  );
}

export default App;