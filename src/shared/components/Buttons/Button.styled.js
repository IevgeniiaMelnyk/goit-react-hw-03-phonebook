import styled from 'styled-components';

export const Btn = styled.button`
  width: 150px;
  height: 40px;
  font-size: 16px;
  background-color: green;
  border: 2px solid green;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  transition: hover 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border: 2px solid green;
    background-color: white;
    color: green;
  }
`;

export const DeleteBtn = styled(Btn)`
  height: 30px;
`;
