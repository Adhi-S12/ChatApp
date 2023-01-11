import React from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';
import HeroImage from '../public/assets/heroImage.png';

const Hero = () => {
	return (
		<section className={`section ${styles.herosection}`}>
			<div className={`container ${styles.herocontainer}`}>
				<div className={styles.leftBlock}>
					<h1 className={styles.heroTitle}>Have your best call</h1>
					<p className={styles.heroSubtitle}>
						Fast, easy & unlimited team chat.
					</p>
					<div className={styles.ctabuttons}>
						<button className={`button ${styles.btnprimary}`}>
							Try it Free
						</button>
						<button className={`button ${styles.btnsecondary}`}>
							Get a Demo
						</button>
					</div>
				</div>
				<div className={styles.rightBlock}>
					<Image
						src={HeroImage}
						className={styles.heroImage}
						alt="Hero Image"
						// width={591} height={575}
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
