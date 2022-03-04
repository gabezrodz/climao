import { ContainerHeader } from "../shared/wrappers/Container";
import { SiteName } from "./UI/SiteName";
import { SearchButton } from "../shared/actions/Button";
import { SearchBar } from "./UI/SearchBar";

const Header = ({onGetData,onInputValue}) => {
  return (
    <ContainerHeader>
      <div style={{ display: "flex" }}>
        <SiteName> Climão </SiteName>
        <img
          src="https://i.pinimg.com/originals/d7/ce/7d/d7ce7de4a7157c0262cb65dd1efc47d1.png"
          alt="sol"
          style={{ width: "80px" }}
        ></img>
      </div>
      <form style={{ display: "flex", alignItems: "center" }}>
        <SearchBar
          onChange={onInputValue}
          placeholder="Digite uma cidade"
        ></SearchBar>
        <SearchButton onClick={onGetData}>🔍</SearchButton>
      </form>
    </ContainerHeader>
  );
};

export default Header;
