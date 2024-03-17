import MButton from "../components/MUI/muiButton";
import Input from "../components/common/input";

const OpenPage = () => {
    return (
        <>
            <div>openPage</div>
            <MButton text="최하영" color="peach" size="large" />
            <MButton text="최하영" color="mainPurple" size="medium" />
            <MButton text="최하영" color="teal" size="small" />
            <MButton text="최하영" color="gray" size="mini" />
            {/* <span class="checkbox">
                <input type="checkbox" id="checkbox" />
                <label for="checkbox">클릭해보세요!</label>
            </span> */}
            <Input
                color="mainPurple"
                size="large"
                type="text"
                placeholder="하영천재"
            ></Input>
        </>
    );
};
export default OpenPage;
