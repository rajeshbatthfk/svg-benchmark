import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
import {SvgXml} from 'react-native-svg';

function SvgUserCircleGear(props) {
  if (props.xml) {
    return <SvgUserCircleGearXml {...props} />;
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
        cy={120}
        r={40}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Path
        d="M63.8 199.374a72.028 72.028 0 01128.4 0"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Circle
        cx={200}
        cy={56}
        r={16}
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
        d="M200 40V28m-13.856 20l-10.393-6m10.393 22l-10.393 6M200 72v12m13.856-20l10.393 6m-10.393-22l10.393-6m-.931 74.5A96.987 96.987 0 01224 128a96 96 0 11-96-96q4.506 0 8.908.408"
      />
    </Svg>
  );
}

function SvgUserCircleGearXml(props) {
  const xml =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><circle cx="128" cy="120" r="40" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M63.8 199.374a72.028 72.028 0 0 1 128.4 0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="200" cy="56" r="16" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M200 40V28m-13.856 20-10.393-6m10.393 22-10.393 6M200 72v12m13.856-20 10.393 6m-10.393-22 10.393-6m-.931 74.5A96.987 96.987 0 0 1 224 128a96 96 0 1 1-96-96q4.506 0 8.908.408"/></svg>';
  return <SvgXml xml={xml} width={props.width} height={props.height} />;
}

export default SvgUserCircleGear;
