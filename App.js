
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';
import { useState } from 'react';


export default function App() {
const [tarefas,setTarefas] = useState([

    {id: "1",titulo: "Aprender Git"},
    {id: "2",titulo: "Aprender a fazer commit"},
    {id: "3",titulo: "Aprender utilizar o Github"},
    
])

const[novaTarefa,setnovaTarefa] = useState('');

function addTarefas(){

  const task = {

    id : String(Date.now()),
    titulo : novaTarefa
  };
  setTarefas([...tarefas,task])
  setnovaTarefas("");
}


  return (
    <View style = {styles.container1}>
     <Text style = {styles.titulo} > Lista de tarefas</Text>

     <FlatList
      data={tarefas}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>(
        <Text style = {styles.item}>{item.titulo}</Text>
      )}


     />

     <TextInput

     style={styles.input}
     value= {novaTarefa}
     onChangeText={(texto)=>setnovaTarefa(texto) }
     placeholder='Digite uma tarefa'
     textAlign='center'
     />

     <TouchableOpacity onPress={addTarefas} style ={styles.btnAdicionar}>
      <Text>Adicionar Tarefa</Text> </TouchableOpacity>
     </View>
  
  ) ;
}

const styles = StyleSheet.create({
   container1:  {
    flex:1,
     backgroundColor: '#0f172a'
   },
   titulo: { 
    fontSize:70,
    fontWeight: 'bold',
    color: 'white',
    marginBottom:20

   },
   item:{
    padding:15,
    marginTop:10,
    backgroundColor:'#e25858ff',
    borderRadius:5,
    
    
   },
   btnAdicionar:{
    width:'90%',
    backgroundColor: '#22c55e',
    margin:15,
    height:40,
    borderRadius:5 ,
    justifyContent: 'center',
    alignItems: 'center'
   },
   input:{
    borderWidth:1,
    width:'90%',
    margin:15,
    borderColor:'#ccc',
    padding:10,
    marginBottom:10,
    borderRadius:5,
    backgroundColor:'white',
    textAlign:'center'




   }
  }
);
