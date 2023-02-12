import React from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";

const LandingPage = () => {
	return (
		<>
			<div className="bg-landing-page">
				<Header />
				<Main />
				<div className="h-2 bg-gray-800"></div>
				<Section />
			</div>
		</>
	);
};

export default LandingPage;
