import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import Modal from '../components/modal'
// import ButtonStories from '../components/button.stories'
// import AlertStories from '../components/alert.stories'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

require('../components/Alert/alert.stories')
require('../components/Button/button.stories')

storiesOf('Heading', module)
  .add('H1', () => <h1>Heading 1</h1>)
  .add('H2', () => <h2>Heading 2</h2>)
  .add('H3', () => <h3>Heading 3</h3>)
  .add('H4', () => <h4>Heading 4</h4>)
  .add('H5', () => <h5>Heading 5</h5>)
  .add('H6', () => <h6>Heading 6</h6>)

storiesOf('Modal', module)
  .add('Primary', () => <Modal />);




