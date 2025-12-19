import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  login: undefined;
  soma: undefined;
  listas: undefined;
  listas2: undefined;
};

export type ProfileScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList
  >;