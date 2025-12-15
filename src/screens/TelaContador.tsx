import { useState } from "react";
import { View, Text } from "react-native";
import { ButtonCustomizado } from "@/components/botaoCustomizado";

export function TelaContador() {
  const [contador, setContador] = useState(0);

  return (
    <View className="flex-1 items-center justify-center gap-5">
      <Text className="text-3xl color-black">Contador</Text>
      <Text className="text-4xl">{contador}</Text>

      <View className="flex-row gap-5 p-24">
        <ButtonCustomizado
          title="+"
          onPress={() => setContador(contador + 1)}
        />

        <ButtonCustomizado
          title="-"
          onPress={() => setContador(contador - 1)}
        />
      </View>
    </View>
  );
}
