import { StyleSheet } from 'react-native'
import COLORS from '../helpers/colors'
import images from '../helpers/images'

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
        width: 200,
        height: 200,
        resizeMode: 'contain'
    }
});

const sliders = [
    {
        key: 'schedule',
        title: 'Schedule',
        text: 'Every thing ready for you to manage efficiently your incomes and expenses',
        image: images.slider.calendar,
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image,
        backgroundColor: COLORS.theme
    },
    {
        key: 'expenses',
        title: 'Expenses',
        text: 'Easy to track your expenses, have a total control on what you spend',
        image: images.slider.restaurants,
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image,
        backgroundColor: COLORS.orange
    },
    {
        key: 'settings',
        title: 'Settings',
        text: 'You can decide on what should be display and how it should be display',
        image: images.slider.settings,
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image,
        backgroundColor: COLORS.yellow
    },
    {
        key: 'cloud',
        title: 'Cloud',
        text: 'All your transaction are cloud base, jump in and getting started',
        image: images.slider.cloud,
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image,
        backgroundColor: COLORS.purple
    },
];

export default sliders