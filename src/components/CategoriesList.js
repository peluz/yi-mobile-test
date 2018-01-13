import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, Text } from 'react-native';

class CategoriesList extends Component {
    state = { categories: [] };

    componentWillMount() {
        this.setState({categories: this.props.categories})
    }

    render() {

        return (
            <ScrollView style={styles.scrollStyle} horizontal >
                <Image style={styles.imageStyle} source={require('../img/pizza_square.png')}/>
                <Image style={styles.imageStyle} source={require('../img/cafe_square.png')}/>
                <Image style={styles.imageStyle} source={require('../img/japanese_square.png')}/>
                <Image style={styles.imageStyle} source={require('../img/burger_square.png')}/>
                <Image style={styles.imageStyle} source={require('../img/vegetarian_square.png')}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 90,
        width: 90,
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 2,
        marginRight: 2
    },

    scrollStyle: {
        paddingLeft: 20,
        paddingRight: 10
    }
});

export default CategoriesList;