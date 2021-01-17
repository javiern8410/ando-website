import React from "react";
import BackgroundImage from 'gatsby-background-image';
import { graphql } from 'gatsby';

import Layout from "../components/Layout";
import Header from "../components/Header";
import Service from "../components/Service";

import homeImage from "../images/about.png";

import '../css/main.css';

const services = [
	{
		title: "Desarrollo Web",
		image: "web-develop.jpeg",
		text: "Desarrollamos Aplicaciones Web a Medida....",
		important: false
	},
	{
		title: "Marketing & Comunity Manager",
		image: "comunity-manager.jpeg",
		text: "Le damos presencia a su empresa en Internet para elevar sus ventas y dar visibilidad a sus servicios...",
		important: true
	},
	{
		title: "Desarrollo de Aplicaciones Mobiles",
		image: "mobile-app.jpeg",
		text: "Desarrollamos Aplicaciones Android & IOS que se integren a su plataforma con todas las funcionalidades que su negocio necesita...",
		important: false
	}
]

const IndexPage = (props) => {
	return (
		<Layout>
			<main className="main h-screen flex-grow m-0 flex pt-0 flex-col text-white">
				<Header />
				<div className="container mx-auto grid justify-center justify-items-center grid-cols-1 sm:grid-cols-2 gap-4 mt-4 sm:mt-32">
					<div className="sm:px-2">
						<h1 className="px-4 text-3xl text-center sm:text-left text-white font-bold md:text-4xl">
							<span className="text-pink-600">R</span>ápido y <span className="text-pink-600">S</span>encillo
						</h1>
						<h3 className="px-4 mt-2 text-center text-xl sm:text-left sm:text-2xl text-gray-700 sm:mt-8">
							Ando Software & Sales Solutions
						</h3>
						<p className="px-4 mt-4 text-center sm:text-left text-lg sm:text-xl text-white sm:mt-8 leading-6 md:leading-8">
							Ando Solutions es una empresa de desarrollo, conformada por profesionales en el ámbito tecnológico, comprometidos 
							con brindar servicios y respuestas a empresas que quieran dar un salto y decidan apostar por la calidad, automatización y 
							mejora de todos sus procesos.
						</p>
					</div>
					<div>
						<img
							className="w-3/4 mx-auto"
							src={homeImage}
							alt="Gatsby and Tailwind CSS together"
						/>
					</div>
				</div>

				<div className="mx-auto  p-4">
					<h1 className="text-xl sm:text-3xl md:text-4xl">Tecnologías de Desarrollo</h1>
				</div>

				<div className="flex items-center p-4 mx-auto bg-white rounded shadow-xs m-1">
					<code className="text-gray-600 text-sm leading-xl">
						HTML5 - CSS - REACT- NodeJS
         			</code>
				</div>
			</main>
			<div className="flex flex-col p-6 h-full bg-white">
				<div>
					<h1 className="mx-auto my-4 text-center text-black text-3xl sm:text-4xl font-medium">
						Increibles <span className="text-pink-500">Servicios</span>
					</h1>
				</div>
				<div className="container mx-auto">
					<div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-4">
						{
							services.map(service => (
								<div className={`bg-gray-200 rounded-lg ${service.important ? 'col-span-1 row-span-2' : ''}`}>
									<Service service={service} />
								</div>			
							))
						}
					</div>
				</div>
				<div className="container mx-auto py-4">
					<BackgroundImage
						className="home-slider"
						fluid={props.data.indexImage.childImageSharp.fluid}
					>
						<div className="text-overlay">
							<h1 className="text-3xl sm:text-5xl font-medium">
								Text should go here 1
							</h1>
						</div>
					</BackgroundImage>
				</div>
			</div>
		</Layout>
	)
}

export default IndexPage;

export const pageQuery = graphql`
	query {
		indexImage: file(relativePath: { eq: "slider01.jpg"}) {
			childImageSharp {
				fluid(maxWidth: 600) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;