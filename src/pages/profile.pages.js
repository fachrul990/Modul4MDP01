import React from 'react';
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import Style from '../stylessheets';
import axios from 'axios';
const { ProfileStyle } = Style;
function ProfilePages() {
    const [data, setData] = React.useState('');
    var [count, setCount] = React.useState(0);
    React.useEffect(() => {
        async function fetchData() {
            const request = await axios
                .get(`https://api.github.com/users/${username[count]}`)
                .then(res => setData(res.data))
                .catch(e => Alert.alert('Gagal!', e));
            return request;
        }
        fetchData();
    }, [count]);
    const next = () => {
        var nextCount = count + 1;
        if (nextCount < 3) {
            setCount(nextCount);
        }
        else {
            nextCount = 0;
            count = 0;
            setCount(nextCount);
        }        
    };
    const username = [
        "fachrul990",
        "hanndot",
        "maulanaahmad127"
    ];
    return (
        <View style={ProfileStyle.container}>
            <View style={ProfileStyle.headerContainer}>
                <Image
                    source={{
                         uri: data.avatar_url,
                    }}
                    style={ProfileStyle.headerImage}
                />
                <Text style={ProfileStyle.headerTXT}>
                    {data.login}
                </Text>
                <Text style={ProfileStyle.headerTXTDesc}>{data.public_repos + ' Repository | ' + data.followers + ' Followers | ' + data.following + 'Following'}</Text>
            </View>


            <TouchableOpacity
                style={ProfileStyle.bodyTouchable}
                onPress={() => next()}>
                <Text style={ProfileStyle.bodyTXT}>NEXT</Text>
            </TouchableOpacity>
        </View>
    );
}
export default ProfilePages;
