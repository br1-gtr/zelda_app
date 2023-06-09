import './App.css';
import { useEffect, useState } from 'react';
import { DATOS_EXCEL } from './DATOS_EXCEL/DATOS_EXCEL.js';
import { Reloj } from './components/Reloj';
import { Seccion } from './components/Seccion';

function App() {
	const [cat, setCat] = useState([]);
	const filtrarCategorias = (datos) => {
		//arr categorias total
		let catAux = [];
		datos.forEach((e) => {
			catAux = [...catAux, e.categoria];
		});
		//arr de categorias unicas
		let categoriasFiltradas = [];
		catAux.forEach((e) => {
			if (!categoriasFiltradas.includes(e)) {
				categoriasFiltradas.push(e);
			}
		});
		setCat(categoriasFiltradas);
	};

	useEffect(() => {
		filtrarCategorias(DATOS_EXCEL);
	}, []);

	return (
		<div className="app">
			<Reloj />
			<h1>LINK-ED</h1>
			<div className="contenedor">
				{cat.map((categoria) => {
					return <Seccion categoria={categoria} dataEnlaces={DATOS_EXCEL} />;
				})}
			</div>
		</div>
	);
}
export default App;
