import '../style/Seccion.css';
import { Enlace } from './Enlace.jsx';
//import { AiOutlinePlusCircle } from 'react-icons/ai'; btns
//import { RiDeleteBack2Line } from 'react-icons/ri'; btns

export const Seccion = ({ categoria, dataEnlaces }) => {
	return (
		<div className="seccion_container">
			<h3 className="seccion_titulo">{categoria}</h3>
			<Enlace alias={'Google'} enlace={'https://www.google.com'} />
			<Enlace alias={'Alias Enlace 01'} enlace={'https://www.google.com'} />
			<Enlace alias={'Alias Enlace 01'} enlace={'https://www.google.com'} />
			<Enlace alias={'Alias Enlace 01'} enlace={'https://www.google.com'} />
			<Enlace alias={'Alias Enlace 01'} enlace={'https://www.google.com'} />
			<Enlace alias={'Alias Enlace 01'} enlace={'https://www.google.com'} />

			{/* btns<div className="seccion_btn-container">
				<button className="btn_agregar-enlace">
					<AiOutlinePlusCircle size={25} />
					<p>Nuevo Enlace</p>
				</button>
				<button className="btn_eliminar-seccion">
					<RiDeleteBack2Line size={25} />
					<p>Eliminar Sección</p>
				</button>
			</div>*/}
		</div>
	);
};
