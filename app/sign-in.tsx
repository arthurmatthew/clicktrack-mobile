import {
  getAuth,
  signInWithEmailAndPassword,
} from "@react-native-firebase/auth";
import { Link } from "expo-router";
import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const authenticateUser = () => {
    signInWithEmailAndPassword(getAuth(), email, password)
      .then(() => console.log("Sign in successful"))
      .catch((error) => console.error(error));
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
              gap: 20,
              paddingHorizontal: 20,
              width: "100%",
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                gap: 20,
              }}
            >
              <Text style={{ fontSize: 50, fontWeight: "bold" }}>
                Clicktrack
              </Text>
              <View
                style={{
                  width: "100%",
                  paddingHorizontal: 20,
                  gap: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    width: "100%",
                    gap: 5,
                  }}
                >
                  <Pressable
                    style={{
                      borderRadius: 10,
                      padding: 16,
                      width: "100%",
                      backgroundColor: "#a100c9ff",
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 20,
                        color: "#ffffff",
                      }}
                    >
                      Use Offline
                    </Text>
                  </Pressable>
                  <Link
                    style={{
                      borderWidth: 1,
                      borderRadius: 10,
                      padding: 16,
                      width: "100%",
                      borderColor: "#cfcfcfff",
                      textAlign: "center",
                      fontSize: 20,
                    }}
                    href="/register"
                  >
                    Create your account
                  </Link>
                </View>

                <Text
                  style={{ textAlign: "center", opacity: 0.5, fontSize: 15 }}
                >
                  Sign in
                </Text>
                <View
                  style={{
                    flexDirection: "column",
                    width: "100%",
                    gap: 5,
                  }}
                >
                  <TextInput
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholder="Email"
                    style={{
                      borderWidth: 1,
                      borderRadius: 10,
                      padding: 16,
                      width: "100%",
                      borderColor: "#cfcfcfff",
                      fontSize: 15,
                    }}
                  />
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    autoCapitalize="none"
                    placeholder="Password"
                    style={{
                      borderWidth: 1,
                      borderRadius: 10,
                      padding: 16,
                      width: "100%",
                      borderColor: "#cfcfcfff",
                      fontSize: 15,
                    }}
                  />
                </View>
                <Link
                  href="/forgot-password"
                  style={{
                    textAlign: "right",
                    opacity: 0.5,
                    fontSize: 15,
                    textDecorationLine: "underline",
                  }}
                >
                  Forgot Password?
                </Link>
                <Pressable
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 16,
                    width: "100%",
                    borderColor: "#cfcfcfff",
                  }}
                  onPress={() => authenticateUser()}
                >
                  <Text style={{ textAlign: "center", fontSize: 20 }}>
                    Sign in
                  </Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
