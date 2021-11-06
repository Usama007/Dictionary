import { Separator } from 'native-base';
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView, Alert } from 'react-native'
import { ActivityIndicator, Caption } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux'
import SearchField from '../components/searchField';
import WordList from '../components/wordList';
import api from '../misc/api';
import { addToFavorite } from '../redux/favoriteSlice';
import { addSearchObj } from '../redux/searchSlice';


const SearchScreen = () => {
    const dispatch = useDispatch()
    const search = useSelector(state => state.search)
    const favorite = useSelector(state => state.favorite)
    const [responseData, setresponseData] = useState([])
    const [searchedWord, setsearchedWord] = useState('')
    const [message, setmessage] = useState('Search result will be shown here')
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        if (search.responseData.length != 0) {
            setsearchedWord(search.text);
            setresponseData(search.responseData);
        }
    }, [])

    const onSubmitSearchedText = async (text) => {

        try {
            setLoading(true);
            setresponseData([]);
            let response = await api.get("/" + text, {
                headers: {
                    Authorization: 'Token ba80104c342c09338322bfdf08293995e6f896c8'   //the token is a variable which holds the token
                }
            })
            if (response.data.definitions != undefined) {
                setresponseData(response.data.definitions)
                setsearchedWord(response.data.word)
                let payload = {
                    text: response.data.word,
                    responseData: response.data.definitions
                }
                dispatch(addSearchObj(payload))
            } else {
                dispatch(addSearchObj({}))
                setmessage('Sorry no word found')
            }
            setLoading(false);
        } catch (error) {
            dispatch(addSearchObj({}))
            setmessage('Sorry no word found')
            setLoading(false);
        }
    }

    const onPressAddtoFavorite = async (item) => {
        let title ='';
        let subTitle = ''
        let index = favorite.findIndex(data => { return data.definition === item.definition });

        if(index>=0){
           title = 'Sorry!';
           subTitle = 'This word is already added in your favorite list.'
        }else{
            let payload = {
                ...item,
                'word': searchedWord
            };
            dispatch(addToFavorite(payload))            
            title = 'Success!';
            subTitle = 'This word is successfully added to your favorite list'
          
        }       
       
        showAlert(title,subTitle)
    }

    const showAlert = (title='',subTitle='') => {

        Alert.alert(
            title,
            subTitle,
            [

                { text: "CLOSE", onPress: () => { } , style: "cancel"}
            ]
        );

    }


    return (
        <View>
            {loading ? (
                <ActivityIndicator size={'large'} color={'#6200ee'} style={styles.loader} />
            ) : (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.searchFieldWrapper}>
                        <SearchField onSubmitSearchedText={onSubmitSearchedText} />
                    </View>

                    <View>
                        {responseData.length == 0 ? (
                            <Caption style={styles.caption}>
                                {message}
                            </Caption>
                        ) : (
                            <View style={styles.listWrapper}>
                                <Separator>
                                    <Text style={styles.searchResultText}>Search result for "{searchedWord}"</Text>
                                </Separator>
                                <WordList responseData={responseData} onPressAddtoFavorite={onPressAddtoFavorite} />
                            </View>
                        )}
                    </View>
                </ScrollView>
            )}


        </View>

    )
}

const styles = StyleSheet.create({
    caption: {
        fontSize: 20,
        alignSelf: 'center',
        paddingTop: 30
    },
    loader: {
        paddingTop: 20
    },
    searchFieldWrapper: {
        paddingHorizontal: 2, paddingTop: 5
    },
    listWrapper: {
        marginBottom: Dimensions.get('window').height * .2,
        paddingTop: 5
    },
    searchResultText: {
        fontSize: 16,
    }
})


export default SearchScreen
