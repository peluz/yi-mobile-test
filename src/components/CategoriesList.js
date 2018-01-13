import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, Text, View } from 'react-native';
import Spinner from './Spinner'

class CategoriesList extends Component {
    state = { loading: true };

    componentWillMount() {
        setInterval(() => {
          this.setState({loading: false });
        }, 1500);
    }

    renderAfterLoad() {
        if (this.state.loading) {
            return <Spinner />
        }
        else {
            return (
                <ScrollView contentContainerStyle={styles.scrollStyle} horizontal >
                    <View style={styles.containerStyle}>
                        <Image style={styles.imageStyle} source={require('../assets/img/pizza_square.png')}/>
                        <Text style={styles.textStyle}>Pizza</Text>
                    </View>
                    <View style={styles.containerStyle}>
                        <Image style={styles.imageStyle} source={require('../assets/img/cafe_square.png')}/>
                        <Text style={styles.textStyle}>Cafés</Text>
                    </View>
                    <View style={styles.containerStyle}>
                        <Image style={styles.imageStyle} source={require('../assets/img/japanese_square.png')}/>
                        <Text style={styles.textStyle}>Japonesa</Text>
                    </View>
                    <View style={styles.containerStyle}>
                        <Image style={styles.imageStyle} source={require('../assets/img/burger_square.png')}/>
                        <Text style={styles.textStyle}>Burger</Text>
                    </View>
                    <View style={styles.containerStyle}>
                        <Image style={styles.imageStyle} source={require('../assets/img/vegetarian_square.png')}/>
                        <Text style={styles.textStyle}>Vegetariano</Text>
                    </View>
                </ScrollView>
            );
        }
    }

    render() {

        return (
            <View>
                {this.renderAfterLoad()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 90,
        width: 90,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 2,
        marginRight: 2
    },

    scrollStyle: {
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-around'
    },

    textStyle: {
        position: 'absolute',
        marginTop: 80,
        color: '#fff',
        fontFamily: 'Roboto'
    },

    containerStyle: {
        flex: 1,
        alignItems: 'center',
    }
});

export default CategoriesList;