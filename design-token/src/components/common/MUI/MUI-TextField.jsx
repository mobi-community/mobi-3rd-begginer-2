import { TextField } from "@mui/material";
import { useState } from "react";

const MUITextField = () => {
    const [outlinedValue, setOutlinedValue] = useState("");
    const [filledValue, setFilledValue] = useState("");
    const [standardValue, setStandardValue] = useState("");

    return (
        <>
            <div>
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    onChange={(e) => setOutlinedValue(e.target.value)}
                />
                <TextField
                    id="filled-basic"
                    label="Filled"
                    variant="filled"
                    onChange={(e) => setFilledValue(e.target.value)}
                />
                <TextField
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                    onChange={(e) => setStandardValue(e.target.value)}
                />
            </div>
            <div>
                <p>Outlined Value: {outlinedValue}</p>
                <p>Filled Value: {filledValue}</p>
                <p>Standard Value: {standardValue}</p>
            </div>
        </>
    );
};
export default MUITextField;
