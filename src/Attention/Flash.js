import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../BaseAnimation';

export const FlashAnimation = keyframes`
  from, 50%, to {
     opacity: 1;
   }

   25%, 75% {
     opacity: 0;
   }
`;

const Flash = styled(BaseAnimation)`
  animation-name: ${FlashAnimation};
`;

export default Flash;
