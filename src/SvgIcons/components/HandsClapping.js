import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SvgXml} from 'react-native-svg';

function SvgHandsClapping(props) {
  if (props.xml) {
    return <SvgHandsClappingXml {...props} />;
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
        d="M51.811 121.902a18 18 0 10-31.177 18l37 64.086a72 72 0 00124.708-72l-17-29.445a18 18 0 00-31.177 18"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Path
        d="M106.988 145.471l-38-65.818a18 18 0 00-31.177 18l38 65.818"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Path
        d="M150.165 148.256l-42-72.746a18 18 0 00-31.177 18"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Path
        d="M99.044 67.713L88.701 49.797a18 18 0 10-31.177 18l2.343 4.058m128.17 119.66a72.026 72.026 0 0014.018-89.383l-17-29.445a18 18 0 10-31.177 18"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Path
        d="M156.222 94.746l-28.344-49.093a18 18 0 00-31.177 18m80.146-52.382l-4.141 15.455m34.357-1.365l-9.177 13.107m32.753 10.469l-13.107 9.177"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
    </Svg>
  );
}

function SvgHandsClappingXml(props) {
  const xml =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path d="M51.811 121.902a18 18 0 1 0-31.177 18l37 64.086a72 72 0 0 0 124.708-72l-17-29.445a18 18 0 0 0-31.177 18" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="m106.988 145.471-38-65.818a18 18 0 0 0-31.177 18l38 65.818" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="m150.165 148.256-42-72.746a18 18 0 0 0-31.177 18" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M99.044 67.713 88.701 49.797a18 18 0 1 0-31.177 18l2.343 4.058m128.17 119.66a72.026 72.026 0 0 0 14.018-89.383l-17-29.445a18 18 0 1 0-31.177 18" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="m156.222 94.746-28.344-49.093a18 18 0 0 0-31.177 18m80.146-52.382-4.141 15.455m34.357-1.365-9.177 13.107m32.753 10.469-13.107 9.177" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>';
  return <SvgXml xml={xml} width={props.width} height={props.height} />;
}

export default SvgHandsClapping;
