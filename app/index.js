import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getServerAPI } from '../Actions/Controllers/ConfigController';
export default function Page() {
  useEffect(()=>{
    const getServer = async () =>{
      const res = await getServerAPI()
      console.log(res.data);
      if(res)
      {
        setNmae(res?.data?.name)
      }
    }
    getServer()
  },[])

  const [name, setNmae] = useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Link href={'/auth/login'}>Login </Link>
      </View>
    </View>
  );
}
Page.options = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
