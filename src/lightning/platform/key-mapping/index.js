import { Actions } from "./constants";
import { CommonKeyboardKeys } from "./keyboard";

const KeyCodes = {
  E: 69,
  Q: 81,
  W: 87,
};

export const PlatformKeys = Object.assign(
  {
    [KeyCodes.E]: Actions.PAUSE,
    [KeyCodes.Q]: Actions.REWIND,
    [KeyCodes.W]: Actions.FAST_FORWARD,
  },
  CommonKeyboardKeys
);
