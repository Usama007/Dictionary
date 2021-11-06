import { Icon, Separator } from 'native-base';
import React from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { Caption } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteList from '../components/favoriteList';
import { removeFromFavorite } from '../redux/favoriteSlice';

const FavoriteScreen = () => {
    const dispatch = useDispatch()
    const favorite = useSelector((state) => state.favorite);

    const onPressRemoveFromFavorite = (item) => {       
        dispatch(removeFromFavorite(item))      
    }

    return (
        <View>
            {favorite.length == 0 ? (
                <>
                    <Icon name={'error'} type={'MaterialIcons'} style={styles.icon} />
                    <Caption style={styles.caption}>
                        You have not added any favorite word.
                    </Caption>
                </>
            ) : (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Separator>
                        <Text style={styles.topMessageText}>Your favorite words</Text>
                    </Separator>
                    <View style={styles.listWrapper}>
                        <FavoriteList listData={favorite} onPressRemoveFromFavorite={onPressRemoveFromFavorite} />
                    </View>
                </ScrollView>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        color: '#a1a1a1',
        alignSelf: 'center',
        fontSize: 100,
        paddingTop: 30,
    },
    caption: {
        fontSize: 20,
        alignSelf: 'center',
        paddingTop: 10,
        color: '#a1a1a1'
    },
    listWrapper: {
        marginBottom: Dimensions.get('window').height * .2,
        paddingTop: 5
    },
    topMessageText: {
        fontSize: 16,
    }



})


export default FavoriteScreen
