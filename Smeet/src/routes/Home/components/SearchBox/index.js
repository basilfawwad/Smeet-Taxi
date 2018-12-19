import React from "react";
import {Text, StyleSheet} from "react-native";
import {View, InputGroup, Input} from "native-base";
import styles from "./SearchBoxStyles";

import Icon from "react-native-vector-icons/FontAwesome";

export const SearchBox = ({getInputData, toggleSearchResultModal, getAddressPredictions}) =>{

    function handleInput(key,val){
        getInputData({
            key,
            value:val
        });
        getAddressPredictions();
    }

        return(
            <View style = {styles.searchBox}>
                <View style = {styles.inputWrapper}>
                    <Text style = {styles.label}>SEARCH</Text>
                    <InputGroup>
                    <Icon name = "search" size = {15} color = "blue"/>
                        <Input onFocus={()=>toggleSearchResultModal("Search")} style = {styles.inputSearch} placeholder = "Choose location" onChangeText={handleInput.bind(this, "Search")}/>
                    </InputGroup>
                </View>
            </View>
        );
    }


export default SearchBox;