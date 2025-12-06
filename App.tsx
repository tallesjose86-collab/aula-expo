import './global.css';
import { StatusBar } from 'expo-status-bar';

import { LoginScreen } from '@/screens/login';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Soma } from '@/screens/soma';
import { ListasScreen } from '@/screens/listas';


export default function App() {
  return (
    <>
      <SafeAreaView className="flex-1">
        <ListasScreen />
      </SafeAreaView>

      <StatusBar style="auto" />
    </>
  );
}