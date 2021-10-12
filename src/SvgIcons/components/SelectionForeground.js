import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SvgXml} from 'react-native-svg';

function SvgSelectionForeground(props) {
  if (props.xml) {
    return <SvgSelectionForegroundXml {...props} />;
  }
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}>
      <Path fill="none" opacity={0.1} d="M0 0h256v256H0z" />
      <Path
        d="M56 216h-8a8 8 0 01-8-8v-8m72-112H88m24 128H96m72-48v-24M40 160v-16m112 72h8a8 8 0 008-8v-8M152 88h8a8 8 0 018 8v8M56 88h-8a8 8 0 00-8 8v8"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Path
        d="M168 167.994h39.999a8 8 0 008-8v-112a8 8 0 00-8-8h-112a8 8 0 00-8 8V88"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
    </Svg>
  );
}

function SvgSelectionForegroundXml(props) {
  const xml =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="none" opacity=".1" d="M0 0h256v256H0z"/><path d="M56 216h-8a8 8 0 0 1-8-8v-8m72-112H88m24 128H96m72-48v-24M40 160v-16m112 72h8a8 8 0 0 0 8-8v-8M152 88h8a8 8 0 0 1 8 8v8M56 88h-8a8 8 0 0 0-8 8v8" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M168 167.994h39.999a8 8 0 0 0 8-8v-112a8 8 0 0 0-8-8h-112a8 8 0 0 0-8 8V88" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>';
  return <SvgXml xml={xml} width={props.width} height={props.height} />;
}

export default SvgSelectionForeground;
