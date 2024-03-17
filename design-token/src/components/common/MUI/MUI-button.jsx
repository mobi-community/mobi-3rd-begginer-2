import { Button, ButtonGroup } from "@mui/material";

const MUIButton = () => {
    const handleClick = (message) => {
        alert(message);
    };

    return (
        <>
            <div>
                <Button
                    variant="text"
                    size="small"
                    sx={{ backgroundColor: "unset" }}
                    onClick={() => handleClick("text button")}
                >
                    text
                </Button>
                <Button
                    variant="contained"
                    size="medium"
                    sx={{ backgroundColor: "turquoise" }}
                    onClick={() => handleClick("contained button")}
                >
                    contained
                </Button>
                <Button
                    variant="outlined"
                    size="large"
                    sx={{ backgroundColor: "salmon" }}
                    onClick={() => handleClick("outlined button")}
                >
                    outlined
                </Button>
                <ButtonGroup
                    variant="contained"
                    aria-label="Basic button group"
                    size="large"
                    color="secondary"
                >
                    <Button onClick={() => handleClick("One button")}>
                        ONE
                    </Button>
                    <Button onClick={() => handleClick("Two button")}>
                        TWO
                    </Button>
                    <Button onClick={() => handleClick("three button")}>
                        THREE
                    </Button>
                </ButtonGroup>
            </div>
        </>
    );
};
export default MUIButton;
