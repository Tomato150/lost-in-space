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
        borderColor: "#FFF",
        width: "30%",
        borderBottomWidth: 1,
        height: 1,
        margin: 5,
    },
    hrMarginLarge: {
        width: "90%",
        marginTop: 15,
        marginBottom: 15,
    },

    content: {
        flex: 2,
        flexDirection: "column",
        justifyContent: "flex-start",
        marginBottom: 15
    },

    eventChoice: {
        backgroundColor: "#003264",
        borderRadius: 5,
        padding: 10,
        margin: 5,

    },

    event_choice_text: {
        textDecorationLine: "underline",
        color: "#FFF",
        textAlign: "center"
    },

    Defensive: {
        backgroundColor: "#003264",
    },

    DefensiveBright: {
        backgroundColor: "#0059b3"
    },

    Passive: {
        backgroundColor: "#006432"
    },

    Aggressive: {
        backgroundColor: "#610000"
    },

    PassiveBright: {
        backgroundColor: "#00b359"
    },

    AggressiveBright: {
        backgroundColor: "#b30000"
    }

});
