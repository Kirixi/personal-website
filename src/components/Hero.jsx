import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";

const Hero = () => {
	return (
		<section className="w-full h-screen mx-auto">
			<div className={`${styles.paddingX} flex items-center justify-center pt-32 md:pt-[110px] xl:pt-[160px] exl:pt-[400px]`}>
				<div className="flex lg:flex-row flex-col justify-between h-[600px] md:pt-5">
					<div className={`sm:px-16 flex flex-row gap-5`}>
						{/* <div className="flex flex-col justify-center items-center mt-5">
							<div className="w-5 h-5 rounded-full bg-[#44d62c]" />
							<div className="w-1 sm:h-96 h-52 violet-gradient" />
						</div> */}

						<div className="lg:mt-20">
							<div>
								<h1 className={`${styles.heroSubText} text-white`}>
									<span className="text-[#44d62c]">JONATHAN TEH</span>
								</h1>
								<p className={`${styles.heroHeadText} mt-2 text-white md:py-4`}>Site Reliability Engineer </p>
								<p className="font-medium lg:text-[25px] sm:text-[17px] xs:text-[16px] text-[12px] lg:leading-[25px]">@ Razer</p>
								{/* <p className="hidden sm:block text-gray-100 lg:text-[26px] sm:text-[26px] py-4">
									{" "}
									<span className="text-red-600">R</span>oyal <span className="text-red-600">M</span>elbourne{" "}
									<span className="text-red-600">I</span>nstitue of <span className="text-red-600">T</span>echnology.
								</p> */}

								<div className="py-8">
									<a href="#about">
										<button className=" text-[18px] bg-[#44d62c] py-4 px-6 rounded-[34px]">Learn more</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Hero;
