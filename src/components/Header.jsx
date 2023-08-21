import { Reloj } from './Reloj';
import { useState } from 'react';
import { FaLink } from 'react-icons/fa';
import '../style/Header.css';
import imgTitulo from '../assets/img/img_titulo_3.png';
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
			<div className="header_titulo-cont">
				<img src={imgTitulo} alt="asd" className="titulo_img" />
				{/*<FaLink size={positionScroll ? 25 : 30} className="titulo_icon" />*/}
				<h1>Link Ed</h1>
			</div>

			<Reloj estadoScroll={positionScroll} />
		</div>
	);
};
