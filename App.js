import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Alumno from "./alumno.js";

export default function App() {
    const alumnos = [
        { 
            nombre: 'CANDELARIA MORA SAMANTHA', 
            matricula: '2114354', 
            foto: 'https://i.pinimg.com/1200x/96/1b/10/961b10c845a1772cf4a0e00b1d5a35dd.jpg'
        },
        { 
            nombre: 'AGUILAR ORTIZ LUIS ROLANDO', 
            matricula: '2121179', 
            foto: 'https://i.pinimg.com/736x/c3/3e/5c/c33e5c56c3222dff33f568c1303bc262.jpg' 
        },
        { 
            nombre: 'BARRIENTOS GALLEGOS DIEGO', 
            matricula: '2048051', 
            foto: 'https://i.pinimg.com/736x/ad/62/53/ad625337ea21646e8e320d4eb8aa2d4b.jpg' 
        },
        { 
            nombre: 'CANO MONTIEL KELLY YISSETH', 
            matricula: '1979822', 
            foto: 'https://i.pinimg.com/736x/de/28/d2/de28d2111bc235be1dd7b013f2982243.jpg'
        },
        { 
            nombre: 'CANTU SILVA JAVIER', 
            matricula: '2111889', 
            foto: 'https://i.pinimg.com/1200x/96/1b/10/961b10c845a1772cf4a0e00b1d5a35dd.jpg'
        },
        { 
            nombre: 'CARMONA LOZANO ANGEL EMILIANO', 
            matricula: '2069119', 
            foto: 'https://i.pinimg.com/736x/c3/3e/5c/c33e5c56c3222dff33f568c1303bc262.jpg'
        },
        { 
            nombre: 'CASTILLO ACOSTA JORGE', 
            matricula: '2132842', 
            foto: 'https://i.pinimg.com/736x/ad/62/53/ad625337ea21646e8e320d4eb8aa2d4b.jpg'
        },
        { 
            nombre: 'DAVILA GONZALEZ ALDO ADRIAN', 
            matricula: '1994122', 
            foto: 'https://i.pinimg.com/736x/de/28/d2/de28d2111bc235be1dd7b013f2982243.jpg'
        },
        { 
            nombre: 'DURAN BARRIENTOS FABRIZIO', 
            matricula: '2018230',
            foto: 'https://i.pinimg.com/1200x/96/1b/10/961b10c845a1772cf4a0e00b1d5a35dd.jpg'
        },
        { 
            nombre: 'FLORES GONZALEZ SEBASTIAN', 
            matricula: '2104564', 
            foto: 'https://i.pinimg.com/736x/c3/3e/5c/c33e5c56c3222dff33f568c1303bc262.jpg' 
        },
        { 
            nombre: 'FLORES LÓPEZ DIEGO', 
            matricula: '2066033', 
            foto: 'https://i.pinimg.com/736x/ad/62/53/ad625337ea21646e8e320d4eb8aa2d4b.jpg'
        },
        { 
            nombre: 'FLORES MARTINEZ ERICK ADRIAN', 
            matricula: '2132976', 
            foto: 'https://i.pinimg.com/736x/de/28/d2/de28d2111bc235be1dd7b013f2982243.jpg'
        },
        { 
            nombre: 'GARZA AVALOS DIEGO', 
            matricula: '2066114',
            foto: 'https://i.pinimg.com/1200x/96/1b/10/961b10c845a1772cf4a0e00b1d5a35dd.jpg'
        },
        { 
            nombre: 'GONZALEZ OVALLE CHRISTIAN GABRIEL', 
            matricula: '2031243', 
            foto: 'https://i.pinimg.com/736x/c3/3e/5c/c33e5c56c3222dff33f568c1303bc262.jpg' 
        },
        { 
            nombre: 'GRANJA PEÑA DIEGO', 
            matricula: '2064733', 
            foto: 'https://i.pinimg.com/736x/ad/62/53/ad625337ea21646e8e320d4eb8aa2d4b.jpg'
        },
        { 
            nombre: 'IBARRA RODRIGUEZ ALEXIS', 
            matricula: '2094647', 
            foto: 'https://i.pinimg.com/736x/de/28/d2/de28d2111bc235be1dd7b013f2982243.jpg'
        },
        { 
            nombre: 'MARTINEZ ELIAS ANGEL SEBASTIAN', 
            matricula: '2005102',
            foto: 'https://i.pinimg.com/1200x/96/1b/10/961b10c845a1772cf4a0e00b1d5a35dd.jpg'
        },
        { 
            nombre: 'MENDIETA GONZALEZ ESMERALDA GABRIELA', 
            matricula: '2064574', 
            foto: 'https://i.pinimg.com/736x/c3/3e/5c/c33e5c56c3222dff33f568c1303bc262.jpg' 
        },
        { 
            nombre: 'MIRELES VELAZQUEZ ALEJANDRO', 
            matricula: '2024783', 
            foto: 'https://i.pinimg.com/736x/ad/62/53/ad625337ea21646e8e320d4eb8aa2d4b.jpg'
        },
        { 
            nombre: 'MONSIVAIS SALAZAR ANDRES', 
            matricula: '2066077', 
            foto: 'https://i.pinimg.com/736x/de/28/d2/de28d2111bc235be1dd7b013f2982243.jpg'
        },
        { 
            nombre: 'PARRAZALEZ VALDESPINO MARTHA JULIETA', 
            matricula: '2092151',
            foto: 'https://i.pinimg.com/1200x/96/1b/10/961b10c845a1772cf4a0e00b1d5a35dd.jpg'
        },
        { 
            nombre: 'PEÑA MUNGARRO LUIS ANGEL', 
            matricula: '2103708', 
            foto: 'https://i.pinimg.com/736x/c3/3e/5c/c33e5c56c3222dff33f568c1303bc262.jpg' 
        },
        { 
            nombre: 'PUENTE REYNOSO JULIO CESAR', 
            matricula: '2115192', 
            foto: 'https://i.pinimg.com/736x/ad/62/53/ad625337ea21646e8e320d4eb8aa2d4b.jpg'
        },
        { 
            nombre: 'RAMIREZ LOPEZ BRYAN', 
            matricula: '2103765', 
            foto: 'https://i.pinimg.com/736x/de/28/d2/de28d2111bc235be1dd7b013f2982243.jpg'
        },
        { 
            nombre: 'RAMOS AVILA LILIANA VALERIA', 
            matricula: '2056778',
            foto: 'https://i.pinimg.com/1200x/96/1b/10/961b10c845a1772cf4a0e00b1d5a35dd.jpg'
        },
        { 
            nombre: 'RICO JAUREGUI MAURICIO', 
            matricula: '2037503', 
            foto: 'https://i.pinimg.com/736x/c3/3e/5c/c33e5c56c3222dff33f568c1303bc262.jpg' 
        },
        { 
            nombre: 'RIVERA LUNA ADRIAN', 
            matricula: '2131513', 
            foto: 'https://i.pinimg.com/736x/ad/62/53/ad625337ea21646e8e320d4eb8aa2d4b.jpg'
        },
        { 
            nombre: 'RIVERA REYNA JOSE EMILIO', 
            matricula: '2013503', 
            foto: 'https://i.pinimg.com/736x/de/28/d2/de28d2111bc235be1dd7b013f2982243.jpg'
        },
        { 
            nombre: 'RODRIGUEZ OLVERA ROSA ISELA', 
            matricula: '2004613',
            foto: 'https://i.pinimg.com/1200x/96/1b/10/961b10c845a1772cf4a0e00b1d5a35dd.jpg'
        },
        { 
            nombre: 'RODRIGUEZ RODRIGUEZ ANGEL AZAEL', 
            matricula: '2133022', 
            foto: 'https://i.pinimg.com/736x/c3/3e/5c/c33e5c56c3222dff33f568c1303bc262.jpg' 
        },
        { 
            nombre: 'SANCHEZ GALARZA JUAN CARLOS', 
            matricula: '2026061', 
            foto: 'https://i.pinimg.com/736x/ad/62/53/ad625337ea21646e8e320d4eb8aa2d4b.jpg'
        },
        { 
            nombre: 'SOLIS ORTIZ ALFREDO', 
            matricula: '2095320', 
            foto: 'https://i.pinimg.com/736x/de/28/d2/de28d2111bc235be1dd7b013f2982243.jpg'
        },
        { 
            nombre: 'VELAZQUEZ ABREGO HERWIN DANIEL', 
            matricula: '2025350',
            foto: 'https://i.pinimg.com/1200x/96/1b/10/961b10c845a1772cf4a0e00b1d5a35dd.jpg'
        },
        { 
            nombre: 'VILLAGRA RODRIGUEZ ANDRES NEHUEL', 
            matricula: '2103895', 
            foto: 'https://i.pinimg.com/736x/c3/3e/5c/c33e5c56c3222dff33f568c1303bc262.jpg' 
        },
        { 
            nombre: 'ZACATENCO OLIVE RODRIGO', 
            matricula: '1857791', 
            foto: 'https://i.pinimg.com/736x/ad/62/53/ad625337ea21646e8e320d4eb8aa2d4b.jpg'
        },
        { 
            nombre: 'ZAVALA CANTU TERESA MARGARITA', 
            matricula: '2025218', 
            foto: 'https://i.pinimg.com/736x/de/28/d2/de28d2111bc235be1dd7b013f2982243.jpg'
        }
    ];

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.tarjeta}>
                    {alumnos.map((alumno) => (
                        <Alumno 
                            key={alumno.matricula} 
                            nombre={alumno.nombre} 
                            matricula={alumno.matricula} 
                            foto={alumno.foto}
                        />
                    ))}
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    tarjeta: {
        paddingHorizontal: 15,
        paddingBottom: 20,
    }
});

/* const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
}); */