import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;
  padding: 10px;
`;
export const ContainerHeader = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;
  padding: 10px;
  background-image: linear-gradient( to right, rgb(57 174 251), rgb(5,110,136) );
  box-shadow: 0px 2px 10px black;

  @media (max-width: 580px) {
    padding-bottom: 35px;
  }
`;