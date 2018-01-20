import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../BaseAnimation';

export const BounceOutLeftAnimation = keyframes`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`;

const BounceOutLeft = styled(BaseAnimation)`
  animation-name: ${BounceOutLeftAnimation};
`;

export default BounceOutLeft;
