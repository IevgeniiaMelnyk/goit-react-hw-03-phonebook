import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  font-size: 20px;
  margin-top: 10px;
  padding: 6px 20px;
  border-radius: 6px;
  height: 40px;
  width: 300px;
  border: 2px solid green;
  outline: none;
`;

export const Label = styled.label`
  display: inline-block;
  font-size: 20px;
  font-weight: 600;
`;

export const Form = styled.form`
  display: flex;
  gap: 20px;
  align-items: flex-end;
  width: max-content;
  padding: 20px;
  border: 2px solid green;
  border-radius: 6px;
`;
