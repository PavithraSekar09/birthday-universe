import { useMemo } from "react";
import Particles from "@tsparticles/react";

function StarsBackground() {
  const options = useMemo(() => ({
    fullScreen: {
      enable: true,
      zIndex: -1,
    },

    background: {
      color: {
        value: "#0f0c29",
      },
    },

    particles: {
      number: {
        value: 100,
      },

      color: {
        value: "#ffffff",
      },

      size: {
        value: 2,
      },

      move: {
        enable: true,
        speed: 0.5,
      },

      opacity: {
        value: 0.7,
      },
    },
  }), []);

  return <Particles options={options} />;
}

export default StarsBackground;