import {useState} from "react";
import {View, Text} from "react-native";
import {InputCustomizado} from "@/components/inputCustomizado";
import {ButtonCustomizado} from "@/components/botaoCustomizado";

export function TelaMedia() {
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);


  function calcularMedia() {
    const media = (Number(nota1) + Number(nota2)) / 2;
    setResultado(media);
  }


  return (
    <View className="flex-1 items-center justify-center p-5 gap-4">
        <Text className="text-3xl">Média</Text>

        <InputCustomizado
          placeholder="Nota 1"
          keyboardType="numeric"
          value={nota1}
          onChangeText={setNota1}
        />
        <InputCustomizado
          placeholder="Nota 2"
          keyboardType="numeric"
          value={nota2}
          onChangeText={setNota2}
        />

        <ButtonCustomizado title="Média" onPress={calcularMedia} />
        <Text className="text-4xl mt-3">Nota: {resultado}</Text>

    </View>
  )
}