import { ExpoConfig } from '@expo/config';

export default (): ExpoConfig => ({
  name: 'Expo APIs',
  description:
    'This demonstrates a bunch of the native components that you can use in React Native core and Expo.',
  slug: 'native-component-list',
  sdkVersion: 'UNVERSIONED',
  version: 'UNVERSIONED',
  githubUrl: 'https://github.com/expo/native-component-list',
  orientation: 'portrait',
  primaryColor: '#cccccc',
  privacy: 'public',
  icon: './assets/icons/icon.png',
  scheme: 'ncl',
  notification: {
    icon: './assets/icons/notificationIcon.png',
    color: '#000000',
    iosDisplayInForeground: true,
  },
  splash: {
    image: './assets/icons/loadingIcon.png',
  },
  packagerOpts: {
    config: 'metro.config.js',
  },
  platforms: ['android', 'ios', 'web'],
  facebookScheme: 'fb1201211719949057',
  facebookAppId: '1201211719949057',
  facebookDisplayName: 'Expo APIs',
  androidShowExponentNotificationInShellApp: true,
  androidStatusBar: {
    backgroundColor: '#4630eb',
  },
  android: {
    package: 'host.exp.nclexp',
    versionCode: 11,
    googleServicesFile: './google-services.json',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=host.exp.exponent',
    config: {
      googleSignIn: {
        apiKey: 'AIzaSyC2kse8d0rFfi27jff5nD14cSNcPBQC4Tk',
        certificateHash: '1746BECB2497593B3296903145793BC0BE8C426B',
      },
      googleMaps: {
        apiKey: 'AIzaSyC2kse8d0rFfi27jff5nD14cSNcPBQC4Tk',
      },
      branch: {
        apiKey: 'key_live_pcxsCTBguAUqQBd8CjYZ7ogkurnZcQAO',
      },
      googleMobileAdsAppId: 'ca-app-pub-3940256099942544~3347511713',
    },
  },
  ios: {
    bundleIdentifier: 'host.exp.nclexp',
    appStoreUrl: 'https://itunes.apple.com/us/app/expo-client/id982107779?mt=8',
    userInterfaceStyle: 'light',
    usesAppleSignIn: true,
    config: {
      usesNonExemptEncryption: false,
      googleSignIn: {
        reservedClientId:
          'com.googleusercontent.apps.603386649315-1b2o2gole94qc6h4prj6lvoiueq83se4',
      },
      branch: {
        apiKey: 'key_live_pcxsCTBguAUqQBd8CjYZ7ogkurnZcQAO',
      },
      googleMobileAdsAppId: 'ca-app-pub-3940256099942544~1458002511',
    },
  },
  assetBundlePatterns: [
    'assets/**',
    'node_modules/react-navigation/src/**/*.png',
    'node_modules/@expo/vector-icons/fonts/*.ttf',
  ],
});
