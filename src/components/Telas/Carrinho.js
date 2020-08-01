import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';
import styles from './estilo'


class Carrinho extends Component {

    render() {
        return (

            <View style={styles.container}>
                <View >
                    <Text style={styles.title}>Troque seus pontos</Text>
                    <Image style={styles.image} source={require('../images/cine.jpg')} />
                    <Text style={styles.p}>Cine Drive In</Text>
                    <View >
                        <Text style={styles.p} >Individual</Text>
                        <Text style={styles.p}>R$ 30</Text>
                    </View>
                    <View >
                        <Text style={styles.p} >Casal</Text>
                        <Text style={styles.p}>R$ 60</Text>
                    </View>
                    <View >
                        <Text style={styles.p} >Familia</Text>
                        <Text style={styles.p}>R$ 120</Text>
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