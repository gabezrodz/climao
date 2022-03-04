import styled from "styled-components";

export const Card = styled.div`
  text-align: center;
  width: fit-content;
  padding: 5px 15px;
  border-radius: 5px;
  border: solid 2px white;
  
  backdrop-filter: blur(10px);
`;

export const CardForecast = styled.div`
  text-align: center;
  width: fit-content;
  padding: 5px 15px;
  border-radius: 5px;
  border: solid 2px white;

  backdrop-filter: blur(5px);
`;

export const DivTemps = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
`;

export const DivWeather = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
