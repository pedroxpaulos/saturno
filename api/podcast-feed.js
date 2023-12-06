const episodeList = require('../src/App.js'); // Adjust the path and extension accordingly
const express = require('express');
const RSS = require('rss');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/podcast-feed.xml', async (req, res) => {
	try {
		const xml = await generatePodcastFeed();
		res.setHeader('Content-Type', 'application/xml');
		res.status(200).send(xml);
	} catch (error) {
		console.error('Error generating podcast feed:', error);
		res.status(500).send('Internal Server Error');
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

async function generatePodcastFeed() {
	const feed = new RSS({
		title: 'Saturno',
		description: 'Your podcast description',
		feed_url: 'https://your-podcast-url.com/feed',
		site_url: 'http://saturno.id',
		image_url: 'https://your-podcast-url.com/logo.png',
		managingEditor: 'pedropaulos@brandoscostumes.pt',
		webMaster: 'pedropaulos@brandoscostumes.pt',
		language: 'en',
		pubDate: new Date(),
	});

	episodeList.forEach((episode) => {
		const { number, day, link, tracklist } = episode;

		const episodeData = {
			title: `Episode ${number} - ${day}`,
			description: tracklist.map((track) => track.title).join(', '), // Join track titles
			url: link,
			guid: link,
			author: 'Pedro Paulos',
			date: new Date(),
			enclosure: {
				url: link,
				file: link,
				type: 'audio/mpeg',
			},
			custom_elements: [],
		};

		tracklist.forEach((track) => {
			episodeData.custom_elements.push(
				{ 'itunes:author': 'Pedro Paulos' },
				{ 'itunes:subtitle': track.title },
				{ 'itunes:summary': track.title },
				{ 'itunes:duration': '01:00:00' } // You can adjust the duration
			);
		});

		feed.item(episodeData);
	});

	const xml = feed.xml({ indent: true });

	// Write the XML file to the Vercel NOW directory
	const filePath = path.join('/var/task', 'podcast-feed.xml');
	await fs.writeFile(filePath, xml, 'utf-8');

	console.log('Podcast feed generated successfully.');
	return xml;
}

module.exports = generatePodcastFeed;
