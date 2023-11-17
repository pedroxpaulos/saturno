import React from 'react';
import 'react-h5-audio-player/lib/styles.css';
import { FaPlay } from 'react-icons/fa';

const Episodes = ({ PullData, episodes }) => {
	return (
		<div className="text-black bg-white">
			<h1 className="font-display p-5 text-5xl">EPISODES</h1>
			<div className="text-amber-900 flex flex-col md:justify-center">
				{episodes.map((data) => (
					<div className="mb-5 p-5" key={data.number}>
						<div className="mb-5 flex flex-row items-center">
							<div className="font-display text-6xl font-extralight italic underline decoration-wavy decoration-2 hover:decoration-4 decoration-yellow-900">
								{data.number}
							</div>
							<div className="pl-5 text-sm font-extralight ">{data.day}</div>
							<div className="pl-5">
								<button onClick={() => PullData(data)}>
									<FaPlay />
								</button>
							</div>
						</div>
						<div className="font-extralight text-base text-black">
							{data.tracklist.map((track, index) => (
								<p key={index}>{track}</p>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Episodes;
