import React from "react";
import PropTypes from "prop-types";
import { event } from "jquery";

const Players = props => {
	const { player1, setjugadorActivo } = props;
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
						value={player1}
					/>
					<input
						onChange={e => {
							props.onchangeplayer2(e.target.value);
						}}
						type="text"
						placeholder="Player 2 username"
						value={props.player2}
					/>
					<div className="d-flex justify-content-center">
						<div
							className={`cambiocolor`}
							onClick={() => {
								setjugadorActivo("X");
							}}>
							X
						</div>
						<div
							className={`cambiocolor`}
							onClick={() => {
								setjugadorActivo("O");
							}}>
							O
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
	setjugadorActivo: PropTypes.string
};

export default Players;
