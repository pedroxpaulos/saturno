import React from 'react';
import promo from '../img/pppromo.png';
import { FaInstagramSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div className="text-black bg-white overflow-hidden mx-auto mb-40 md:w-1/2">
			<div className="max-w-6xl p-4 mt-20 md:mt-40 flex flex-col md:flex-row justify-center w-full h-full">
				<div className="mb-6 mr-20">
					<img src={promo} alt="promo shot" />
					<p className="text-xs my-2">Fotografia por Bruna Buniotto</p>
				</div>
				<div className="mb-8 max-w-2xl">
					<h3
						className="text-base uppercase underline
						decoration-wavy
						decoration-2
						hover:decoration-4
						decoration-yellow-900
						bg-clip-text bg-gradient-to-r from-black to-yellow-900"
					>
						SATURNO NA FUTURA
					</h3>
					<p className="text-sm uppercase font-thin">
						Música para outras dimensões, sem fronteiras entre géneros musicais
						mas com um mood bastante próprio. ​A lista de sonoridades seria tão
						extensa quanto as luas do planeta. Entre o nu-soul e o disco punk, o
						emergente anti-pop e o synthwave, e muito mais.
					</p>

					<p className="text-sm mt-8 font-thin">
						Pedro ⬤ Paulos é o criador do Brandos Costumes, onde explorou ao
						longo dos últimos 10 anos o lado mais desconhecido da música
						portuguesa. O podcast, ao qual depois se juntou a jornalista Marta
						Rocha e a ilustradora Angelina Velosa, desvendou, ao longo deste
						tempo, o lado obscuro dos artistas famosos, os artistas que nunca
						chegaram ao sucesso e, sobretudo, as boas músicas refundidas que
						podiam ter sido grandes sucessos. O sucesso do podcast levou-o
						durante meses ao número 1 dos tops de escuta em portugal, a ser
						considerado o podcast do ano português de 2020 e até um programa de
						televisão em 2021, no Canal Q. <br />
						Para além disso, assinou programas e especiais pela Antena 3,
						escreve ou escreveu para meios de comunicação como o Observador,
						Vice ou o P3, e também é DJ há mais de 10 anos, e já passou por
						salas clássicas portuguesas como Lux Frágil, Musicbox, 31 ou o Gare
						Club.
					</p>
					<p className="text-xl">
						<Link to="http://www.instagram.com/pedropaulos">
							<FaInstagramSquare />
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
