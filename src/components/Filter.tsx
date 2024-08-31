import { FormStyled, Input } from "./styled/form.styled";
type FilterType = {
  filter: string;
  onFilterChange: (val: string) => void;
};
export const Filter = ({ filter, onFilterChange }: FilterType) => {
  return (
    <FormStyled className="mb-3">
      <Input
        type="text"
        value={filter}
        onChange={(e) => {
          const { value } = e.target;
          onFilterChange(value);
        }}
      />
    </FormStyled>
  );
};
