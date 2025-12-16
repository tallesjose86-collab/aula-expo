import { useState } from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';
import { InputCustomizado } from '@/components/inputCustomizado';
import { ButtonCustomizado } from '@/components/botaoCustomizado';

export function ListasScreen() {
    const [itens, setItens] = useState("");
    const [lista, setLista] = useState<string[]>([]);

    function adicionaItem() {
        setLista([...lista, itens]);
        setItens("");
    }


    function limpaLista() {
        setLista([]);
    }


    return (
        <View className='flex-1 itens-center gap-4 p-3'>
            <Text className='text 4xl m-3'>Lista de Itens</Text>
            <InputCustomizado placeholder='item' value={itens} onChangeText={(text) => setItens(text)} />
            <ButtonCustomizado title='adicionar' onPress={adicionaItem} />
            <ButtonCustomizado title='Limpar Lista' onPress={limpaLista} />

            <ScrollView className='w-full mt-4 p-3 border border-gray-300'>
                {lista.map((item, index) => (
                    <Text key={index} className='text-2xl'>
                        {item}
                    </Text>
                ))}
            </ScrollView>

        </View>
    )
}
