import React from 'react';
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = (props) => {

    return (
        <LinearGradient colors={['#D06600', '#E69A09']} style={styles.linearGradient}>
            <Icon name={'menu'} style={styles.iconStyle} />
            <Text style={styles.textStyle}>{props.headerText}</Text>
            <Icon name={'tune'} style={styles.iconStyle} />
        </LinearGradient>
    );
};

const styles = {
    linearGradient: {
        backgroundColor: '#000',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 90,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 1,
        position: 'relative',
        flexDirection: 'row'
    },
    textStyle: {
        fontSize: 30,
        fontFamily: 'Roboto',
        color: '#fff',
    },
    iconStyle: {
        fontSize: 45,
        color: '#fff',
        fontWeight: 'bold'
    }
};

export default Header;