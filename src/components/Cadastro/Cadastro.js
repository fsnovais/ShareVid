import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';

class Cadastro extends Component {


    constructor(props) {
        super(props);

        this.state = {
            InputEmail: '',
            InputPass1: '',
            InputPass2: ''

        }
    }

    SalvarCadastro = async () => {
        const { InputEmail, InputPass } = this.state;

        if ((InputEmail == '') || (InputPass1 == '') || (InputPass2 == '') || (InputEmail == '' && InputPass1 == ''&& InputPass2 == '')) {
            Alert.alert('Prencha os campos para concluir o cadastro');
        }
        else if  (InputPass1 != InputPass2) {
            Alert.alert('As senhas precisam ser iguais')
        }
        else if (InputPass.length < 8) {
            Alert.alert('Senha precisa ter ao menos 8 caracteres')
        }
        else if (InputEmail != '' && InputPass != '') {
            // firebase.auth().createUserWithEmailAndPassword(InputEmail, InputPass)
            Alert.alert('Cadastro Realizado com Sucesso');
            this.props.navigation.navigate('Login')
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.titulocadastro}>Cadastro</Text>
                    <Text style={styles.cadastro}>Descrição:</Text>
                </View>
                <View style={styles.containersub}>

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


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#292929',
        flex: 1,
    },

    titulocadastro: {
        height: 45,
        margin: 7,
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'white',


    },
    button: {
        height: 60,
        width: 325,
        padding: 15,
        backgroundColor: '#7AB3FF',
        margin: 15,
        borderColor: '#ff6505',


    },


    input: {
        height: 65,
        width: 325,
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 20,
        color: '#000',
        margin: 30,
        marginTop: -5,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16

    },
    cadastro: {
        height: 100,
        margin: 5,
        padding: 10,
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',

    },
    containersub: {
        alignItems: 'center',
        marginTop: 50,
        justifyContent: 'center',

    },


    form: {
        justifyContent: 'center',
        alignItems: 'center',


    },


});
Cadastro.navigationOptions = {
    header: null,
};
export default Cadastro;
