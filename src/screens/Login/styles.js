import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  logo: {
    width: "100%",
    height: 100,
  },
  pageHeader: {
    margin: 16,
    padding: 16,
    marginTop: 60,
    borderRadius: 8,
  },
  headerText: {
    color: "#FFFFFF",
    textAlign: "center",
    /*fontFamily: Inter,*/
    fontWeight: "900",
    fontSize: 48,
  },
  input: {
    width: "90%",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    padding: 8,
    margin: 16,
  },
  button: {
    width: "90%",
    margin: 16,
    padding: 16,
    fontSize: 16,
    backgroundColor: "#5DB075",
    borderRadius: 100,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
});
