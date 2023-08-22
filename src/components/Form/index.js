import React from "react";
import { Text, TextInput, View, TouchableOpacity} from "react-native";
import styles from "./style";

export default function Form(){
    return(
        <View style={styles.formContext}>
            <View style={styles.form}>

                <Text style={styles.formLabel}>Login: </Text>
                <TextInput style={styles.input}  placeholder="Fernandinho"/>
                
                <Text style={styles.formLabel}>Senha: </Text>
                <TextInput style={styles.input}  placeholder="senha123"/>

            

                <TouchableOpacity style={styles.ButtonEntrar}>
                    <Text style={styles.textButtonEntrar}>Entrar</Text>
                </TouchableOpacity>

                <Text style={styles.textCadastre}>Ou cadastre:</Text>

                <TouchableOpacity style={styles.ButtonRegistro}>
                    <Text style={styles.textButtonRegistro}>Cadastrar</Text>
                </TouchableOpacity>
  



            </View>
        </View>
    )
}