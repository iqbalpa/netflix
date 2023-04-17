import React from "react";
import Header from "../../layouts/Header/Header";
import Main from "../../layouts/Main/Main";
import Section from "../../components/Section/Section";
import Faq from "../../layouts/Faq/Faq";
import Footer from "../../layouts/Footer/Footer";

const LandingPage = () => {
	const sectionData = [
		{
			text1: "Enjoy on your TV.",
			text2: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
			image: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
			imageRight: true,
		},
		{
			text1: "Download your shows to watch offline.",
			text2: "Save your favorites easily and always have something to watch.",
			image: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
			imageRight: false,
		},
		{
			text1: "Watch everywhere.",
			text2: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
			image: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png",
			imageRight: true,
		},
		{
			text1: "Create profiles for kids.",
			text2: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
			image: "https://occ-0-6701-64.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f",
			imageRight: false,
		},
	];

	return (
		<>
			<div className="bg-landing-page">
				<Header />
				<Main />
				{sectionData.map((section, index) => (
					<Section key={index} text1={section.text1} text2={section.text2} image={section.image} imageRight={section.imageRight} />
				))}
				<div className="h-2 bg-gray-800"></div>
				<Faq />
				<div className="h-2 bg-gray-800"></div>
				<Footer />
			</div>
		</>
	);
};

export default LandingPage;
