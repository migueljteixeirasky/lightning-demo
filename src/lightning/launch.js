import { Launch } from "@lightningjs/sdk";

import { App } from "../App";
import settings from "../settings.json";
import { PlatformKeys } from "./platform/key-mapping";

const SUPPORTED_RESOLUTIONS = {
  // Lightning SDK already supports 1080p and 720p resolutions
  // https://github.com/rdkcentral/Lightning-SDK/blob/ee86b7f85b0cc1dad95bb8ef3c855a9c9b2c90a2/src/Application/index.js#L37-L62
  540: {
    w: 960,
    h: 540,
    precision: 0.5,
  },
};

function loadApp() {
  // TODO Would it be preferable to store this info under the app control?
  // settings.appSettings.version = appMetadata.version;
  // settings.appSettings.id = appMetadata.identifier;

  const appSettings = settings.appSettings;
  appSettings.keys = PlatformKeys;

  // If the current resolution is non-standard, apply the given configs if supported
  const resolutionConfig = SUPPORTED_RESOLUTIONS[window.innerHeight];
  if (resolutionConfig) {
    appSettings.stage.w = resolutionConfig.w;
    appSettings.stage.h = resolutionConfig.h;
    appSettings.stage.precision = resolutionConfig.precision;
  }

  const appInstance = Launch(App, appSettings, settings.platformSettings);
  document.body.appendChild(appInstance.stage.getCanvas());
}

function setTextureMode() {
  return new Promise((resolve) => {
    const url = new URL(document.location.href);
    const enabled = url.searchParams.has("texture");

    // TODO Would it be preferable to store this info under the app control?
    // settings.platformSettings.textureMode = enabled;

    resolve(enabled);
  });
}

export function startLightning() {
  setTextureMode();
  loadApp();
}
