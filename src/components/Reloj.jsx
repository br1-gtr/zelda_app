import { useState, useEffect } from 'react';
export const Reloj = ({ estadoScroll }) => {
	const [time, setTime] = useState();
	useEffect(() => {
		setInterval(() => {
			const datosHora = new Date();
			setTime(datosHora.toLocaleTimeString());
		}, 1000);
	}, []);
	return <div style={{ fontSize: estadoScroll ? 16 : 20 }}>{time}</div>;
};
