import { useState } from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';
import { InputCustomizado } from '@/components/inputCustomizado';
import { ButtonCustomizado } from '@/components/botaoCustomizado';

export function Listas2Screen() {
    const [item, setItem] = useState("");
    const [lista, setLista] = useState<number[]>([]);

    function adicionaItem() {
        if(item.trim() === '' || isNaN(Number(item))) {
            return;
        }

        
        setLista([...lista, Number(item)]);
        setItem("");
    }


    function limpaLista() {
        setLista([]);
    }


    return (
        <View className='flex-1 itens-center gap-4 p-3'>
            <Text className='text 4xl m-3'>Lista de Itens impar ou par</Text>
            <InputCustomizado placeholder='item' value={item} onChangeText={(text) => setItem(text)} />
            <ButtonCustomizado title='adicionar' onPress={adicionaItem} />
            <ButtonCustomizado title='Limpar Lista' onPress={limpaLista} />

            <ScrollView className='w-full mt-4 p-3 border border-gray-300'>
                {lista.map((item, index) => (
                    <Text key={index} className='text-2xl'>
                        {item} - {item % 2 === 0 ? 'Par' : 'Ímpar'}
                    </Text>
                ))}
            </ScrollView>

        </View>
    )
}


