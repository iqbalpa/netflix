import React from "react";

const Section = ({ text1, text2, image, imageRight }) => {
	return (
		<>
			{imageRight && (
				<div className="grid grid-cols-2 bg-black text-white py-10 px-40 items-center">
					<div className="text-center w-full">
						<h1 className="text-5xl text-left tracking-wider font-extrabold mb-6">Enjoy on your TV.</h1>
						<p className="text-3xl text-left">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
					</div>
					<img alt="tv" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
				</div>
			)}
			{!imageRight && (
				<div className="grid grid-cols-2 bg-black text-white py-10 px-40 items-center">
					<img alt="tv" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
					<div className="text-center w-full">
						<h1 className="text-5xl text-left tracking-wider font-extrabold mb-6">Download your shows to watch offline.</h1>
						<p className="text-3xl text-left">Save your favorites easily and always have something to watch.</p>
					</div>
				</div>
			)}
		</>
	);
};

export default Section;
