import * as React from 'react';
import styled from 'styled-components/native';
import { IWizardProps } from './IWizard';

export const Wizard = (props: IWizardProps) => {
	const childrenGreaterThanOne = props.children.length > 1;

	const createSlidesPartial = (item: Array<any>, index: string | number) => {
		let selected = props.slideIndex === index;
		return (
			<WizardSlide visible={selected} key={index}>
				{item}
			</WizardSlide>
		);
	};

	return (
		<WizardWrapper style={props.style}>
			{childrenGreaterThanOne ? (
				<WizardTrack>{props.children.map(createSlidesPartial)}</WizardTrack>
			) : (
				props.children
			)}
		</WizardWrapper>
	);
};

const WizardWrapper = styled.View``;
const WizardTrack = styled.View``;
const WizardSlide = styled.View``;

export default Wizard;
