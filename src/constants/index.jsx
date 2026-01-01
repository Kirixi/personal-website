import { color, spring } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaStackOverflow } from "react-icons/fa";

import { BiCodeAlt } from "react-icons/bi";
import { BsBoxes } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { AiOutlineCloudServer } from "react-icons/ai";

import {
	javascript,
	typescript,
	html,
	reactjs,
	gactions,
	svelte,
	aws,
	java,
	python,
	tailwind,
	nodejs,
	mongodb,
	bash,
	dart,
	opa,
	vuejs,
	csharp,
	springboot,
	docker,
	LAN,
	Pacman,
	ShuttleDay,
	portfolio,
	threejs,
	malay,
	cantonese,
	mandarin,
	english,
	personalbanker,
	fomatic,
	razer,
	terraform,
	jenkins,
	helm,
	kubectl,
	grafana,
} from "../assets";

const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "socials",
		title: "Socials",
	},
];

const services = [
	{
		title: "English",
		proficiency: "Full professional proficiency",
		icon: english,
	},
	{
		title: "Mandarin",
		proficiency: "Professional working proficiency",
		icon: mandarin,
	},
	{
		title: "Malay",
		proficiency: "Limited working proficiency",
		icon: malay,
	},
	{
		title: "Cantonese",
		proficiency: "Limited working proficiency",
		icon: cantonese,
	},
];

const technologies = [
	{
		name: "Languages",
		icon: <BiCodeAlt size={30} />,
		items_inner: [
			{
				techIcon: javascript,
				position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
				background: "bg-[#fed602]",
			},
			{
				techIcon: typescript,
				position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
				background: "bg-[#1876d1]",
			},
			{
				techIcon: python,
				position: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
				background: "bg-white",
			},
			{
				techIcon: java,
				position: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
				background: "bg-white",
			},
		],
		items_outter: [
			{
				techIcon: html,
				position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
				background: "bg-white ",
			},
			{
				techIcon: bash,
				position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
				background: "bg-white",
			},
			{
				techIcon: csharp,
				position: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
				background: "bg-white",
			},
			{
				techIcon: dart,
				position: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
				background: "bg-white",
			},
		],
	},
	{
		name: "Frameworks",
		icon: <BsBoxes size={30} />,
		items_inner: [
			{
				techIcon: nodejs,
				position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
				background: "bg-white",
			},
			{
				techIcon: springboot,
				position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
				background: "bg-white",
			},
			{
				techIcon: reactjs,
				position: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
				background: "bg-white",
			},
			{
				techIcon: vuejs,
				position: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
				background: "bg-white",
			},
		],

		items_outter: [
			{
				techIcon: tailwind,
				position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
				background: "bg-white",
			},
			{
				techIcon: threejs,
				position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",

				background: "bg-white",
			},
			{
				techIcon: opa,
				position: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",

				background: "bg-white",
			},
			{
				techIcon: svelte,
				position: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",

				background: "bg-white",
			},
		],
	},
	{
		name: "Cloud",
		icon: <AiOutlineCloudServer size={30} />,
		items_inner: [
			{
				techIcon: docker,
				position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
				background: "bg-white",
			},
			{
				techIcon: aws,
				position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
				background: "bg-white",
			},
			{
				techIcon: helm,
				position: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
				background: "bg-white",
			},
			{
				techIcon: kubectl,
				position: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
				background: "bg-white",
			},
		],
		items_outter: [
			{
				techIcon: terraform,
				position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
				background: "bg-white",
			},
			{
				techIcon: jenkins,
				position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
				background: "bg-white",
			},
			{
				techIcon: grafana,
				position: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
				background: "bg-white",
			},
			{
				techIcon: gactions,
				position: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
				background: "bg-white",
			},
		],
	},
];

const experiences = [
	{
		title: "Chatbot Developer",
		company_name: "PersonalBanker",
		icon: personalbanker,
		iconBg: "#ffffff",
		date: "March 2022 - July 2022",
		points: [
			"Frontend chatbot development with Tawk using Agile based methodology coordinated with cross-country teams",
			"Tasked with Designing and improving an existing chatbot for customer assistance.",
			"Developed a login and Sign-up prototype, allowing for seamless testing and quick iterations.",
			"Developed a proxy server that effectively managed requests and responses from and to the backend server.",
			"Collaborated with tech-lead and product managers to iterate additional chatbot functionalities.",
		],
	},
	{
		title: "Junior Software Engineer",
		company_name: "Fomatic Technology",
		icon: fomatic,
		iconBg: "#ffffff",
		date: "August 2023 - July 2024",
		points: [
			"Delivered and maintained 10+ e-commerce and web pages under the supervision of the project manager.",
			"Coordinated with UX/UI designers as well as clients to produce clean and interactive web interfaces for the end users.",
			"Researched and evaluated new technologies, resulting in the adoption of a new monitoring tool.",
			"Implemented observability and monitoring using Grafana and Prometheus across company infrastructure.",
			"Engineered CI/CD pipelines with Github actions to automate updates, reducing deployment time by 30%.",
		],
	},
	{
		title: "Site Reliability Engineer (P1)",
		company_name: "Razer Inc.",
		icon: razer,
		iconBg: "#000000",
		date: "December 2024 - November 2025",
		points: [
			"Championed migration of multiple environments and projects out from main AWS account, improving security posture, cost allocation and team autonomy.",
			"Played a key role in planning and implementing disaster recovery strategies to meet RTO and RPO requirements.",
			"Designed and developed reusable Terraform modules to standardize infrastructure provisioning, improving developer productivity and reducing configuration drift.",
			"Introduced GitOps practices using jenkins pipelines and for IaC deployments, enhancing deployment consistency and traceability.",
			"Collaborated with security engineers to automate yearly security patching on worker nodes.",
			"Contributed to FinOps initiatives by leveraging AWS Savings Plans, resulting in a 15% annual cost reduction.",
		],
	},
];

const projects = [
	{
		name: "Agile-Loop-Now",
		description:
			"Social media web application that enables users to a post with images, comment on other post, react to other post, follow other users and manage their own posts.",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
				border: "border-blue-400",
			},
			{
				name: "MySQL",
				color: "orange-text-gradient",
				border: "border-orange-400",
			},
			{
				name: "ChakraUI",
				color: "text-teal-400",
				border: "border-teal-400",
			},
			{
				name: "Cloundinary",
				color: "text-cyan-400",
				border: "border-cyan-400",
			},
			{
				name: "Node",
				color: "text-green-500",
				border: "border-green-500",
			},
		],
		image: LAN,
		source_code_link: "https://github.com/rmit-fwp-s2-2022/Agile-Loop-Now",
	},
	{
		name: "Pacman CTF",
		description:
			"Team-based university project that applies artificial intelligence algorithms and techniques to command Pac-Man agents in a Capture the Flag style game against teaching staff bots. ",
		tags: [
			{
				name: "Python",
				color: "text-red-500",
				border: "border-red-500",
			},
			{
				name: "Algorithms",
				color: "text-yellow-600",
				border: "border-yellow-600",
			},
		],
		image: Pacman,
		source_code_link: "https://github.com/Kirixi/Pacman-CTF-AI",
	},
	{
		name: "Shuttleday",
		description:
			"A comprehensive private web app that allows friends to organize badminton sessions, login seemlessly with google, join existing sessions and upload receipts of session payments",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
				border: "border-blue-400",
			},
			{
				name: "MongoDB",
				color: "text-amber-700",
				border: "border-amber-700",
			},
			{
				name: "MUI",
				color: "text-blue-600",
				border: "border-blue-600",
			},
			{
				name: "AWS",
				color: "text-amber-400",
				border: "border-amber-400",
			},
		],
		image: ShuttleDay,
		source_code_link: "https://github.com/shuttleday/shuttleday",
	},
	{
		name: "Portfolio",
		description:
			"My personal portfolio website summarizes my career and showcases my projects, development technology expertise, and contact information future employers to learn more about me.",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
				border: "border-blue-400",
			},
			{
				name: "3JS",
				color: "text-gray-400",
				border: "border-gray-400",
			},
			{
				name: "Tailwind",
				color: "text-cyan-600",
				border: "border-cyan-600",
			},
			{
				name: "GitHub-Actions",
				color: "text-cyan-400",
				border: "border-cyan-400",
			},
			{
				name: "AWS",
				color: "text-amber-400",
				border: "border-amber-400",
			},
		],
		image: portfolio,
		source_code_link: "https://github.com/Kirixi/personal-website",
	},
];

const socials = [
	{
		platform: "Email",
		link: "mailto:tehyeuhaw@gmail.com",
		color: "bg-[#6fc2b0]",
		icon: <GoMail size={30} />,
	},
	{
		platform: "LinkedIn",
		link: "https://www.linkedin.com/in/yeu-haw-teh-9a34ab222/",
		color: "bg-[#1d1bf9]",
		icon: <FaLinkedin size={30} />,
	},
	{
		platform: "GitHub",
		link: "https://github.com/Kirixi",
		color: "bg-[#333333]",
		icon: <FaGithub size={30} />,
	},
	{
		platform: "StackOverflow",
		link: "https://stackoverflow.com/users/17212169/zemelon?tab=profile",
		color: "bg-[#ef8236]",
		icon: <FaStackOverflow size={30} />,
	},
];

export { services, technologies, experiences, projects, navLinks, socials };
