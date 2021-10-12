import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SvgXml} from 'react-native-svg';

function SvgFaders(props) {
  if (props.xml) {
    return <SvgFadersXml {...props} />;
  }
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256.001 256.001"
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
        d="M128.001 120v96m0-176v48m72 112l.001 16m0-176l-.001 128m24 0h-48m-120 0L56 216m0-176l.001 96m-24 0h48m72-48h-48"
      />
    </Svg>
  );
}

function SvgFadersXml(props) {
  const xml =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256.001 256.001"><path fill="none" d="M0 0h256v256H0z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M128.001 120v96m0-176v48m72 112 .001 16m0-176-.001 128m24 0h-48m-120 0L56 216m0-176 .001 96m-24 0h48m72-48h-48"/></svg>';
  return <SvgXml xml={xml} width={props.width} height={props.height} />;
}

export default SvgFaders;
