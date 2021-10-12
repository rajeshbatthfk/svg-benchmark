import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SvgXml} from 'react-native-svg';

function SvgArticleMedium(props) {
  if (props.xml) {
    return <SvgArticleMediumXml {...props} />;
  }
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}>
      <Path fill="none" d="M0 0h256v256H0z" />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
        d="M24.047 56.001h16m80 0h16m-112 80h24m64 0h24m32-32h72m-72 32h72m-168 32h168m-168 32h168m-200-64v-80l40 64 40-64v80"
      />
    </Svg>
  );
}

function SvgArticleMediumXml(props) {
  const xml =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M24.047 56.001h16m80 0h16m-112 80h24m64 0h24m32-32h72m-72 32h72m-168 32h168m-168 32h168m-200-64v-80l40 64 40-64v80"/></svg>';
  return <SvgXml xml={xml} width={props.width} height={props.height} />;
}

export default SvgArticleMedium;
