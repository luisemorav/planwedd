import URLf from "./config";

async function getEvents() {
	const response = await fetch(URLf + "/events", {
		method: "GET",
		headers: {
			accept: "application/json",
		},
	});
	const data = await response.json();
	return data;
}
async function getEventByIdUser(id) {
	let config = {
		method: "GET",
		headers: {
			accept: "application/json",
		},
	};
	let res = await fetch(`${URLf}/events${id}`, config);
	return res;
}

// ? GIFTS PETITIONS
async function getGiftsByEventId(id) {
	const configuration = {
		method: "GET",
		headers: {
			accept: "application/json",
		},
	};
	const res = await fetch(`${URLf}/gifts/event${id}`, configuration);
	return res;
}

// ! DELETE PETITIONS

async function deleteGiftById(id) {
	const configuration = {
		method: "DELETE",
		headers: {
			accept: "aplication/json",
		},
	};
	const res = await fetch(`${URLf}/gifts/${id}`, configuration);
	return res;
}

//* POST Petitions
async function postGiftByEventId(data, key) {
	// const { user, logout } = useContext(UserContext);
	const configuration = {
		headers: {
			ContentType: "multipart/form-data",
			accept: "application/json",
			Authorization: `Bearer ${key}`,
		},
		method: "POST",
		body: data,
	};
	const res = await fetch(`${URLf}/gifts`, configuration);
	return res;
}
async function postDedicatoria(data) {
	const dedicatoria = JSON.stringify(data);
	const configuration = {
		headers: {
			"Content-Type": "application/json",
			accept: "application/json",
		},
		method: "POST",
		body: dedicatoria,
	};
	const res = await fetch(`${URLf}/dedications`, configuration);
	return res;
}
async function postDefaultGifts(data, key) {
	const gift = JSON.stringify(data);
	const configuration = {
		headers: {
			"Content-Type": "application/json",
			accept: "application/json",
			Authorization: `Bearer ${key}`,
		},
		method: "POST",
		body: gift,
	};
	const res = await fetch(`${URLf}/gifts/soft`, configuration);
	return res;
}

const petitions = {
	getEvents,
	getEventByIdUser,
	getGiftsByEventId,
	deleteGiftById,
	postGiftByEventId,
	postDedicatoria,
	postDefaultGifts,
};

export default petitions;
