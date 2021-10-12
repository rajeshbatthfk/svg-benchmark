import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
import {SvgXml} from 'react-native-svg';

function SvgPokerChip(props) {
  if (props.xml) {
    return <SvgPokerChipXml {...props} />;
  }
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}>
      <Path fill="none" d="M0 0h256v256H0z" />
      <Circle
        cx={128}
        cy={128}
        r={96}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Circle
        cx={128}
        cy={128}
        r={56}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
        d="M128 72V32M88.402 88.402L60.118 60.118M72 128H32m56.402 39.598l-28.284 28.284M128 184v40m39.598-56.402l28.284 28.284M184 128h40m-56.402-39.598l28.284-28.284"
      />
    </Svg>
  );
}

function SvgPokerChipXml(props) {
  const xml =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><circle cx="128" cy="128" r="96" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="128" cy="128" r="56" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M128 72V32M88.402 88.402 60.118 60.118M72 128H32m56.402 39.598-28.284 28.284M128 184v40m39.598-56.402 28.284 28.284M184 128h40m-56.402-39.598 28.284-28.284"/></svg>';
  return <SvgXml xml={xml} width={props.width} height={props.height} />;
}

export default SvgPokerChip;
