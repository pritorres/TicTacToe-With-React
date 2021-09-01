import React, { useState } from "react";
import ReactDOM from "react";
import Players from "./Players.jsx";
import Play from "./Play.jsx";

//create your first component

const Home = () => {
	const [jugadorActivoActual, setjugadorActivo] = useState("");

	const [player1, setPlayer1] = useState("");

	const [player2, setPlayer2] = useState("");
	const todosLlenos =
		player1 !== "" && player2 !== "" && jugadorActivoActual !== "";

	return (
		<div className="bg-dark text-center">
			<h4 className="text-white">Tic Tac Toe in React.js</h4>
			{!todosLlenos && (
				<Players
					player1={player1}
					player2={player2}
					onchangeplayer1={setPlayer1}
					onchangeplayer2={setPlayer2}
					setjugadorActivo={setjugadorActivo}
				/>
			)}
			{todosLlenos && <Play />}
		</div>
	);
};

export default Home;
