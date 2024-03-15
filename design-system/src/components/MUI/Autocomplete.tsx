import { Autocomplete, TextField } from "@mui/material";

export const MUIAutoComplete = () => {
  const options = [
    "MUI",
    "TailwindCSS UI",
    "Chakra UI",
    "Shadcn UI",
    "Heaedless UI",
  ];
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="UI Library" />}
    />
  );
};
