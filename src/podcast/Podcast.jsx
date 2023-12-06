import episodeList from './App';

const fs = require('fs');
const RSS = require('rss');

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
		description: tracklist,
		url: link,
		guid: link,
		author: 'Pedro Paulos',
		date: new Date(),
		enclosure: {
			url: link,
			file: link,
			type: 'audio/mpeg',
		},
	};

	tracklist.forEach((track) => {
		episodeData.custom_elements = [
			{ 'itunes:author': 'Pedro Paulos' },
			{ 'itunes:subtitle': track.title },
			{ 'itunes:summary': track.title },
			{ 'itunes:duration': '01:00:00' }, // You can adjust the duration
		];
	});

	feed.item(episodeData);
});

const xml = feed.xml({ indent: true });

fs.writeFileSync('podcast-feed.xml', xml, 'utf-8');

console.log('Podcast feed generated successfully.');
