import { StyleSheet, Dimensions } from 'react-native';
import colors from './colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
    Container: {
        flex: 1,
        // padding: wp('4%'),
        backgroundColor: colors.colorSecondary,
    },
    splashContainer: {
        flex: 1,
        // padding: wp('4%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.colorPrimary,
    },
    loginContainer: {
        flex: 1,
        padding: wp('10%'),
        backgroundColor: colors.colorPrimary,
        paddingTop: hp('4%')
    },
    drawerBackground: {
        flex: 1,
    },
    drawerContainer: {
        flex: 1,
        backgroundColor: colors.colorPrimary,
        width: (deviceWidth / 4) * 2.5,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16
    },
    faintContainer: {
        flex: 1,
        backgroundColor: colors.colorLightGray,
        alignItems: 'center'
    },
    faintContainer1: {
        backgroundColor: colors.colorLightGray,
        alignItems: 'center'
    },
    modalBackground: {
        flex: 1,
        backgroundColor: colors.colorWhite,
        justifyContent: 'center',
        paddingHorizontal: wp('5%')

    },
    modalBackground1: {
        flex: 1,
        backgroundColor: colors.colorTransparent,
        justifyContent: 'center',
        paddingHorizontal: wp('0.5%')

    },
    midContainer: {
        flex: 1,
        backgroundColor: colors.colorBackground,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inContainer: {
        backgroundColor: colors.colorBackground,
        marginHorizontal: wp('2%'),
    },
    centerContainer: {
        flex: 1,
        backgroundColor: colors.colorBackground,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: wp('34%'),
        height: hp('4.5%'),
        // resizeMode: "center",
    },
    logoHeader: {
        width: wp('34%'),
        height: hp('3%'),
        resizeMode: "contain",
    },
    dashImg: {
        height: hp('30%'),
        width: wp('97%'),
        margin: wp('1.5%'),
        backgroundColor: colors.colorWhite
    },
    recentData: {
        height: hp('22%'),
        width: wp('100%'),
        backgroundColor: colors.colorLightBlueBackground,
    },
    dashData: {
        height: hp('38%'),
        width: wp('97%'),
        margin: wp('1.5%'),
        backgroundColor: colors.colorBackground,
    },
    chatItem: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: colors.colorWhite,
        padding: 4,
        marginHorizontal: 1,
        marginVertical: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 4,
    },
    chatLeftItem: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'flex-end',
        backgroundColor: colors.colorSecondary,
        borderWidth: 1,
        borderColor: colors.colorSecondary,
        borderRadius: 32,
        width: wp('60%'),
        padding: 4,
        margin: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 4,
    },
    chatRightItem: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'flex-start',
        backgroundColor: colors.colorLightGray,
        borderWidth: 1,
        borderColor: colors.colorLightGray,
        borderRadius: 32,
        width: wp('60%'),
        padding: 4,
        margin: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 4,
    },
    adsItem: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: colors.colorWhite,
        padding: 4,
        marginVertical: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 4,
    },
    profilecard: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 12,
        marginHorizontal: 22,
        padding: 6,
        borderRadius: 32,
        backgroundColor: colors.colorWhite,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 6,
    },
    drawercard: {
        flexDirection: 'row',
        marginVertical: 8,
        marginRight: 22,
        padding: 10,
        borderTopRightRadius: 32,
        borderBottomRightRadius: 32,
        backgroundColor: colors.colorSecondary,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    firstHalfView: {
        height: hp('10%'),
        padding: wp('5%')
    },
    headerButtonsView: {
        flexDirection: 'row',
    },
    backBtnView: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // paddingHorizontal: wp('4%'),
        marginTop: hp('1%')
    },
    langView: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // paddingHorizontal: wp('4%'),
        marginTop: hp('1%')
    },
    recentProItem: {
        backgroundColor: colors.colorWhite,
        width: wp('35%'),
        height: hp('12%'),
        borderRadius: 4,
        borderWidth: 0,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginVertical: hp('2%'),
        marginHorizontal: wp('1.5%'),
        paddingHorizontal: wp('1%'),
        paddingVertical: hp('1%'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    thumbnailSmallView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.colorPrimary,
        width: RFValue(16),
        height: RFValue(16),
        borderRadius: RFValue(8),
    },
    fullButton: {
        flexDirection: 'row',
        backgroundColor: colors.colorWhite,
        width: wp('80%'),
        height: hp('7%'),
        borderRadius: 4,
        borderWidth: 0,
        alignSelf: 'center',
        alignItems: 'center',
        marginVertical: hp('5%'),
        paddingHorizontal: wp('2%'),
        paddingVertical: hp('2%'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    halfLeftButton: {
        flexDirection: 'row',
        backgroundColor: colors.colorWhite,
        width: wp('47%'),
        height: hp('8%'),
        borderRadius: 4,
        borderWidth: 0,
        alignSelf: 'center',
        alignItems: 'center',
        marginVertical: hp('1%'),
        // marginRight: wp('1.5%'),
        paddingHorizontal: wp('1%'),
        paddingVertical: hp('0.5%'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    halfRightButton: {
        flexDirection: 'row',
        backgroundColor: colors.colorWhite,
        width: wp('47%'),
        height: hp('8%'),
        borderRadius: 4,
        borderWidth: 0,
        alignSelf: 'center',
        alignItems: 'center',
        marginVertical: hp('1%'),
        // marginLeft: wp('1.5%'),
        paddingHorizontal: wp('1%'),
        paddingVertical: hp('0.5%'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    thumbnailView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.colorPrimary,
        width: RFValue(28),
        height: RFValue(28),
        borderRadius: RFValue(14),
        padding: RFValue(1)
    },
    textBox: {
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: colors.colorGray,
        borderWidth: 0.5,
        borderRadius: 16,
        paddingVertical: hp('1%'),
        paddingHorizontal: wp('5%'),
        marginVertical: hp('1%'),
        marginHorizontal: wp('4%')
    },
    continueButton: {
        width: wp('40%'),
        backgroundColor: colors.colorPrimary,
        borderRadius: 16,
        alignSelf: 'center',
        marginVertical: hp('5%'),
        alignItems: 'center',
        paddingHorizontal: wp('3%'),
        paddingVertical: hp('2%')
    },



    searchInput: {
        padding: 4,
        borderWidth: 0
    },
    customerItem: {
        flexDirection: 'row',
        padding: 4,

    },
    circleButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.colorLightGray,
        width: RFValue(28),
        height: RFValue(28),
        borderRadius: RFValue(14),
        padding: RFValue(1)
    },
    mainBox: {
        marginHorizontal: wp('2%'),
        marginVertical: hp('1%'),
        padding: wp('2%'),
        borderColor: colors.colorLightGray,
        borderWidth: RFValue('0.8'),
        backgroundColor: colors.colorWhite,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.34,
        // shadowRadius: 6.27,
    },
    infoBox: {
        marginHorizontal: wp('2%'),
        marginVertical: hp('1%'),
        padding: wp('2%'),
        borderColor: colors.colorSecondary,
        borderWidth: RFValue('0.6'),
        backgroundColor: colors.colorFaintBackground,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.34,
        // shadowRadius: 6.27,
    },


    //===============>> common <<==================//
    boxTextInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: colors.colorGray,
        backgroundColor: colors.colorWhite,
        borderRadius: 32,
        borderWidth: 0.8,
        height: hp('4%'),
        marginVertical: hp('1%'),
        paddingVertical: '1%',
        paddingHorizontal: '5%',
    },
    peperBoxTextInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: colors.colorBlack,
        borderRadius: 2,
        borderWidth: 0,
        // height: hp('4%'),
        // marginVertical: hp('1%'),
        // paddingVertical: '1%',
        paddingHorizontal: '5%',
    },
    boxTextInputMulti: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: colors.colorBlack,
        borderRadius: 2,
        borderWidth: 0.6,
        height: hp('10%'),
        marginVertical: hp('1%'),
        paddingVertical: '1%',
        paddingHorizontal: '5%',
    },
    smallInputView: {
        textAlignVertical: 'top',
        width: '100%',
        fontSize: RFPercentage(1.4),
        padding: Platform.OS === 'android' ? wp('0.5%') : wp('1%'),
    },
    homeButtonView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: wp('30%'),
        width: wp('30%'),
        backgroundColor: colors.colorWhite,
        padding: 4,
        paddingHorizontal: 8,
        borderColor: '#eee',
        borderWidth: 0,
        borderRadius: 24,
        shadowColor: colors.colorSecondary,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    pickerInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: colors.colorGray,
        borderRadius: 6,
        borderWidth: 0.6,
        height: hp('4%'),
        marginVertical: hp('1%'),
        // paddingVertical: '1%',
        paddingHorizontal: '1%',
    },
    pickerBoxInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: colors.colorGray,
        borderRadius: 6,
        borderWidth: 0.8,
        height: hp('4%'),
        marginVertical: hp('1%'),
        // paddingVertical: '1%',
        paddingHorizontal: '1%',
    },
    primaryButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: hp('1%'),
        paddingHorizontal: wp('2%'),
        borderRadius: 2,
        borderWidth: 1,
        borderColor: colors.colorPrimary,
        backgroundColor: colors.colorPrimary
    },
    secondaryButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: hp('1%'),
        paddingHorizontal: wp('2%'),
        borderRadius: 2,
        borderWidth: 1,
        borderColor: colors.colorSecondary,
        backgroundColor: colors.colorWhite
    },
    accentButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: hp('1%'),
        paddingHorizontal: wp('2%'),
        borderRadius: 2,
        borderWidth: 1,
        borderColor: colors.colorSecondary,
        backgroundColor: colors.colorSecondary
    },
    blackButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.colorBlackButton,
        paddingVertical: hp('1%'),
        margin: hp('2%'),
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    inputIOS: {
        justifyContent: 'center',
        fontSize: 16,
        borderRadius: 4,
        marginVertical: hp('2%'),
        marginHorizontal: wp('25%'), // to ensure the text is never behind the icon
        borderColor: colors.colorGray,
        borderRadius: 6,
        borderWidth: 0.8,
        height: hp('4%'),
        // paddingVertical: '1%',
        paddingHorizontal: '1%',
    },


    //===============>> input <<=================//
    container: {
        height: hp('5%'),
        position: 'relative',
    },
    container1: {
        height: hp('5%'),
        position: 'relative',
    },
    labelContainer: {
        position: 'absolute',
        backgroundColor: '#FFF',
        top: -16,
        left: 16,
        padding: 5,
        zIndex: 50,
    },
    textInput: {
        flex: 1,
        borderWidth: 0.8,
        borderColor: colors.colorGray,
        justifyContent: 'flex-end',
        // height: 44,
        borderRadius: 6,
        paddingVertical: '3%',
        paddingHorizontal: '2%',
        // paddingHorizontal: 25,
        fontSize: RFPercentage(1.6),
        color: colors.colorText,
    },
    textInput1: {
        // flex: 1,
        flexDirection: 'row',
        borderWidth: 0.8,
        borderColor: colors.colorGray,
        // justifyContent: 'flex-end',
        // height: 44,
        borderRadius: 6,
        paddingVertical: '2%',
        paddingHorizontal: '2%',
        // paddingHorizontal: 25,
    },
    textIn: {
        fontSize: RFPercentage(1.6),
        color: colors.colorText,

    },

    openButton: {
        backgroundColor: colors.colorWhite,
        justifyContent: 'center',
        alignItems: 'flex-end',
        alignSelf: 'flex-start',
        width: RFValue(24),
        height: RFValue(24),
        borderRadius: RFValue(12),
        padding: RFValue(1),
        marginLeft: RFValue(-12),
        marginVertical: RFValue(6),
    },
    closeButton: {
        backgroundColor: colors.colorWhite,
        justifyContent: 'center',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        width: RFValue(28),
        height: RFValue(28),
        borderRadius: RFValue(14),
        padding: RFValue(1),
        marginRight: RFValue(-8),
        // marginVertical: RFValue(6),
    },
    subView: {
        flex: 0.5,
        backgroundColor: colors.colorWhite,
        height: hp('100%'),
        width: wp('40%'),
        borderRightWidth: 0.6,
        borderColor: colors.colorLightGray,
    },
    styleVerticalLine: {
        height: 20,
        backgroundColor: colors.colorSecondary,
        width: 1
    },
    styleHorizontalLine: {
        height: 1,
        backgroundColor: colors.colorSecondary,
        width: 180
    },
    boxTextStyle: {
        alignItems: 'center',
        textAlign: 'center',
        padding: 5,
        fontSize: 14
        // fontSize: Constant.FontSize._12
    },
    boxStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('20%'),
        height: 65,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.colorSecondary,
        backgroundColor: colors.colorWhite,
        padding: 6,
        marginBottom: 8,
    },
    poleline1: {
        width: 2,
        height: 32,
        alignSelf: 'center',
        backgroundColor: colors.colorSecondary,
    },
    underline1: {
        width: '50%',
        height: 2,
        backgroundColor: colors.colorSecondary,
    },



    //===============>> text <<==================//
    //regular
    text4: {
        fontSize: RFPercentage(0.4),
        color: colors.colorText,
    },
    text6: {
        fontSize: RFPercentage(0.6),
        color: colors.colorText,
    },
    text8: {
        fontSize: RFPercentage(0.8),
        color: colors.colorText,
    },
    text10: {
        fontSize: RFPercentage(1.0),
        color: colors.colorText,
    },
    text12: {
        fontSize: RFPercentage(1.2),
        color: colors.colorText,
    },
    text14: {
        fontSize: RFPercentage(1.4),
        color: colors.colorText,
    },
    text16: {
        fontSize: RFPercentage(1.6),
        color: colors.colorText,
    },
    text18: {
        fontSize: RFPercentage(1.8),
        color: colors.colorText,
    },
    text20: {
        fontSize: RFPercentage(2.0),
        color: colors.colorText,
    },
    text22: {
        fontSize: RFPercentage(2.2),
        color: colors.colorText,
    },
    text24: {
        fontSize: RFPercentage(2.4),
        color: colors.colorText,
    },
    text26: {
        fontSize: RFPercentage(2.6),
        color: colors.colorText,
    },
    text28: {
        fontSize: RFPercentage(2.8),
        color: colors.colorText,
    },
    text30: {
        fontSize: RFPercentage(3.0),
        color: colors.colorText,
    },

    //white
    textw4: {
        fontSize: RFPercentage(0.4),
        color: colors.colorWhite,
    },
    textw6: {
        fontSize: RFPercentage(0.6),
        color: colors.colorWhite,
    },
    textw8: {
        fontSize: RFPercentage(0.8),
        color: colors.colorWhite,
    },
    textw10: {
        fontSize: RFPercentage(1.0),
        color: colors.colorWhite,
    },
    textw12: {
        fontSize: RFPercentage(1.2),
        color: colors.colorWhite,
    },
    textw14: {
        fontSize: RFPercentage(1.4),
        color: colors.colorWhite,
    },
    textw16: {
        fontSize: RFPercentage(1.6),
        color: colors.colorWhite,
    },
    textw18: {
        fontSize: RFPercentage(1.8),
        color: colors.colorWhite,
    },
    textw20: {
        fontSize: RFPercentage(2.0),
        color: colors.colorWhite,
    },
    textw28: {
        fontSize: RFPercentage(2.8),
        color: colors.colorWhite,
    },

    //bold black
    textbb4: {
        fontSize: RFPercentage(0.4),
        color: colors.colorTextBold,
        fontWeight: 'bold',
    },
    textbb6: {
        fontSize: RFPercentage(0.6),
        color: colors.colorTextBold,
        fontWeight: 'bold',
    },
    textbb8: {
        fontSize: RFPercentage(0.8),
        color: colors.colorTextBold,
        fontWeight: 'bold',
    },
    textbb10: {
        fontSize: RFPercentage(1.0),
        color: colors.colorTextBold,
        fontWeight: 'bold',
    },
    textbb12: {
        fontSize: RFPercentage(1.2),
        color: colors.colorTextBold,
        fontWeight: 'bold',
    },
    textbb14: {
        fontSize: RFPercentage(1.4),
        color: colors.colorTextBold,
        fontWeight: 'bold',
    },
    textbb16: {
        fontSize: RFPercentage(1.6),
        color: colors.colorTextBold,
        fontWeight: 'bold',
    },
    textbb18: {
        fontSize: RFPercentage(1.8),
        color: colors.colorTextBold,
        fontWeight: 'bold',
    },
    textbb20: {
        fontSize: RFPercentage(2.0),
        color: colors.colorTextBold,
        fontWeight: 'bold',
    },
    textbb22: {
        fontSize: RFPercentage(2.2),
        color: colors.colorTextBold,
        fontWeight: 'bold',
    },
    textbb24: {
        fontSize: RFPercentage(2.4),
        color: colors.colorTextBold,
        fontWeight: 'bold',
    },
    textbb26: {
        fontSize: RFPercentage(2.6),
        color: colors.colorTextBold,
        fontWeight: 'bold',
    },

    //bold white
    textbw4: {
        fontSize: RFPercentage(0.4),
        color: colors.colorWhite,
        fontWeight: 'bold',
    },
    textbw6: {
        fontSize: RFPercentage(0.6),
        color: colors.colorWhite,
        fontWeight: 'bold',
    },
    textbw8: {
        fontSize: RFPercentage(0.8),
        color: colors.colorWhite,
        fontWeight: 'bold',
    },
    textbw10: {
        fontSize: RFPercentage(1.0),
        color: colors.colorWhite,
        fontWeight: 'bold',
    },
    textbw12: {
        fontSize: RFPercentage(1.2),
        color: colors.colorWhite,
        fontWeight: 'bold',
    },
    textbw14: {
        fontSize: RFPercentage(1.4),
        color: colors.colorWhite,
        fontWeight: 'bold',
    },
    textbw16: {
        fontSize: RFPercentage(1.6),
        color: colors.colorWhite,
        fontWeight: 'bold',
    },
    textbw18: {
        fontSize: RFPercentage(1.8),
        color: colors.colorWhite,
        fontWeight: 'bold',
    },
    textbw20: {
        fontSize: RFPercentage(2.0),
        color: colors.colorWhite,
        fontWeight: 'bold',
    },
    textbw22: {
        fontSize: RFPercentage(2.2),
        color: colors.colorWhite,
        fontWeight: 'bold',
    },
    textbw24: {
        fontSize: RFPercentage(2.4),
        color: colors.colorWhite,
        fontWeight: 'bold',
    },
    textbw26: {
        fontSize: RFPercentage(2.6),
        color: colors.colorWhite,
        fontWeight: 'bold',
    },
    textbw28: {
        fontSize: RFPercentage(2.8),
        color: colors.colorWhite,
        fontWeight: 'bold',
    },
    textbw30: {
        fontSize: RFPercentage(3.0),
        color: colors.colorWhite,
        fontWeight: 'bold',
    },



    //===============>> underline <<==================//

    divider: {
        height: 8,
        backgroundColor: colors.colorSilver,
    },
    poleline: {
        width: 0.6,
        backgroundColor: colors.colorUnderline,
    },
    underline: {
        height: 0.7,
        backgroundColor: colors.colorUnderline,
    },
    underlineDotted: {
        borderStyle: 'dotted',
        borderWidth: 0.3,
        borderRadius: 1,
        backgroundColor: colors.colorLightGray,
    },
    underlineFaint: {
        height: 0.2,
        backgroundColor: colors.colorUnderline,
    },
    underlineDark: {
        height: 0.7,
        backgroundColor: colors.colorUnderline,
    },
    underlineAccDark: {
        height: 0.7,
        backgroundColor: colors.colorAccentDark,
    },
    underlineAcc: {
        height: 0.7,
        backgroundColor: colors.colorAccentDark,
        marginHorizontal: 50,
        marginTop: 10
    },


});