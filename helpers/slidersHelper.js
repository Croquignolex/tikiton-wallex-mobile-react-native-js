import { StyleSheet } from 'react-native'
import COLORS from '../helpers/colorHelper'
import IMAGES from '../helpers/imageHelper'

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        color: COLORS.white,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    },
    text: {
        color: COLORS.white,
        fontSize: 18,
        paddingLeft: 40,
        paddingRight: 40
    },
    image: {
        width: 300,
        height: 250,
        resizeMode: 'contain'
    }
});

const SLIDERS = [
    {
        key: 'secure',
        title: 'Secure',
        text: 'Wallex is your free and secure wallet management app',
        image: IMAGES.slider.secure,
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image,
        backgroundColor: COLORS.theme
    },
    {
        key: 'schedule',
        title: 'Schedule',
        text: 'Easy to track your expenses, have a total control on it',
        image: IMAGES.slider.schedule,
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image,
        backgroundColor: COLORS.purple
    },
    {
        key: 'dashboard',
        title: 'Dashboard',
        text: 'All data in the same place and simply displayed',
        image: IMAGES.slider.dashboard,
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image,
        backgroundColor: COLORS.yellow
    },
    {
        key: 'cloud',
        title: 'Cloud',
        text: 'All your transaction are cloud base, jump in and getting started',
        image: IMAGES.slider.cloud,
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image,
        backgroundColor: COLORS.blue
    },
];

export default SLIDERS