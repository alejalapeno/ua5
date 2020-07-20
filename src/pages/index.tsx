import {GetStaticProps} from 'next';
import styles from './assets/index.module.scss';
import Asterik from './assets/asterik.svg';
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
	const sections = await fetch('https://raw.githubusercontent.com/UseAllFive/dev-challenges/frontend/data.json').
		then((response) => {
			return response.json();
		});

	sections[0].cta = 'View All';
	sections[1].color = '#0E4EF3';

	return {props: {sections}};
};

export default Home;
