export default ({ config }) => ({
  expo: {
    name: "clicktrack-mobile",
    slug: "clicktrack-mobile",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icons/ios-tinted.png",
    scheme: "clicktrack",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      bundleIdentifier: "com.notjack.clicktrack",
      googleServicesFile:
        process.env.GOOGLESERVICE_INFO_PLIST ||
        "./firebase-config/GoogleService-Info.plist",
      supportsTablet: true,
      icon: {
        light: "./assets/icons/ios-light.png",
        dark: "./assets/icons/ios-dark.png",
        tinted: "./assets/icons/ios-tinted.png",
      },
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    android: {
      package: "com.notjack.clicktrack",
      googleServicesFile:
        process.env.GOOGLE_SERVICES_JSON ||
        "./firebase-config/google-services.json",
      adaptiveIcon: {
        foregroundImage: "./assets/icons/adaptive-icon.png",
        monochromeImage: "./assets/icons/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
    },
    web: {
      bundler: "metro",
      output: "static",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/icons/splash-icon-dark.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
          dark: {
            image: "./assets/icons/splash-icon-light.png",
            backgroundColor: "#000000",
          },
        },
      ],
      ["expo-build-properties", { ios: { useFrameworks: "static" } }],
      "expo-font",
      "@react-native-firebase/app",
      "@react-native-firebase/auth",
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {},
      eas: {
        projectId: "8782d171-fe76-4e0f-8448-91dbffe4ab6a",
      },
    },
  },
});
