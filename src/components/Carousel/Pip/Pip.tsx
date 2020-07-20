import styles from './Pip.module.scss';
import classnames from 'classnames/bind';
import {FC} from 'react';

const cx = classnames.bind(styles);

const Pip: FC<{clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void, isSelected: boolean, index: number}> = ({clickHandler, isSelected, index}) => {

	const pipClasses = cx({
		'pip': true,
		'-selected': isSelected,
	});

	return (
		<li>
			<button onClick={clickHandler} className={pipClasses} aria-label={`slide item ${index}`} tabIndex={0}></button>
		</li>
	);
};

export default Pip;
