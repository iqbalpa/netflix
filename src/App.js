import LandingPage from "./pages/LandingPage/LandingPage";
import SignIn from "./pages/SignIn/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/*" element={<h1>404 No Page</h1>} />
			</Routes>
		</BrowserRouter>
	);
}
