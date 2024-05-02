import React, { createContext, useState, useContext, ReactNode } from 'react';

interface User {
  id: string | null;
  // Adicione outras informações do usuário que deseja armazenar
}

interface AuthContextType {
  user: User;
  setUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: { id: null },
  setUser: () => {}
});

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>({ id: null });

  const authContextValue: AuthContextType = {
    user,
    setUser
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  return useContext(AuthContext);
};

export default AuthProvider;
