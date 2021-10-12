import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
import {SvgXml} from 'react-native-svg';

function SvgSliders(props) {
  if (props.xml) {
    return <SvgSlidersXml {...props} />;
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
        d="M127.999 108v108m0-176v28"
      />
      <Circle
        cx={127.999}
        cy={88}
        r={20}
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
        d="M199.999 188l.001 28m0-176l-.001 108"
      />
      <Circle
        cx={199.999}
        cy={168}
        r={20}
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
        d="M55.999 156l-.001 60m0-176l.001 76"
      />
      <Circle
        cx={55.999}
        cy={136}
        r={20}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
    </Svg>
  );
}

function SvgSlidersXml(props) {
  const xml =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256.001 256.001"><path fill="none" d="M0 0h256v256H0z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M127.999 108v108m0-176v28"/><circle cx="127.999" cy="88" r="20" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="m199.999 188 .001 28m0-176-.001 108"/><circle cx="199.999" cy="168" r="20" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="m55.999 156-.001 60m0-176 .001 76"/><circle cx="55.999" cy="136" r="20" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>';
  return <SvgXml xml={xml} width={props.width} height={props.height} />;
}

export default SvgSliders;
