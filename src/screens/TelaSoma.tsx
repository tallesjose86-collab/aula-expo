import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { InputCustomizado } from "@/components/inputCustomizado";
import { ButtonCustomizado } from "@/components/botaoCustomizado";

export function TelaSoma() {
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [n3, setN3] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);

  function calcular() {
    const soma = Number(n1) + Number(n2) + Number(n3);
    setResultado(soma);
  }


    useEffect(() => {
      setResultado(0);
       }, [n1, n2, n3]);

  return (
    <View className="flex-1 items-center justify-center p-5">
      <Text className="text-3xl mb-4">Somar 3 Números</Text>

      <InputCustomizado
        placeholder="Número 1"
        keyboardType="numeric"
        onChangeText={setN1}
        value={n1}
      />

      <InputCustomizado
        placeholder="Número 2"
        keyboardType="numeric"
        onChangeText={setN2}
        value={n2}
      />

      <InputCustomizado
        placeholder="Número 3"
        keyboardType="numeric"
        onChangeText={setN3}
        value={n3}
      />

      <ButtonCustomizado title="Calcular" onPress={calcular} />

      {resultado !== null && (
        <Text className="text-xl mt-4">Resultado: {resultado}</Text>
      )}
    </View>
  );
}
