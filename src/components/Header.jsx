import React from 'react';

function Header() {
	return (
		<div className="w-full h-screen text-black bg-white border-b-2 overflow-hidden">
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-9">
					<h1
						className="font-display
						sm:text-4 xl
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
				<h3 className="text-base uppercase font-light">
					Todas as semanas na FUTURA
				</h3>
				<h3 className="text-sm uppercase font-thin">Sextas-feiras ⬤ 17h00</h3>
				<h3 className="text-sm uppercase font-thin">
					Repetição ⬤ Quinta-feira seguinte ⬤ 17h00
				</h3>
			</div>
		</div>
	);
}

export default Header;
