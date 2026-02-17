import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useState } from 'react';

export default function Alumno(props){
    const [mostrar, setMostrar] = useState(false);

    return (
        <View style={estilos.tarjeta}>
            <Image
                source={{ uri: props.foto }}
                style={estilos.foto}
            />
            <View style={estilos.info}>
                <Text style={estilos.nombre}>{props.nombre}</Text>
                {mostrar && (
                    <Text style={estilos.matricula}>{props.matricula}</Text>
                )}
            </View>
            <View>
                <Button
                    title={mostrar ? "Ocultar Matrícula" : "Ver Matrícula"}
                    onPress={() => setMostrar(!mostrar)}
                    color="#49afd3"
                />
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    tarjeta: {
        backgroundColor: '#f8f9fa',
        borderRadius: 15,
        padding: 10,
        marginVertical: 10,
        flexDirection: 'row', 
        alignItems: 'center',
        alignSelf: 'center',
        width: '45%',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1
    },
    foto: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 20
    },
    info: {
        flex: 0.92,
        justifyContent: 'center'
    },
    nombre: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333'
    },
    matricula: {
        fontSize: 13,
        color: '#888',
        marginTop: 2,
    }
});