import React from 'react';
import { View, Image, Text } from 'react-native';

import logo from '../../assets/logo.png'

import Styles from './styles'
import styles from './styles';


export default function Incidents() {
    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Image source={logo} />
                <Text style={styles.headerText}>
                    Total de <Text style={Styles.headerTextBold}> 0 casos </Text>.
                </Text>
            </View>

            <Text style={Styles.title}>Bem-Vindo</Text>
            <Text style={Styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>
            </View>
    );
}