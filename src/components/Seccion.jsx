import '../style/Seccion.css';
import { Enlace } from './Enlace.jsx';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { RiDeleteBack2Line } from 'react-icons/ri';

export const Seccion = ({ titulo, dataEnlaces }) => {
	return (
		<div className="seccion_container">
			<h3 className="seccion_titulo">{titulo}</h3>
			<Enlace alias={'Alias Enlace 01'} enlace={'https://www.google.com'} />
			<div className="seccion_btn-container">
				<button className="btn_agregar-enlace">
					<AiOutlinePlusCircle size={25} />
					<p>Nuevo Enlace</p>
				</button>
				<button className="btn_eliminar-seccion">
					<RiDeleteBack2Line size={25} />
					<p>Eliminar Sección</p>
				</button>
			</div>
		</div>
	);
};
