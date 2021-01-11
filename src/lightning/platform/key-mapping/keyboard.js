import { Actions } from "./constants";

const KeyCodes = {
  BACKSPACE: 8,
  ESCAPE: 27,
  SPACEBAR: 32,
  F: 70,
  I: 73,
  M: 77,
  S: 83,
};

export const CommonKeyboardKeys = {
  [KeyCodes.BACKSPACE]: Actions.DELETE,
  [KeyCodes.ESCAPE]: Actions.BACK,
  [KeyCodes.F]: Actions.FULLSCREEN,
  [KeyCodes.I]: Actions.INFO,
  [KeyCodes.M]: Actions.MUTE,
  [KeyCodes.S]: Actions.SUBTITLES,
  [KeyCodes.SPACEBAR]: Actions.PLAY_PAUSE,
};
