import React from 'react';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

import { StyleSheet, View, Text, ImageBackground, Dimensions, StatusBar, Image, AppRegistry, ScrollView, TouchableOpacity, FlatList, Alert, RefreshControl } from 'react-native'
import { Container, Header, Title, Button, Icon, Left, Right, Body, Item, Input, Card, CardItem, Footer, FooterTab, Content, Thumbnail, Tab, Tabs, ScrollableTab, Form, Picker, Separator, List, ListItem } from "native-base";

import { connect } from 'react-redux';

import data from "./data";

class ContactListScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        };
    }

    componentDidMount() {

        //console.log(data)

    }

    refresh() {
        return (
            <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => this.onRefreshing()} />

        );
    }

    onRefreshing() {
        console.log('refreshing')
        this.setState({ refreshing: true });
        this.setState({ refreshing: false });

    }

    render() {
        //console.log(this.props)
        const { modalVisible } = this.state
        return (
            <View style={{ height: screenHeight, flex: 1}}>
                <Header style={{ backgroundColor: 'transparent', height: 90, elevation: 0 }}>
                    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                    <Left style={{ flex: 1 }}>
                        <Button style={{ marginTop: 25 }} transparent onPress={() => {
                            this.props.navigation.navigate('SearchScreen')
                            //Alert.alert('Yet to be completed')
                        }}>
                            <Image source={require("../../img/search.png")} style={{ height: 25, width: 25}} />
                        </Button>
                    </Left>
                    <Body style={{ flex: 1, alignItems: 'center' }}>
                        <Title style={{ fontSize: 20, marginTop: 25, fontSize: 22, fontWeight: 'bold', color: 'black' }}>Contacts</Title>
                    </Body>
                    <Right style={{ flex: 1 }}>
                        <Button style={{ marginTop: 25 }} transparent onPress={() => this.props.navigation.navigate('NewContactScreen')}>
                            <Text style={{ fontSize: 30, color: '#ff8c00' }}>+</Text>
                        </Button>
                    </Right>
                </Header>

                <FlatList
                    refreshControl={this.refresh()}
                    style={{ flex: 1 }}
                    data={this.props.contacts.contactList}
                    //data={data}
                    renderItem={({ item, index }) => {
                        return (

                            <View>
                                <TouchableOpacity style={{ height: 60, justifyContent: 'center', }} onPress={() => {
                                    console.log(item, index)
                                    this.props.navigation.navigate('ContactDetailScreen', {item, index})
                                }}>

                                    <View style={{ alignItems: 'center', flexDirection: 'row', height: '100%', paddingHorizontal: 15 }}>

                                        <View style={{
                                            flex: 0.2
                                        }}>
                                            <View style={{ height: 45, width: 45, borderRadius: 45, backgroundColor: '#ff8c00' }}>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <Text>{item.firstName}</Text>
                                            <Text> {item.lastName}</Text>
                                        </View>                                        
                                        
                                    </View>
                                </TouchableOpacity>

                                <View style={{ borderWidth: 0.2, borderColor: 'grey' }}></View>
                            </View>
                        )
                    }}
                    keyExtractor={item => item.id}

                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapStateToProps = (state) => {

    const { contacts } = state

    return state

};

export default connect(mapStateToProps, null)(ContactListScreen)


//export default ContactListScreen;