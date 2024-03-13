import Button from "../components/button";
import { COLORS } from "../designToken/color";



const Main = () => {
    console.log(COLORS.PALLETE.teal.base);
    return (
        <>
        <Button 
        color={COLORS.PALLETE.teal.base}
        width="100px"
        height="100px" 
        text="choihayoung"
        bgColor={COLORS.PALLETE.green.weight}
        />
        </>
    )
 
};
export default Main;
