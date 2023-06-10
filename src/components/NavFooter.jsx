import { BiSearchAlt2, BiMailSend } from 'react-icons/bi';
import { BsFillCalendarWeekFill, BsYoutube } from 'react-icons/bs';
import '../style/NavFooter.css';
export const NavFooter = () => {
	const iconoDim = 30;
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
			<a href="#" target=".blank" className="nav-footer_btn">
				<BsFillCalendarWeekFill size={iconoDim} className="nav-footer_icon" />
			</a>
		</div>
	);
};
