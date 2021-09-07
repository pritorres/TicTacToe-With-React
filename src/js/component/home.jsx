import React, { useState, useEffect } from "react";
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
	const todosLlenos =
		player1 !== "" && player2 !== "" && jugadorActivoActual !== "";

	const jugadaPosicion = (posicion, jugada) => {
		if (jugadas[posicion] === null) {
			let newJugadas = [...jugadas];
			newJugadas[posicion] = jugada;
			setJugadas(newJugadas);
			//validar aqui ganador de la partida
			let ganador = validarGanador();
			clickMatrix();
		}
	};
	const clickMatrix = () => {
		setJugadorActivo(jugadorActivoActual === "X" ? "O" : "X");
	};

	//funcion para validar ganador
	const validarGanador = () => {
		console.log("posiion", jugadas);
		let test1 =
			jugadas[0] !== null &&
			jugadas[0] === jugadas[1] &&
			jugadas[1] === jugadas[2];
		let test2 =
			jugadas[3] !== null &&
			jugadas[3] === jugadas[4] &&
			jugadas[4] === jugadas[5];
		let test3 =
			jugadas[6] !== null &&
			jugadas[6] === jugadas[7] &&
			jugadas[6] === jugadas[8];
		let test4 =
			jugadas[0] !== null &&
			jugadas[0] === jugadas[3] &&
			jugadas[3] === jugadas[6];
		let test5 =
			jugadas[1] !== null &&
			jugadas[1] === jugadas[4] &&
			jugadas[4] === jugadas[7];
		let test6 =
			jugadas[2] !== null &&
			jugadas[2] === jugadas[5] &&
			jugadas[5] === jugadas[8];
		let test7 =
			jugadas[0] !== null &&
			jugadas[0] === jugadas[4] &&
			jugadas[4] === jugadas[8];
		let test8 =
			jugadas[2] !== null &&
			jugadas[2] === jugadas[4] &&
			jugadas[4] === jugadas[6];

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
		setJugadas([null, null, null, null, null, null, null, null, null]);
	};

	useEffect(() => {
		let resultado = validarGanador();
		console.log(resultado);
	}, [jugadas]);

	return (
		<div className="text-center">
			<h4 className="text-white pt-5">Tic Tac Toe in React.js</h4>
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
