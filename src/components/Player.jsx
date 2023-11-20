import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = ({ episode }) => {
	return (
		<div className="fixed inset-x-0 bottom-0 max-w-full">
			<div className="pl-5 bg-gradient-to-r from-black to-yellow-900 text-white">
				<p className="font-display text-sm uppercase font-thin">
					{episode.number}
				</p>
				<p className="text-sm uppercase font-thin">{episode.day}</p>
			</div>
			<AudioPlayer
				src={episode.link}
				onPlay={(e) => console.log('onPlay')}
				// other props here
			/>
		</div>
	);
};

export default Player;
