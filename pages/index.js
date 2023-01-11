import Head from 'next/head';
import Image from 'next/image';
import { Roboto } from '@next/font/google';
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTA from '../components/cta';
import Footer from '../components/Footer';

const roboto = Roboto({
	weight: [ '400', '700' ],
	style: [ 'normal', 'italic' ],
	subsets: [ 'latin' ],
});

export default function Home() {
	return (
		<React.Fragment>
			<Head>
				<title>ChatApp -Simple Team Chat Application</title>
				<meta
					name="description"
					content="ChatApp is ta team collaboration and communication toll made for agile teams on the go. Try ChatApp for free and never lose what's important."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: 'Poppins', sans-serif;
				}

				* {
					box-sizing: border-box;
				}
			`}</style>
			<main className="main">
				<Navbar />
				<Hero />
				<Features />
				<CTA />
				<Footer />
			</main>
		</React.Fragment>
	);
}
