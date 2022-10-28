import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

	const [user, setUser] = useState(null);

	const login = (auth) => {
		setUser(auth);
	};

	const logout = () => {
		setUser(null);
	};

	const data = { user, login, logout };

	return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;