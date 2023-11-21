import React from 'react';
import 'react-h5-audio-player/lib/styles.css';
import { FaPlay } from 'react-icons/fa';

const Episodes = ({ PullData, episodes }) => {
	return (
		<div className="mt-20 mb-40 text-black bg-white mx-auto md:w-1/2">
			<div className="text-amber-900 flex flex-col md:justify-center">
				{episodes.map((data) => (
					<div className="mb-5 p-5" key={data.number}>
						<div className="mb-5 flex flex-row items-center">
							<div className="font-display sm:text-normal lg:text-normal font-extralight italic underline decoration-wavy decoration-2 hover:decoration-4 decoration-yellow-900">
								{data.number}
							</div>
							<div className="pl-5 text-sm font-extralight ">{data.day}</div>
							<div className="pl-5">
								<button onClick={() => PullData(data)}>
									<FaPlay />
								</button>
							</div>
						</div>
						<div className="font-extralight sm:text-xs md:text-sm text-black">
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
