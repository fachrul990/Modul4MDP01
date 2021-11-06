import React from 'react';
import { View, Text, Image, FlatList } from 'react-native'; import Style from '../stylessheets';
const { HomeStyle } = Style;
function HomePages() {
    const data = [
        {
            id: 1,
            nama: 'David',
            nim: '21120119130094',
            kelompok: '1',
        },
        {
            id: 2,
            nama: 'Donito',
            nim: '21120119130094',
            kelompok: '1',
        },
        {
            id: 3,
            nama: 'Fachrul',
            nim: '21120119130094',
            kelompok: '1',
        },
        {
            id: 4,
            nama: 'Maulana',
            nim: '21120119130094',
            kelompok: '1',
        },
    ];
    const ListItemNama = dataPassing => {
        return (
            <View
                style={
                    dataPassing.dataNama.id % 2 === 1
                        ? HomeStyle.itemListContainerGanjil
                        : HomeStyle.itemListContainerGenap
                }>
                <View>
                    <View style={
                        dataPassing.dataNama.id % 2 === 1
                        ? HomeStyle.itemListGarisGanjil
                        : HomeStyle.itemListGarisGenap
                    }>

                    </View>
                </View>
                <View style={HomeStyle.itemListContent}>
                    <Text style={HomeStyle.itemListTXT}>
                        {'Nama : ' + dataPassing.dataNama.nama}  </Text>
                    <Text style={HomeStyle.itemListTXT}>
                        {'NIM : ' + dataPassing.dataNama.nim}  </Text>
                    <Text style={HomeStyle.itemListTXT}>
                        {'Kelompok : ' + dataPassing.dataNama.kelompok}  </Text>
                </View>
            </View>
        );
    };
    return (
        <View style={HomeStyle.container}>
            <View style={HomeStyle.headerContainer}>
                <Image
                    source={{
                        uri: 'https://bit.ly/39BPh9p',
                    }}
                    style={HomeStyle.headerImage}
                />
                <Text style={HomeStyle.headerTXT}>
                    PRAKTIKUM MDP MODUL 4 KELOMPOK 1
                </Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                legacyImplementation={false}
                data={data}
                renderItem={({ item }) => <ListItemNama dataNama={item} />}
                keyExtractor={item => item.id}
                style={HomeStyle.flatlist}
            />
        </View>
    );
}
export default HomePages;
