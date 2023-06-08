import '../style/Seccion.css';
import { Enlace } from './Enlace.jsx';
import { useEffect, useState } from 'react';
//import { AiOutlinePlusCircle } from 'react-icons/ai'; btns
//import { RiDeleteBack2Line } from 'react-icons/ri'; btns

export const Seccion = ({ categoria, dataEnlaces }) => {
	//console.log(dataEnlaces);
	const [links, setLinks] = useState([]);

	//filtra datos segun categoria
	const filtrarEnlacesCategoria = (datos) => {
		let enlaces = datos.filter((e) => e.categoria === categoria);
		setLinks(enlaces);
	};

	useEffect(() => {
		filtrarEnlacesCategoria(dataEnlaces);
	}, []);

	console.log(links);
	return (
		<div className="seccion_container">
			<h3 className="seccion_titulo">{categoria}</h3>
			{links.map((e) => {
				return <Enlace alias={e.alias} enlace={e.enlace} />;
			})}

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
