import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SvgXml} from 'react-native-svg';

function SvgSlackLogo(props) {
  if (props.xml) {
    return <SvgSlackLogoXml {...props} />;
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
        d="M128 104v24h0-72a24 24 0 01-24-24h0a24 24 0 0124-24h48a24 24 0 0124 24zm0-24h-24a24 24 0 01-24-24v0a24 24 0 0124-24h0a24 24 0 0124 24zm24 48h-24 0V56a24 24 0 0124-24h0a24 24 0 0124 24v48a24 24 0 01-24 24zm24 0v-24a24 24 0 0124-24h0a24 24 0 0124 24v0a24 24 0 01-24 24zm-48 24v-24h72a24 24 0 0124 24h0a24 24 0 01-24 24h-48a24 24 0 01-24-24zm0 24h24a24 24 0 0124 24v0a24 24 0 01-24 24h0a24 24 0 01-24-24zm-24-48h24v72a24 24 0 01-24 24h0a24 24 0 01-24-24v-48a24 24 0 0124-24zm-24 0v24a24 24 0 01-24 24h0a24 24 0 01-24-24v0a24 24 0 0124-24z"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
    </Svg>
  );
}

function SvgSlackLogoXml(props) {
  const xml =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path d="M128 104v24h0-72a24 24 0 0 1-24-24h0a24 24 0 0 1 24-24h48a24 24 0 0 1 24 24Zm0-24h-24a24 24 0 0 1-24-24v0a24 24 0 0 1 24-24h0a24 24 0 0 1 24 24Zm24 48h-24 0V56a24 24 0 0 1 24-24h0a24 24 0 0 1 24 24v48a24 24 0 0 1-24 24Zm24 0v-24a24 24 0 0 1 24-24h0a24 24 0 0 1 24 24v0a24 24 0 0 1-24 24Zm-48 24v-24h72a24 24 0 0 1 24 24h0a24 24 0 0 1-24 24h-48a24 24 0 0 1-24-24Zm0 24h24a24 24 0 0 1 24 24v0a24 24 0 0 1-24 24h0a24 24 0 0 1-24-24Zm-24-48h24v72a24 24 0 0 1-24 24h0a24 24 0 0 1-24-24v-48a24 24 0 0 1 24-24Zm-24 0v24a24 24 0 0 1-24 24h0a24 24 0 0 1-24-24v0a24 24 0 0 1 24-24Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>';
  return <SvgXml xml={xml} width={props.width} height={props.height} />;
}

export default SvgSlackLogo;
