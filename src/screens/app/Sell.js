import React, { Component } from 'react';
import {
    View, ScrollView, StatusBar, TouchableOpacity, Dimensions, Image
} from "react-native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Text, Avatar, List } from 'react-native-paper'

import colors from '../../config/colors';
import styles from '../../config/styles';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Helper from '../../helper/helper';
const { height, width } = Dimensions.get('window')

var helper;

class Sell extends Component {
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

    render() {
        return (
            <View style={styles.Container}>
                <StatusBar backgroundColor={colors.colorStatusBar} barStyle="dark-content" />

                <View style={styles.firstHalfView}>
                    <View style={styles.headerButtonsView}>
                        <TouchableOpacity
                            style={styles.backBtnView}
                        // onPress={() => this.setModalVisible(true)}
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
                    paddingTop: 12,
                    padding: wp('4%')
                }}>

                   


                </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sell);