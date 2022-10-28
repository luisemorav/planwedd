import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

	const [user, setUser] = useState(null);
	const [myEvent, setMyEvent] = useState(null)

	const loadEvent = (datos) => {
		setMyEvent(datos)
	}

	const login = (auth) => {
		setUser(auth);
	};

	const logout = () => {
		setUser(null);
		setMyEvent(null);
	};

	const data = { user, myEvent, login, logout, loadEvent };

	return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
