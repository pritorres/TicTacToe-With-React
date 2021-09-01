import React from "react";
import PropTypes from "prop-types";
import { event } from "jquery";

const Players = props => {
	return (
		<>
			<div className="container p-5">
				<br />
				<h5 className="text-white">Pick A Weapon</h5>
				<br />
				<div className="bg-warning m-5 ">
					<h2 className="text-white">CHOOSE YOUR WEAPON</h2>
					<input
						onChange={evento => {
							props.onchangeplayer1(evento.target.value);
						}}
						type="text"
						placeholder="Player 1 username"
						value={props.player1}
					/>
					<input
						onChange={e => {
							props.onchangeplayer2(e.target.value);
						}}
						type="text"
						placeholder="Player 2 username"
						value={props.player2}
					/>
					<div className="d-flex ">
						<div
							className={`bg-secondary ${
								jugadorACTIVO === "jugador1"
									? "cambiocolor"
									: " "
							}`}>
							<h1 className="text-warning">X</h1>
						</div>
						<div className="bg-secondary">
							<h1 className="text-primary">O</h1>
						</div>
					</div>
				</div>
			</div>
			<br />
		</>
	);
};
Players.propTypes = {
	player1: PropTypes.string,
	player2: PropTypes.string,
	onchangeplayer1: PropTypes.string,
	onchangeplayer2: PropTypes.string,
	jugadorACtivo1: PropTypes.string,
	jugadorACtivo2: PropTypes.string,
	jugadorACTIVO: PropTypes.string
};

export default Players;
