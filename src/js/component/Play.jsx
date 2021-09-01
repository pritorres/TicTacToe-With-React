import React from "react";

const Play = () => {
	return (
		<div clasNameName="container bg-dark p-5">
			<br />
			<h5 clasNameName="text-white">It is X turn</h5>
			<br />
			<button clasNameName="rounded-pill">Start Over</button>
			<div className="container">
				<div className="row">
					<div className="square col-4">1</div>
					<div className="square col-4">2</div>
					<div className="square col-4">3</div>
					<div className="square col-4">4</div>
					<div className="square col-4">5</div>
					<div className="square col-4">6</div>
					<div className="square col-4">7</div>
					<div className="square col-4">8</div>
					<div className="square col-4">9</div>
				</div>
			</div>
		</div>
	);
};

export default Play;
