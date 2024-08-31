import styled from "styled-components";
import * as theme from "../../theme";

export const Table = styled("table")`
  font-size: ${theme.FONTS.SIZES.m};
  background-color: ${theme.COLORS.gray};
  margin: 25px 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  min-width: 600px;
`;
export const TableTh = styled("th")`
  padding: 12px 15px;
`;
export const TableThead = styled("thead")`
  background-color: ${theme.COLORS.blue};
  color: ${theme.COLORS.white};
  text-align: left;
`;
export const TableTbody = styled("tbody")`
  tr:nth-child(even) {
    background-color: ${theme.COLORS.white};
  }
`;
export const TableTd = styled("td")`
  padding: 12px 15px;
  width: 150px;
`;
