import styled from 'styled-components';

export const Form = styled.form`
margin-top: 24px;
margin-bottom: 24px;
margin-left: auto;
margin-right: auto;
  display: flex;
  align-items: stretch;
  width: 100%;
  max-width: 400px;
  background-color:  #B2AAA9;
  border-radius: 3px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: 0;
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  background-color:  #B2AAA9;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    fill: #C07043;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 16px;
  border: none;
  outline: none;
  padding-left: 8px;
  padding-right: 4px;
  background-color:  #B2AAA9;

  &::placeholder {
    font: inherit;
    font-size: 16px;
    color: #35302C;
  }
`;
