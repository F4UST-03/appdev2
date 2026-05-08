import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';

export type MoreStackParamList = {
  Settings: {
    userId: string;
  };
  Profile: undefined;
};

export type RootTabsParamList = {
  Home: undefined;
  More: undefined;
};

export type SettingsScreenProps = NativeStackScreenProps<
  MoreStackParamList,
  'Settings'
>;

export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabsParamList, 'Home'>,
  NativeStackScreenProps<MoreStackParamList>
>;

export type ProfileScreenProps = NativeStackScreenProps<
  MoreStackParamList,
  'Profile'
>;
