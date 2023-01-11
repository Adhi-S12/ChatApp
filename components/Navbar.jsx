import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';

const Navbar = () => {
	const [ isNavbarOpen, setIsNavbarOpen ] = useState(false);
	const [ isDesktop, setIsDesktop ] = useState(true);

	useEffect(() => {
		handleresize();

		function handleresize() {
			if (window.innerWidth > 800) {
				setIsDesktop(true);
			} else {
				setIsDesktop(false);
			}
		}

		const resize = window.addEventListener('resize', handleresize);

		return () => {
			window.removeEventListener('resize', handleresize);
		};
	}, []);

	return (
		<section className={styles.navsection}>
			<header className={`container ${styles.header}`}>
				<Link href="#" style={{ display: 'flex', alignItems: 'center' }}>
					<Image
						src="./assets/chatappLogo.svg"
						width={90}
						height={22}
						alt="ChatpApp Logo"
					/>
				</Link>
				<div className={styles.onlyonmobile}>
					{isNavbarOpen ? (
						<AiOutlineCloseCircle
							color="#FFF"
							size={22}
							onClick={() => setIsNavbarOpen(!isNavbarOpen)}
							className="onlyonmobile"
						/>
					) : (
						<AiOutlineMenu
							color="#FFF"
							size={22}
							onClick={() => setIsNavbarOpen(!isNavbarOpen)}
							className="onlyonmobile"
						/>
					)}
				</div>
				{isDesktop && (
					<nav className={`${styles.navbar}`}>
						<ul className={styles.navlist}>
							<li className={styles.navlink}>
								<Link href="#">Products</Link>
							</li>
							<li className={styles.navlink}>
								<Link href="#">Services</Link>
							</li>
							<li className={styles.navlink}>
								<Link href="#">Contact</Link>
							</li>
							<li className={styles.navlink}>
								<Link href="#">Log in</Link>
							</li>
							<li className={styles.navbtn}>
								<Link href="#">Try it Free</Link>
							</li>
						</ul>
					</nav>
				)}
				{isNavbarOpen && (
					<nav className={`${styles.navbar} ${styles.onlyonmobile}`}>
						<ul className={styles.navlist}>
							<li className={styles.navlink}>
								<Link href="#">Products</Link>
							</li>
							<li className={styles.navlink}>
								<Link href="#">Services</Link>
							</li>
							<li className={styles.navlink}>
								<Link href="#">Contact</Link>
							</li>
							<li className={styles.navlink}>
								<Link href="#">Log in</Link>
							</li>
							<li className={styles.navbtn}>
								<Link href="#">Try it Free</Link>
							</li>
						</ul>
					</nav>
				)}
			</header>
		</section>
	);
};

export default Navbar;
