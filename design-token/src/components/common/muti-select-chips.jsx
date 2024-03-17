import { useState } from "react"
import { ChipsStyle } from "../style/muti-select-chips.style"
import Button from "./button"

const MultiSelectChips = ({chipsText}) => {

    const [slelectedColor, setSelectedColor] = useState(null);

    const handleButtonClick = (color) => {
        setSelectedColor(color);
    }

    return (
        <>
        <ChipsStyle.ChipsContainer>
            {chipsText.map((item,index) => (
                <Button 
                key={index} 
                text={item} 
                size={"small"} 
                theme={"neonOrangeBlue"}
                clickText={"C!"+item}
                clickColor={"neonPinkDark"}
                onClick={()=>handleButtonClick(item)}
                />
            ))}
        </ChipsStyle.ChipsContainer>
        {slelectedColor && (
            <ChipsStyle.ViewColor>
                selectedColor: {slelectedColor}
            </ChipsStyle.ViewColor>
        )}
        </>
    )
}
export default MultiSelectChips

