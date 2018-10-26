import { IRecoil } from '../..';

export interface IButtonProps extends IRecoil {
	style?: Object;
	pointer?: 'left' | 'right' | boolean;
	iconPointer?: 'left' | 'right' | 'up' | 'down';
	iconLocation?: 'left' | 'right';
	checkedTheme?: 'primary' | 'success' | 'error' | 'default';
	icon?: string;
	href?: string;
	target?: string;
	block?: boolean;
	strech?: boolean;
	right?: boolean;
	left?: boolean;
	submit?: boolean;
	advanced?: boolean;
	ghost?: boolean;
	required?: boolean;
	id?: string;
	shortcut?: string;
	shortCutInitKey?: string;
	materialIcon?: boolean;
	// TODO MAKE REQUIRED
	onPress?: (event: React.MouseEvent<any>) => void;
	// TODO REMOVE
	onClick?: any;
}