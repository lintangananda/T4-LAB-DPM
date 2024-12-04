import React, {useState} from "react";
import { StyleSheet,View } from "react-native";
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [user, setUser] = useState ({
        name : 'Nama',
        age  : 20,
        address : 'Pekanbaru',
    });

    const handleUpdateUser = () => {
        setUser({
            ...user,
            age: user.age +1
        });
    };

    return (
        <View style = {styles.container}>
            <ChildComponent user ={user} onUpdateUser={handleUpdateUser}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
});

export default ParentComponent;