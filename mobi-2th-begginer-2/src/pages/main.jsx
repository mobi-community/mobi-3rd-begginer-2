import Button from "../components/button";
import { COLOR } from "../designToken/color";

const Main = () => {
    return (
        <>
        <Button color={`${COLOR.PALLETE.teal.base}`}
        width="100px"
        height="100px" 
        text="choihayoung"
        bgColor={`${COLOR.PALLETE.green.base}`}
        />
        </>
    )
 
};
export default Main;
