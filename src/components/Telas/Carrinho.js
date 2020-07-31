import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import styles from './estilo'


class Carrinho extends Component {

    render() {
        return (

            <View style={styles.container}>
                <View >
                    <Text >Troque seus pontos</Text>
                    <Image style={styles.image} source={require('../images/cine.jpg')} />
                    <Text>Cine Drive In</Text>
                    <View >
                        <Text >Individual</Text>
                        <Text>R$ 30</Text>
                    </View>
                    <View >
                        <Text >Casal</Text>
                        <Text>R$ 60</Text>
                    </View>
                    <View >
                        <Text >Familia</Text>
                        <Text>R$ 120</Text>
                    </View>
                    <View style={{ margin: 20 }}>
                        <Button title="Fazer Compra" />
                    </View>
                </View>
            </View>
        );
    }
}

export default Carrinho;