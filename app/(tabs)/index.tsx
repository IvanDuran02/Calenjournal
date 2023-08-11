import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Calendar, DateData } from "react-native-calendars";
import { useEffect, useState } from "react";

export default function TabOneScreen() {
  const [dateSelected, setDaySelected] = useState<DateData>();

  function handleSelectDate(day: DateData) {
    console.log("Clicked", day);
    // if clicked again unselect date
    if (day.day == dateSelected?.day) {
      console.log("Same date");
      setDaySelected(undefined);
    } else {
      setDaySelected(day);
    }
  }

  useEffect(() => {}, [dateSelected]);
  return (
    <View className="flex flex-col h-screen justify-start items-center">
      <Calendar
        className="w-screen rounded-md shadow-md p-2"
        onDayPress={(day) => handleSelectDate(day)}
        onDayLongPress={(day) => console.log("onDayLongPress", day)}
        onMonthChange={(date) => console.log("onMonthChange", date)}
        markedDates={{
          [dateSelected?.dateString as string]: {
            selected: true,
            disableTouchEvent: false,
          },
        }}
        onPressArrowLeft={(goToPreviousMonth) => {
          console.log("onPressArrowLeft");
          goToPreviousMonth();
        }}
        onPressArrowRight={(goToNextMonth) => {
          console.log("onPressArrowRight");
          goToNextMonth();
        }}
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <View className="w-screen shadow-md p-2 rounded-md h-52">
        <Text className="font-bold text-lg w-[80%]">
          Notes: {dateSelected ? dateSelected.dateString : "No date selected"}
        </Text>
      </View>

      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: "80%",
  },
});
