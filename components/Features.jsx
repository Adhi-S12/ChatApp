import React from 'react';
import styles from './Features.module.css';
import Image from 'next/image';
import FeaturesImage from '../public/assets/featuresimage.png';

const Features = () => {
	return (
		<section className={`${styles.featureSection}`}>
			<div className="section flex-col text-center">
				<h2 className={styles.sectionTitle}>Instant Team Chats</h2>
				<p className={`${styles.sectionSubtitle} `}>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
					commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
					et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
					felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
					consequat massa
				</p>
				<div className={styles.imgContainer}>
					<Image
						src={FeaturesImage}
						className={styles.featureImg}
						alt="Explaining Features Image"
					/>
				</div>
			</div>
		</section>
	);
};

export default Features;
