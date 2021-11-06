import { Container } from 'native-base';
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import SegmentButtons from '../components/segmentButtons';
import FavoriteScreen from './FavoriteScreen';
import SearchScreen from './SearchScreen';


const MainScreen = () => {
    const [segment, setSegment] = useState('Search')

    const onPressButton = (segmentName) => {
        setSegment(segmentName)
    }

    return (
      
        <View style={styles.mainWrapper}>
            <SegmentButtons segment={segment} onPressButton={onPressButton} />
            <View style={styles.screenWrapper}>
                {segment == 'Search' ? <SearchScreen /> : <FavoriteScreen />}
            </View>

        </View>
       
    )
}

const styles = StyleSheet.create({
    mainWrapper: {
        paddingHorizontal: 10,
     
    },
    screenWrapper:{
        paddingTop: 10,
    }
})




export default MainScreen
