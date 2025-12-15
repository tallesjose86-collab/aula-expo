import './global.css';
import { StatusBar } from 'expo-status-bar';

import { LoginScreen } from '@/screens/login';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Soma } from '@/screens/soma';
import { ListasScreen } from '@/screens/listas';
import { TelaSoma } from '@/screens/TelaSoma';
import { TelaContador } from '@/screens/TelaContador';
import { TelaParImpar } from '@/screens/TelaParImpar';
import { TelaMedia } from '@/screens/TelaMedia';


export default function App() {
  return (
    <>
      <SafeAreaView className="flex-1">
        <TelaSoma />
      </SafeAreaView>

      <StatusBar style="auto" />
    </>
  );
}