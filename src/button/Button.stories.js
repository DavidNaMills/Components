import '../components/styles/main.scss';
import React from 'react';

import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import Button from '../components/presentational/Button';


storiesOf('Button', module)
  .addDecorator(centered)
  .add('default', () => <Button onClick={()=>{}} caption='Hello' type='default'/>)
  .add('confirm', () => <Button onClick={()=>{}} caption='please confirm' type='confirm'/>)
  .add('danger', () => <Button onClick={()=>{}} caption='danger!' type='danger'/>)
