import Button from "../commons/button";
import styled from "styled-components";

const PageNumber = ({ startPage, endPage, params, paginate }) => {
    return (
        <Ul>
            {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                <Li key={index}>
                    <Button
                        onClick={() => {
                            paginate(index + startPage);
                        }}
                        $isActive={params === index + startPage}
                        disabled={params === index + startPage}
                        theme={"neonGreenDark"}
                        text={index + startPage}
                    />
                </Li>
            ))}
        </Ul>
    );
};
export default PageNumber;

const Ul = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
`;

const Li = styled.li`
    padding: 0 4px;
`;
