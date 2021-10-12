import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';

function Counter({onChange, initialValue, steps = 1, min = 1, max = 100}) {
  const [count, setCount] = useState(initialValue || min);
  useEffect(() => {
    onChange(count);
  }, [count, onChange]);
  const increment = useCallback(() => {
    setCount(prevCount => Math.min(prevCount + steps, max));
  }, []);
  const decrement = useCallback(() => {
    setCount(prevCount => Math.max(prevCount - steps, min));
  }, []);
  return (
    <View style={{flexDirection: 'row', padding: 16, alignItems: 'center'}}>
      <TouchableOpacity onPress={decrement}>
        <Text style={{fontSize: 36, padding: 8}}>{'-'}</Text>
      </TouchableOpacity>
      <Text style={{paddingHorizontal: 24, fontSize: 24}}>{`${count}`}</Text>
      <TouchableOpacity onPress={increment}>
        <Text style={{fontSize: 32, padding: 8}}>{'+'}</Text>
      </TouchableOpacity>
    </View>
  );
}

function OptionsPane({
  onChange,
  initialCount,
  initialSize,
  initialMode,
  modes,
}) {
  const [selectedMode, setSelectedMode] = useState(initialMode);
  const [repeatCount, setRepeatCount] = useState(initialCount);
  const [iconSize, setIconSize] = useState(initialSize);
  const [isStarted, setStarted] = useState(false);
  useEffect(() => {
    onChange({repeatCount, iconSize, mode: selectedMode, isStarted});
  }, [repeatCount, selectedMode, iconSize, onChange, isStarted]);
  return (
    <View style={{backgroundColor: '#efefef', padding: 8}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginVertical: 8,
        }}>
        {modes.map(mode => (
          <Button
            key={mode}
            style={{flex: 1, margin: 8}}
            color={selectedMode === mode ? '#000' : '#888'}
            title={mode}
            onPress={() => setSelectedMode(mode)}
          />
        ))}
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{flex: 1, fontSize: 20}}>{'Repeat count'}</Text>
        <Counter
          initialValue={repeatCount}
          onChange={newRepeatCount => setRepeatCount(newRepeatCount)}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{flex: 1, fontSize: 20}}>{'Icon Size'}</Text>
        <Counter
          min={24}
          steps={24}
          max={256}
          onChange={newIconSize => setIconSize(newIconSize)}
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => setStarted(true)}>
          <Text
            style={{
              backgroundColor: '#0000FF',
              fontSize: 20,
              textAlign: 'center',
              color: '#FFFFFF',
              paddingHorizontal: 24,
              paddingVertical: 16,
            }}>
            {'Start Benchmark'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default OptionsPane;
