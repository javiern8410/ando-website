import React from "react";
import BackgroundImage from 'gatsby-background-image';
import { graphql } from 'gatsby';

import Layout from "../components/Layout";
import Header from "../components/Header";
import Service from "../components/Service";
import Technology from '../components/Technology';

import homeImage from "../images/dashboard-home.jpg";
import analyticsImage from "../images/analytics.webp";
import codeImage from "../images/code.png";
import teamImage from "../images/slider01-opt.jpg";

import '../css/main.css';

const services = [
	{
		title: "Desarrollo Web",
		image: "web-develop.jpeg",
		text: "Desarrollamos Aplicaciones Web a Medida. Experiencia en desarrollo de Sitios Web Empresariales, Sistemas de backoffice, ERP, GDS y todo tipo de Gestión Empresarial.",
		important: false
	},
	{
		title: "Marketing & Comunity Manager",
		image: "comunity-manager.jpeg",
		text: "Le damos presencia a su empresa en Internet para elevar sus ventas y dar visibilidad a sus servicios. Desarrollamos su campaña desde cero incluyendo su propio Sitio Web, páginas de captura (Landing Pages) y extrategías de mercado que aseguran clientes desde el primer mes.",
		important: true
	},
	{
		title: "Desarrollo de Aplicaciones Mobiles",
		image: "mobile-app.jpeg",
		text: "Desarrollamos Aplicaciones Android & IOS que se integren a su plataforma con todas las funcionalidades que su negocio necesita...",
		important: false
	}
]

const technologiesLisn = [
    {name: "Android", icon: "android"},
    {name: "Angular", icon: "angular-logo"},
    {name: "C#", icon: "csharp"},
    {name: "Github", icon: "github"},
    {name: "HTML5", icon: "html5"},
    {name: "IOS", icon: "ios"},
    {name: "java", icon: "java"},
    {name: "javascript", icon: "javascript"},
    {name: "Node JS", icon: "nodejs"},
    {name: "React JS", icon: "react.df70b005"},
]

const IndexPage = (props) => {
	return (
		<Layout>
			<main className="main flex-grow m-0 flex pt-0 flex-col text-white">
				<Header />
				<div className="container mx-auto grid justify-center justify-items-center grid-cols-1 gap-4 mt-2 sm:mt-12">
					<div className="sm:px-2">
						<h1 className="px-4 text-3xl text-center text-white font-bold md:text-6xl">
							<span className="custom-red-1">R</span>ápido y <span className="custom-red-1">S</span>encillo
						</h1>
						<h3 className="px-4 mt-2 text-center text-xl sm:text-2xl text-gray-400 sm:mt-8">
							Ando Software & Sales Solutions
						</h3>
						<p className="px-4 mt-2 text-center sm:text-justify text-lg sm:text-xl font-thin text-white sm:my-4 leading-6 sm:leading-8">
							Ando Solutions es una empresa de desarrollo, conformada por profesionales en el ámbito tecnológico, comprometidos 
							con brindar servicios y respuestas a empresas que quieran dar un salto y decidan apostar por la calidad, automatización y 
							mejora de todos sus procesos.
						</p>
					</div>
					<div className="mb-4 relative p-2 sm:p0">
						<div className="">
							<img
								className="w-3/4 mx-auto rounded-lg shadow-lg"
								src={homeImage}
								alt="Ando Software Solutions"
							/>
						</div>
						<img
							className="absolute fade-in top-25p w-1/4 rounded-lg shadow-md"
							src={analyticsImage}
							alt="Ando Software Solutions"
						/>
						<img
							className="absolute top-10p rigth5 w-1/4 rounded-lg shadow-md"
							src={codeImage}
							alt="Ando Software Solutions"
						/>
						<img
							className="absolute fade-in top-30p right1 w-2/5 rounded-lg shadow-md  border-white border-4"
							src={teamImage}
							alt="Ando Software Solutions"
						/>
					</div>
				</div>
			</main>
			<div className="flex flex-col p-6 h-full bg-white">
				<div>
					<h1 className="mx-auto my-4 text-center text-black text-3xl sm:text-4xl font-medium">
						Increibles <span className="custom-red-1">Servicios</span>
					</h1>
				</div>
				<div className="container mx-auto">
					<div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-4">
						{
							services.map((service, index) => (
								<div key={index} className={`bg-gray-200 rounded-lg ${service.important ? 'col-span-1 row-span-2' : ''}`}>
									<Service service={service} />
								</div>			
							))
						}
					</div>
				</div>
				<div className="container mx-auto py-4">
					<BackgroundImage
						className="home-slider rounded-lg overflow-hidden"
						fluid={props.data.indexImage.childImageSharp.fluid}
					>
						<div className="text-overlay">
							<h1 className="text-2xl text-center sm:text-5xl font-medium">
								Trabajamos Siempre para hacerte Crecer
							</h1>
						</div>
					</BackgroundImage>
				</div>
			</div>
			<div className="technologies flex flex-col p-6 h-full text-white">
				<div>
					<h1 className="mx-auto my-4 text-center text-white text-3xl sm:text-4xl font-medium">
						Stack <span className="custom-red-1">Tecnológico</span>
					</h1>
				</div>
				<div className="content mx-auto">
					{
						technologiesLisn.map((tech, index) =>  <Technology key={index} name={tech.name} icon={tech.icon} />)
					}
				</div>
			</div>
			<div className="google-map flex flex-col w-full relative">
				<iframe 
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.4845341142623!2d-56.171684184763166!3d-34.8691772803916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xec1d17e664dfa69b!2sAndopqsolutions!5e0!3m2!1ses!2suy!4v1611449073341!5m2!1ses!2suy"
					width="600" 
					height="450"
					title="Ando Software Solutions" 
					frameBorder={0} 
					style={{border:0}} 
					allowFullScreen={true}
					aria-hidden="false"
				/>
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