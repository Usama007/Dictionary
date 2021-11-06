import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Searchbar, Button } from 'react-native-paper';


const SearchField = ({ onSubmitSearchedText }) => {
    const [searchedText, setsearchedText] = useState('')
    return (
        <View style={styles.searchFieldWrapper}>
            <Searchbar
                placeholder="Search"
                onChangeText={(text) => setsearchedText(text)}
                value={searchedText}
                style={styles.searchBar}
                onSubmitEditing={() => onSubmitSearchedText(searchedText)}
            />
            <Button style={styles.searchBtn} mode="contained" onPress={() => onSubmitSearchedText(searchedText)}>
                Search
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    searchFieldWrapper: {
        flexDirection: 'row',

    },
    searchBar: {
        flex: 1,
        marginRight: 5
    },
    searchBtn: {
        paddingTop: 5
    }
})


export default SearchField
