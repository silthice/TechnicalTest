import React from 'react';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

import { StyleSheet, View, Text, ImageBackground, Dimensions, StatusBar, Image, AppRegistry, ScrollView, TouchableOpacity, FlatList, Alert, TextInput } from 'react-native'
import { Container, Header, Title, Button, Icon, Left, Right, Body, Item, Input, Card, CardItem, Footer, FooterTab, Content, Thumbnail, Tab, Tabs, ScrollableTab, Form, Picker, Separator, List, ListItem } from "native-base";
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { addContact } from '../actions/ContactActions';

import data from "./data";

class NewContactScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            userIdx: '',
        };
    }

    componentDidMount() {

        //console.log(this.props.route.params)

        //console.log(this.props.addContact)

        //this.setState({
        //    firstName: this.props.route.params.item.firstName,
        //    lastName: this.props.route.params.item.lastName,
        //    email: this.props.route.params.item.email,
        //    phone: this.props.route.params.item.phone,
        //    userIdx: this.props.route.params.index,
        //})

    }

    addNewContact() {

        console.log(data[this.state.userIdx])

        if (this.state.firstName == '' || this.state.lastName == '') {
            return Alert.alert('First or Last name cannot be empty')
        }

        let newContact = { firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, phone: this.state.phone };

        console.log('new contact', newContact)

        //data.push(newContact)
        this.props.addContact(newContact)

        Alert.alert(
            "Success",
            "Contact added successfully.",
            [
                { text: "Ok", onPress: () => this.props.navigation.goBack() },
            ],
            { cancelable: false }
        );

        //data[this.state.userIdx].firstName = this.state.firstName
        //data[this.state.userIdx].lastName = this.state.lastName
        //data[this.state.userIdx].email = this.state.email
        //data[this.state.userIdx].phone = this.state.phone



    }

    render() {

        const { modalVisible } = this.state
        return (
            <View>
                <Header style={{ backgroundColor: 'transparent', height: 85, elevation: 0 }}>
                    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                    <Left style={{ flex: 1 }}>
                        <Button style={{ marginTop: 25 }} transparent onPress={() => this.props.navigation.goBack()}>
                            <Text style={{ color: '#ff8c00' }}>Cancel</Text>
                        </Button>
                    </Left>
                    <Body style={{ flex: 1, alignItems: 'center' }}>
                    </Body>
                    <Right style={{ flex: 1 }}>

                        <TouchableOpacity style={{ marginTop: 25 }} onPress={() => { this.addNewContact() }}>
                            <Text style={{ color: '#ff8c00' }}>Save</Text>
                        </TouchableOpacity>
                    </Right>
                </Header>

                <View>
                    <View style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 200, width: 200, borderRadius: 200, backgroundColor: '#ff8c00' }}>
                        </View>
                    </View>

                    <View style={{ paddingHorizontal: 15 }}>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Main Information</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: screenWidth * 0.25 }}>
                                <Text style={{ color: 'black' }}>First Name</Text>
                            </View>

                            <View style={{}}></View>
                            <View style={{ marginLeft: 20 }}>
                                <TextInput
                                    ref={ref => { this._inputFirstName = ref }}
                                    style={{ backgroundColor: 'white', height: 35, width: screenWidth * 0.7, borderRadius: 5 }}
                                    //defaultValue={this.props.route.params.item.firstName}
                                    placeholder="First Name"
                                    editable
                                    maxLength={40}
                                    //onChangeText={(val)=>{ this.handleUserIdInput(val) }}
                                    onChangeText={(val) => { this.setState({ firstName: val }) }}
                                    onSubmitEditing={() => {
                                        console.log('trigger this')
                                        this._inputLastName.focus()
                                    }}
                                    blurOnSubmit={false}
                                />
                            </View>
                        </View>

                        <View style={{ marginVertical: 7.5, justifyContent: 'center', alignItems: 'center' }}>

                            <View style={{ borderWidth: 0.2, borderColor: 'grey', width: '100%' }}></View>

                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: screenWidth * 0.25 }}>
                                <Text style={{ color: 'black' }}>Last Name</Text>
                            </View>

                            <View style={{}}></View>
                            <View style={{ marginLeft: 20 }}>
                                <TextInput
                                    //ref={ref => { this._inputLastName = ref }}
                                    ref={(input) => { this._inputLastName = input; }}
                                    style={{ backgroundColor: 'white', height: 35, width: screenWidth * 0.7, borderRadius: 5 }}
                                    //defaultValue={this.props.route.params.item.lastName}
                                    placeholder="Last Name"
                                    editable
                                    maxLength={40}
                                    //onChangeText={(val)=>{ this.handleUserIdInput(val) }}
                                    onChangeText={(val) => { this.setState({ lastName: val }) }}
                                    onSubmitEditing={() => {
                                        console.log('trigger this')
                                        this._inputEmail.focus()
                                    }}
                                    blurOnSubmit={false}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingHorizontal: 15 }}>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Sub Information</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: screenWidth * 0.25 }}>
                                <Text style={{ color: 'black' }}>Email</Text>
                            </View>

                            <View style={{}}></View>
                            <View style={{ marginLeft: 20 }}>
                                <TextInput
                                    //ref={ref => { this._inputEmail = ref }}
                                    ref={(input) => { this._inputEmail = input; }}
                                    style={{ backgroundColor: 'white', height: 35, width: screenWidth * 0.7, borderRadius: 5 }}
                                    //defaultValue={this.props.route.params.item.email}
                                    placeholder="Email"
                                    editable
                                    maxLength={40}
                                    //onChangeText={(val)=>{ this.handleUserIdInput(val) }}
                                    onChangeText={(val) => { this.setState({ email: val }) }}
                                    onSubmitEditing={() => {
                                        console.log('trigger this')
                                        this._inputPhone.focus()
                                    }}
                                    blurOnSubmit={false}
                                />
                            </View>
                        </View>

                        <View style={{ marginVertical: 7.5, justifyContent: 'center', alignItems: 'center' }}>

                            <View style={{ borderWidth: 0.2, borderColor: 'grey', width: '100%' }}></View>

                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: screenWidth * 0.25 }}>
                                <Text style={{ color: 'black' }}>Phone</Text>
                            </View>

                            <View style={{}}></View>
                            <View style={{ marginLeft: 20 }}>
                                <TextInput
                                    //ref={ref => { this._inputPhone = ref }}
                                    ref={(input) => { this._inputPhone = input; }}
                                    style={{ backgroundColor: 'white', height: 35, width: screenWidth * 0.7, borderRadius: 5 }}
                                    //defaultValue={this.props.route.params.item.phone}
                                    placeholder="Phone"
                                    editable
                                    maxLength={40}
                                    //onChangeText={(val)=>{ this.handleUserIdInput(val) }}
                                    onChangeText={(val) => { this.setState({ phone: val }) }}
                                />
                            </View>
                        </View>
                    </View>


                </View>


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

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addContact,
    }, dispatch)
);

export default connect(null, mapDispatchToProps)(NewContactScreen)

//export default NewContactScreen;