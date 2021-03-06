import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
import {SvgXml} from 'react-native-svg';

function SvgSun(props) {
  if (props.xml) {
    return <SvgSunXml {...props} />;
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
        r={60}
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
        d="M128 36V16M62.946 62.946L48.804 48.804M36 128H16m46.946 65.054l-14.142 14.142M128 220v20m65.054-46.946l14.142 14.142M220 128h20m-46.946-65.054l14.142-14.142"
      />
    </Svg>
  );
}

function SvgSunXml(props) {
  const xml =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><circle cx="128" cy="128" r="60" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M128 36V16M62.946 62.946 48.804 48.804M36 128H16m46.946 65.054-14.142 14.142M128 220v20m65.054-46.946 14.142 14.142M220 128h20m-46.946-65.054 14.142-14.142"/></svg>';
  return <SvgXml xml={xml} width={props.width} height={props.height} />;
}

export default SvgSun;
