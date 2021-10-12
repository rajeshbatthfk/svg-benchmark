import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
import {SvgXml} from 'react-native-svg';

function SvgSunDim(props) {
  if (props.xml) {
    return <SvgSunDimXml {...props} />;
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
        d="M128 36v-8M62.946 62.946l-5.657-5.657M36 128h-8m34.946 65.054l-5.657 5.657M128 220v8m65.054-34.946l5.657 5.657M220 128h8m-34.946-65.054l5.657-5.657"
      />
    </Svg>
  );
}

function SvgSunDimXml(props) {
  const xml =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><circle cx="128" cy="128" r="60" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M128 36v-8M62.946 62.946l-5.657-5.657M36 128h-8m34.946 65.054-5.657 5.657M128 220v8m65.054-34.946 5.657 5.657M220 128h8m-34.946-65.054 5.657-5.657"/></svg>';
  return <SvgXml xml={xml} width={props.width} height={props.height} />;
}

export default SvgSunDim;
