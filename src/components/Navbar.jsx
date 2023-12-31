import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const links = [
		{ id: 1, link: '/', text: 'Home' },
		{ id: 2, link: '/about', text: 'Sobre' },
		{ id: 3, link: '/episodes', text: 'Episódios' },
		{
			id: 4,
			link: 'https://open.spotify.com/playlist/0eEsHhfILKmDF3DNMj1G6V',
			text: `Playlist`,
			extra: '_blank',
		},
		{
			id: 5,
			link: 'mailto://pedropaulos@brandoscostumes.pt',
			text: 'Contactar',
		},
	];

	return (
		<div className="flex justify-between items-center w-full h-20 px-4 text-black bg-white border-b-2 border-yellow-900 fixed inset-x-0 top-0">
			<div className="flex flex-row items-center">
				<h1 className="font-display sm:text-xs md:text-5xl ml-2underline decoration-wavy decoration-2 hover:decoration-4 decoration-yellow-900">
					SATURNO
				</h1>
				<h2 className="font-body ml-4 text-xs font-thin">POR PEDRO PAULOS</h2>
			</div>

			<ul className="hidden md:flex">
				{links.map(({ id, link, text }) => (
					<li
						key={id}
						className="font-display px-4 cursor-pointer capitalize font-extralight text-gray-700 hover:underline decoration-wavy decoration-2 decoration-yellow-900"
					>
						<Link to={link} className="flex items-center">
							{text === 'Playlist' ? (
								<>
									{text}
									<FaSpotify className="ml-1" />
								</>
							) : (
								text
							)}
						</Link>
					</li>
				))}
			</ul>
			<div
				onClick={() => setNav(!nav)}
				className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
			>
				{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>
			{nav && (
				<ul className="flex flex-col justify-center items-center -mt-10 absolute top-0 w-full h-screen bg-white text-black ">
					{links.map(({ id, link, text, extra }) => (
						<li
							key={id}
							className="px4 cursor-pointer capitalize py-6 text-1xl font-extralight md:underline decoration-wavy decoration-2 decoration-yellow-900"
						>
							<Link
								className="flex items-center"
								target={extra}
								onClick={() => setNav(!nav)}
								to={link}
							>
								{text === 'Playlist' ? (
									<>
										{text}
										<FaSpotify className="ml-2" />
									</>
								) : (
									text
								)}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Navbar;
