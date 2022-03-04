import styled from "styled-components";

export const SearchBar = styled.input`
  padding: 8px;
  border: solid white 3px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(3px);
  color: white;
  border-radius: 25px 0px 0px 25px;
  
  ::placeholder {
    color: white;
  }
  &:focus {
    outline: none;
  }

  @media (max-width: 580px) {
    font-size: 18px;
    margin-top: -35px;
  }
`;
