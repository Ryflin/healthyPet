import ElipseWithImage from "@/components/ElipseWithImage";
import { Button, Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function openPets() {
  return (
    <View>
        <View style={{justifyContent: 'center', alignItems:'center'}}>
        <ElipseWithImage imageSource={require('@/assets/images/partial-react-logo.png')}/>
        </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
        <View>
          <Button title="feed" />
        </View>
        <View>
          <Button title="pet" />
        </View>
        <View>
          <Button title="sleep" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  buttonContainer: {
    borderRadius: 12,
  },
  seperator: {
    height: 1,
    backgroundColor: "red",
    marginVertical: 1,
  },
});
