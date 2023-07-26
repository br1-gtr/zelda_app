import { useState, useEffect, useRef } from 'react';
import '../style/Header.css';
export const Reloj = ({ estadoScroll }) => {
	const [time, setTime] = useState();
	const timeRef = useRef([]);

	useEffect(() => {
		setInterval(() => {
			const datosTiempo = new Date();
			const datosHora = datosTiempo.toLocaleTimeString().substring(0, 5);
			setTime(datosHora);
			//console.log('asd');
			//timeRef.current.classList.toggle('contraste_bg_reloj');
			if (timeRef.current.classList.contains('contraste_bg_reloj')) {
				timeRef.current.classList.remove('contraste_bg_reloj');
			} else {
				timeRef.current.classList.add('contraste_bg_reloj');
			}
		}, 1000);
	}, []);
	return (
		<div className="reloj" ref={timeRef}>
			<div style={{ fontSize: estadoScroll ? 16 : 20 }}>{time}</div>
		</div>
	);
};
