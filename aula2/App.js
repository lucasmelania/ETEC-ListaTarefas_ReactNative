
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
 const tarefas =[
{id: "1",titulo: "Aprender Git"},
{id: "2",titulo: "Aprender a fazer commit"},
{id: "3",titulo: "Aprender utilizar o Github"},

]

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

     <TouchableOpacity style ={styles.btnAdicionar}>
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
   }
  }
);
