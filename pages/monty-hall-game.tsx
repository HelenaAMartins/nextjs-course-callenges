import { useState } from "react";

import Doors from "partials/MontyHall/Doors";
import Settings from "partials/MontyHall/Settings";

const DoorPage = () => {
  const [settings, setSettings] = useState<IDoorsSettings>(
    {} as IDoorsSettings
  );
  const [startGame, setStartGame] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleStart = () => {
    if (!settings.doors || !settings.prizeDoor)
      return setErrorMessage("You should fill the fields!");
    if (settings.doors < 3 || settings.doors > 12)
      return setErrorMessage("Numbers of doors should be between 3 and 12");
    if (settings.prizeDoor > settings.doors)
      return setErrorMessage("This is invalid prize door!");
    setStartGame(true);
  };

  const handleReset = () => {
    setStartGame(false);
    setSettings({} as IDoorsSettings);
    setErrorMessage("");
  };

  return (
    <>
      {startGame ? (
        <>
          <Doors
            doors={settings.doors}
            prize={settings.prizeDoor}
            reset={handleReset}
          />
        </>
      ) : (
        <Settings
          errorMessage={errorMessage}
          clearError={setErrorMessage}
          settings={settings}
          setSettings={setSettings}
          handleStart={handleStart}
        />
      )}
    </>
  );
};

export default DoorPage;
