import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Episodes from './components/Episodes';
import NoPage from './components/NoPage';
import Player from './components/Player';
import About from './components/About';
import episodeList from './episodes/episodes';
import TracklistParser from './components/TracklistParser';

function App() {
	const PullData = (data) => {
		setEpisode(data);
	};

	const filteredEpisodes = episodeList.filter((episode) => {
		const formattedDate = episode.day.split('-').reverse().join('-');
		const episodeDate = new Date(formattedDate);
		const oneWeekAgo = new Date();
		oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

		return episodeDate < oneWeekAgo;
	});

	//sorts episodes by date
	const sortedEpisodes = filteredEpisodes.sort((a, b) => {
		const dateA = new Date(a.day.split('-').reverse().join('-'));
		const dateB = new Date(b.day.split('-').reverse().join('-'));

		return dateB - dateA;
	});

	const mostRecentEpisode =
		sortedEpisodes.length > 0 ? sortedEpisodes[0] : null;
	const [episodes, setEpisode] = useState(mostRecentEpisode);

	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Header />} />
					<Route
						path="/episodes"
						element={<Episodes episodes={sortedEpisodes} PullData={PullData} />}
					/>
					<Route path="/parser" element={<TracklistParser />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<NoPage />} />
				</Routes>
				<Player episode={episodes} />
			</BrowserRouter>
		</div>
	);
}

export default App;
