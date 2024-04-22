import React, { useState } from 'react';

const TracklistParser = () => {
	const [tracklistInput, setTracklistInput] = useState('');
	const [episodeNumber, setEpisodeNumber] = useState('');
	const [episodeDate, setEpisodeDate] = useState('');
	const [episodeLink, setEpisodeLink] = useState('');
	const [tracklistData, setTracklistData] = useState(null);

	const handleChange = (event) => {
		setTracklistInput(event.target.value);
	};

	const handleEpisodeNumberChange = (event) => {
		setEpisodeNumber(event.target.value);
	};

	const handleEpisodeDateChange = (event) => {
		setEpisodeDate(event.target.value);
	};

	const handleEpisodeLinkChange = (event) => {
		setEpisodeLink(event.target.value);
	};

	const parseTracklist = () => {
		const tracklistLines = tracklistInput.split('\n');
		const tracklist = [];
		const startTimes = [];
		const totalTimes = [];

		tracklistLines.forEach((line, index) => {
			if (!line.trim()) return; // Skip empty lines

			const [artist, song, time] = line.split(' - ');
			const timeParts = time.split(/:|\./); // Split by either ":" or "."

			if (timeParts.length !== 2) {
				console.error(`Invalid time format at line ${index + 1}`);
				return;
			}

			const [minutes, seconds] = timeParts;
			const startTime = parseInt(minutes, 10) * 60 + parseInt(seconds, 10);

			tracklist.push(`${artist.trim()} - ${song.trim()}`);
			startTimes.push(startTime);
			console.log('index ' + index + 'startTime ' + startTime);
			if (index !== 0) {
				totalTimes.push(startTime);
			}
		});
		const endTimes = [...totalTimes, 3599];
		console.log('start: ' + startTimes);
		console.log('endtime: ' + endTimes);

		const number = `Saturno ${episodeNumber}`;
		const day = episodeDate;
		const link =
			episodeLink ||
			`https://archive.org/download/saturno-${episodeNumber}-${episodeDate.replace(
				/-/g,
				''
			)}/saturno%20${episodeNumber}%20%20-%20${episodeDate}.mp3`; // If episodeLink is empty, use the generated link

		setTracklistData({
			number,
			day,
			link,
			tracklist,
			startTimes,
			endTimes,
		});
	};

	const copyToClipboard = () => {
		const el = document.createElement('textarea');
		el.value = JSON.stringify(tracklistData, null, 2);
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
	};

	return (
		<div className="max-w-3xl mx-auto mt-20 mb-40 p-4 bg-gray-100 rounded-lg">
			<div className="mb-4">
				<label htmlFor="episodeNumber" className="block mb-2 font-semibold">
					Episode Number:
				</label>
				<input
					type="text"
					id="episodeNumber"
					value={episodeNumber}
					onChange={handleEpisodeNumberChange}
					className="w-full p-2 border border-gray-300 rounded"
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="episodeDate" className="block mb-2 font-semibold">
					Episode Date (dd-mm-yyyy):
				</label>
				<input
					type="text"
					id="episodeDate"
					value={episodeDate}
					onChange={handleEpisodeDateChange}
					className="w-full p-2 border border-gray-300 rounded"
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="episodeLink" className="block mb-2 font-semibold">
					Episode Link:
				</label>
				<input
					type="text"
					id="episodeLink"
					value={episodeLink}
					onChange={handleEpisodeLinkChange}
					className="w-full p-2 border border-gray-300 rounded"
				/>
			</div>
			<textarea
				value={tracklistInput}
				onChange={handleChange}
				placeholder="Enter tracklist in the format 'artist - song - mm:ss' or 'artist - song - mm.ss' separated by newline"
				rows={10}
				className="w-full p-2 border border-gray-300 rounded mb-4"
			/>
			<button
				onClick={parseTracklist}
				className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
			>
				Parse Tracklist
			</button>
			{tracklistData && (
				<div className="mt-8">
					<h3 className="text-lg font-semibold mb-2">Parsed Tracklist</h3>
					<p>
						<span className="font-semibold">Number:</span>{' '}
						{tracklistData.number}
					</p>
					<p>
						<span className="font-semibold">Day:</span> {tracklistData.day}
					</p>
					<p>
						<span className="font-semibold">Link:</span>{' '}
						<a
							href={tracklistData.link}
							className="text-blue-500 hover:underline"
						>
							{tracklistData.link}
						</a>
					</p>
					<ul className="list-disc pl-5 mt-4">
						{tracklistData.tracklist.map((track, index) => (
							<li key={index}>{track}</li>
						))}
					</ul>
					<p>
						<span className="font-semibold">Start Times:</span>{' '}
						{JSON.stringify(tracklistData.startTimes)}
					</p>
					<p>
						<span className="font-semibold">End Times:</span>{' '}
						{JSON.stringify(tracklistData.endTimes)}
					</p>
					<button
						onClick={copyToClipboard}
						className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
					>
						Copy to Clipboard
					</button>
				</div>
			)}
		</div>
	);
};

export default TracklistParser;
