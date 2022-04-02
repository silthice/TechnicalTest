import React from 'react';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

import { StyleSheet, View, Text, ImageBackground, Dimensions, StatusBar, Image, AppRegistry, ScrollView, TouchableOpacity, FlatList, Alert, RefreshControl } from 'react-native'
import { Container, Header, Title, Button, Icon, Left, Right, Body, Item, Input, Card, CardItem, Footer, FooterTab, Content, Thumbnail, Tab, Tabs, ScrollableTab, Form, Picker, Separator, List, ListItem } from "native-base";

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { searchContact, resetContact } from '../actions/ContactActions';

import data from "./data";

class SearchScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            foundData: [],
            searchText: '', 
            modalVisible: false,
        };
    }

    componentDidMount() {


        this.focusListener = this.props.navigation.addListener('focus', () => {

            console.log('focus')
            console.log(this.props)

            this.props.resetContact(true)

            //console.log(this.props.foundContact)

            this.setState({ foundData: [], searchText: '' },
                () => {

                    setTimeout(() => { this._input._root.focus() }, 100)
                }
            )

            
        });

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

    search(searchText) {


        //console.log(data)
        //searchText = "p"
        //foundData = []

        //let found = false

        //data.forEach((c) => {
        //    //console.log(c)
        //    let name = c.firstName + " " + c.lastName
        //    name = name.toLowerCase()
        //    //console.log(name)
        //    //console.log(c)

        //    if (name.includes(searchText.toLowerCase())) {
        //        //console.log('found', c)
        //        foundData.push(c)
        //        found = true
        //    }


        //})

        //if (found == true && foundData.length > 0) {
        //     return this.setState({ foundData: foundData })
        //}

        if (searchText == '') {
            return Alert.alert('No matching name found, please search using name only')
        }

        this.props.searchContact(searchText)
        this.setState({})

        if (this.props.contacts.foundList.length < 1) {
            return Alert.alert('No matching name found, please search using name only')

        }

    }

    handleNavigation(item) {
        //console.log('navigating')
        //console.log(item)

        //console.log(data.indexOf(item))
        let idx = data.indexOf(item)

        this.props.navigation.navigate('ContactDetailScreen', {item: item, index: idx})
    }

    render() {

        const { modalVisible } = this.state
        return (
            <View style={{ height: screenHeight, flex: 1}}>
                <Header style={{ backgroundColor: 'transparent', height: 90, elevation: 0 }}>
                    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                    <Left style={{ flex: 1 }}>
                        <Button style={{ marginTop: 25 }} transparent onPress={() => this.props.navigation.goBack()}>
                            <Text style={{ fontSize: 20, color: '#ff8c00' }}>{"<"} Back </Text>
                        </Button>
                    </Left>
                    <Body style={{ flex: 1, alignItems: 'center' }}>
                        <Title style={{ fontSize: 20, marginTop: 25, fontSize: 22, fontWeight: 'bold', color: 'black' }}>Search</Title>
                    </Body>
                    <Right style={{ flex: 1 }}>
                    </Right>
                </Header>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                    <Item regular style={{ backgroundColor: 'white', borderColor: '#f1f1f1', width: screenWidth * 0.95, borderRadius: 5 }}>
                        <Input ref={ref => { this._input = ref }} placeholder="Search" value={this.state.searchText} onChangeText={(val) => { this.setState({ searchText: val }) }} style={{ fontSize: 12 }} placeholderTextColor="#CCCCCC" onSubmitEditing={() => { this.search(this.state.searchText) }} />
                        <Button
                            onPress={() => { this.search(this.state.searchText) }}
                            style={{ backgroundColor: '#ff8c00', width: 70, height: 40, justifyContent: 'center', marginRight: 5, borderRadius: 10, marginTop: 5 }}><Text style={{ color: 'white', fontSize: 12 }}>Search</Text></Button>
                    </Item>

                </View>

                <FlatList
                    refreshControl={this.refresh()}
                    style={{ flex: 1 }}
                    data={this.props.contacts.foundList}
                    renderItem={({ item, index }) => {
                        return (

                            <View>
                                <TouchableOpacity style={{ height: 60, justifyContent: 'center', }} onPress={() => {
                                    //console.log(item, index)
                                    //this.props.navigation.navigate('ContactDetailScreen', { item, index })

                                    this.handleNavigation(item)
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

    const { foundContact } = state

    return state

};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        searchContact, resetContact
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)

//export default SearchScreen;