import React from "react";
import LanguageDropdown from "../../components/LanguageDropdown/LanguageDropdown";

const Footer = () => {
	return (
		<>
			<div className="bg-black text-white px-52 py-20">
				<p className="text-lg mb-8">Questions? Call 007-803-321-2130</p>
				<div className="grid grid-cols-4 underline mb-8">
					<div className="flex flex-col">
						<a href="/" className="mb-2">
							FAQ
						</a>
						<a href="/" className="mb-2">
							Investor Relations
						</a>
						<a href="/" className="mb-2">
							Ways to Watch
						</a>
						<a href="/" className="mb-2">
							Corporate Information
						</a>
						<a href="/" className="mb-2">
							Only on Netflix
						</a>
					</div>
					<div className="flex flex-col">
						<a href="/" className="mb-2">
							Help Center
						</a>
						<a href="/" className="mb-2">
							Jobs
						</a>
						<a href="/" className="mb-2">
							Terms of Use
						</a>
						<a href="/" className="mb-2">
							Contact Us
						</a>
					</div>
					<div className="flex flex-col">
						<a href="/" className="mb-2">
							Account
						</a>
						<a href="/" className="mb-2">
							Redeem Gift Cards
						</a>
						<a href="/" className="mb-2">
							Privacy
						</a>
						<a href="/" className="mb-2">
							Speed Test
						</a>
					</div>
					<div className="flex flex-col">
						<a href="/" className="mb-2">
							Media Center
						</a>
						<a href="/" className="mb-2">
							Buy Gift Cards
						</a>
						<a href="/" className="mb-2">
							Cookie Preferences
						</a>
						<a href="/" className="mb-2">
							Legal Notices
						</a>
					</div>
				</div>
				<LanguageDropdown />
				<p className="mt-8 text-lg">Netflix Indonesia</p>
			</div>
		</>
	);
};

export default Footer;
