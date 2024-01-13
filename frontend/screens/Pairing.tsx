import { StyleSheet} from "react-native";
import ScreenContainer from "../components/Container";
import { useTheme } from "../theme";

export default function Pairing() {
    const { colors } = useTheme();

    return (
        <ScreenContainer>

        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "80%",
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        width: "100%",
        alignItems: "center",
        padding: 20
    },
    headerImage: {
        width: 50,
        height: 50,
        marginLeft: 20
    },
    wrapper: {
        padding: 15,
        borderRadius: 8,
        width: '100%'
    },
    headerText: {
        fontFamily: "Alata, sans-serif",
        fontSize: 40,
    },
    scrollview: {
        width: "100%",
    },
});
