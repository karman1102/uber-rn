import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Touchable, FlatList, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

// to render list items we use a 'renderitem'
const data = [
    {
        id: '123',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen'
    },
    {
        id: '456',
        title: 'Order Food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatsScreen',
    }
]

const NavOptions = () => {

    const navigation = useNavigation();

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen)}
                    style={tw`p-2 pl-6 pb-8 pt-4 w-40 bg-gray-200 m-2`}>
                    <View>
                        <Image
                            style={{ width: 120, height: 120, resizeMode: "contain" }}
                            source={{
                                uri: item.image
                            }}
                        />
                        <Text style={tw`font-semibold mt-2 text-lg`}>{item.title}</Text>
                        <Icon
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            name='arrowright'
                            color='white'
                            type='antdesign'
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default NavOptions
