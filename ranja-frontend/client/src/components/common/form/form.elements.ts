import styled from 'styled-components';

export const Input = styled.input`
  padding: 10px 15px;
  line-height: 1.25;

  ::placeholder {
    font-size: ${({ theme }) => theme.fontSizes.subTxtSize};
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  height: 100%;
`;

export const FormField = styled.div`
  width: 70%;
`;

export const FormLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const FormLabelSpan = styled.span`
  width: 100px;
  font-size: ${({ theme }) => theme.fontSizes.titleSize};
`;

export const FormButton = styled.button`
  margin-top: 100px;
  width: 200px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.txt};
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
