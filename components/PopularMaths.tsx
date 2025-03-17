import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function PopularMaths({popularMaths}) {
  return (
    <View style={styles.container}>
      <Text>Popular Maths</Text>
      <ScrollView style={styles.scroller}>
        {popularMaths.map((math, index) => {
          return <Text key={math + index}>{math}</Text>;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
       paddingBottom: 5
    },
    scroller: {
        maxHeight: 40,
        width: 100,
        backgroundColor: 'lightgrey'
    }
  });
  