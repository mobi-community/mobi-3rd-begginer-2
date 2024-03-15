import { Autocomplete, TextField } from "@mui/material";

const MUISelect = () => {
    const optionNameArr = ["김진솔", "최하영", "이영록", "장지영"];

    return (
        <>
            <div>
                <Autocomplete
                    disablePortal
                    id="combo-box-name"
                    options={optionNameArr}
                    sx={{ width: 300, backgroundColor: "burlywood" }}
                    renderInput={(params) => (
                        <TextField {...params} label="Name" />
                    )}
                />
            </div>
        </>
    );
};
export default MUISelect;
