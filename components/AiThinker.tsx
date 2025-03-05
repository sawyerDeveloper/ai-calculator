import { StyleSheet, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Animated, {
    FadeIn,
  FadeOut,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
} from 'react-native-reanimated';
import { useEffect } from 'react';

interface AiThinkProps {
  aiModel: [number | string];
  aiCallback: () => void;
}
export function AiThinker({ aiModel, aiCallback }: AiThinkProps) {
  const left = useSharedValue(0);
  const animStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: left.value }],
  }));

  useEffect(() => {
    left.value =
      withSpring(left.value + aiModel.length * 8, {}, () => {
      runOnJS(aiCallback)()
      });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.brain, animStyle]}>
        <FontAwesome5 name='brain' size={24} color='black' />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
  },
  brain: {
    
  },
});
