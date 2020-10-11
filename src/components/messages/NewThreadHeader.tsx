import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { ChangeEvent } from "react";
import { User } from "../../redux/slices/userSlice";

interface Props {
  onChange: (event: ChangeEvent<{}>, value: User[]) => void;
  options: User[];
  value: User[];
}

const NewThreadHeader = ({ options, onChange, value }: Props) => {
  return (
    <Autocomplete
      multiple
      value={value}
      options={options}
      onChange={onChange}
      getOptionLabel={(option) => option.name}
      fullWidth
      renderInput={(params) => (
        <TextField
          label="Recipients"
          placeholder="Name"
          {...params}
        />
      )}
    />
  );
};
export default NewThreadHeader;
