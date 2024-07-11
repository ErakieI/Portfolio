/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Navbar from '../components/navbar.tsx';
import Projet from '../components/projet.tsx';
import Skill from '../components/skill.tsx';
import Footer from '../components/footer.tsx';
import ContactForm from '../components/ContactForm.tsx';
import LargeHeader from '../components/header.tsx';
import TypingAnimation from '../components/typingAnimation.tsx';
import Image from 'next/image';
import CV from '../components/cv.tsx';
import '../style/globals.scss';

export default function Home() {
	return (
		<main className="w-full p-0 flex flex-col items-center justify-center ">
			{/* Accueil */}
			<section id="accueil" className="w-full text-center text-white">
				<LargeHeader />
			</section>

			{/* Navbar */}
			<Navbar />

			{/* Présentation */}
			<section id="presentation" className="flex flex-col lg:flex-row justify-center relative lg:w-3/4">
				<div className="lg:w-1/2 w-full h-auto flex justify-center lg:justify-end mb-4 lg:mb-0">
					<Image
						src="/images/Profil_effet_peinture.jpg"
						alt="Logo"
						width={450}
						height={200}
					/>
				</div>
				<div className="lg:w-1/2 w-full  pl-8 text-left space-y-4 flex flex-col justify-center py-8">
					<TypingAnimation text="QUI SUIS-JE ?" />
					<h2 className="text-3xl font-bold mb-4 py-8">PRÉSENTATION :</h2>
					<p>Depuis plusieurs années, je m'intéresse au code. J'ai donc décidé d'en faire mon métier.</p>
					<p>Mon objectif est de créer des applications web innovantes et performantes, tout en continuant à développer mes compétences et à me tenir à jour avec les dernières tendances technologiques, que ce soit côté front-end comme back-end.</p>
					<p>Je suis convaincu que le développement web est un domaine où l'apprentissage est continu et je suis toujours prêt à relever de nouveaux défis pour améliorer mes compétences et contribuer à des projets significatifs.</p>
					<p>Travaillons donc ensemble ! 💪</p>
				</div>
			</section>

			{/* Réalisations */}
			<section id="realisations" className="w-full p-6 lg:p-8 bg-beige-clair">
				<div className="w-full lg:w-3/4 m-auto">
					<h2 className="text-center text-3xl font-bold mb-4">RÉALISATIONS :</h2>
					{/* Projets */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
						<Projet
							img="/images/projets/booki.png"
							titre="Booki - HTML5 / CSS"
							description="Booki est un site de réservation en ligne de logements. Le projet était orienté sur HTML et CSS, la difficulté était d'avoir un site responsive."
							githubRepo="https://github.com/ErakieI/Booki_OC"
						/>
						<Projet
							img="/images/projets/bluel.png"
							titre="Sophie Bluel - JavaScript"
							description="Ce projet consistait à intéragir avec une API en utilisant JavaScript. Il fallait faire appel aux différentes méthodes CRUD pour récupérer ou envoyer des données à l'API et ainsi pouvoir manipuler les données du site (Travaux / comptes utilisateurs)."
							githubRepo="https://github.com/ErakieI/Projet-3-Sophie-Bluel"
						/>
						<Projet
							img="/images/projets/nina.png"
							titre="Nina Carducci - Optimisation et référencement naturel"
							description="Pour ce projet, l'objectif était d'optimiser le site de photographe en utilisant une résolution des images adaptée à leur taille maximale et d'améliorer le référencement naturel en utilisant une sémantique apropriée dans le code ainsi que des balises méta, sans oublier l'accessibilité. L'analyse de la lighthouse était le pilier de cet exercice."
							githubRepo="https://github.com/ErakieI/Projet-4-Nina-Carducci"
						/>
						<Projet
							img="/images/projets/kasa.png"
							titre="Kasa - React"
							description="Pour ce projet, l'objectif était de prendre en main le framework React. J'ai donc appris à fabriquer des composants réutilisables et à me servir de SASS pour simplifier le style et profiter de ses nombreuses fonctionnalités. L'utilisation des nombreux hooks de React étaient donc indispensables, ainsi que le router permettant d'orienter l'url vers une page correspondant à l'ID du logement."
							githubRepo="https://github.com/ErakieI/Projet5_kasa"
						/>
						<Projet
							img="/images/projets/grimoire.png"
							titre="Mon vieux grimoire - NodeJS"
							description="Mon vieux grimoire est un site pour visualiser et ajouter des livres avec leur notation. Ce projet back-end sous Node.js utilise une base de données NoSQL : MongoDB. La principale difficulté était de lier chaque livre à l'ID de son utilisateur pour que seul celui-ci puisse modifier ses informations. Les utilisateurs peuvent noter les livres des autres, permettant ainsi de calculer une moyenne des notes."
							githubRepo="https://github.com/ErakieI/Projet-6-Mon-vieux-grimoire"
						/>
						<Projet
							img="/images/projets/kanban.png"
							titre="Menu Maker - Gestion de projet"
							description="Ce projet un peu différent des autres tournait autour de la gestion de projet. Il a fallu faire un Kanban et créer différentes étiquettes ainsi que le contenu, déterminer des spécifications techniques ainsi que leur solution, faire de la veille technologique sur l'outil Feedly, s'intéresser à la méthodologie Agile et plus pariculièrement SCRUM, puis faire une présentation pour le client."
							githubRepo="https://github.com/ErakieI/Menu-Maker"
						/>
					</div>
				</div>
			</section>

			{/* Compétences */}
			<section id="competences" className="w-full lg:w-3/4  p-4 lg:p-8">
				<h2 className="text-center text-3xl font-bold mb-4 pb-8">COMPÉTENCES :</h2>
				{/* Liste des compétences */}
				<div className="flex flex-wrap justify-center gap-4 lg:gap-10">
					<Skill name="HTML5" percentage={80} logo="/images/logos/html5.png" />
					<Skill name="CSS" percentage={70} logo="/images/logos/css.png" />
					<Skill name="JavaScript" percentage={45} logo="/images/logos/js.png" />
					<Skill name="NodeJS" percentage={30} logo="/images/logos/nodeJS.png" />
					<Skill name="React" percentage={35} logo="/images/logos/react.png" />
					<Skill name="SASS" percentage={65} logo="/images/logos/sass.png" />
					<Skill name="NextJS" percentage={25} logo="/images/logos/nextJS.png" />
					<Skill name="TypeScript" percentage={20} logo="/images/logos/typeScript.png" />
					<Skill name="TailwindCSS" percentage={70} logo="/images/logos/tailWindCSS.png" />
					<Skill name="GitHub" percentage={55} logo="/images/logos/gitHub.png" />
				</div>
			</section>

			{/* Contact */}
			<section id="contact" className="bg-bleu-vert p-4 lg:p-8 w-full">
				<h2 className="text-center text-3xl font-bold mb-4 pb-8">CONTACT :</h2>
				<ContactForm />
			</section>

			{/* CV */}
			<section id="cv" className="w-full  p-4 lg:p-8">
				<CV />
			</section>
			
			{/* Footer */}
			<Footer />
		</main>
	);
}
