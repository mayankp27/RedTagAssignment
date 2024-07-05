import { View, Text, FlatList, Dimensions } from 'react-native'
import React from 'react'
import SkeletonLoader from 'expo-skeleton-loader'

const Loader = () => {
    // We are loading the skeleton loader when api fetching the data in background.
    return (
        <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            numColumns={2}
            initialNumToRender={8}
            renderItem={({ item }) => {
                return (
                    <SkeletonLoader boneColor='#F1F1F1' highlightColor='lightgrey'>
                        <SkeletonLoader.Container
                            style={[{ height: 350 }, { marginBottom: 10 }]}
                        >
                            <SkeletonLoader.Item
                                style={{
                                    width: Dimensions.get("window").width / 2.17,
                                    height: 250,
                                    borderRadius: 10,
                                    marginLeft: 10,
                                    margin: 5
                                }}
                            />
                            <SkeletonLoader.Container style={{ paddingVertical: 10 }}>
                                <SkeletonLoader.Item
                                    style={{
                                        width: 150,
                                        height: 20,
                                        marginLeft: 10,
                                        margin: 5
                                    }}
                                />
                                <SkeletonLoader.Item
                                    style={{
                                        width: 100,
                                        height: 20,
                                        marginLeft: 10,
                                        margin: 5
                                    }}
                                />
                            </SkeletonLoader.Container>
                        </SkeletonLoader.Container>
                    </SkeletonLoader>
                )
            }}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={() => {
                // Load more products here
            }}
        />
    )
}

export default Loader