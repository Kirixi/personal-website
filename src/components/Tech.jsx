import React, { Suspense, useState, useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import { github } from "../assets";

const Tech = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 500px)");

		setIsMobile(mediaQuery.matches);

		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		};

		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<>
			<motion.div variants={textVariant()} className="pb-8">
				<p className={styles.sectionSubText}>Technologies i use</p>
				<h2 className={styles.sectionHeadText}>My Skills.</h2>
			</motion.div>
			<div className="flex flex-wrap justify-center gap-10 space-x-5 space-y-5">
				{technologies.map((category) => (
					<div
						className="rounded-full md:h-[400px] md:w-[400px] h-[220px] w-[220px] border border-cyan-400 animate-rotateSlow relative"
						key={category.name}
					>
						{category.items_outter.map((tech) => (
							<span
								className={`absolute ${tech.position} w-10 h-10 md:w-12 md:h-12 ${tech.background} rounded-full transform flex justify-center items-center`}
							>
								<img src={tech.techIcon} className="rounded-full h-3/4 w-3/4 animate-counterClock" />
							</span>
						))}

						{/* Exmple of what it looks like above* */}
						{/* <span className="absolute top-0 left-1/2 w-10 h-10 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            <img src={category.items_outter[0]} className="rounded-full h-3/4 w-3/4 animate-counterClock" />
          </span> */}

						<div className="absolute inset-1/4 rounded-full border md:h-[200px] md:w-[200px] h-[110px] w-[110px] border-cyan-400 animate-counterClock">
							{/* Add a circle in the middle */}
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
								<div className="w-[70px] h-[70px]rounded-full flex justify-center items-center">{category.icon}</div>
							</div>

							<div></div>
						</div>

						{/*Inner circle* */}
						<div className="absolute inset-1/4 rounded-full border md:h-[200px] md:w-[200px] h-[110px] w-[110px] border-cyan-400 animate-rotateSlow">
							{category.items_inner.map((tech) => (
								<span
									className={`absolute ${tech.position} w-10 h-10 md:w-12 md:h-12 ${tech.background} rounded-full transform flex justify-center items-center`}
								>
									<img src={tech.techIcon} className="rounded-full h-3/4 w-3/4 animate-counterClockInner" />
								</span>
							))}
							{/* <span className="absolute top-0 left-1/2 w-10 h-10 bg-[#fed602] rounded-full transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
              <img src={category.items_inner[0]} className="" />
            </span> */}
						</div>
					</div>
				))}
			</div>
		</>
	);
};
export default SectionWrapper(Tech, "tech");
