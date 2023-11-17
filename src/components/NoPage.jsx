import React from 'react';

const NoPage = () => {
	return (
		<div className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<h1 className="text-9xl font-extrabold inline border-b-4 border-gray-500">
						OOPS. THIS PAGE DOESN'T EXIST.
					</h1>
				</div>
			</div>
		</div>
	);
};

export default NoPage;
