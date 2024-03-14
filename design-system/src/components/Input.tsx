import styled from "styled-components";
import { COLOR } from "../styled-component/tokens/color";
import { FONT_SIZE } from "../styled-component/tokens/fontSize";
interface InputProps {
  width?: string;
  titleText?: string;
  buttonText?: string;
  handleButton?: () => void;
}

export const Input = ({
  width = "30rem",
  titleText = " ",
  buttonText = "",
  handleButton = () => {},
  ...props
}: InputProps) => {
  return (
    <InputWrapper $width={width}>
      {titleText && <Title>{titleText}</Title>}
      <BorderBox>
        {buttonText.trim() && (
          <TextButton
            onClick={(e) => {
              handleButton();
              e.preventDefault();
            }}
          >
            {buttonText.trim()}
          </TextButton>
        )}
      </BorderBox>
    </InputWrapper>
  );
};

const InputWrapper = styled.div<{ $width: string }>`
  height: auto;
  display: grid;
  grid-template-rows: auto auto auto;
  grid-gap: 0.5rem;
  width: ${({ $width }) => $width};
`;

const Title = styled.h4`
  grid-row: 1;
`;

const BorderBox = styled.div`
  grid-row: 2;
  height: fit-content;
  min-height: 4rem;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid ${COLOR.grayScale.gray_800};
  border-radius: 0.5rem;
  padding: 0.2rem 1rem;
`;

const TextButton = styled.button`
  width: 6rem;
  padding: 1rem;
  color: ${COLOR.grayScale.gray_600};
  background-color: ${COLOR.grayScale.gray_800};
  font-size: ${FONT_SIZE.ti};
  border-radius: 0.5rem;
  word-break: keep-all;
  &:hover {
    color: ${COLOR.main.light};
    background-color: ${COLOR.grayScale.gray_600};
    cursor: pointer;
  }
`;
