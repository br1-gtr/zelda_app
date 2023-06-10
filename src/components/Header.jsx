import { Reloj } from './Reloj';
import '../style/Header.css';
import { useState } from 'react';
export const Header = () => {
	const [positionScroll, setPositionScroll] = useState(false);

	const infoScroll = () => {
		if (window.scrollY > 100) {
			setPositionScroll(true);
		} else {
			setPositionScroll(false);
		}
	};

	window.addEventListener('scroll', infoScroll); // verifica posicion de scroll

	return (
		<div
			className={`header_contenedor ${positionScroll ? 'header-small' : ''}`}
		>
			<h1>LINK-ED</h1>
			<Reloj estadoScroll={positionScroll} />
		</div>
	);
};
