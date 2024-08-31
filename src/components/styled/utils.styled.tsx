import styled from "styled-components";
import * as theme from "../../theme";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 40px 5px;
  min-width: 500px;
`;

export const DropdownStyled = styled("select")`
  width: 120px;
  height: 35px;
  color: ${theme.COLORS.blue};
  border: 1px solid ${theme.COLORS.blue};
  border-radius: 5px;
  background-color: ${theme.COLORS.white};
  font-size: ${theme.FONTS.SIZES.m};
  text-align: center;
  display: block;
  padding: 0 10px;

  &:hover {
    background: ${theme.COLORS.white};
    border: 1px solid ${theme.COLORS.blue};
    color: ${theme.COLORS.blue};
    transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  option {
    display: block;
    text-align: start;
    padding-right: 30px;
    color: ${theme.COLORS.blue};
    background-color: ${theme.COLORS.white};
  }
`;
