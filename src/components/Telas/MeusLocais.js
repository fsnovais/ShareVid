import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import styles from './estilo'


class MeusLocais extends Component {

    render() {
        return (

            <View style={styles.container}>
                <View >
                    <Text style={styles.title} >Meus Locais</Text>
                    <View >
                        <Text style={styles.p} >Esses são os locais frequentes</Text>
                    </View>
                    <View >
                        <Text style={styles.p} >Fit Smart</Text>
                        <Text style={styles.p}>15:30</Text>
                    </View>
                    <View >
                        <Text style={styles.p} >Cabeleira Leila</Text>
                        <Text style={styles.p}>19:00</Text>
                    </View>
                    <View >
                        <Text style={styles.p} >Padaria Pão Dourado</Text>
                        <Text style={styles.p}>Terça às 06:30</Text>
                    </View>
                    <View >
                        <Text style={styles.p} >Padaria Pão Dourado</Text>
                        <Text style={styles.p}>Terça às 06:30</Text>
                    </View>
                    <View style={{ margin: 20 }}>
                        <Button title="Agendar Visita" />
                    </View>
                </View>
            </View>
        );
    }
}

export default MeusLocais;