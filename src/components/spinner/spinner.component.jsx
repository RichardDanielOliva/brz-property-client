import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

const Spinner = ({height}) => (
  <SpinnerOverlay height={height}>
    <SpinnerContainer />
  </SpinnerOverlay>
);

export default Spinner;