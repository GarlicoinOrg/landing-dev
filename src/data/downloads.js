import React from 'react';

import Apple from 'src/assets/faApple.svg';
import Windows from 'src/assets/faWindows.svg';
import Linux from 'src/assets/faLinux.svg';
import Github from 'src/assets/faGithub.svg';
import Microchip from 'src/assets/faMicrochip.svg';

const release = 'v0.17.2';

export default {
  osx: {
    icon: <Apple />,
    desc: 'macOS',
    link: `https://github.com/GarlicoinOrg/Garlicoin/releases/download/${release}/garlicoin-0.17.2-osx64.tar.gz`
  },
  windows64: {
    icon: <Windows />,
    desc: (
      <>
        Windows
        <br />
        (64-bit)
      </>
    ),
    link: `https://github.com/GarlicoinOrg/Garlicoin/releases/download/${release}/garlicoin-0.17.2-win64.zip`
  },
  windows: {
    icon: <Windows />,
    desc: (
      <>
        Windows
        <br />
        (32-bit)
      </>
    ),
    link: `https://github.com/GarlicoinOrg/Garlicoin/releases/download/${release}/garlicoin-0.17.2-win32.zi`
  },
  linux: {
    icon: <Linux />,
    desc: 'Linux',
    link: `https://github.com/GarlicoinOrg/Garlicoin/releases/download/${release}/garlicoin-0.17.2-x86_64-linux-gnu.tar.gz`
  },
  RPI: {
    icon: <Microchip />,
    desc: 'Raspberry Pi',
    link: `https://github.com/GarlicoinOrg/Garlicoin/releases/download/${release}/garlicoin-0.17.2-arm-linux-gnueabihf.tar.gz`
  },
  github: {
    icon: <Github />,
    desc: 'Source Code',
    link: `https://github.com/GarlicoinOrg/Garlicoin/archive/${release}.tar.gz`
  }
};
