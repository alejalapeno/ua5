import styles from './Carousel.module.scss';
import {Carousel as ResponsiveCarousel} from 'react-responsive-carousel';
import QuoteBlock, {Quote} from '../QuoteBlock';
import Pip from './Pip';
import Arrow from './Arrow';
import {FC} from 'react';

const indicator = (clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void, isSelected: boolean, index: number) => {
	return (
		<Pip clickHandler={clickHandler} isSelected={isSelected} index={index} />
	);
};

const nextArrow = (clickHandler: () => void) => {
	return (
		<Arrow clickHandler={clickHandler} direction="next" />
	);
};

const prevArrow = (clickHandler: () => void) => {
	return (
		<Arrow clickHandler={clickHandler} direction="previous" />
	);
};

const Carousel: FC<{quotes: [Quote], color?: string}> = ({quotes, color}) => {
	return (
		<ResponsiveCarousel
			renderIndicator={indicator}
			renderArrowNext={nextArrow}
			renderArrowPrev={prevArrow}
			showThumbs={false}
			showStatus={false}
			stopOnHover={false}
			infiniteLoop
			autoPlay
			useKeyboardArrows
			className={styles['carousel']}>
			{quotes.map((quote) => {
				return (
					<QuoteBlock color={color} quote={quote} key={quote.message} />
				);
			})}
		</ResponsiveCarousel>
	);
};

export default Carousel;
