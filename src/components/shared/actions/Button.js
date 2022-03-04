import styled from "styled-components";

export const ForecastButton = styled.button`
  color: white;
  font-size: 28px;
  border: 3px solid white;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(3px);
  padding: 25px;
  cursor: pointer;

  @media (max-width: 580px) {
    top: 80%;
  }
`;

export const SearchButton = styled.button`
  color: white;
  font-size: 16px;
  text-align: center;
  border: 3px solid white;
  border-radius: 5px 25px 25px 0px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(3px);
  padding: 5px 15px 5px 10px;
  cursor: pointer;
  margin-left: -3px;

  @media (max-width: 580px) {
    font-size: 20px;
    margin-top: -35px;
  }
`;
