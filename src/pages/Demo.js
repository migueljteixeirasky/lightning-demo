import Lightning from "@lightningjs/core";

import logo from "../images/logo.png";

export class Demo extends Lightning.Component {
  static _template() {
    return {
      LightningDemo: {
        src: logo,
      },
    };
  }

  _init() {
    const logoAnimation = this.tag("LightningDemo").animation({
      duration: 6,
      repeat: -1,
      stopMethod: "immediate",
      actions: [
        {
          p: "scaleX",
          v: { 0: { v: 1, s: 1 }, 0.5: { v: -1, s: 1 }, 1: { v: 1, s: 1 } },
        },
        { p: "x", v: { 0: 50, 0.25: 250, 0.5: 500, 0.75: 450, 1: 50 } },
        { p: "y", v: { 0: 50, 0.25: 250, 0.5: 50, 0.75: 100, 1: 50 } },
      ],
    });

    logoAnimation.start();
  }
}
