import React from 'react';
import styles from './cta.module.css';
import Image from 'next/image';
import ctaImg from '../public/assets/ctaimage.png';
import stars from '../public/assets/stars.svg';

const CTA = () => {
	return (
		<section className={`section ${styles.ctasection}`}>
			<div className={`container ${styles.ctasplit}`}>
				<div className={styles.leftBlock}>
					<div className="imgContainer">
						<Image src={ctaImg} className={styles.ctaimage} />
					</div>
				</div>
				<div className={styles.rightBlock}>
					<h3 className={styles.sectionTitle}>
						Perfect Solution for Small Business
					</h3>
					<p className={styles.sectionSubtitle}>
						Pricing plans that fit like a glove.
					</p>
					<div className={styles.ctaBtns}>
						<button className={`button ${styles.primary}`}>Try it now</button>
						<button className={`button ${styles.secondary}`}>Get a demo</button>
					</div>
					<div className={styles.divider} />
					<div className={styles.ratingsContainer}>
						<div className={styles.stars}>
							<Image src={stars} />
						</div>
						<div className={styles.rating}>
							<b>3.5 million calls</b> completed with a 96.8% star rating
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTA;
