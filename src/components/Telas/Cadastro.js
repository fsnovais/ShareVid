import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import styles from './estilo'
class Cadastro extends Component {


    constructor(props) {
        super(props);

        this.state = {
            InputEmail: '',
            InputPass1: '',
            InputPass2: ''

        }
    }

    SalvarCadastro = () => {
        const { InputEmail, InputPass1, InputPass2 } = this.state;

        if ((InputEmail == '') || (InputPass1 == '') || (InputPass2 == '') || (InputEmail == '' && InputPass1 == ''&& InputPass2 == '')) {
            Alert.alert('Prencha os campos para concluir o cadastro');
        }
        else if  (InputPass1 != InputPass2) {
            Alert.alert('As senhas precisam ser iguais')
        }
        else if (InputPass1.length < 8) {
            Alert.alert('Senha precisa ter ao menos 8 caracteres')
        }
        else if (InputEmail != '' && InputPass1 != '') {
            // firebase.auth().createUserWithEmailAndPassword(InputEmail, InputPass)
            Alert.alert('Cadastro Realizado com Sucesso');
            this.props.navigation.navigate('Login')
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.title}>Cadastro</Text>
                    <Text style={styles.p}>Descrição:</Text>
                </View>
                <View style={styles.form}>

                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Insira o seu E-mail:"
                        placeholderColor='rgba(255,255,255,0.7)'
                        autoCapitalize="none"
                        onChangeText={(InputEmail) => this.setState({ InputEmail })}
                    />

                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Insira a sua senha:"
                        placeholderColor='rgba(255,255,255,0.7)'
                        autoCapitalize="none"
                        secureTextEntry={true}
                        onChangeText={(InputPass1) => this.setState({ InputPass1 })}
                    />
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Confirme sua senha:"
                        placeholderColor='rgba(255,255,255,0.7)'
                        autoCapitalize="none"
                        secureTextEntry={true}
                        onChangeText={(InputPass2) => this.setState({ InputPass2 })}
                    />
                    <View style={{ margin: 20 }}>
                        <Button title="Salvar Cadastro" onPress={this.SalvarCadastro} />
                    </View>
                </View>
            </View>
        );
    }
}


export default Cadastro;
