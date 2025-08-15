import {
  FirebaseAuthTypes,
  getAuth,
  onAuthStateChanged,
} from "@react-native-firebase/auth";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

const SessionContext = createContext<{
  user: FirebaseAuthTypes.User | null;
  initializing: boolean;
}>({ user: null, initializing: false });

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const handleAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = onAuthStateChanged(getAuth(), handleAuthStateChanged);
    return subscriber;
  }, []);

  const contextValue: {
    user: FirebaseAuthTypes.User | null;
    initializing: boolean;
  } = {
    user,
    initializing,
  };

  return (
    <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const { user, initializing } = useContext(SessionContext);
  return { user, initializing };
};
