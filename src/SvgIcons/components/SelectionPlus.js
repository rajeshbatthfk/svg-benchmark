import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SvgXml} from 'react-native-svg';

function SvgSelectionPlus(props) {
  if (props.xml) {
    return <SvgSelectionPlusXml {...props} />;
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
        d="M140 48h-24m0 160h24m40-160h20a8 8 0 018 8v20m0 64v-24m-160 0v24m28 68H56a8 8 0 01-8-8v-20M76 48H56a8 8 0 00-8 8v20m160 104v56m28-28h-56"
      />
    </Svg>
  );
}

function SvgSelectionPlusXml(props) {
  const xml =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M140 48h-24m0 160h24m40-160h20a8 8 0 0 1 8 8v20m0 64v-24m-160 0v24m28 68H56a8 8 0 0 1-8-8v-20M76 48H56a8 8 0 0 0-8 8v20m160 104v56m28-28h-56"/></svg>';
  return <SvgXml xml={xml} width={props.width} height={props.height} />;
}

export default SvgSelectionPlus;
