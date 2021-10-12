import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';
import {SvgXml} from 'react-native-svg';

function SvgCpu(props) {
  if (props.xml) {
    return <SvgCpuXml {...props} />;
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
        strokeWidth={12}
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M100 100h56v56h-56z"
      />
      <Rect
        x={48}
        y={48}
        width={160}
        height={160}
        rx={8}
        strokeWidth={12}
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
        d="M208 104h24m-24 48h24M24 104h24m-24 48h24m104 56v24m-48-24v24m48-208v24m-48-24v24"
      />
    </Svg>
  );
}

function SvgCpuXml(props) {
  const xml =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path stroke-width="12" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M100 100h56v56h-56z"/><rect x="48" y="48" width="160" height="160" rx="8" stroke-width="12" stroke="#000" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M208 104h24m-24 48h24M24 104h24m-24 48h24m104 56v24m-48-24v24m48-208v24m-48-24v24"/></svg>';
  return <SvgXml xml={xml} width={props.width} height={props.height} />;
}

export default SvgCpu;
