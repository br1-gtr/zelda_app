import { useState, useEffect } from 'react';
export const Reloj = () => {
	const [time, setTime] = useState();
	useEffect(() => {
		setInterval(() => {
			const datosHora = new Date();
			setTime(datosHora.toLocaleTimeString());
		}, 1000);
	}, []);
	return <div>{time}</div>;
};
