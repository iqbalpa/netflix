import React from "react";
import GetStartedButton from "../../components/GetStartedButton/GetStartedButton";

const Main = () => {
	return (
		<>
			<div className="bg-black/30 pt-[17rem] pb-10 text-white flex flex-col justify-center items-center">
				<h1 className="text-5xl font-extrabold tracking-wide mb-7">Unlimited movies, TV shows, and more.</h1>
				<h3 className="text-3xl mb-6">Watch anywhere. Cancel anytime.</h3>
				<h4 className="text-2xl mb-5">Ready to watch? Enter your email to create or restart your membership.</h4>
				<GetStartedButton />
			</div>
			<div className="h-20 bg-gradient-to-t from-black/90 to-black/30"></div>
		</>
	);
};

export default Main;
