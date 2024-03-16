import styled from "styled-components";
import UserList from "./user-list";
import Button from "../../components/commons/button";
import PageNumber from "./page-number";

/**
 * @component
 * @parameter userPerPage: number - 현재 페이지의 번호를 받아옵니다
 * @parameter userData: Array<Object> - 전체 유저의 데이터를 받아옵니다
 * @parameter curPage: URLSearchParams - Main에 searchParams의 값입니다
 * @parameter setCurPage: setURLSearchParams - Main의 setSearchParams 입니다
 * @returns {JSX.Element}
 *
 * @description pagination을 하게해주는 페이지입니다
 */
const Pagination = ({ curPage, setCurPage, userPerPage, userData }) => {
    const perPageGroup = 5;
    // userData.length를 userPerPage로 나누어서 올림
    const pageCount = Math.ceil(userData.length / userPerPage);

    // queryParams의 key값 (page)의 value
    const params = Number(curPage.get("page"));

    const paginate = (page) => {
        curPage.set("page", page);
        setCurPage(curPage);
    };

    const startPage =
        Math.floor((params - 1) / perPageGroup) * perPageGroup + 1;
    const endPage = Math.min(startPage + perPageGroup - 1, pageCount);

    const prevPage = () => {
        if (params > 1) {
            paginate(params - 1);
        }
    };

    const prevGroup = () => {
        const prevPageGroup =
            (Math.ceil(params / perPageGroup) - 2) * perPageGroup + 1;
        if (prevPageGroup < 1) return;
        if (prevPageGroup <= pageCount) {
            paginate(prevPageGroup);
        }
    };

    const nextPage = () => {
        if (params < pageCount) {
            paginate(params + 1);
        }
    };

    const nextGroup = () => {
        const nextPageGroup =
            Math.ceil(params / perPageGroup) * perPageGroup + 1;
        if (nextPageGroup <= pageCount) {
            paginate(nextPageGroup);
        }
    };

    return (
        <Wrapper>
            <UserList
                userData={userData}
                userPerPage={userPerPage}
                curPage={curPage}
            />
            <PageNumberWrapper>
                <Ul>
                    <Li>
                        <Button
                            onClick={prevGroup}
                            text={"<<"}
                            theme={"neonGreenDark"}
                        />
                    </Li>
                    <Li>
                        <Button
                            onClick={prevPage}
                            text={"<"}
                            theme={"neonGreenDark"}
                        />
                    </Li>
                    <PageNumber
                        startPage={startPage}
                        endPage={endPage}
                        params={params}
                        paginate={paginate}
                    />
                    <Li>
                        <Button
                            onClick={nextPage}
                            text={">"}
                            theme={"neonGreenDark"}
                        />
                    </Li>
                    <Li>
                        <Button
                            onClick={nextGroup}
                            text={">>"}
                            theme={"neonGreenDark"}
                        />
                    </Li>
                </Ul>
            </PageNumberWrapper>
        </Wrapper>
    );
};
export default Pagination;

const Wrapper = styled.div`
    padding-top: 30px;
`;

const PageNumberWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
`;

const Li = styled.li`
    padding: 0 4px;
`;
