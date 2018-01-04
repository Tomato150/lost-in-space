import {StyleSheet} from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#000",
        padding: 10, // TODO find workaround for the top nav bar.
        paddingTop: 24,
    },
    horizontalRule: {
        borderBottomColor: "#FFF",
        width: "90%",
        borderBottomWidth: 1,
        height: 1,
        margin: 5,
    },
    hrMarginLarge: {
        margin: 15
    },

    header: {
        alignItems: "center", // Horizontal Axis
        justifyContent: "flex-start",
        margin: 10,
    },
    content: {
        backgroundColor: "#000"
    },
    eventChoice: {
        backgroundColor: "#003264",
        borderRadius: 5,
        padding: 5,
        margin: 5,
    },

    Passive: {
        backgroundColor: "#006332"
    },

    Aggressive: {
        backgroundColor: "#610000"
    }

});