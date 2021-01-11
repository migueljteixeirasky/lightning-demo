import { Router } from "@lightningjs/sdk";

import { Routes } from "./routes";

export class App extends Router.App {
  static _template() {
    return {
      Pages: {
        forceZIndexContext: true,
      },
    };
  }

  _setup() {
    Router.startRouter(Routes, this);
  }
}
