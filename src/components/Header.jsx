import React from 'react';

function Header({ episode, PullData }) {
	return (
		<div className="text-black bg-white overflow-hidden mx-auto md:w-1/2">
			<div className="max-w-6xl p-4 mt-40 flex flex-col justify-center w-full h-full">
				<div className="mb-6">
					<h1
						className=" font-display
						text-4xl
						md:text-6xl
						lg:text-8xl
						2xl:text-9xl
						text-transparent
						underline
						decoration-wavy
						decoration-2
						hover:decoration-4
						decoration-yellow-900
						bg-clip-text bg-gradient-to-r from-black to-yellow-900
						"
					>
						Música para outras dimensões
					</h1>
				</div>
				<div className="mb-8">
					<h3 className="text-base uppercase font-light">
						Todas as semanas na FUTURA
					</h3>
					<h3 className="text-sm uppercase font-thin">Sextas-feiras ⬤ 17h00</h3>
					<h3 className="text-sm uppercase font-thin">
						Quinta-feira seguinte ⬤ 17h00 ⬤ Repetição
					</h3>
				</div>
			</div>
		</div>
	);
}

export default Header;
