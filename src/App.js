import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Episodes from './components/Episodes';
import NoPage from './components/NoPage';
import Player from './components/Player';
import About from './components/About';

function App() {
	const episodeList = [
		{
			number: 'Saturno 001',
			day: '13-10-2023',
			link: 'https://ia600503.us.archive.org/20/items/saturno-005-10-11-2023/Saturno%20001%20-%2013-10-2023.mp3',
			tracklist: [
				'Karen Dalton - Something on Your Mind',
				"Muddy Monk - L'aventura",
				'Warehouse - Super Low',
				'Ruth Orhiunu - Loving Goes Down',
				'Daniela Andrade - Ayaya',
				'Noname - Reality Check',
				'Ari Lennox - Whipped Cream',
				"Father's Children - Dirt and Grime",
				'Prins Thomas - Feel The Love',
				'Jaako Eino Kalevi - Sensaatio',
				'Squid - The Dial',
				'The Undertones - When Saturday Comes',
				"Zzzahara - Cupid's Out Tonight",
				'Curfew - Lazy',
				'Joe Unknown - Ride',
				'Tlim Shug - dk001',
				'Everything But The Girl - Night and Day',
			],
		},
		{
			number: 'Saturno 002',
			day: '20-10-2023',
			link: 'https://archive.org/download/saturno-005-10-11-2023/Saturno%20002%20-%2020-10-2023.mp3',
			tracklist: [
				'Irma Thomas - Anyone Who Knows What Love Is (Will Understand)',
				'Ruthven - Have You Decided?',
				'Gordi - Nothing as It Seems',
				'Mauv + Pixx - Change Will Come Anyway',
				'Blood Orange - I Am Sorry We Lied',
				'Santigold - Light’s Out',
				'CloeTheGod - Outta My Mind',
				'Gabby’s World - I Admit I’m Scared',
				'Noah Slee - With Off',
				'Moxie - Oh! Frency',
				'Teyana Taylor - Gonna Love Me',
				'Men I Trust - Ring of Past',
				'Kate Tempest - Theme From Becky',
				'Dean + Wesley Joseph - Sugar Dive',
				'Cybertrash - Play Pretend',
				'Wu-Lu - Times',
				'Hole - Violet',
			],
		},
		{
			number: 'Saturno 003',
			day: '27-10-2023',
			link: 'https://archive.org/download/saturno-005-10-11-2023/saturno%203.mp3',
			tracklist: [
				'Rolling Stones - Heaven',
				'Benny Sings - Beach House',
				'Natalie Prass - Short Court Style',
				'Lil Yatchy - Running Out Of Time',
				'Alberto Radius - Celebrai',
				'Corto.alto - Mechanisms',
				'Lex Amor, DIPS, Lo-Wu - Moesh',
				'Nation of Language - I Will Never Learn',
				'Fag Gadget - Collapsing New People',
				'Petite Noir - Blame Fire',
				'Jorge Elbrecht - No Real Friend',
				'Queen - Cool Cat',
				'Born at Midnite -Y o Y',
				'Sonns - On My Mind',
				'Daniel Byrd - Places and Spaces',
			],
		},
		{
			number: 'Saturno 004',
			day: '3-11-2023',
			link: 'https://archive.org/download/saturno-005-10-11-2023/saturno%20004%20-%2003-11-2023.mp3',
			tracklist: [
				"The West Coast Pop Art Experimental Band - I Won't Hurt You",
				'Moby - Shot In The Back Of The Head',
				'Eartheater - Bringing Me Back',
				'The Kinks - I Go To Sleep (Demo Version)',
				'Eddie Brickell - Circle',
				'Rhye - Major Minor Love',
				'Amber Mark - Love Me Right',
				'Pinty - City Limits',
				'Pale Blue - Dive',
				'Isolée - Clap Gently',
				'Teleman - Cactus',
				'JJ & The Mood - How Many Times?',
				'The Dbs - Black and White',
				"13th Floor Elevators - You're Gonna Want Me",
				'The Obsessives - Surfer Rosa',
				'Pom Pom Square - Popular (feat. Matthew Caws of Nada Surf).mp3',
			],
		},
		{
			number: 'Saturno 005',
			day: '10-11-2023',
			link: 'https://archive.org/download/saturno-005-10-11-2023/saturno%20005%20-%2010-11-2023.mp3',
			tracklist: [
				"The Kahil El'Zabar Quartet - We'll Get Through This",
				'J.O.B. Orquestra - Govinda',
				'ZAN - Tu',
				'Pale Jay - For James',
				'Julianna Riolino - Sacred Heart',
				'La Villana - Juramentos',
				"Cleo Sol - Don't Let It Go To Your Head",
				'Sirens Of Lesbos - Sweet Harmony',
				'Pearl & The Oysters - Pacific Ave',
				'Lady Wray - Through It All',
				'CARRTOONS/Floyd Fuji - Read My Lips',
				'Domi & JD Beck - TWO SHRiMPS (feat. Mac DeMarco)',
				'Moodyman - Lyk U Use 2 (feat. Andres)',
				'TRAAMS - A House On Fire',
				'Snail Mail - Pristine',
			],
		},
		{
			number: 'Saturno 006',
			day: '17-11-2023',
			link: 'https://archive.org/download/saturno-005-10-11-2023/Saturno%20006%20-%2017-11-2023.mp3',
			tracklist: [
				'Diana Ross & The Supremes - Stormy',
				'Gwen McRae - 90% Of Me Is You',
				"Cass McCombs - What Isn't Nature?",
				'Nia Archives - Conveniency',
				'Jorja Smith - Lifeboats (Freestyle)',
				'Drugdealer - Someone To Love',
				'Anri - Last Summer Whisper',
				'The Alchemist - Ocean Prime (Feat. Boldy James)',
				'Ezra Colective - No Confusion (Feat. Kojey Radical)',
				'Shabazz Palaces - Bad Bitch Walking',
				'Sampology - Constant Call (Feat. Charlie Hill & Tiana Khasi)',
				'Thom Yorke - All For The Best',
				'Cande Y Paulo - Limite En Tu Amor',
				'Lou Reed - Perfect Day',
				'Charles Bradley - Changes',
				'The Brain Jonestown Massacre - Anemone',
			],
		},
	];

	const PullData = (data) => {
		setEpisode(data);
	};

	const filteredEpisodes = episodeList.filter((episode) => {
		const formattedDate = episode.day.split('-').reverse().join('-');
		const episodeDate = new Date(formattedDate);
		const oneWeekAgo = new Date();
		oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

		return episodeDate < oneWeekAgo;
	});

	const sortedEpisodes = filteredEpisodes.sort((a, b) => {
		const dateA = new Date(a.day.split('-').reverse().join('-'));
		const dateB = new Date(b.day.split('-').reverse().join('-'));

		return dateB - dateA;
	});

	const mostRecentEpisode =
		sortedEpisodes.length > 0 ? sortedEpisodes[0] : null;
	const [episodes, setEpisode] = useState(mostRecentEpisode);

	return (
		<div>
			ls
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Header />} />
					<Route
						path="/episodes"
						element={<Episodes episodes={sortedEpisodes} PullData={PullData} />}
					/>
					<Route path="/about" element={<About />} />
					<Route path="*" element={<NoPage />} />
				</Routes>
				<Player episode={episodes} />
			</BrowserRouter>
		</div>
	);
}

export default App;
