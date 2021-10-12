/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React, {useCallback, useMemo, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';

import {getSvgIcons} from './SvgIcons';
import {getPngIcons} from './PngIcons';
import OptionsPane from './OptionsPane';
import _ from 'lodash';
import ProfilerView from './ProfilerView';

const modes = ['SVGR', 'SVG-XML', 'PNG'];

const App: () => Node = () => {
  const [options, setOptions] = useState({
    mode: modes[0],
    isStarted: false,
    count: 5,
    iconSize: 24,
  });

  const changeOptions = useCallback(
    ({
      repeatCount: newRepeatCount,
      mode: newMode,
      iconSize: newIconSize,
      isStarted,
    }) => {
      console.log('changeOptions', {
        mode: newMode,
        isStarted,
        iconSize: newIconSize,
        count: newRepeatCount,
      });
      setOptions({
        mode: newMode,
        isStarted,
        iconSize: newIconSize,
        count: newRepeatCount,
      });
    },
    [],
  );

  const {count, iconSize, isStarted, mode: selectedMode} = options;

  return (
    <SafeAreaView
      style={{backgroundColor: '#fff', flex: 1, flexDirection: 'column'}}>
      <View
        style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
        {isStarted && (
          <IconList
            key={`${selectedMode}_${count}`}
            count={count}
            mode={selectedMode}
            size={iconSize}
          />
        )}
        {!isStarted && (
          <OptionsPane
            modes={modes}
            initialMode={selectedMode}
            initialSize={iconSize}
            initialCount={count}
            onChange={changeOptions}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

function IconList({size, count, mode = modes[0]}) {
  const icons = useMemo(() => {
    const useXml = mode === modes[1];
    const usePng = mode === modes[2];
    const iconFactory = usePng ? getPngIcons : getSvgIcons;
    return _.flatten(
      _.times(count).map(i => iconFactory({id: i, useXml, size})),
    ).map(icon => <ProfilerView key={icon.key}>{icon}</ProfilerView>);
  }, [mode, size, count]);
  return (
    <View style={{flexDirection: 'column', flex: 1}}>
      <Text
        style={{
          paddingHorizontal: 16,
          paddingVertical: 2,
          fontSize: 10,
          textAlign: 'center',
          color: '#fff',
          backgroundColor: '#000',
        }}>{`mode = ${mode}`}</Text>
      <FlatList style={{flex: 1}} data={icons} renderItem={iconRenderer} />
    </View>
  );
}

function iconRenderer({item, index}) {
  return <IconRow icon={item} index={index} />;
}

function IconRow({icon, index}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {icon}
      <Text style={{padding: 8, fontSize: 16, fontWeight: 'bold'}}>
        {icon.key}
      </Text>
    </View>
  );
}

export default App;
