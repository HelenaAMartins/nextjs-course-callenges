import BackHome from "components/BackHome";
import * as Styled from "./styled";

const Settings = ({
  errorMessage,
  clearError,
  settings,
  setSettings,
  handleStart,
}: ISettingsProps) => {
  return (
    <Styled.Block>
      <Styled.PageTitle>Monty Hall Game</Styled.PageTitle>
      <Styled.InfoMessageWrapper>
        <Styled.InputsWrapper>
          <Styled.InputInfoWrapper>
            Number of doors:
            <Styled.Input
              type="text"
              onChange={(e) =>
                setSettings({
                  ...settings,
                  doors: Number(e.target.value),
                } as IDoorsSettings)
              }
              onFocus={() => clearError("")}
              value={settings?.doors || 0}
            />
            The door prize:
            <Styled.Input
              type="text"
              onChange={(e) =>
                setSettings({
                  ...settings,
                  prizeDoor: Number(e.target.value),
                } as IDoorsSettings)
              }
              onFocus={() => clearError("")}
              value={settings?.prizeDoor || 0}
            />
          </Styled.InputInfoWrapper>
          <Styled.Button onClick={() => handleStart()}>Start</Styled.Button>
        </Styled.InputsWrapper>
        {errorMessage && <Styled.Message>{errorMessage}</Styled.Message>}
      </Styled.InfoMessageWrapper>
      <Styled.BackButton>
        <BackHome />
      </Styled.BackButton>
    </Styled.Block>
  );
};

export default Settings;
