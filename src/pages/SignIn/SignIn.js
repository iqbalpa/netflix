import React from "react";
import Logo from "../../assets/netflix-logo.png";
import Footer from "../../layouts/Footer/Footer";

const SignIn = () => {
	return (
		<>
			{/* <div className="absolute top-0 left-0 z-10 h-screen w-screen bg-black/30"></div> */}
			<div className="bg-landing-page h-screen w-screen p-10">
				<img src={Logo} alt="Netflix Logo" className="w-40" />
				<div className="flex flex-col justify-center items-center">
					<div className="w-[30rem] h-[40rem] bg-black/70 text-white rounded-lg py-10 px-20">
						<h1 className="text-3xl font-bold mb-7 mt-10">Sign In</h1>
						<form className="flex flex-col">
							<input placeholder="Email or Phone Number" type="email" name="email" id="email" className="h-12 mb-5 px-4 py-2 rounded-lg bg-gray-600" />
							<input placeholder="Password" type="password" name="password" id="password" className="h-12 mb-5 px-4 py-2 rounded-lg bg-gray-600" />
							<button className="h-12 bg-red-600 hover:bg-red-800 font-bold text-white p-2 rounded-lg">Sign In</button>
							<div className="flex flex-row justify-between mt-4">
								<div className="flex flex-row items-center">
									<input type="checkbox" name="remember" id="remember" className="" />
									<label htmlFor="remember" className="ml-2">
										Remember me
									</label>
								</div>
								<p className="hover:underline">Need Help?</p>
							</div>
						</form>
						<div className="mt-16 text-gray-400">
							<p className="text-lg">
								New to Netflix?
								<a href="/" className="hover:underline text-white ml-3">
									Sign Up now
								</a>
							</p>
							<p className="text-sm mt-3">
								This page is protected by Google reCAPTCHA to ensure you're not a bot.
								<a href="/" className="text-blue-500 hover:underline">
									&nbsp;Learn more.
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="h-full w-screen bg-black">
				<Footer />
			</div>
		</>
	);
};

export default SignIn;
