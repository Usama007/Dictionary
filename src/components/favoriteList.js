import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, CardItem } from 'native-base'
import { Button } from 'react-native-paper'



const FavoriteList = ({ listData, onPressRemoveFromFavorite }) => {
    return (
        <View>

            {listData.map((item) => (
                <Card key={item.definition}>
                    <CardItem header bordered style={styles.cardItemHeader}>
                        <Text style={styles.wordText}> {item.word} <Text style={styles.wordTypeText}>(- {item.type})</Text></Text>
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
                        <Button style={styles.button} icon="heart-remove" compact={true} mode="contained" onPress={() => onPressRemoveFromFavorite(item)}>
                            Remove From Favorite
                        </Button>
                    </CardItem>
                </Card>

            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    wordText: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 16
    },
    wordTypeText: {
        fontStyle: 'italic',
        fontSize: 12,
        textTransform: 'lowercase'
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


export default FavoriteList
