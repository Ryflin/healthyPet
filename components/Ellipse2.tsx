import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

const AngledEllipseWithCharacter = () => {
  return (
    <View style={styles.container}>
      {/* Main Ellipse */}
      <Svg height="200" width="400" style={styles.ellipse}>
        <Ellipse
          cx="200"  // Center the ellipse
          cy="100"  // Center the ellipse
          rx="200"  // Scale the horizontal radius
          ry="75"  // Scale the vertical radius
          fill="#B0BEC5" // Grey color for the stand
        />
      </Svg>

      {/* Shadow for the Logo */}
      <Svg height="200" width="400" style={styles.shadow}>
        <Ellipse
          cx="200"  // Center the shadow
          cy="100"  // Center the shadow
          rx="80"   // Adjust size for shadow
          ry="40"   // Adjust size for shadow
          fill="rgba(0, 0, 0, 0.5)" // Black shadow with opacity
        />
      </Svg>

      {/* Character Image */}
      <Image
        source={require("@/assets/images/react-logo.png")} // Adjust path to your character image
        style={styles.character}
        resizeMode="contain" // Ensure the image maintains aspect ratio
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 100, // Adjust height to fit the scaled ellipse
    position: "relative",
  },
  ellipse: {
    position: "absolute",
    transform: [{ rotate: "0deg" }], // Adjust angle if needed
  },
  shadow: {
    position: "absolute",
    zIndex: 1, // Ensure the shadow is below the logo
  },
  character: {
    position: "absolute",
    bottom: 40, // Adjust to position the character above the ellipse
    width: 150,  // Adjust based on your character size
    height: 150, // Adjust based on your character size
    zIndex: 2,  // Ensure the character is above the shadow
  },
});

export default AngledEllipseWithCharacter;
