import '../style/Enlace.css';
import { AiOutlineEdit, AiFillDelete } from 'react-icons/ai';
export const Enlace = ({ alias, enlace }) => {
	return (
		<div className="link_container">
			<a className="link_alias" href={enlace} target=".blank">
				{alias}
			</a>
			<div className="link_btn-container">
				<button className="btn_edit">
					<AiOutlineEdit size={25} />
				</button>
				<button className="btn_delete">
					<AiFillDelete size={25} />
				</button>
			</div>
		</div>
	);
};
