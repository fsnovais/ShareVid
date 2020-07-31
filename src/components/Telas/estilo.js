import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({


    container: {
        backgroundColor: 'white',
        flex: 1,
        position: "relative"
        
    },
    mapa: {
        flexDirection: 'column',
        flex: 1.5,
        alignSelf: "stretch",
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    formcontainer: {
        padding: 20
    },
    visitInformation: {
        paddingTop: 20,
        paddingBottom: 20
    },
    title : {
        fontFamily: 'Roboto',
        fontSize: 20,
        paddingLeft: 20,
        paddingBottom: 10,
        color: '#FF473A',
        fontWeight: "bold"
    },
    header: {
        fontSize: 25,
        padding: 10,
        color: '#979797'
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    p: {
        fontFamily: 'Roboto',
        fontSize: 15
    },
    column: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        paddingLeft: 20
    },
    form: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
    },

    inner: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,

    },

    image: {
        width: 300,
        height: 300,
    },
    input: {

        height: 60,
        width: 300,
        borderRadius: 20,
        margin: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
        padding: 10,
        color: 'white'

    },


    textButtons: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 15,
        marginTop: -5

    }
});