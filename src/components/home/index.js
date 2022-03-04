import { WelcomeText, ExplanationText } from "./UI/HomeTexts";

export const MainText = ({ onMainText }) => {
  return (
    <div style={{ marginTop: "25px", padding: "0px 25px" }}>
      <WelcomeText>{onMainText}</WelcomeText>
      <ExplanationText>
        Para cidades brasileiras, digite apenas o nome da cidade.
      </ExplanationText>
      <ExplanationText>
        Para cidades extrangeiras, digite o nome nativo da cidade, seguido da
        abreviação do país.
      </ExplanationText>
      <h3 style={{ textAlign: "center" }}>Ex: London,UK</h3>
    </div>
  );
};
