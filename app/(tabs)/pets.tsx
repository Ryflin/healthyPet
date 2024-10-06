import { MMKV } from 'react-native-mmkv'
import AngledEllipse from "@/components/Ellipse2";
import SeparatorSpace from "@/components/SeparatorSpace";
import { Button, Text, View } from "react-native";
import { StyleSheet } from "react-native";

export const storage = new MMKV()

export default function openPets() {
  return (
    <View>
        <SeparatorSpace height={250}/>
        <View style={{justifyContent: 'center', alignItems:'center'}}>
        <AngledEllipse />
        </View>
        <SeparatorSpace height={200}/>
      <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
        <View>
          <Button title="feed" onPress={feed}/>
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

function feed() {
        
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
