import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react";
import Players from "./Players.jsx";
import Play from "./Play.jsx";

//create your first component

const Home = () => {
	const [jugadas, setJugadas] = useState([
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null
	]);

	const [jugadorActivoActual, setJugadorActivo] = useState("");

	const [player1, setPlayer1] = useState("");

	const [player2, setPlayer2] = useState("");
	const [ganador, setGanador] = useState(false);

	const todosLlenos =
		player1 !== "" && player2 !== "" && jugadorActivoActual !== "";

	const jugadaPosicion = (posicion, newJugadroActual) => {
		if (jugadas[posicion] === null && ganador === false) {
			let newJugadas = [...jugadas];
			newJugadas[posicion] = newJugadroActual;
			console.log("newjugadas", newJugadas);
			let newGanador = validarGanador(newJugadas);
			if (newGanador) {
				setGanador(true);
			} else {
				setJugadorActivo(jugadorActivoActual === "X" ? "O" : "X");
			}

			setJugadas(newJugadas);
		}
	};

	//funcion para validar ganador
	const validarGanador = newJugadas => {
		let test1 =
			newJugadas[0] !== null &&
			newJugadas[0] === newJugadas[1] &&
			newJugadas[1] === newJugadas[2];

		let test2 =
			newJugadas[3] !== null &&
			newJugadas[3] === newJugadas[4] &&
			newJugadas[4] === newJugadas[5];
		let test3 =
			newJugadas[6] !== null &&
			newJugadas[6] === newJugadas[7] &&
			newJugadas[6] === newJugadas[8];
		let test4 =
			newJugadas[0] !== null &&
			newJugadas[0] === newJugadas[3] &&
			newJugadas[3] === newJugadas[6];
		let test5 =
			newJugadas[1] !== null &&
			newJugadas[1] === newJugadas[4] &&
			newJugadas[4] === newJugadas[7];
		let test6 =
			newJugadas[2] !== null &&
			newJugadas[2] === newJugadas[5] &&
			newJugadas[5] === newJugadas[8];
		let test7 =
			newJugadas[0] !== null &&
			newJugadas[0] === newJugadas[4] &&
			newJugadas[4] === newJugadas[8];
		let test8 =
			newJugadas[2] !== null &&
			newJugadas[2] === newJugadas[4] &&
			newJugadas[4] === newJugadas[6];

		let ganador =
			test1 ||
			test2 ||
			test3 ||
			test4 ||
			test5 ||
			test6 ||
			test7 ||
			test8;
		return ganador;
	};

	//funcion para resetear la jugada
	const resetarMatrix = () => {
		setJugadas([null, null, null, null, null, null, null, null, null]),
			setGanador(false);
	};

	return (
		<div className="text-center">
			<h4 className="text-white pt-5">Tic Tac Toe in React.js</h4>
			{ganador === true && (
				<div>
					<h1>{jugadorActivoActual} Winner</h1>
				</div>
			)}
			{!todosLlenos && (
				<Players
					player1={player1}
					player2={player2}
					onchangeplayer1={setPlayer1}
					onchangeplayer2={setPlayer2}
					setJugadorActivo={setJugadorActivo}
					jugadorActivoActual={jugadorActivoActual}
				/>
			)}
			{todosLlenos && (
				<Play
					jugadaPosicion={jugadaPosicion}
					jugadorActivoActual={jugadorActivoActual}
					jugadas={jugadas}
					resetarMatrix={resetarMatrix}
				/>
			)}
		</div>
	);
};

export default Home;
