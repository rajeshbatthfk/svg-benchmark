import React from 'react';
import Sun from './components/Sun';
import ArticleMedium from './components/ArticleMedium';
import SelectionPlus from './components/SelectionPlus';
import Snowflake from './components/Snowflake';
import PokerChip from './components/PokerChip';
import Faders from './components/Faders';
import SelectionForeground from './components/SelectionForeground';
import FlowerLotus from './components/FlowerLotus';
import Baseball from './components/Baseball';
import SunDim from './components/SunDim';
import StarHalf from './components/StarHalf';
import DiscordLogo from './components/DiscordLogo';
import Cpu from './components/Cpu';
import SoccerBall from './components/SoccerBall';
import HandsClapping from './components/HandsClapping';
import Flower from './components/Flower';
import UserCircleGear from './components/UserCircleGear';
import Handshake from './components/Handshake';
import SlackLogo from './components/SlackLogo';
import Sliders from './components/Sliders';

export function getSvgIcons({id, useXml, size}) {
  return [
    <Sun xml={useXml} key={`Sun_${id}`} height={size} width={size} />,
    <ArticleMedium
      xml={useXml}
      key={`ArticleMedium_${id}`}
      height={size}
      width={size}
    />,
    <SelectionPlus
      xml={useXml}
      key={`SelectionPlus_${id}`}
      height={size}
      width={size}
    />,
    <Snowflake
      xml={useXml}
      key={`Snowflake_${id}`}
      height={size}
      width={size}
    />,
    <PokerChip
      xml={useXml}
      key={`PokerChip_${id}`}
      height={size}
      width={size}
    />,
    <Faders xml={useXml} key={`Faders_${id}`} height={size} width={size} />,
    <SelectionForeground
      xml={useXml}
      key={`SelectionForeground_${id}`}
      height={size}
      width={size}
    />,
    <FlowerLotus
      xml={useXml}
      key={`FlowerLotus_${id}`}
      height={size}
      width={size}
    />,
    <Baseball xml={useXml} key={`Baseball_${id}`} height={size} width={size} />,
    <SunDim xml={useXml} key={`SunDim_${id}`} height={size} width={size} />,
    <StarHalf xml={useXml} key={`StarHalf_${id}`} height={size} width={size} />,
    <DiscordLogo
      xml={useXml}
      key={`DiscordLogo_${id}`}
      height={size}
      width={size}
    />,
    <Cpu xml={useXml} key={`Cpu_${id}`} height={size} width={size} />,
    <SoccerBall
      xml={useXml}
      key={`SoccerBall_${id}`}
      height={size}
      width={size}
    />,
    <HandsClapping
      xml={useXml}
      key={`HandsClapping_${id}`}
      height={size}
      width={size}
    />,
    <Flower xml={useXml} key={`Flower_${id}`} height={size} width={size} />,
    <UserCircleGear
      xml={useXml}
      key={`UserCircleGear_${id}`}
      height={size}
      width={size}
    />,
    <Handshake
      xml={useXml}
      key={`Handshake_${id}`}
      height={size}
      width={size}
    />,
    <SlackLogo
      xml={useXml}
      key={`SlackLogo_${id}`}
      height={size}
      width={size}
    />,
    <Sliders xml={useXml} key={`Sliders_${id}`} height={size} width={size} />,
  ];
}
