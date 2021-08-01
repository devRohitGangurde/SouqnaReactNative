import React, { Component } from 'react';
import {
    View, ScrollView, StatusBar, TouchableOpacity, Dimensions, Image, Modal, FlatList, ImageBackground
} from "react-native";
import { Button, } from 'react-native-paper'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
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

class Profile extends Component {
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
            <TouchableOpacity>
                <View style={styles.chatItem}>
                    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: colors.colorBackground, padding: 6, }}>
                        <Thumbnail
                            style={{ backgroundColor: colors.colorPrimary, }}
                            source={require('../../../images/ic_launcher.png')}
                        />
                    </View>

                    <View style={{ flex: 5, marginVertical: 0.5, backgroundColor: colors.colorBackground, padding: 10, }}>
                        <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                            <Text style={[styles.textbb16, { color: colors.colorPrimary }]}>User Name</Text>
                        </View>

                        <View style={{ flex: 2, justifyContent: 'space-between', alignItems: 'center', margin: 5 }}>
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
                            onPress={() => this.setModalVisible(true)}
                        >
                            <MaterialCommunityIcons name={'menu'} color={colors.colorPrimary} size={30} />
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
                            <MaterialIcons name={'notifications-none'} color={colors.colorPrimary} size={30} />
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView style={{
                    flex: 1,
                    backgroundColor: colors.colorWhite,
                    borderTopRightRadius: 24,
                    borderTopLeftRadius: 24,
                    // paddingTop: 12,
                    paddingTop: wp('4%'),
                }}>

                    <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'space-between', padding: 4, paddingVertical: 8, marginBottom: 12 }}>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 22, color: colors.colorPrimary }}>   Profile</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 22, color: colors.colorPrimary }}></Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 9.5 }}>

                        <TouchableOpacity
                            style={{ justifyContent: 'center', alignSelf: 'center', height: 90, width: 90, borderRadius: 45, backgroundColor: colors.colorPrimary }}
                            onPress={() => this.RBSheet.open()}
                        >
                            <ImageBackground
                                source={require('../../../images/ic_launcher.png')}
                                resizeMethod={'resize'}
                                style={{ height: 90, width: 90, }} />
                        </TouchableOpacity>

                        <Text style={{ textAlign: 'center', fontSize: 16, color: colors.colorPrimary, marginTop: 16 }}>  User Name</Text>
                        <Text style={{ textAlign: 'center', fontSize: 14, color: colors.colorPrimary }}>  user@gmail.com</Text>
                        <Text style={{ textAlign: 'center', fontSize: 12, color: colors.colorPrimary }}>  user address</Text>



                        <TouchableOpacity
                            style={styles.profilecard}
                        // onPress={() => this.props.navigation.navigate('Wallet')}
                        >
                            <View style={{ flex: 1, flexDirection: 'row', margin: 4, marginHorizontal: 16, justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Octicons name={'primitive-dot'} color={colors.colorPrimary} size={30} />
                                <Text style={[styles.text28, { color: colors.colorPrimary }]}>  My Ads</Text>
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.profilecard}
                            onPress={() => this.props.navigation.navigate('EditProfile')}
                        >
                            <View style={{ flex: 1, flexDirection: 'row', margin: 4, marginHorizontal: 16, justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Octicons name={'primitive-dot'} color={colors.colorPrimary} size={30} />
                                <Text style={[styles.text28, { color: colors.colorPrimary }]}>  Profile Settings</Text>
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.profilecard}
                            onPress={() => this.props.navigation.navigate('TnC')}
                        >
                            <View style={{ flex: 1, flexDirection: 'row', margin: 4, marginHorizontal: 16, justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Octicons name={'primitive-dot'} color={colors.colorPrimary} size={30} />
                                <Text style={[styles.text28, { color: colors.colorPrimary }]}>  Terms & Conditions</Text>
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.profilecard}
                            onPress={() => this.props.navigation.navigate('AboutUs')}
                        >
                            <View style={{ flex: 1, flexDirection: 'row', margin: 4, marginHorizontal: 16, justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Octicons name={'primitive-dot'} color={colors.colorPrimary} size={30} />
                                <Text style={[styles.text28, { color: colors.colorPrimary }]}>  About Us</Text>
                            </View>

                        </TouchableOpacity>




                        <Button
                            labelStyle={{ color: colors.colorPrimary }}
                            style={{ backgroundColor: colors.colorSecondary, alignItems: 'center', marginVertical: 64, width: wp('85%'), height: 40, borderRadius: 32, alignSelf: 'center' }}
                        // onPress={() => this.props.navigation.navigate('Home')}
                        >Logout</Button>

                    </View>

                </ScrollView>


                <Modal
                    animationType="fade" //'slide' //
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { this.setModalVisible(false) }}>
                    <TouchableOpacity
                        style={styles.drawerBackground}
                        activeOpacity={1}
                        onPressOut={() => { this.setModalVisible(false) }}>

                        <View style={styles.drawerContainer}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 135, borderRadius: 67.5, backgroundColor: colors.colorPrimary }}>
                                <View
                                    style={{ height: 90, width: 90, borderRadius: 45, borderWidth: 1, borderColor: colors.colorSecondary, }}>
                                    <Image
                                        source={require('../../../images/ic_launcher.png')}
                                        resizeMode={'stretch'}
                                        style={{ height: 90, width: 90, borderRadius: 45, }}
                                    />
                                </View>
                            </View>

                            <View style={{ flex: 4 }}>

                                <TouchableOpacity
                                    style={styles.drawercard}
                                // onPress={() => this.props.navigation.navigate('Wallet')}
                                >
                                    <View style={{ flex: 9, marginLeft: 6 }}>
                                        <Text style={[styles.text16, { color: colors.colorPrimary }]}>Profile</Text>
                                    </View>

                                </TouchableOpacity>


                                <TouchableOpacity
                                    style={styles.drawercard}
                                // onPress={() => this.props.navigation.navigate('Wallet')}
                                >
                                    <View style={{ flex: 9, marginLeft: 6 }}>
                                        <Text style={[styles.text16, { color: colors.colorPrimary }]}>Category</Text>
                                    </View>

                                </TouchableOpacity>


                                <TouchableOpacity
                                    style={styles.drawercard}
                                // onPress={() => this.props.navigation.navigate('Wallet')}
                                >
                                    <View style={{ flex: 9, marginLeft: 6 }}>
                                        <Text style={[styles.text16, { color: colors.colorPrimary }]}>Company</Text>
                                    </View>

                                </TouchableOpacity>


                                <TouchableOpacity
                                    style={styles.drawercard}
                                // onPress={() => this.props.navigation.navigate('Wallet')}
                                >
                                    <View style={{ flex: 9, marginLeft: 6 }}>
                                        <Text style={[styles.text16, { color: colors.colorPrimary }]}>Language</Text>
                                    </View>

                                </TouchableOpacity>


                                <TouchableOpacity
                                    style={styles.drawercard}
                                // onPress={() => this.props.navigation.navigate('Wallet')}
                                >
                                    <View style={{ flex: 9, marginLeft: 6 }}>
                                        <Text style={[styles.text16, { color: colors.colorPrimary }]}>Customer Support</Text>
                                    </View>

                                </TouchableOpacity>

                            </View>



                            <View style={{ flex: 0.15 }}>
                                <View style={[styles.logoutcard, { justifyContent: 'center' }]}>
                                    <Text style={[styles.textw14, { textAlign: 'center' }]}>Copyright by Souqna Inc. </Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                <View style={{ justifyContent: 'center', height: 28, width: 90, borderRadius: 8, backgroundColor: colors.colorSecondary }}>
                                    <Text style={[styles.textw14, { textAlign: 'center' }]}>Log Out </Text>
                                </View>

                                <View
                                    style={{ height: 38, width: 38, borderRadius: 19, borderWidth: 1, borderColor: colors.colorSecondary, }}>
                                    <Image
                                        source={require('../../../images/ic_launcher.png')}
                                        resizeMode={'stretch'}
                                        style={{ height: 38, width: 38, borderRadius: 19, }}
                                    />
                                </View>
                            </View>


                        </View>
                    </TouchableOpacity>
                </Modal>

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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);