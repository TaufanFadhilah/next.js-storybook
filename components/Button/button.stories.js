import React from 'react';

import { storiesOf } from '@storybook/react';
import { DefaultButton, PrimaryButton, InfoButton, SuccessButton, WarningButton, DangerButton } from "./button";

storiesOf('Button', module)
    .addDecorator(story => <div style={{ textAlign: 'center' }}>{story()}</div>)
    .add('Default', () => <DefaultButton>Default Button</DefaultButton>)
    .add('Primary', () => <PrimaryButton>Primary Button</PrimaryButton>)
    .add('Info', () => <InfoButton>Info Button</InfoButton>)
    .add('Success', () => <SuccessButton>Success Button</SuccessButton>)
    .add('Warning', () => <WarningButton>Warning Button</WarningButton>)
    .add('Danger', () => <DangerButton>Danger Button</DangerButton>)