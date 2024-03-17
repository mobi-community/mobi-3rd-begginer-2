import styled from "styled-components";

const HeadlessModal = ({ isOpen, children, closeModal }) => {
    if (!isOpen) return null;

    return (
        <ModalBackground onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                {children}
                <button onClick={closeModal}>X</button>
            </ModalContent>
        </ModalBackground>
    );
};
export default HeadlessModal;

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background-color: #fff;
    padding: 20px;
`;
