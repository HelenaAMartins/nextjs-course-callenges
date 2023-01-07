interface IDoorsSettings {
  doors: number;
  prizeDoor: number;
}

interface ISettingsProps {
  errorMessage: string;
  clearError: (param) => void;
  settings: IDoorsSettings;
  setSettings: (param) => void;
  handleStart: () => void;
}
