import Button from "./../components/common/button";

const Main = () => {
    return (
        <div>
            <Button
                colorMode="red"
                borderRadiusStyle="square"
                shape="baseType"
            />
            <Button
                colorMode="green"
                borderRadiusStyle="over"
                shape="shaftType"
            />
            <Button
                colorMode="purple"
                borderRadiusStyle="circle"
                shape="circleType"
            />
        </div>
    );
};

export default Main;
