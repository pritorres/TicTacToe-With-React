import React, { useState } from "react";
import ReactDOM from "react";
import Players from "./Players.jsx";
import Play from "./Play.jsx";

//create your first component

const Home = () => {
	const [jugadorActivo, setjugadorActivo] = useState();
	const jugadorACtivo1 = () => {
		setjugadorActivo("jugador1");
	};
	const jugadorACtivo2 = () => {
		setjugadorActivo("jugador2");
	};

	const [player1, setPlayer1] = useState("");
	const [player2, setPlayer2] = useState("");

	return (
		<div className="bg-dark text-center">
			<h4 className="text-white">Tic Tac Toe in React.js</h4>
			<Players
				player1={player1}
				player2={player2}
				onchangeplayer1={setPlayer1}
				onchangeplayer2={setPlayer2}
				jugadorACtivo1={jugadorACtivo1}
				jugadorACtivo2={jugadorACtivo2}
				jugadorACTIVO={setjugadorActivo}
			/>
			<Play />
		</div>
	);
};

export default Home;
