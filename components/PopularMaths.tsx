import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function PopularMaths({ popularMaths = [] }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Popular Maths</Text>
      <ScrollView style={styles.scroller}>
        {popularMaths.map((math: string, index: number) => {
          return (
            <Text style={styles.mathLabel} key={math + index}>
              {math}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
  },
  scroller: {
    maxHeight: 140,
    width: 100,
    backgroundColor: 'lightgrey',
  },
  mathLabel: {
    paddingTop: 2,
    textAlign: 'center',
  },
  headerTitle: {
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: 700
  }
});
