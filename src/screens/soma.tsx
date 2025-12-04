import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export function Soma() {
    const [valor1, setvalor1] = useState<string>('');
    const [valor2, setvalor2] = useState<string>('');
    const [resultado, setResultado] = useState<number | null>(null);

    function logar() {
        console.log('valor1', valor1, 'valor2', valor2);
    }

    function somar() {
        const soma = Number(valor1) + Number(valor2);
        setResultado(soma);
    }

    useEffect(() => {
    setResultado(0);
     }, [valor1, valor2]);


    return (
        <View className="flex-1 items-center justify-center">
            <View className="w-full items-center gap-5 p-5">
                <Text className="text-3xl">Calculadora de Soma</Text>

                <InputCustomizado
                    placeholder="Valor 1"
                    keyboardType="numeric"
                    onChangeText={setvalor1}
                    value={valor1}
                />
                <InputCustomizado
                    placeholder="Valor 2"
                    keyboardType="numeric"
                    onChangeText={setvalor2}
                    value={valor2}
                />
                <ButtonCustomizado title="Calcular Soma" onPress={somar} />
                <Text> Resultado: {resultado} </Text>
            </View>
        </View>
    );
}