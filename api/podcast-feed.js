// api/podcast-feed.js
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
	const xmlPath = path.join(
		__dirname,
		'..',
		'../src/podcast/Podcast.jsx',
		'podcast-feed.xml'
	);
	const xmlContent = fs.readFileSync(xmlPath, 'utf-8');

	res.setHeader('Content-Type', 'application/xml');
	res.status(200).send(xmlContent);
};
