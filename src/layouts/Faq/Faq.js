import React from "react";
import Qna from "../../components/Qna/Qna";

const Faq = () => {
	return (
		<>
			<div className="bg-black h-96 py-20 px-52 text-white ">
				<h1 className="text-5xl text-center font-extrabold mb-6">Frequently Asked Questions</h1>
				<Qna />
			</div>
		</>
	);
};

export default Faq;
