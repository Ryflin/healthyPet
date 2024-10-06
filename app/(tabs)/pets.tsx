import { MMKV } from "react-native-mmkv";
import AngledEllipse from "@/components/Ellipse2";
import SeparatorSpace from "@/components/SeparatorSpace";
import {
  Button,
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputSubmitEditingEventData,
  View,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { StyleSheet } from "react-native";
import { useEffect, useRef, useState } from "react";
import React from "react";

export const storage = new MMKV();

// IWantToRun1
const imageMap: { [key: string]: any } = {
  idle: require("@/assets/images/pet_idle.png"),
  eating: require("@/assets/images/pet_chicken.png"),
  pet_exercise: require("@/assets/images/pet_exercise.png"),
  sad: require("@/assets/images/pet_sad.png"),
  sleep: require("@/assets/images/pet_sleep.png"),

};

export default function openPets() {
  const [feedVisible, setFeedVisible] = useState(false);
  const [exerciseVisible, setExerciseVisible] = useState(false);
  const [sleepVisible, setSleepVisible] = useState(false);
  const [input, setInput] = useState("");
  const [petState, setPetState] = useState<keyof typeof imageMap>("idle");
  const [calories, setCalories] = useState(0);
  const inputRef = useRef<TextInput>(null);
  const [toggleFeedFirst, setToggleFeedFirst] = useState(false);
  const toggleSleep = () => {
    setSleepVisible(!sleepVisible)
  }
  const toggleExercise = () => {
    setExerciseVisible(!exerciseVisible);
  };
  const toggleFeed = () => {
    setFeedVisible(!feedVisible);
  };

  useEffect(() => {
    if ((feedVisible || exerciseVisible) && inputRef.current) {
      inputRef.current.focus();
    }
  }, [feedVisible, exerciseVisible, sleepVisible]);

  useEffect(() => {
    if (!toggleFeedFirst || exerciseVisible) {
      setToggleFeedFirst(true);
    } else {
      
    }
  }, [calories])

  async function onFoodApi(event: any) {
    setFeedVisible(false);
    setInput(event.target.value);
    getFromApi(input, setCalories, calories, setPetState);
    
    changeCatBack(setPetState);
  }

  function onExercise(event: any) {
    setExerciseVisible(false);
    setInput(event.target.value);
    let caltemp = calories;
    caltemp -= Number(input);
    setCalories(caltemp);
    setPetState("pet_exercise");
    changeCatBack(setPetState)
  }
  function onSleep(event: any) {
    setSleepVisible(false);
    if (Number(input) < 4) {
      setPetState('sad')
    } else {
      setPetState('sleep')
    }
    changeCatBack(setPetState)
  }

  return (
    <View>
      {/* I know that I should be using some sort of component but I don't have the time to try to get that */}
      <Modal isVisible={feedVisible || exerciseVisible || sleepVisible}>
        <View style={{ flex: 1 }}>
          <SeparatorSpace height={50} />
          {feedVisible ? (
            <>
             <Text style={{color:'white'}}>What did you eat?</Text>
              <TextInput
                onChangeText={setInput}
                onSubmitEditing={onFoodApi}
                style={{ color: "white", borderWidth: 1, borderColor: "white" }}
                ref={inputRef}
              />
              <SeparatorSpace height={500} />
              <View>
                <Button title="Finish" onPress={toggleFeed} />
              </View>
            </>
          ) : (
            <>
              {exerciseVisible ? (
                <>
                  <Text style={{color:'white'}}>How many calories did you burn?</Text>
                  <TextInput
                    onChangeText={setInput}
                    onSubmitEditing={onExercise}
                    style={{ color: "white", borderWidth: 1, borderColor: "white" }}
                    ref={inputRef}
                  />
                  <SeparatorSpace height={500} />
                  <View>
                    <Button title="Finish" onPress={toggleExercise} />
                  </View>
                </>
              ) : (
                <>{sleepVisible ? 
                  <>
                  <Text style={{color:'white'}}>How hours did you sleep?</Text>
                  <TextInput
                    onChangeText={setInput}
                    onSubmitEditing={onSleep}
                    style={{ color: "white", borderWidth: 1, borderColor: "white" }}
                    ref={inputRef}
                  />
                  <SeparatorSpace height={500} />
                  <View>
                    <Button title="Finish" onPress={toggleSleep} />
                  </View>
                </>
                  : <></>}</>
              )}
            </>
          )}
        </View>
      </Modal>
      <SeparatorSpace height={250} />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <AngledEllipse filename={imageMap[petState]} />
      </View>
      <SeparatorSpace height={100} />
      <View style={{ justifyContent: "center", alignItems: "center" }}>

      <Text style={{alignContent: 'center'}}>Calories: {calories.toFixed(0)}</Text>
      </View>
      <SeparatorSpace height={100} />
      <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleFeed}>
            <Text style={styles.buttonText}>Feed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={toggleExercise}>
              Exercise
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleSleep}>
            <Text style={styles.buttonText} >Sleep</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function getFromApi(input: string, setCalories: React.Dispatch<React.SetStateAction<number>>, calories: number, setPetState: React.Dispatch<React.SetStateAction<string | number>>) {
  // VIVeKdxxvrjtlpdwg4k7Bg==7LQmHFfVquoQZ6B8
  // 'N4ISIPYqau/nSmDs21eizg==2lwgsStM1ghPLVPY
  console.log(input);
  let ninjaResp = { items: [] };
  let encoded = encodeURIComponent(input);
  fetch("https://api.calorieninjas.com/v1/nutrition?query=" + encoded, {
    headers: { "X-Api-Key": "VIVeKdxxvrjtlpdwg4k7Bg==7LQmHFfVquoQZ6B8" },
  })
    .then(async (value) => {
      ninjaResp = await value.json();
      console.log(ninjaResp);
      let tempCal = calories;
      for (let i = 0; i < ninjaResp.items.length; i++) {
        console.log(ninjaResp["items"]);
        tempCal += ninjaResp["items"][i]["calories"];
      }
      setCalories(tempCal);
      if (calories < 2000) {
        setPetState("eating");
      } else {
        setPetState("sad");
      }
      console.log(tempCal);
    })
    .catch((error) => {
      ninjaResp = { items: [] };
    });
}

function changeCatBack(setPetState: React.Dispatch<React.SetStateAction<keyof typeof imageMap>>) {
  setTimeout(function () {
    setPetState("idle");
  }, 3000);
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
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#4CAF50", // Custom button background color
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow effect
  },
  buttonText: {
    color: "#FFF", // Custom text color
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  seperator: {
    height: 1,
    backgroundColor: "red",
    marginVertical: 1,
  },
});
