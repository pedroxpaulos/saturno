import React, { useState, useEffect, useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { FaMusic } from 'react-icons/fa';

const Player = ({ episode }) => {
	const [currentSong, setCurrentSong] = useState(null);
	const audioPlayerRef = useRef(null);

	useEffect(() => {
		const audioPlayer = audioPlayerRef.current?.audio?.current;
		console.log(audioPlayer);

		const updateCurrentSong = () => {
			const currentTime = audioPlayer?.currentTime;

			// Ensure episode object and necessary properties exist
			if (
				episode &&
				Array.isArray(episode.startTimes) &&
				Array.isArray(episode.endTimes)
			) {
				// Check if tracklist array is available and has the same length as startTimes and endTimes
				if (
					Array.isArray(episode.tracklist) &&
					episode.tracklist.length === episode.startTimes.length &&
					episode.tracklist.length === episode.endTimes.length
				) {
					// Find the song that is currently playing based on the current time
					for (let i = 0; i < episode.startTimes.length; i++) {
						if (
							currentTime >= episode.startTimes[i] &&
							currentTime <= episode.endTimes[i]
						) {
							setCurrentSong(episode.tracklist[i]);
							break;
						}
					}
				} else {
					console.error('Invalid tracklist structure in the episode object');
				}
			} else {
				console.error('Invalid episode object structure');
			}
		};

		audioPlayer?.addEventListener('timeupdate', updateCurrentSong);

		// Clean up the event listener on component unmount
		return () => {
			audioPlayer?.removeEventListener('timeupdate', updateCurrentSong);
		};
	}, [episode]);

	// Reset currentSong when episode.link changes
	useEffect(() => {
		setCurrentSong(null);
	}, [episode.link]);

	return (
		<div className="fixed inset-x-0 bottom-0 max-w-full">
			<div className="pl-5 bg-gradient-to-r from-black to-yellow-900 text-white">
				<p className="font-display text-sm uppercase font-thin">
					{episode.number}
				</p>
				<p className="text-sm uppercase font-thin">{episode.day}</p>
				{currentSong && (
					<p className="text-sm flex flex-row">
						<FaMusic />
						{currentSong}
					</p>
				)}
			</div>
			<AudioPlayer
				ref={audioPlayerRef}
				src={episode.link}
				onPlay={(e) => console.log('onPlay')}
				// other props here
			/>
		</div>
	);
};

export default Player;
