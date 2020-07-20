import {GetStaticProps} from 'next';
import styles from './index.module.scss';
import Asterik from './asterik.svg';
import Carousel from '../components/Carousel';
import {Quote} from '../components/QuoteBlock';
import Button from '../components/Button';
import {FC} from 'react';

interface Section {
	section_title: string,
	quotes: [Quote],
	cta?: string,
	color?: string
}

const Home: FC<{sections: [Section]}> = ({sections}) => {
	return (
		<>
			{sections.map(({section_title: title, quotes, cta, color}) => {
				return (
					<section className={styles['section']} key={title}>
						<h5 className={styles['title']}>{title}</h5>
						<Carousel quotes={quotes} color={color} />
						{cta && <Button>{cta}</Button>}
						<Asterik className={styles['asterik']} />
					</section>
				);
			})}
		</>
	);
};

export const getStaticProps: GetStaticProps = async() => {
	const domain = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : 'https://ua5.vercel.app';

	const sections = await fetch(`${domain}/data.json`).
		then((response) => {
			return response.json();
		});

	sections[0].cta = 'View All';
	sections[1].color = '#0E4EF3';

	return {props: {sections}};
};

export default Home;
