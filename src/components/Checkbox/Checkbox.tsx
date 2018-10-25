import * as React from 'react';
import styled from 'styled-components/native';
import { ICheckboxProps } from './ICheckbox';
import { flexDirection, p, dimensions } from '../../styles/classList';

export const Checkbox = (props: ICheckboxProps) => {
	return (
		<CheckboxWrapper {...props}>
			<TouchableWrapper onPress={props.onChange} />
			{props.title ? <CheckboxTitle>{props.title}</CheckboxTitle> : null}
		</CheckboxWrapper>
	);
};

const CheckboxWrapper = styled.View`${flexDirection('row')};`;

const TouchableWrapper = styled.TouchableOpacity`
	border-radius: 50%;
	background: ${(props) => (props.checked ? '#09f' : '#efefef')};
	${p('6px 10px')};
	${dimensions('30px', '30px', 1)};
`;

const CheckboxTitle = styled.Text`
	position: relative;
	display: block;
	${p('5px 10px')};
`;
