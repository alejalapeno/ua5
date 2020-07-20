import styles from './Button.module.scss';
import {FC} from 'react';

const Button: FC = ({children}) => {
	return (
		<button className={styles['button']}>
			{children}
		</button>
	);
};

export default Button;
