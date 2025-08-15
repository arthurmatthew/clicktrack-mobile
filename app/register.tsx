import {
  createUserWithEmailAndPassword,
  getAuth,
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

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const createUser = () => {
    createUserWithEmailAndPassword(getAuth(), email, password)
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
                    href="/sign-in"
                  >
                    Sign in
                  </Link>
                </View>

                <Text
                  style={{ textAlign: "center", opacity: 0.5, fontSize: 15 }}
                >
                  Create your account
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
                <Pressable
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 16,
                    width: "100%",
                    borderColor: "#cfcfcfff",
                  }}
                  onPress={() => createUser()}
                >
                  <Text style={{ textAlign: "center", fontSize: 20 }}>
                    Register
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
