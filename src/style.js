import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #43cbff 10%, #9708cc 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  padding: 5% 0;
`;

export const Container = styled.div`
  background-color: #fefefa;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  width: 50%;
  max-width: 100%;
  overflow: hidden;
`;

export const Form = styled.form`
  padding: 20px;
`;

export const FormButton = styled.button`
  background-color: #fc00ff;
  border: 2px solid #fc00ff;
  color: #fff;
  font-size: 14px;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  &:hover {
    cursor: pointer;
    opacity: 90%;
    transition: background 0.5s ease-out;
  }
`;
