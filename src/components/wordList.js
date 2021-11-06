import { Card, CardItem } from 'native-base'
import React from 'react'
import {  Text,  StyleSheet, } from 'react-native'
import { Button } from 'react-native-paper'


const WordList = ({ responseData,onPressAddtoFavorite }) => {

    return (
        <>

            {responseData.map((item) => (

                <Card key={item.definition}>
                    <CardItem header bordered style={styles.cardItemHeader}>
                        <Text style={styles.italicText}>- {item.type}</Text>

                    </CardItem>
                    <CardItem bordered>
                        <Text><Text style={styles.italicText}>Definition:</Text> {item.definition}</Text>

                    </CardItem>
                    {item.example != null && (
                        <CardItem bordered>
                            <Text><Text style={styles.italicText}>Example:</Text> {item.example}</Text>
                        </CardItem>
                    )}
                    <CardItem footer >
                        <Button style={styles.button} icon="heart-outline" compact={true} mode="contained" onPress={() => onPressAddtoFavorite(item)}>
                            Add to favorite
                        </Button>
                    </CardItem>
                </Card>

            ))}

        </>
    )
}

const styles = StyleSheet.create({
    cardItemHeader: {
        justifyContent: 'space-between'
    },
    italicText: {
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    button: {
        alignSelf: 'center',
        flex: 1
    }
})


export default WordList
