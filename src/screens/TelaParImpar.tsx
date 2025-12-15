import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { InputCustomizado } from "@/components/inputCustomizado";
import { ButtonCustomizado } from "@/components/botaoCustomizado";

export function TelaParImpar() {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState<string | null>(null);

  function verificar() {
    const n = Number(numero);

      if (n % 2 === 0) {
      setResultado("O número é par");
    } else {
      setResultado("O número é ímpar");
    }
  }

   useEffect(() => {
      setResultado("");
       }, [numero]);


  return (
    <View className="flex-1 items-center justify-center p-5 gap-4">
      <Text className="text-3xl">Par ou Ímpar</Text>

      <InputCustomizado
        placeholder="número"
        keyboardType="numeric"
        value={numero}
        onChangeText={setNumero}
      />

      <ButtonCustomizado title="IMPAR OU PAR" onPress={verificar} />

      <Text className="text-xl mt-3">{resultado}</Text>
    </View>
  );
}
