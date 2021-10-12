import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SvgXml} from 'react-native-svg';

function SvgFlowerLotus(props) {
  if (props.xml) {
    return <SvgFlowerLotusXml {...props} />;
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
        d="M128 200c16 0 42.456-.18 72.89-17.751s40.282-39.583 43.433-50.852a7.959 7.959 0 00-5.678-9.835c-7.382-1.892-20.13-3.602-36.53.288m-148.233 0c-16.399-3.89-29.146-2.18-36.527-.288a7.959 7.959 0 00-5.678 9.835c3.151 11.27 13 33.28 43.433 50.852S112 200 128 200"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Path
        d="M128 200s40-21.818 40-80c0-45.584-24.554-68.847-35.186-76.784a8.033 8.033 0 00-9.628 0C112.554 51.153 88 74.416 88 120c0 58.182 40 80 40 80z"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Path
        d="M128 200c11.99-2.55 44.33-20.782 63.713-54.354s14.609-60.38 10.822-72.038a7.992 7.992 0 00-9.272-5.353 77.437 77.437 0 00-31.356 15.135m-67.814 0a77.437 77.437 0 00-31.356-15.135 7.992 7.992 0 00-9.272 5.353c-3.787 11.659-8.56 38.466 10.822 72.038S116.01 197.45 128 200"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
    </Svg>
  );
}

function SvgFlowerLotusXml(props) {
  const xml =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path d="M128 200c16 0 42.456-.18 72.89-17.751s40.282-39.583 43.433-50.852a7.959 7.959 0 0 0-5.678-9.835c-7.382-1.892-20.13-3.602-36.53.288m-148.233 0c-16.399-3.89-29.146-2.18-36.527-.288a7.959 7.959 0 0 0-5.678 9.835c3.151 11.27 13 33.28 43.433 50.852S112 200 128 200" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M128 200s40-21.818 40-80c0-45.584-24.554-68.847-35.186-76.784a8.033 8.033 0 0 0-9.628 0C112.554 51.153 88 74.416 88 120c0 58.182 40 80 40 80Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M128 200c11.99-2.55 44.33-20.782 63.713-54.354s14.609-60.38 10.822-72.038a7.992 7.992 0 0 0-9.272-5.353 77.437 77.437 0 0 0-31.356 15.135m-67.814 0a77.437 77.437 0 0 0-31.356-15.135 7.992 7.992 0 0 0-9.272 5.353c-3.787 11.659-8.56 38.466 10.822 72.038S116.01 197.45 128 200" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>';
  return <SvgXml xml={xml} width={props.width} height={props.height} />;
}

export default SvgFlowerLotus;
