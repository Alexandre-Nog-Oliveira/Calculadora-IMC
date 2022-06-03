import React, {useState} from "react"
import {View, Text, TextInput, Button } from "react-native"
import ResultImc from "./ResultImc/"
import style from "./style"

export default function Form(){

    const [height, setHeight]= useState(null)
    const [weight, setWeight]= useState(null)
    const [messsageImc, setMessagemImc]= useState("Preencha o peso e altura")
    const [imc, setImc]= useState(null)
    const [TextButton, setTextButton]= useState("Calcular")

    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }

    function ValidationImc(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessagemImc("Seu IMC é igual a: ")
            setTextButton("Calcular novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessagemImc("Preencha o peso e a altura")
    }


    return(
        <View style= {style.formContext}>
            <View>

                <Text>Altura</Text>
                <TextInput 
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.75" 
                keyboardType="numeric"/>

                <Text>Peso</Text>
                <TextInput 
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 75.365" 
                keyboardType="numeric"/>

                <Button 
                onPress={() => ValidationImc() }
                title={TextButton}/>

            </View>
            <ResultImc messageResultImc={messsageImc} resultImc={imc}/>
        </View>
    )
}