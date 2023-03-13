import React, { useState } from "react";

const Qna = () => {
	const [show, setShow] = useState(false);
	const handleClick = () => {
		setShow(!show);
	};

	return (
		<>
			<div>
				<div className="bg-gray-700 p-5 mb-1 flex flex-row justify-center items-center">
					<p className="text-3xl ">What is Netflix?</p>
					<button onClick={handleClick} className="text-5xl ml-auto">
						{show ? "x" : "+"}
					</button>
				</div>

				{show && (
					<div className="bg-gray-700 p-5">
						<p className="text-2xl">
							Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever
							you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
						</p>
					</div>
				)}
			</div>
		</>
	);
};

export default Qna;
