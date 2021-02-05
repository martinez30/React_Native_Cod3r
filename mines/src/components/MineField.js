import React from 'react';
import {StyleSheet, View} from 'react-native';
import Field from './Field'

export default props => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
             return <Field {...field} key={c} 
             onOpen={() => props.onOpenField(r,c)}
             onSelect={e => props.onSelectField(r,c)}
             />
        })
        return <View key={r} style={styles.flexRow}>{columns}</View>
    })
    return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
    },
    flexRow: {
        flexDirection: 'row',
    }
})