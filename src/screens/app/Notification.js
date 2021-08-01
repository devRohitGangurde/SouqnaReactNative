import React, { Component } from 'react';
import {
    View, ScrollView, StatusBar, TouchableOpacity, Dimensions, Image, Modal, FlatList
} from "react-native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Text, Avatar, List } from 'react-native-paper'
import { Thumbnail } from 'native-base';

import colors from '../../config/colors';
import styles from '../../config/styles';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Helper from '../../helper/helper';
const { height, width } = Dimensions.get('window')

var helper;

class Notification extends Component {
    constructor(props) {
        super(props);
        helper = new Helper();
        this.state = ({
            slideImages: [
                { img: 'https://i.imgur.com/UYiroysl.jpg' },
                { img: 'https://i.imgur.com/UPrs1EWl.jpg' },
                { img: 'https://i.imgur.com/MABUbpDl.jpg' },
                { img: 'https://i.imgur.com/2nCt3Sbl.jpg' }
            ],
            modalVisible: false,
            list: [{
                "user_name": "User Name",
                "message": "sample text message to show preview...",
                "img_url": "",
            },
            {
                "user_name": "User Name",
                "message": "sample text message to show preview...",
                "img_url": "",
            },
            {
                "user_name": "User Name",
                "message": "sample text message to show preview...",
                "img_url": "",
            },
            {
                "user_name": "User Name",
                "message": "sample text message to show preview...",
                "img_url": "",
            },
            {
                "user_name": "User Name",
                "message": "sample text message to show preview...",
                "img_url": "",
            },
            {
                "user_name": "User Name",
                "message": "sample text message to show preview...",
                "img_url": "",
            },
            {
                "user_name": "User Name",
                "message": "sample text message to show preview...",
                "img_url": "",
            },
            {
                "user_name": "User Name",
                "message": "sample text message to show preview...",
                "img_url": "",
            },
            {
                "user_name": "User Name",
                "message": "sample text message to show preview...",
                "img_url": "",
            },
            {
                "user_name": "User Name",
                "message": "sample text message to show preview...",
                "img_url": "",
            },
            {
                "user_name": "User Name",
                "message": "sample text message to show preview...",
                "img_url": "",
            }]
        })
    }


    componentDidMount() {
        const { navigation } = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
            let { actions } = this.props;
            // this.onRefresh()
        });
    }

    componentWillUnmount() {
        this.focusListener.remove();
    }

    onRefresh = async () => {
        var tok = await helper.getToken();
        let { token, actions } = this.props;
        token = tok;
        // console.log(token);
        this.setState({ isFetching: true, }, () => { this.setState({ isFetching: false }) });
    }


    _renderCarouselItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('products')}
                style={{
                    height: 140,
                    width: '100%',
                    borderRadius: 16
                }}>
                <Image
                    source={{ uri: item.img }}
                    style={{ height: 140, width: '100%', borderRadius: 16 }}
                />
            </TouchableOpacity>
        )
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }



    renderTeamItem = ({ item, index }) => {
        return (
            <TouchableOpacity>
                <View style={styles.chatItem}>
                    <View style={{ flex: 1, marginVertical: 0.5, backgroundColor: colors.colorBackground, padding: 10, }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingVertical: 2 }}>
                            <Text style={[styles.textbb16, { color: colors.colorPrimary }]}>Notification Title</Text>
                        </View>

                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-start', paddingVertical: 2 }}>
                            <Text numberOfLines={2} style={[styles.text12, { color: colors.colorPrimary }]}>{"L'Oréal Laboratories have created Ceramide-Cement technology to replicate the hair's natural cement"}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    };

    render() {
        return (
            <View style={styles.Container}>
                <StatusBar backgroundColor={colors.colorStatusBar} barStyle="dark-content" />

                <View style={styles.firstHalfView}>
                    <View style={styles.headerButtonsView}>
                        <TouchableOpacity
                            style={styles.backBtnView}
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <MaterialCommunityIcons name={'arrow-left'} color={colors.colorPrimary} size={30} />
                        </TouchableOpacity>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: 35, width: 35, borderRadius: 17.5, backgroundColor: colors.colorPrimary }}>
                                <Image
                                    source={require('../../../images/ic_launcher.png')}
                                    resizeMode={'stretch'}
                                    style={{ height: 35, width: 35 }}
                                />
                            </View>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24, color: colors.colorPrimary }}>  SOUQNA</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.langView}
                        // onPress={() => this.props.navigation.navigate('Profile')}
                        >
                            {/* <MaterialIcons name={'notifications-none'} color={colors.colorPrimary} size={30} /> */}
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    flex: 1,
                    backgroundColor: colors.colorWhite,
                    borderTopRightRadius: 24,
                    borderTopLeftRadius: 24,
                    // paddingTop: 12,
                    paddingTop: wp('4%')
                }}>

                    <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'space-between', padding: 4, paddingVertical: 8, marginBottom: 12 }}>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 22, color: colors.colorPrimary }}>   Notifications</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', }}>
                            {/* <Text style={{ fontWeight: 'bold', fontSize: 22, color: colors.colorPrimary }}>Favourites</Text> */}
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{ flex: 9.5 }}>
                        <FlatList
                            data={this.state.list}
                            extraData={this.state}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={this.renderTeamItem}
                            ListHeaderComponent={() => (this.state.list == '' ?
                                <View style={styles.Container}>
                                    <Text style={styles.covertext}>You haven't any message!</Text>
                                </View>
                                : null)}>
                        </FlatList>
                    </View>
                </View>

            </View>

        )
    }
}

const mapStateToProps = state => ({
    count: state.count,
});

const ActionCreators = Object.assign(
    {},
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Notification);