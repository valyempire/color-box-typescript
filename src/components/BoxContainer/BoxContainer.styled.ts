/**
 * Import styled
 */
import { styled } from "@mui/system";

/**
 * Styled the DivContainer
 */
export const DivContainer = styled("div")(() => {
  return {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  };
});
