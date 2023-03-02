import React from "react";

/**
 * Import component
 */
import { BoxContainer } from "./components/BoxContainer/BoxContainer";

/**
 * Displays the component
 */
export const App: React.FC = () => {
  return (
    <BoxContainer
      numBoxes={18}
      allColors={[
        "blue",
        "red",
        "white",
        "green",
        "navy",
        "lime",
        "teal",
        "yellow",
        "antiquewhite",
      ]}
    />
  );
};
