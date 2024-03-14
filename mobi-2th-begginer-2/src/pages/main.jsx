import Button from "../components/common/button";
import Select from "../components/common/select";

const Main = () => {
    const options = ["최하영", "김진솔", "이영록", "박채윤"];
    return (
        <>
            <Button color="mainPurple" size="large" text="하영천재" />
            <Select color="mainPurple" option={options} />
        </>
    );
};
export default Main;
