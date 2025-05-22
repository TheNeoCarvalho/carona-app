import { View, Text, TextInput, ScrollView, TouchableOpacity, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import { useRouter } from 'expo-router'
import api from '../../service/api'

const Driver = () => {

  const router = useRouter()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [placa, setPlaca] = useState("");


  const handleSaveUserDriver = async () => {
    console.log('name', name)
    console.log('email', email)
    console.log('password', password)
    console.log('tel', tel)
    console.log('marca', marca)
    console.log('modelo', modelo)
    console.log('ano', ano)
    console.log('placa', placa)


    // const response = await api.post('register', {
    //   name,
    //   email,
    //   password,
    //   tel,
    //   marca,
    //   modelo,
    //   ano,
    //   placa
    // })

    // console.log(response)
    
    const response = await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify({
        name,
        email,
        type: 'driver',
        tel,
        password,
        marca,
        modelo,
        ano,
        placa
      }),
    })
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      Alert.alert('Cadastro realizado com sucesso!')
      router.push('/(tabs)/home')
    } else {
      Alert.alert('Erro ao cadastrar motorista:', data)
    }
  }

  return (
    <>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#000',
        height: 86,
        paddingLeft: 16,
      }}>
        <Pressable onPress={() => router.back()}>
          <MaterialIcons name='arrow-back' color='#fff' size={24} />
        </Pressable>
        <Text
          style={{
            marginLeft: 16,
            color: '#FFF',
            fontSize: 22,
          }}>
          Cadastro de novo motorista
        </Text>
      </View>
      <ScrollView>
        <Text
          style={{
            fontSize: 24,
            paddingHorizontal: 25,
            paddingVertical: 18
          }}
        >
          Vamos realizar o seu cadrastro, só precisamos de algumas informações
        </Text>
        <View style={{ paddingHorizontal: 25 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              marginBottom: 16
            }}
          >Informações Pessoais</Text>
          <Text style={{ fontSize: 18 }}>Nome Completo</Text>
          <TextInput
            onChangeText={() => setName(name)}
            value={name}
            style={{
              backgroundColor: '#FDFDFD',
              borderWidth: 1,
              borderColor: '#C0C0C0',
              borderRadius: 8,
              height: 42,
              marginBottom: 16,
              padding: 8
            }} />
          <Text style={{ fontSize: 18 }}>Email</Text>
          <TextInput 
            onChangeText={() => setEmail(email)}
            value={email}  
            style={{
              backgroundColor: '#FDFDFD',
              borderWidth: 1,
              borderColor: '#C0C0C0',
              borderRadius: 8,
              height: 42,
              marginBottom: 16,
              padding: 8
            }} />
          <Text style={{ fontSize: 18 }}>Telefone/Whatsapp</Text>
          <TextInput 
            onChangeText={() => setTel(tel)}
            value={tel}
            style={{
              backgroundColor: '#FDFDFD',
              borderWidth: 1,
              borderColor: '#C0C0C0',
              borderRadius: 8,
              height: 42,
              marginBottom: 16,
              padding: 8
            }} />
          <Text style={{ fontSize: 18 }}>Senha</Text>
          <TextInput 
            onChangeText={() => setPassword(password)}
            value={password}
            style={{
              backgroundColor: '#FDFDFD',
              borderWidth: 1,
              borderColor: '#C0C0C0',
              borderRadius: 8,
              height: 42,
              marginBottom: 16,
              padding: 8
            }} />
        </View>
        <View
          style={{
            paddingHorizontal: 25,
            paddingVertical: 18
          }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              marginBottom: 16
            }}
          >Informações do Veículo</Text>
          <Text style={{ fontSize: 18 }}>Marca</Text>
          <TextInput 
            onChangeText={() => setMarca(marca)}
            value={marca}
            style={{
              backgroundColor: '#FDFDFD',
              borderWidth: 1,
              borderColor: '#C0C0C0',
              borderRadius: 8,
              height: 42,
              marginBottom: 16,
              padding: 8
            }} />
          <Text style={{ fontSize: 18 }}>Modelo</Text>
          <TextInput 
            onChangeText={() => setModelo(modelo)}
            value={modelo}
            style={{
              backgroundColor: '#FDFDFD',
              borderWidth: 1,
              borderColor: '#C0C0C0',
              borderRadius: 8,
              height: 42,
              marginBottom: 16,
              padding: 8
            }} />
          <Text style={{ fontSize: 18 }}>Ano</Text>
          <TextInput 
            onChangeText={() => setAno(ano)}
            value={ano}
            style={{
              backgroundColor: '#FDFDFD',
              borderWidth: 1,
              borderColor: '#C0C0C0',
              borderRadius: 8,
              height: 42,
              marginBottom: 16,
              padding: 8
            }} />
          <Text style={{ fontSize: 18 }}>Placa</Text>
          <TextInput 
            onChangeText={() => setPlaca(placa)}
            value={placa}
            style={{
              backgroundColor: '#FDFDFD',
              borderWidth: 1,
              borderColor: '#C0C0C0',
              borderRadius: 8,
              height: 42,
              marginBottom: 16,
              padding: 8
            }} />
        </View>
      </ScrollView>
      <View style={{
        backgroundColor: '#000',
        height: 86,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Pressable 
          // onPress={() => router.push('/(tabs)/home')}
          onPress={handleSaveUserDriver}
        >
          <Text
            style={{
              color: '#FFF',
              fontSize: 22,
            }}>
            Cadastrar
          </Text>
        </Pressable>
      </View>
    </>

  )
}

export default Driver