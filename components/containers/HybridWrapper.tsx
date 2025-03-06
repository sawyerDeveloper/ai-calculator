import { StyleSheet, useWindowDimensions, View } from 'react-native';

interface HybridWrapperProps {
    children :React.JSX.Element | [React.JSX.Element]
}
export default function HybridWrapper({ children } : HybridWrapperProps) {
  const dim = useWindowDimensions()
  return (
    <View
      style={[
        styles.container,
        { width: dim.width > 200 ? dim.width : 200, height: dim.height },
      ]}
    >
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
});
