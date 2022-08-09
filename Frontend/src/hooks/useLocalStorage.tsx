import { useEffect, useState } from "react";

const PREFIX = "whatsapp-clone";

const useLocalStorage = (
	key: String,
	intialValue?: String | Function
): [value: String, setValue: (id: string) => void] => {
	const keyPrefix = `${PREFIX}-${key}`;

	const [value, setValue] = useState(() => {
		const jsonValue = localStorage.getItem(keyPrefix);
		if (jsonValue !== null && typeof jsonValue !== 'undefined' && jsonValue !== 'undefined') {
			return JSON.parse(jsonValue);
		}
		if (typeof intialValue === "function") return intialValue();
		return intialValue;
	});

	useEffect(() => {
		localStorage.setItem(keyPrefix, JSON.stringify(value));
	}, [value, keyPrefix]);

	return [value, setValue];
};

export default useLocalStorage;