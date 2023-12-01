import episodeList from './App';

const fs = require('fs');
const RSS = require('rss');

const feed = new RSS({
	title: 'Your Podcast Title',
	description: 'Your podcast description',
	feed_url: 'https://your-podcast-url.com/feed',
	site_url: 'https://your-podcast-url.com',
	image_url: 'https://your-podcast-url.com/logo.png',
	managingEditor: 'your@email.com (Your Name)',
	webMaster: 'your@email.com (Your Name)',
	language: 'en',
	pubDate: new Date(),
});

episodeList.forEach((episode) => {
	const { number, day, link, tracklist } = episode;

	const episodeData = {
		title: `Episode ${number} - ${day}`,
		description: `Description for Episode ${number}`,
		url: link,
		guid: link,
		author: 'Your Name',
		date: new Date(),
		enclosure: {
			url: link,
			file: link,
			type: 'audio/mpeg',
		},
	};

	tracklist.forEach((track) => {
		episodeData.custom_elements = [
			{ 'itunes:author': 'Your Name' },
			{ 'itunes:subtitle': track.title },
			{ 'itunes:summary': track.title },
			{ 'itunes:duration': '00:05:00' }, // You can adjust the duration
		];
	});

	feed.item(episodeData);
});

const xml = feed.xml({ indent: true });

fs.writeFileSync('podcast-feed.xml', xml, 'utf-8');

console.log('Podcast feed generated successfully.');
