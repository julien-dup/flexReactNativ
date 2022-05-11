import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput} from 'react-native';

 
  const exo2 = () => {
  return (
    
      <View style={styles.contain}>
        
        <StatusBar style="auto" />

        <View style={styles.bloc1}>
          <Text>Bloc1</Text></View>

        <View style={styles.bloc2}>
          <Text>Bloc2</Text></View>

        <View style={styles.bloc3}>
          <Text>Bloc3</Text></View>
      </View>
    
  );
}

const exo3 = () => {
  return (
    // <View style={styles.mainContainExo3}>
    //   <View style={styles.containExo3}>
        
    //     <StatusBar style="auto" />

    //     <View style={styles.bloc1}>
    //       <Text>Bloc1</Text></View>

    //     <View style={styles.bloc2}>
    //       <Text>Bloc2</Text></View>

    //     <View style={styles.bloc3}>
    //       <Text>Bloc3</Text></View>
    //   </View>
    //   <View style={styles.bloc4}>
    //     <Text>Bloc4</Text>
    //   </View>
    //   <View style={styles.bloc5}>
    //     <Text>Bloc5</Text>
    //   </View>
    //   <View style={styles.bloc6}>
    //     <Text>Bloc6</Text>
    //   </View>
    // </View> 

    <View style={styles.flex1 }>
      <View style={[styles.flex1 , styles.flexDirectionRow ]}>
        <View style={{backgroundColor: 'green', flex: 3}}></View>
        <View style={{backgroundColor: 'red', flex: 2}}></View>
        <View style={{backgroundColor: 'blue', flex: 1}}></View>
      </View>
      <View style={styles.flex1}>
        <View style= {{backgroundColor: 'purple', flex:3}}></View>
        <View style= {{backgroundColor: 'yellow', flex:2}}></View>
        <View style= {{backgroundColor: 'pink', flex:1}}></View>
      </View>
    </View>

  );
}

const exo4 = () => {
  return (
    <View style={styles.mainContainExo3}>
      <View style={styles.firstContainExo4}>
        <View style={styles.box8}></View>
        <View style={styles.box9}></View>
        <View style={styles.containExo4}>
          <View style={styles.box10}></View>
          <View style={styles.box11}></View>
          <View style={styles.box12}></View>
        </View>
      </View>
      <View style={styles.box7}></View>
    </View>
  )
}

const exo5 = () => {
  return (
    <View style={styles.mainContainExo3}>
      <View style={styles.mainContentLine1Exo5}>
        <View style={styles.content1Exo5}>
          <View style={styles.box13}>
            <Text>Box13</Text>
          </View>
          <View style={styles.box14}></View>
          <View style={styles.box15}></View>
        </View>
        <View style={styles.content2Exo5}>
          <View style={styles.box16}></View>
          <View style={styles.box17}></View>
          <View style={styles.content3Exo5}>
          <View style={styles.box18}></View>
          <View style={styles.box19}></View>
          </View>
        </View>
      </View>
      <View style={styles.mainContentLine2Exo5}>
         
      </View>
    </View>
  )
}

export default exo4

const styles = StyleSheet.create({

  flex1: {
    flex: 1
  },

  flexDirectionRow: {
    flexDirection: 'row'
  },


  mainContainExo3: {
    flex: 1,
    backgroundColor: 'white',
  },
  containExo3: {
    flex: 3,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  
  contain: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  bloc1: {
    flex: 3,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  bloc2: {
    flex: 2,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bloc3: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bloc4: {
    flex: 2,
    backgroundColor: 'purple'
  },

  bloc5: {
    flex: 1,
    backgroundColor: 'yellow'
  },

  bloc6: {
    flex: 0.5,
    backgroundColor: 'hotpink'
  },

  firstContainExo4: {
    flex: 1.6,
    flexDirection: 'row',
    backgroundColor: 'black',
  },

  box7: {
    flex: 2,
    backgroundColor: 'dimgrey',
  },

  box8: {
    flex: 0.5,
    backgroundColor: 'blue',
  },

  box9: {
    flex: 2,
    backgroundColor: 'red',
  },

  containExo4: {
    flex: 2.5,
    backgroundColor: 'yellow',
    flexDirection: 'column',
  },

  box10: {
    flex: 3,
    backgroundColor: 'purple',
  },

  box11: {
    flex: 1,
    backgroundColor: 'yellow',
  },

  box12: {
    flex: 1,
    backgroundColor: 'hotpink',
  },

  mainContentLine1Exo5: {
    flex: 1.8,
    flexDirection: 'row',
    backgroundColor: 'red',
  },

  mainContentLine2Exo5: {
    flex: 2,
    backgroundColor: 'gainsboro',
  },

  content1Exo5: {
    flex: 2,
    backgroundColor: 'green',
  },

  content2Exo5: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue',
  },

  box13: {
    flex: 2.7,
    backgroundColor: 'purple'
  },

  box14: {
    flex: 1,
    backgroundColor: 'yellow'
  },

  box15: {
    flex: 1,
    backgroundColor: 'pink'
  },

  box16: {
    flex: 1,
    backgroundColor: 'red'
  },

  box17: {
    flex: 0.5,
    backgroundColor: 'blue'
  },

  content3Exo5: {
    flex: 1.5,
    backgroundColor: 'black',
  },

  box18: {
    flex: 1,
    backgroundColor: '#afeeee'
  },

  box19: {
    flex: 0.5,
    backgroundColor: '#ff00ff'
  },

});
