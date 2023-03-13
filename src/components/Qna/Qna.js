import React, { useState } from "react";

const Qna = ({ question, answer }) => {
	const [show, setShow] = useState(false);
	const handleClick = () => {
		setShow(!show);
	};

	return (
		<>
			<div className="mb-2">
				<button onClick={handleClick} className="w-full">
					<div className="bg-gray-700 hover:bg-gray-500 hover:cursor-pointer p-5 mb-1 flex flex-row justify-center items-center">
						<p className="text-3xl ">{question}</p>
						<button className="text-5xl ml-auto">{show ? "x" : "+"}</button>
					</div>
				</button>

				{show && (
					<div className="bg-gray-700 p-5">
						<p className="text-2xl">{answer}</p>
					</div>
				)}
			</div>
		</>
	);
};

export default Qna;
