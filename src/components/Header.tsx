import { Options } from "../types/UserType";
import { isOptions } from "../types/userTypeGuard";
import { Filter } from "./Filter";
import { HeaderStyled } from "./styled/header.styled";
import { DropdownStyled } from "./styled/utils.styled";

type HeaderType = {
  searchVal: string;
  searchOption: Options;
  setSearchOption: (val: Options) => void;
  setInputValue: (val: string) => void;
};
export function Header({
  searchOption,
  setSearchOption,
  setInputValue,
  searchVal,
}: HeaderType) {
  return (
    <HeaderStyled>
      <Filter filter={searchVal} onFilterChange={setInputValue} />
      <DropdownStyled
        onChange={(e) => {
          const value = e.target.value;
          if (isOptions(value)) setSearchOption(value);
        }}
        value={searchOption}
      >
        <option value={"name" as Options}>Name</option>
        <option value={"username" as Options}>UserName</option>
        <option value={"email" as Options}>Email</option>
        <option value={"phone" as Options}>Phone</option>
      </DropdownStyled>
    </HeaderStyled>
  );
}
//{ searchOption, setSearchOption, setInputValue }
