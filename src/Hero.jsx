import DesignProcess from "./assets/designProcess.svg";

const Hero = () => {
	return (
		<section className='hero'>
			<div className='hero-center'>
				<div className='hero-title'>
					<h1>Projects Gallery</h1>
					<p>
						Welcome to my Project Gallery, which showcases my devotion, hard
						work, and development ability. I've worked on a variety of projects,
						honing my coding talents, project management, and creative
						problem-solving abilities. Discover a glimpse of my experience as I
						demonstrate adaptation to shifting industry requirements. My
						portfolio demonstrates constant learning, dedication, and a desire
						for greatness, making me an outstanding candidate for your next
						project or team.
					</p>
				</div>
				<div className='img-container'>
					<img src={DesignProcess} alt='hero svg' className='img' />
				</div>
			</div>
		</section>
	);
};

export default Hero;
