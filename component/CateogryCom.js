/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function CateogryCom({
  icon,
  title,
  onPress,
  SelectedCateogory,
  stylebg,
}) {
  return (
    <TouchableOpacity style={[styles.container, stylebg]} onPress={onPress}>
      <View style={styles.imgbg}>
        <Image
          source={icon}
          style={{
            height: 35,
            width: 35,
            alignSelf: "center",
            marginVertical: 5,
          }}
        />
      </View>

      <View style={styles.heading}>
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    borderColor: "#f1f1f1",
    borderWidth: 2,
    height: 65,
    width: 140,
    flexDirection: "row",
    justifyContent: "space-around",
    marginRight: 15,
    alignItems: "center",
  },
  heading: {
    alignSelf: "center",
    padding: 5,
  },
  imgbg: {
    height: 50,
    width: 50,
    backgroundColor: "#dbdce0",
    borderRadius: 15,
    alignSelf: "center",
    marginLeft: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 5,
  },
});
