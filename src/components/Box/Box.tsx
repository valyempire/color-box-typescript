import React, { useState } from "react";
/**
 * import component
 */
import { choice } from "../Helpers";

/**
 * Import types
 */
import { ColorsPros } from "./Box.types";

/**
 * Import styled
 */
import { Container } from "./Box.styled";

/**
 * Display the component
 */
export const Box: React.FC<ColorsPros> = (props) => {
  const { colors } = props;

  /**
   * Initializes the color
   */
  const [color, setColor] = useState(choice(colors));

  /**
   * Initializing a function for picking colors
   */
  const pickColor = () => {
    let newColor;
    do {
      newColor = choice(colors);
    } while (newColor === color);

    setColor(newColor);
  };

  return (
    <Container
      className="Box"
      style={{ backgroundColor: color }}
      onClick={pickColor}
    />
  );
};
