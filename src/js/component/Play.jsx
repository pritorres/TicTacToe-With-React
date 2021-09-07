import React from "react";
import PropTypes from "prop-types";

const Play = props => {
	const {
		jugadorActivoActual,
		jugadaPosicion,
		jugadas,
		resetarMatrix
	} = props;

	return (
		<div className="container bg-dark p-5">
			<br />
			<h5 className="text-white">It is X turn</h5>
			<br />
			<button
				className="rounded-pill mb-3"
				onClick={() => resetarMatrix()}>
				Start Over
			</button>
			<div className="container">
				<div className="row">
					<div
						className={`square col-4`}
						onClick={() => {
							jugadaPosicion(0, jugadorActivoActual);
						}}>
						{jugadas[0]}
					</div>
					<div
						className={`square col-4`}
						onClick={() => {
							jugadaPosicion(1, jugadorActivoActual);
						}}>
						{jugadas[1]}
					</div>
					<div
						className={`square col-4`}
						onClick={() => {
							jugadaPosicion(2, jugadorActivoActual);
						}}>
						{jugadas[2]}
					</div>
					<div
						className={`square col-4`}
						onClick={() => {
							jugadaPosicion(3, jugadorActivoActual);
						}}>
						{jugadas[3]}
					</div>
					<div
						className={`square col-4`}
						onClick={() => {
							jugadaPosicion(4, jugadorActivoActual);
						}}>
						{jugadas[4]}
					</div>
					<div
						className={`square col-4`}
						onClick={() => {
							jugadaPosicion(5, jugadorActivoActual);
						}}>
						{jugadas[5]}
					</div>
					<div
						className={`square col-4`}
						onClick={() => {
							jugadaPosicion(6, jugadorActivoActual);
						}}>
						{jugadas[6]}
					</div>
					<div
						className={`square col-4`}
						onClick={() => {
							jugadaPosicion(7, jugadorActivoActual);
						}}>
						{jugadas[7]}
					</div>
					<div
						className={`square col-4`}
						onClick={() => {
							jugadaPosicion(8, jugadorActivoActual);
						}}>
						{jugadas[8]}
					</div>
				</div>
			</div>
		</div>
	);
};
Play.propTypes = {
	jugadorActivoActual: PropTypes.string,
	jugadaPosicion: PropTypes.func,
	jugadas: PropTypes.array,
	resetarMatrix: PropTypes.func
};
export default Play;
