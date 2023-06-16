import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.white,
      width: '100%',
      height: 50,
      borderColor: COLORS.white,
      borderRadius: 10,
    },
    container_FP: {
      width: '75%',
    },
    input: {
      height: 50,
      width: '100%',
      borderColor: COLORS.white,
      borderWidth: 1,
      borderRadius: 10,
      textAlign: "center",
    },
})

export default styles;