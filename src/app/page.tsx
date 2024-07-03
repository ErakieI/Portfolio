/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Navbar from '../components/navbar';
import Projet from '../components/projet';
import Skill from '../components/skill';
import Footer from '../components/footer';
import ContactForm from '../components/ContactForm';
import LargeHeader from '../components/header';
import TypingAnimation from '../components/typingAnimation';
import Image from 'next/image';
import '../style/globals.scss';

export default function Home() {
	return (
		<main className="w-full p-0 flex flex-col items-center justify-center bg-white dark:bg-gray-800">
			{/* Accueil */}

			<section id="accueil" className="w-full text-center text-white">
				<LargeHeader />
			</section>

			{/* Navbar */}
			<Navbar />

			{/* Présentation */}
			<section id="presentation" className="flex justify-center relative">
				<div className="h-full">
					<Image
						src="/images/Profil_effet_peinture.jpg"
						alt="Logo"
						width={500}
						height={200}
					/>
				</div>
				<div className="w-2/5 bg-white pl-8 text-left space-y-8 flex flex-col justify-center">
					<TypingAnimation text="QUI SUIS-JE ?" />
					<h2 className="text-3xl font-bold mb-4">PRÉSENTATION :</h2>
					<p>
						Depuis plusieurs années, je m'intéresse au code. J'ai donc décidé
						d'en faire mon métier.
					</p>
					<p>
						Mon objectif est de créer des applications web innovantes et
						performantes, tout en continuant à développer mes compétences et à
						me tenir à jour avec les dernières tendances technologiques, que ce
						soit côté front-end comme back-end.
					</p>
					<p>
						Je suis convaincu que le développement web est un domaine où
						l'apprentissage est continu et je suis toujours prêt à relever de
						nouveaux défis pour améliorer mes compétences et contribuer à des
						projets significatifs.
					</p>
					<p>Travaillons donc ensemble ! 💪</p>
				</div>
			</section>

			{/* Réalisations */}
			<section id="realisations" className="w-full p-8 bg-beige-clair">
				<div className="w-3/4 m-auto">
					<h2 className="text-center text-3xl font-bold mb-4">
						RÉALISATIONS :
					</h2>
					{/* Projets */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						<Projet
							img="chemin/vers/image.jpg"
							titre="Titre du Projet"
							description="Description du projet."
							githubRepo="lien/vers/votre/repository"
						/>{' '}
						<Projet
							img="chemin/vers/image.jpg"
							titre="Titre du Projet"
							description="Description du projet."
							githubRepo="lien/vers/votre/repository"
						/>{' '}
						<Projet
							img="chemin/vers/image.jpg"
							titre="Titre du Projet"
							description="Description du projet."
							githubRepo="lien/vers/votre/repository"
						/>{' '}
						<Projet
							img="chemin/vers/image.jpg"
							titre="Titre du Projet"
							description="Description du projet."
							githubRepo="lien/vers/votre/repository"
						/>{' '}
						<Projet
							img="chemin/vers/image.jpg"
							titre="Titre du Projet"
							description="Description du projet."
							githubRepo="lien/vers/votre/repository"
						/>
					</div>
				</div>
			</section>

			{/* Compétences */}
			<section id="competences" className="w-3/4 bg-white p-8">
				<h2 className="text-center text-3xl font-bold mb-4 pb-8">
					COMPÉTENCES :
				</h2>
				{/* Liste des compétences */}
				<div className="flex gap-10 flex-wrap justify-center">
					<Skill name="HTML5" percentage={90} logo="/images/logos/html5.png" />
					<Skill name="CSS" percentage={90} logo="/images/logos/css.png" />
					<Skill
						name="JavaScript"
						percentage={65}
						logo="/images/logos/js.png"
					/>
					<Skill
						name="NodeJS"
						percentage={40}
						logo="/images/logos/nodeJS.png"
					/>
					<Skill name="React" percentage={45} logo="/images/logos/react.png" />
					<Skill name="SASS" percentage={80} logo="/images/logos/sass.png" />
					<Skill
						name="NextJS"
						percentage={35}
						logo="/images/logos/nextJS.png"
					/>
					<Skill
						name="TypeScript"
						percentage={30}
						logo="/images/logos/typeScript.png"
					/>
					<Skill
						name="TailwindCSS"
						percentage={85}
						logo="/images/logos/tailWindCSS.png"
					/>
					<Skill
						name="GitHub"
						percentage={70}
						logo="/images/logos/gitHub.png"
					/>
				</div>
			</section>

			{/* Contact */}
			<section id="contact" className="bg-bleu-vert p-8 w-full">
				<h2 className="text-center text-3xl font-bold mb-4 pb-8">CONTACT :</h2>
				{/* Formulaire de contact */}
				<ContactForm />
			</section>

			{/* CV */}
			<section
				id="cv"
				className="w-full bg-white dark:bg-gray-900 p-8 shadow-md w-full "
			>
				<h2 className="text-center text-3xl font-bold mb-4 pb-8">CV</h2>
				{/* Lien vers le CV */}
			</section>
			<Footer />
		</main>
	);
}
