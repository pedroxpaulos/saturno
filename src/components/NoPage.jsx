import React from 'react';

const NoPage = () => {
	return (
		<div className="w-full h-screen bg-white text-black">
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<h1 className="text-4xl font-display font-extrabold underline decoration-wavy decoration-2 decoration-yellow-900">
						OOPS! This page doesn't exist.
					</h1>
				</div>
			</div>
		</div>
	);
};

export default NoPage;
