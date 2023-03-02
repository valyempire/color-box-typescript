import React from 'react';
/**
 * Import component
 */
import { Box } from '../Box/Box';

/**
 * Import types
 */
import { BoxContainerProps } from './BoxContainer.types';

/**
 * Import styles
 */
import { DivContainer } from './BoxContainer.styled';

/**
 * Display the component
 */
export const BoxContainer: React.FC<BoxContainerProps> = (props) => {
  const { numBoxes, allColors } = props;
  const boxes = Array.from({ length: numBoxes }).map(() => (
    <Box colors={allColors} />
  ));
  return <DivContainer className="BoxContainer">{boxes}</DivContainer>;
};
