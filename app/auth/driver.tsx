import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
const driver = () => {
  return (
    <>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#000',
        height: 86
      }}>
        <MaterialIcons name='arrow-back' color='#fff' size={24} />
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
          <TextInput style={{
            backgroundColor: '#FDFDFD',
            borderWidth: 1,
            borderColor: '#C0C0C0',
            borderRadius: 8,
            height: 42,
            marginBottom: 16,
            padding: 8
          }} />
          <Text style={{ fontSize: 18 }}>Telefone/Whatsapp</Text>
          <TextInput style={{
            backgroundColor: '#FDFDFD',
            borderWidth: 1,
            borderColor: '#C0C0C0',
            borderRadius: 8,
            height: 42,
            marginBottom: 16,
            padding: 8
          }} />
          <Text style={{ fontSize: 18 }}>Senha</Text>
          <TextInput style={{
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
          <TextInput style={{
            backgroundColor: '#FDFDFD',
            borderWidth: 1,
            borderColor: '#C0C0C0',
            borderRadius: 8,
            height: 42,
            marginBottom: 16,
            padding: 8
          }} />
          <Text style={{ fontSize: 18 }}>Modelo</Text>
          <TextInput style={{
            backgroundColor: '#FDFDFD',
            borderWidth: 1,
            borderColor: '#C0C0C0',
            borderRadius: 8,
            height: 42,
            marginBottom: 16,
            padding: 8
          }} />
          <Text style={{ fontSize: 18 }}>Ano</Text>
          <TextInput style={{
            backgroundColor: '#FDFDFD',
            borderWidth: 1,
            borderColor: '#C0C0C0',
            borderRadius: 8,
            height: 42,
            marginBottom: 16,
            padding: 8
          }} />
          <Text style={{ fontSize: 18 }}>Placa</Text>
          <TextInput style={{
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
        <Text
          style={{
            color: '#FFF',
            fontSize: 22,
          }}>
          Cadastrar
        </Text>
      </View>
    </>

  )
}

export default driver