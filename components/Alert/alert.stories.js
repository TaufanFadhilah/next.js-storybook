import React from 'react';

import { storiesOf } from '@storybook/react';
import { PrimaryAlert, SecondaryAlert, SuccessAlert, DangerAlert, WarningAlert, InfoAlert, LightAlert, DarkAlert } from "./alert";

storiesOf('Alert', module)
    .addDecorator(story => <div style={{ textAlign: 'center' }}>{story()}</div>)
    .add('Primary', () => <PrimaryAlert text="Hi, i am Primary Alert" />)
    .add('Secondary', () => <SecondaryAlert text="Hi, i am Secondary Alert" />)
    .add('Success', () => <SuccessAlert text="Hi, i am Success Alert" />)
    .add('Danger', () => <DangerAlert text="Hi, i am Danger Alert" />)
    .add('Warning', () => <WarningAlert text="Hi, i am Warning Alert" />)
    .add('Info', () => <InfoAlert text="Hi, i am Info Alert" />)
    .add('Light', () => <LightAlert text="Hi, i am Light Alert" />)
    .add('Dark', () => <DarkAlert text="Hi, i am Dark Alert" />)