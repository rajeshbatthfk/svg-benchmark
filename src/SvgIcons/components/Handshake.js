import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SvgXml} from 'react-native-svg';

function SvgHandshake(props) {
  if (props.xml) {
    return <SvgHandshakeXml {...props} />;
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
        d="M240.718 121.785L216 134.144l-32-61.282 24.97-12.485a8 8 0 0110.668 3.452l24.593 47.097a8 8 0 01-3.513 10.859zM40 133.072l-24.718-12.359a8 8 0 01-3.513-10.858l24.593-47.097a8 8 0 0110.669-3.453L72 71.79zm176 1.072l-16 18.718-36.797 36.797a8 8 0 01-7.597 2.104l-57.957-14.49a8 8 0 01-2.988-1.458L40 133.072"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Path
        d="M200 152.862l-44-32-12.8 9.6a32 32 0 01-38.4 0l-5.42-4.066a8 8 0 01-.858-12.057l39.135-39.134a8 8 0 015.657-2.343H184"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Path
        d="M72.574 71.79l51.32-14.962a8 8 0 015.537.392L164 72.862m-52 140l-30.14-7.535a8 8 0 01-3.307-1.724L56 184"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
    </Svg>
  );
}

function SvgHandshakeXml(props) {
  const xml =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path d="M240.718 121.785 216 134.144l-32-61.282 24.97-12.485a8 8 0 0 1 10.668 3.452l24.593 47.097a8 8 0 0 1-3.513 10.859ZM40 133.072l-24.718-12.359a8 8 0 0 1-3.513-10.858l24.593-47.097a8 8 0 0 1 10.669-3.453L72 71.79Zm176 1.072-16 18.718-36.797 36.797a8 8 0 0 1-7.597 2.104l-57.957-14.49a8 8 0 0 1-2.988-1.458L40 133.072" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="m200 152.862-44-32-12.8 9.6a32 32 0 0 1-38.4 0l-5.42-4.066a8 8 0 0 1-.858-12.057l39.135-39.134a8 8 0 0 1 5.657-2.343H184" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="m72.574 71.79 51.32-14.962a8 8 0 0 1 5.537.392L164 72.862m-52 140-30.14-7.535a8 8 0 0 1-3.307-1.724L56 184" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>';
  return <SvgXml xml={xml} width={props.width} height={props.height} />;
}

export default SvgHandshake;
