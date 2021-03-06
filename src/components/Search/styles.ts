import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 65px;
  display: flex;
  justify-content: center;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 0 10px;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  i {
    font-size: 20px;
    position: absolute;
    right: 15px;
    color: #999;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 36px;
  border: solid 1px #ccc;
  border-radius: calc(36px / 2);
  padding: 0 15px;
`;
