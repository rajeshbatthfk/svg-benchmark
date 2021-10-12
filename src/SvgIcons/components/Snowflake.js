import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SvgXml} from 'react-native-svg';

function SvgSnowflake(props) {
  if (props.xml) {
    return <SvgSnowflakeXml {...props} />;
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
        d="M128 64v128M104 40l24 24 24-24m-48 176l24-24 24 24M72.574 96l110.852 64M39.79 104.785L72.574 96 63.79 63.215m128.42 129.57L183.426 160l32.784-8.785M72.574 160l110.852-64M63.79 192.785L72.574 160l-32.784-8.785m176.42-46.43L183.426 96l8.784-32.785"
      />
    </Svg>
  );
}

function SvgSnowflakeXml(props) {
  const xml =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M128 64v128M104 40l24 24 24-24m-48 176 24-24 24 24M72.574 96l110.852 64M39.79 104.785 72.574 96 63.79 63.215m128.42 129.57L183.426 160l32.784-8.785M72.574 160l110.852-64M63.79 192.785 72.574 160l-32.784-8.785m176.42-46.43L183.426 96l8.784-32.785"/></svg>';
  return <SvgXml xml={xml} width={props.width} height={props.height} />;
}

export default SvgSnowflake;
