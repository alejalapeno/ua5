import styles from './QuoteBlock.module.scss';
import {FC} from 'react';

export interface Quote {
	message: string,
	attribution: string
}

const QuoteBlock: FC<{quote: Quote, color?: string}> = ({quote: {message, attribution}, color}) => {

	const customStyles = {color};

	return (
		<blockquote className={styles['blockquote']}>
			<p style={customStyles}>{message}</p>
			<footer className={styles['attribution']}>
				{attribution}
			</footer>
		</blockquote>
	);
};

export default QuoteBlock;
