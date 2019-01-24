import styled from 'styled-components';
import { p } from '../../../styles/classList';
import {
	themeBackgroundColor,
	themeBorderColor,
	themeCheckedStateBackgroundColor,
	themeBlockSize,
	themeCheckedStateBackgroundColorHover
} from '../../../styles/sharedTheme';
import { defaultPropsTheme } from '../../../styles/defaultPropsTheme';
import { CheckboxWrapper } from './CheckboxWrapper';

export const CheckboxCircle = styled.div`
	cursor: pointer;
	border-radius: 50%;
	border-width: 1px;
	border-style: solid;

	${p('6px 10px')};

	${themeBlockSize};
	${themeBackgroundColor};
	${themeBorderColor};
	${themeCheckedStateBackgroundColor};

	${CheckboxWrapper}:hover & {
		${themeCheckedStateBackgroundColorHover};
	}
`;

CheckboxCircle.defaultProps = {
	size: 'default',
	kind: 'default',
	theme: defaultPropsTheme
};
