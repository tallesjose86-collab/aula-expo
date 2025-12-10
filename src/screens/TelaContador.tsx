import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export function TelaContador() {
  const [contador, setContador] = useState(0);

  return (
    <View className="flex-1 items-center justify-center gap-5">
      <Text className="text-4xl">{contador}</Text>

      <View className="flex-row gap-5">
        <TouchableOpacity
          className="bg-green-500 p-4 rounded-xl"
          onPress={() => setContador(contador + 1)}
        >
          <Text className="text-white text-xl"> + </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-red-500 p-4 rounded-xl"
          onPress={() => setContador(contador - 1)}
        >
          <Text className="text-white text-xl"> - </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
