import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper';



const SegmentButtons = ({segment,onPressButton}) => {
    return (
           <View style={styles.buttonWrapper}>
            <Button compact={true}  mode={segment == 'Search'?'contained':'outlined'} style={styles.button}  onPress={() => onPressButton('Search')}>
                Search Dictionary
            </Button>
            <Button compact={true}  mode={segment == 'Favorite'?'contained':'outlined'} style={styles.button} onPress={() => onPressButton('Favorite')}>
                View Favorites
            </Button>

        </View>
    )
}

const styles = StyleSheet.create({
    buttonWrapper:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop: 10
    },
    button:{
        borderRadius: 0
    }
})

export default SegmentButtons
