import React, { Component } from 'react';
import {
    View, ScrollView, StatusBar, TouchableOpacity, Dimensions, Image, Modal
} from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ImageSlider from 'react-native-image-slider';
import { Headline, Text, TextInput, Title, useTheme } from 'react-native-paper'
import Carousel from 'react-native-snap-carousel';

import colors from '../../config/colors';
import config from '../../config/config';
import styles from '../../config/styles';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Helper from '../../helper/helper';
const { height, width } = Dimensions.get('window')

var helper;

class Dashboard extends Component {
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
                            onPress={() => this.props.navigation.navigate('Notification')}
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
                    paddingTop: 12,
                    padding: wp('4%')
                }}>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 12, alignItems: 'center' }}>
                        <Title style={{ flex: 1, fontWeight: 'bold', color: colors.colorPrimary }}>Explore</Title>
                        <Title style={{ flex: 1, color: colors.colorPrimary }}>For You</Title>
                        <View style={{ flex: 1 }} />
                        <Text style={{ marginRight: 8, color: colors.colorPrimary }}>BilasPur</Text>
                        <Ionicons name='md-location' size={24} />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: 8,
                        marginHorizontal: 2,
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        borderRadius: 42,
                        backgroundColor: colors.colorWhite,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.34,
                        shadowRadius: 6.27,
                        elevation: 4,
                    }}>

                        <TextInput
                            underlineColor={colors.colorWhite}
                            placeholder='Search cars, mobiles and more'
                            style={{ flex: 2, height: 32, backgroundColor: colors.colorWhite }} />
                        <MaterialIcons style={{ flex: 0.25 }} name={'search'} color={colors.colorPrimary} size={20} />

                    </View>
                    <View
                        style={{
                            marginVertical: 16,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 16,
                            borderWidth: 0,
                            // shadowColor: colors.colorSecondary,
                            // shadowOffset: {
                            //     width: 0,
                            //     height: 3,
                            // },
                            // shadowOpacity: 0.27,
                            // shadowRadius: 4.65,
                            // elevation: 6,
                        }}>
                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            loop={true}
                            autoplay={true}
                            autoplayInterval={3000}
                            data={this.state.slideImages}
                            renderItem={this._renderCarouselItem}
                            sliderWidth={width}
                            itemWidth={width}
                        />
                    </View>
                    <View style={{ paddingHorizontal: 12 }}>

                        <Text style={{ color: colors.colorPrimary }}>Browse By</Text>
                        <Headline style={{ color: colors.colorPrimary }}>Categories</Headline>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 16 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('products')}
                                style={styles.homeButtonView}>
                                <Ionicons name='md-car-sport-outline' color={colors.colorPrimary} size={36} />
                                <Text style={{ color: colors.colorPrimary, marginTop: 12 }}>Cars</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('products')}
                                style={styles.homeButtonView}>
                                <MaterialCommunityIcons name='table-furniture' color={colors.colorPrimary} size={36} />
                                <Text numberOfLines={1} style={{ color: colors.colorPrimary, marginTop: 12 }}>Furniture</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 16 }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('products')}
                                style={styles.homeButtonView}>
                                <Ionicons name='md-headset' color={colors.colorPrimary} size={36} />
                                <Text numberOfLines={1} style={{ color: colors.colorPrimary, marginTop: 12 }}>Electronics</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('products')}
                                style={styles.homeButtonView}>
                                <Ionicons name='fast-food-outline' color={colors.colorPrimary} size={36} />
                                <Text numberOfLines={1} style={{ color: colors.colorPrimary, marginTop: 12 }}>Restaurant</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 16 }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('products')}
                                style={styles.homeButtonView}>
                                <MaterialCommunityIcons name='face-woman-outline' color={colors.colorPrimary} size={36} />
                                <Text numberOfLines={1} style={{ color: colors.colorPrimary, marginTop: 12 }}>Women's Fashion</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('products')}
                                style={styles.homeButtonView}>
                                <MaterialCommunityIcons name='face-outline' color={colors.colorPrimary} size={36} />
                                <Text numberOfLines={1} style={{ color: colors.colorPrimary, marginTop: 12 }}>Men's Fashion</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 16 }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('products')}
                                style={styles.homeButtonView}>
                                <MaterialCommunityIcons name='face-profile-woman' color={colors.colorPrimary} size={36} />
                                <Text numberOfLines={1} style={{ color: colors.colorPrimary, marginTop: 12 }}>Make Up</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('products')}
                                style={styles.homeButtonView}>
                                <MaterialCommunityIcons name='office-building' color={colors.colorPrimary} size={36} />
                                <Text numberOfLines={1} style={{ color: colors.colorPrimary, marginTop: 12 }}>Compony</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 16 }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('products')}
                                style={styles.homeButtonView}>
                                <MaterialCommunityIcons name='warehouse' color={colors.colorPrimary} size={36} />
                                <Text numberOfLines={1} style={{ color: colors.colorPrimary, marginTop: 12 }}>Property for rent</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('products')}
                                style={styles.homeButtonView}>
                                <MaterialIcons name='house-siding' color={colors.colorPrimary} size={36} />
                                <Text numberOfLines={1} style={{ color: colors.colorPrimary, marginTop: 12 }}>Property for sale</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ height: 32 }} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);