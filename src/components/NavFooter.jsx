import { useRef } from 'react';
import { BiSearchAlt2, BiMailSend } from 'react-icons/bi';
import { BsFillCalendarWeekFill, BsYoutube } from 'react-icons/bs';
import '../style/NavFooter.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
export const NavFooter = () => {
	const iconoDim = 30;

	const calendarioRef = useRef([]);

	const calendrHandler = () => {
		calendarioRef.current.classList.toggle('calendario_display-controlador');
		//console.log(calendarioRef.current);
	};

	return (
		<div className="nav-footer_contenedor">
			<a href="#" target=".blank" className="nav-footer_btn">
				<BiSearchAlt2 size={iconoDim} className="nav-footer_icon" />
			</a>
			<a href="#" target=".blank" className="nav-footer_btn">
				<BiMailSend size={iconoDim} className="nav-footer_icon" />
			</a>
			<a href="#" target=".blank" className="nav-footer_btn">
				<BsYoutube size={iconoDim} className="nav-footer_icon" />
			</a>
			<a
				href="#"
				target=".blank"
				className="nav-footer_btn"
				onClick={calendrHandler}
			>
				<BsFillCalendarWeekFill size={iconoDim} className="nav-footer_icon" />
			</a>
			<div className="calendario_contenedor" ref={calendarioRef}>
				<Calendar />
			</div>
		</div>
	);
};
