import styled from "styled-components";
import * as theme from "../../theme";

export const HeaderStyled = styled.header`
  background-color: ${theme.COLORS.blue};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px;

  :not(:last-child) {
    margin-right: 10px;
  }
`;
