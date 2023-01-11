import React from 'react';
import styles from './Footer.module.css';
import chatAppFooter from '../public/assets/chatappFooter.svg';
import Image from 'next/image';

const footerdata = [
	{ id: 1, title: 'Help', body: [ 'Support', 'Knowledgebase', 'Tutorials' ] },
	{
		id: 2,
		title: 'Features',
		body: [
			'Screen Sharing',
			'IOS & Android apps',
			'File Sharing',
			'User Management',
		],
	},
	{ id: 3, title: 'Company', body: [ 'About Us', 'Careers', 'Contact Us' ] },
	{
		id: 4,
		title: 'Contact Us',
		body: [
			'info@chatapp.com',
			'1800-200-300',
			`3500 Deer Creek Rd
  Palo Alto, CA`,
		],
	},
];

const Footerblock = ({ title, body, titleImage = false }) => {
	return (
		<div className={styles.footerBlock}>
			{titleImage ? (
				<div className={styles.footerHeadImage}>
					<Image src={title} />
				</div>
			) : (
				<h4 className={styles.footerHeadTitle}>{title}</h4>
			)}

			<div className={styles.footerBody}>
				{body.map((item, idx) => (
					<p className={styles.footerBodyContent} key={idx}>
						{item}
					</p>
				))}
			</div>
		</div>
	);
};

const Footer = () => {
	return (
		<footer className={`section ${styles.footerSection}`}>
			<div className="container">
				<div className={styles.footerContainer}>
					<Footerblock
						titleImage={true}
						title={chatAppFooter}
						body={[ 'The last team chat you will ever need' ]}
					/>
					{footerdata.map((data) => (
						<Footerblock title={data.title} body={data.body} key={data.id} />
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
