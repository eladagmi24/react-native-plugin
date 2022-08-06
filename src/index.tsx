import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-au10tixsdk' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const Au10tixsdk = NativeModules.Au10tixsdk  ? NativeModules.Au10tixsdk  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function initializeSDK(token: String): Promise<number> {
  return Au10tixsdk.initializeSDK(token);
}
