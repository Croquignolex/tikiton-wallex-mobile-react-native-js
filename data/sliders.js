import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    },
    text: {
        color: '#fff',
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
        image: require('../assets/intro/calendar.png'),
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image,
        backgroundColor: '#2979FF'
    },
    {
        key: 'expenses',
        title: 'Expenses',
        text: 'Easy to track your expenses, have a total control on what you spend',
        image: require('../assets/intro/restaurants.png'),
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image,
        backgroundColor: '#FF3D00'
    },
    {
        key: 'settings',
        title: 'Settings',
        text: 'You can decide on what should be display and how it should be display',
        image: require('../assets/intro/settings.png'),
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image,
        backgroundColor: '#febe29'
    },
    {
        key: 'cloud',
        title: 'Cloud',
        text: 'All your transaction are cloud base, jump in and getting started',
        image: require('../assets/intro/cloud.png'),
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image,
        backgroundColor: '#D500F9'
    },
];

export default sliders