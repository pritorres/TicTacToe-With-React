import React, { useState } from "react";
import ReactDOM from "react";
import Players from "./Players.jsx";
import Play from "./Play.jsx";

//create your first component

const Home = () => {
	const [jugadorActivoActual, setjugadorActivo] = useState();

	const [player1, setPlayer1] = useState("");

	const [player2, setPlayer2] = useState("");
	const x = player1 !== "" && player2 !== "";
	console.log(x);
	return (
		<div className="bg-dark text-center">
			<h4 className="text-white">Tic Tac Toe in React.js</h4>
			<Players
				player1={player1}
				player2={player2}
				onchangeplayer1={setPlayer1}
				onchangeplayer2={setPlayer2}
				setjugadorActivo={setjugadorActivo}
			/>
			<Play />
		</div>
	);
};

export default Home;
