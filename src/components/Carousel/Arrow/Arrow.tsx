import styles from './Arrow.module.scss';
import {FC} from 'react';

const Arrow: FC<{clickHandler: () => void, direction: string}> = ({clickHandler, direction}) => {
	return (
		<button onClick={clickHandler} className={styles['arrow']} aria-label={`${direction} slide / item`}>
		</button>
	);
};

export default Arrow;
