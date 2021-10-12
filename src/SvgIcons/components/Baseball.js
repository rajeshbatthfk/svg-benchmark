import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
import {SvgXml} from 'react-native-svg';

function SvgBaseball(props) {
  if (props.xml) {
    return <SvgBaseballXml {...props} />;
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
        r={96}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Path
        d="M169.172 113.032a96.59 96.59 0 013.804-15.545m-.001 61.023a96.588 96.588 0 01-3.804-15.545m-82.343-29.933a96.59 96.59 0 00-3.804-15.545m.001 61.023a96.588 96.588 0 003.804-15.545m99.969-72.029a96.59 96.59 0 019.2-10.7m.001 135.529a96.592 96.592 0 01-9.203-10.704M60.001 195.765a96.59 96.59 0 009.203-10.704m-.002-114.125A96.592 96.592 0 0060 60.235"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
    </Svg>
  );
}

function SvgBaseballXml(props) {
  const xml =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><circle cx="128" cy="128" r="96" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M169.172 113.032a96.59 96.59 0 0 1 3.804-15.545m-.001 61.023a96.588 96.588 0 0 1-3.804-15.545m-82.343-29.933a96.59 96.59 0 0 0-3.804-15.545m.001 61.023a96.588 96.588 0 0 0 3.804-15.545m99.969-72.029a96.59 96.59 0 0 1 9.2-10.7m.001 135.529a96.592 96.592 0 0 1-9.203-10.704M60.001 195.765a96.59 96.59 0 0 0 9.203-10.704m-.002-114.125A96.592 96.592 0 0 0 60 60.235" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>';
  return <SvgXml xml={xml} width={props.width} height={props.height} />;
}

export default SvgBaseball;
