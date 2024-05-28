import Particles, { initParticlesEngine } from "@tsparticles/react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { loadFull } from "tsparticles";
import {
  MoveDirection,
  type Container,
  type ISourceOptions,
  OutMode,
  Engine,
} from "@tsparticles/engine";

const BgParticles = () => {
  const [init, setInit] = useState(false);
  // useEffect(() => {
  //   initParticlesEngine(async (engine) => {
  //     await loadFull(engine);
  //   }).then(() => setInit(true));
  // }, []);
  const initParticlesHandler = () => {
    initParticlesEngine(async(engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }

  initParticlesHandler()
  const particlesLoaded = async (container?: Container): Promise<void> => {
    // console.log(container);
  };
  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 125,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.bounce,
          },
          random: true,
          speed: 5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },

      detectRetina: true,
    }),
    []
  );
  if (!init) return null;
  return (
    <Particles
      className="max-md:hidden"
      id="tsparticles"
      options={options}
      particlesLoaded={particlesLoaded}
    />
  );
};

export default BgParticles;
