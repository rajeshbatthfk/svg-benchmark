import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
import {SvgXml} from 'react-native-svg';

function SvgDiscordLogo(props) {
  if (props.xml) {
    return <SvgDiscordLogoXml {...props} />;
  }
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}>
      <Path fill="none" d="M0 0h256v256H0z" />
      <Circle cx={96} cy={144} r={10} />
      <Circle cx={160} cy={144} r={10} />
      <Path
        d="M74.402 80A175.325 175.325 0 01128 72a175.325 175.325 0 0153.598 8m-.001 96A175.325 175.325 0 01128 184a175.325 175.325 0 01-53.598-8"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Path
        d="M155.044 182.088l12.025 24.05a7.968 7.968 0 008.991 4.21c24.539-6 45.693-16.46 61.1-29.851a8.052 8.052 0 002.472-8.39L205.66 58.861a8.021 8.021 0 00-4.627-5.11 175.853 175.853 0 00-29.665-9.182 8.018 8.018 0 00-9.319 5.286l-7.973 23.92m-53.12 108.313l-12.025 24.05a7.968 7.968 0 01-8.991 4.21c-24.539-6-45.693-16.46-61.1-29.851a8.052 8.052 0 01-2.472-8.39L50.342 58.861a8.021 8.021 0 014.626-5.11 175.853 175.853 0 0129.665-9.182 8.018 8.018 0 019.319 5.286l7.973 23.92"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
    </Svg>
  );
}

function SvgDiscordLogoXml(props) {
  const xml =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><circle cx="96" cy="144" r="10"/><circle cx="160" cy="144" r="10"/><path d="M74.402 80A175.325 175.325 0 0 1 128 72a175.325 175.325 0 0 1 53.598 8m-.001 96A175.325 175.325 0 0 1 128 184a175.325 175.325 0 0 1-53.598-8" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="m155.044 182.088 12.025 24.05a7.968 7.968 0 0 0 8.991 4.21c24.539-6 45.693-16.46 61.1-29.851a8.052 8.052 0 0 0 2.472-8.39L205.66 58.861a8.021 8.021 0 0 0-4.627-5.11 175.853 175.853 0 0 0-29.665-9.182 8.018 8.018 0 0 0-9.319 5.286l-7.973 23.92m-53.12 108.313-12.025 24.05a7.968 7.968 0 0 1-8.991 4.21c-24.539-6-45.693-16.46-61.1-29.851a8.052 8.052 0 0 1-2.472-8.39L50.342 58.861a8.021 8.021 0 0 1 4.626-5.11 175.853 175.853 0 0 1 29.665-9.182 8.018 8.018 0 0 1 9.319 5.286l7.973 23.92" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>';
  return <SvgXml xml={xml} width={props.width} height={props.height} />;
}

export default SvgDiscordLogo;
