import React, { Component } from 'react';
import {
    View, ScrollView, StatusBar, TouchableOpacity, Dimensions, Image, Modal, FlatList, ImageBackground
} from "react-native";
import { Button, } from 'react-native-paper'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Text, Avatar, List } from 'react-native-paper'
import { Thumbnail } from 'native-base';
import * as ImagePicker from 'react-native-image-picker';
import RBSheet from "react-native-raw-bottom-sheet";
import CustomTextInput from '../../components/CustomTextInput';
import CustomTextView from '../../components/CustomeTextView';

import colors from '../../config/colors';
import styles from '../../config/styles';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Helper from '../../helper/helper';
const { height, width } = Dimensions.get('window')

var helper;


const options = {
    title: 'Select a Image',
    takePhotoButtonTitle: "Take a photo",
    chooseFromLiabraryButtonTitle: "Choose from gallery",
    quality: 1,
    maxWidth: 1000,
    maxHeight: 1000,
};


var createFormData = async (photo) => {
    var data = new FormData();
    await data.append("profile_pic", {
        name: photo.filename,
        type: photo.mime,
        uri: photo.path,
        // uri: (Platform.OS == 'android' ? '' : 'file://') + photo.path,
        // uri: Platform.OS == "android" ? photo.path.replace('file://', '') : photo.path,
    });
    return data;
};

class ChatScreen extends Component {
    constructor(props) {
        super(props);
        helper = new Helper();
        this.state = ({
            modalVisible: false,

            profile_url: '',
            imagePath1: '',
            imageData1: '',
            upImgPath1: '',
            imgId1: '',

            list: [{
                "user_name": "User Name",
                "message": "Hello, This is sample text message to show preview.",
                "img_url": "",
                "side": "left"
            }, {
                "user_name": "User Name",
                "message": "Hello, This is sample text message to show preview.",
                "img_url": "",
                "side": "right"
            }, {
                "user_name": "User Name",
                "message": "Hello, This is sample text message to show preview.",
                "img_url": "",
                "side": "left"
            }, {
                "user_name": "User Name",
                "message": "Hello, This is sample text message to show preview.",
                "img_url": "",
                "side": "right"
            }, {
                "user_name": "User Name",
                "message": "Hello, This is sample text message to show preview.",
                "img_url": "",
                "side": "right"
            }, {
                "user_name": "User Name",
                "message": "Hello, This is sample text message to show preview.",
                "img_url": "",
                "side": "left"
            }, {
                "user_name": "User Name",
                "message": "Hello, This is sample text message to show preview.",
                "img_url": "",
                "side": "left"
            }, {
                "user_name": "User Name",
                "message": "Hello, This is sample text message to show preview.",
                "img_url": "",
                "side": "right"
            }, {
                "user_name": "User Name",
                "message": "Hello, This is sample text message to show preview.",
                "img_url": "",
                "side": "left"
            }, {
                "user_name": "User Name",
                "message": "Hello, This is sample text message to show preview.",
                "img_url": "",
                "side": "right"
            }, {
                "user_name": "User Name",
                "message": "Hello, This is sample text message to show preview.",
                "img_url": "",
                "side": "right"
            }, {
                "user_name": "User Name",
                "message": "Hello, This is sample text message to show preview.",
                "img_url": "",
                "side": "left"
            }, {
                "user_name": "User Name",
                "message": "Hello, This is sample text message to show preview.",
                "img_url": "",
                "side": "left"
            }, {
                "user_name": "User Name",
                "message": "Hello, This is sample text message to show preview.",
                "img_url": "",
                "side": "right"
            }, {
                "user_name": "User Name",
                "message": "Hello, This is sample text message to show preview.",
                "img_url": "",
                "side": "left"
            }, {
                "user_name": "User Name",
                "message": "Hello, This is sample text message to show preview.",
                "img_url": "",
                "side": "right"
            }, {
                "user_name": "User Name",
                "message": "Hello, This is sample text message to show preview.",
                "img_url": "",
                "side": "right"
            }, {
                "user_name": "User Name",
                "message": "Hello, This is sample text message to show preview.",
                "img_url": "",
                "side": "left"
            },]
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

    _openCamera = async () => {
        await ImagePicker.launchCamera(options, (response) => {
            if (response.didCancel) {
                helper.errorToast('User cancelled image picker');
            } else if (response.error) {
                helper.errorToast(response.error);
            } else {
                console.log('image response ', response);
                this.setState({
                    imageData1: {
                        path: response.assets[0].uri,
                        mime: response.assets[0].type,
                        filename: response.assets[0].fileName,
                    },
                }, () => {
                    // this.initUploadProfilePicture()
                })
                this.RBSheet.close();
            }
        });
    }

    _openLiabrary = async () => {
        await ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                helper.errorToast('User cancelled image picker');
            } else if (response.error) {
                helper.errorToast(response.error);
            } else {
                console.log('image response ', response);
                this.setState({
                    imageData1: {
                        path: response.assets[0].uri,
                        mime: response.assets[0].type,
                        filename: response.assets[0].fileName,
                    },
                }, () => {
                    // this.initUploadProfilePicture()
                })
                this.RBSheet.close();
            }
        });
    }



    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    renderTeamItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ChatScreen')}>
                <View style={item.side == 'left' ? styles.chatLeftItem : styles.chatRightItem}>
                    <View style={{ flex: 5, marginVertical: 0.5, padding: 10, }}>
                        <Text numberOfLines={2} style={[styles.text12, { color: colors.colorPrimary }]}>{item.message}</Text>
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
                    paddingTop: 12,
                    padding: wp('4%')
                }}>

                    <View style={{ flex: 0.75, flexDirection: 'row', justifyContent: 'space-between', padding: 4, marginBottom: 8 }}>
                        <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                            <Thumbnail
                                small
                                source={require('../../../images/ic_launcher.png')}
                                style={{ backgroundColor: colors.colorPrimary }}
                            />
                        </View>

                        <TouchableOpacity style={{ flex: 8, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 8 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16, color: colors.colorPrimary }}>User Name</Text>
                            <Text style={{ fontSize: 12, color: colors.colorPrimary }}>Online</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.underline}></View>

                    <View
                        style={{ flex: 9.5 }}>
                        <FlatList
                            data={this.state.list.reverse()}
                            extraData={this.state.list}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={this.renderTeamItem}
                            ListHeaderComponent={() => (this.state.list == '' ?
                                <View style={styles.Container}>
                                    <Text style={styles.covertext}>You haven't any message!</Text>
                                </View>
                                : null)}>
                        </FlatList>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: wp('1%'), }}>
                        <CustomTextInput
                            text={this.state.user_name}
                            label={'Type a message'}
                            textStyle={[styles.textbw26, { color: colors.colorAccent }]}
                            numberOfLines={1}
                        />
                        <TouchableOpacity>
                            <MaterialCommunityIcons name={'send'} size={30} />
                        </TouchableOpacity>
                    </View>

                </View>


                <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    height={hp('35%')}
                    openDuration={250}
                    customStyles={{
                        container: {
                            backgroundColor: colors.colorBlack,
                            justifyContent: "center",
                        }
                    }}
                >
                    <View>
                        <TouchableOpacity style={styles.blackButton}
                            onPress={() => { this._openCamera(); }}>
                            <Text style={styles.textw16}>Take photo </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.blackButton}
                            onPress={() => { this._openLiabrary(); }}>
                            <Text style={styles.textw16}>Choose from library </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.blackButton}
                            onPress={() => this.RBSheet.close()}>
                            <Text style={styles.textw16}>Close </Text>
                        </TouchableOpacity>
                    </View>
                </RBSheet>

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

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);