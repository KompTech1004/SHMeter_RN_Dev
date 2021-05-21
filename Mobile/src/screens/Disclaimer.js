import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, Text, View } from 'react-native';
import styleGuide, {
  STYLE_BTN,
  ButtonCustomFeedback,
  STYLE_BTN_PRESS,
  COLOR_BLACK,
  SMALL_IPHONE
} from '../constants/style';
import { SafeAreaView, ScrollView } from 'react-navigation';
import logo from '../resources/logo.png';
import { screenName as screenNameStartPage } from './StartPage';
import { blockedDoubleCall, openURL } from '../common';

export const screenName = 'Disclaimer';

class Disclaimer extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  blockedButton = blockedDoubleCall();

  onPressBtn = () => {
    if (this.blockedButton()) return;

    this.props.navigation.push(screenNameStartPage);
  };

  render() {
    return (
      <SafeAreaView style={styles.container} forceInset={{ bottom: 'always', top: 'always' }}>
        <ScrollView style={{ flex: 1, width: '100%' }}>
          <View style={styles.content}>
            <Image
              resizeMode="contain"
              style={styles.logo}
              source={logo}
            />
            <Text style={styles.h3}>
              FREYJA SOLUTIONS, LLC BETA TESTER AGREEMENT
            </Text>
            <Text style={styles.textRegular}>
              BY ACCESSING THIS APP, YOU AGREE TO BE BOUND BY THE TERMS OF (I) THIS BETA TESTER
              AGREEMENT; AND (II)&nbsp;
              <Text onPress={() => openURL('https://www.freyjasolutions.net/privacy-policy')} style={styles.textLink}>
                FREYJA SOLUTIONS, LLC PRIVACY POLICY.
              </Text>
              {'\n'}{'\n'}
              This Beta Tester Agreement (the “Agreement”) is entered into between You (“You”) and Freyja Solutions,
              LLC (“Freyja”).
            </Text>
            <Text style={styles.textBold}>
              LICENSE GRANT
            </Text>
            <Text style={styles.textRegular}>
              Subject to your adherence to the terms and conditions of this Agreement, Freyja hereby grants You, for
              the Beta Test Period identified below, a non-exclusive, non-transferable, revocable license to download
              and install the App, and to use the App in object-code format solely for the purpose of Your internal
              evaluation of the Freyja App (the “App”), and not for general commercial use. You agree that You will not
              use the App in a production environment or for processing live or production data.
            </Text>
            <Text style={styles.textBold}>
              TERM AND TERMINATION
            </Text>
            <Text style={styles.textRegular}>
              Either Party may terminate this Agreement at any time by written notice to the other Party. If not
              terminated earlier, the licenses granted hereunder terminate on expiration of the Beta Test Period. The
              Beta Test Period shall begin on the date You agree to the terms and conditions of this Agreement, and
              shall end upon the earlier of (a) the initial commercial release by Freyja of a generally available
              version of the App, or (b) Your receipt from Freyja notifying you of the termination of the Beta
              Test Period. Within three days after termination, You agree to delete the app or replace it with a
              commercial version.
            </Text>
            <Text style={styles.textBold}>
              PROPRIETARY RIGHTS, CONFIDENTIALITY, RESTRICTIONS
            </Text>
            <Text style={styles.textRegular}>
              You acknowledge that the App contains confidential information and trade secrets of Freyja. The App is
              copyrighted and is protected by United States copyright laws and international treaty provisions. You
              agree not to: copy (except as strictly necessary to use the Software in accordance with the terms of this
              Agreement), distribute, sell, sublicense or otherwise transfer or make available the Software or any
              portion thereof to any third party; remove from view any copyright legend, trademark, or confidentiality
              notice, even from copies you make, appearing on the Software or Software output; modify, adapt,
              translate, reverse engineer, decompile or derive the source code for the Software, or authorize a third
              party to do any of the foregoing. You agree not to use the Software or any documentation provided
              therewith for any purpose other than Your internal evaluation and the provision of feedback to Freyja, and
              not to disclose to any third party, the App, its features, Feedback (as defined in this Agreement),
              comments or analysis pertaining to the App, related technical information identified as confidential or
              the results of any performance or functional evaluation or test of the App
              (the “Confidential Information”).
              You agree to use no less than all reasonable efforts to protect the Confidential Information from
              unauthorized Commented [SDS1]: This should be a hypertext link use or disclosure.
              You agree that You may only disclose Confidential Information to those of Your
              employees who have a bona fide need to know such information for Your evaluation of the Software and
              who have first executed a written agreement that contains use and nondisclosure restrictions at least as
              protective as those set forth herein. You will immediately report any violation of this provision to
              Freyja and You shall employ all reasonable means to mitigate any damages or losses that Freyja may incur
              as a result of any such violation. Your rights in the App will be limited to those expressly granted in
              this Agreement.
              Freyja reserves all rights in and to the App that are not expressly granted to You hereunder.
            </Text>
            <Text style={styles.textBold}>
              ACKNOWLEDGMENT OF BETA SOFTWARE
            </Text>
            <Text style={styles.textRegular}>
              You acknowledge and agree that: (a) the App is not an official product and has not been commercially
              released for sale by Freyja; (b) the App may not operate properly, be in final form or fully functional;
              (c) the App may contain errors, design flaws or other problems; (d) the information obtained using the
              Software may not be accurate and may not accurately correspond to information extracted from any
              database or other source; (e) use of the App may result in unexpected results, loss of data or
              communications, project delays or other unpredictable damage or loss; (f) Freyja is under no obligation to
              release a commercial version of the App; and (g) Freyja has the right unilaterally to abandon development
              of the App at any time and without any obligation or liability to You. You acknowledge and agree that You
              cannot and should not rely on the App for any reason. You are solely responsible for maintaining and
              protecting all data and information that is retrieved, extracted, transformed, loaded, stored or otherwise
              processed by the App. You are responsible for all costs and expenses required to backup and restore any
              data and information that is lost or corrupted as a result of Your use of the App.
            </Text>
            <Text style={styles.textBold}>
              FEEDBACK AND BETA TESTER DUTIES
            </Text>
            <Text style={styles.textRegular}>
              You agree to provide feedback to Freyja pertaining to the App. In particular, You agree to report any
              flaws, errors, bugs, conflicts, or any other problems or issues you come across while using the App. You
              understand and agree that promptly and accurately providing feedback is the purpose of the beta test,
              and you agree to use best efforts to provide frequent reports on both positive and negative aspects of the
              App, including any suggested improvements, modifications, and other changes, arising from or in
              connection with your use of the App. You agree that all feedback you provide to Freyja will be the sole
              and exclusive property of Freyja, and You hereby irrevocably transfer and assign to Freyja and agree to
              irrevocably assign and transfer to Freyja all of Your right, title, and interest in and to all feedback,
              including all intellectual property rights therein (collectively, “Intellectual Property Rights”).
              You agree that You will not be granted any rights or licenses in the App by virtue of your use of the App,
              or by virtue of the terms of this Agreement, or by your performance under this Agreement, or by providing
              feedback about the App, even if Freyja incorporates Your feedback into the App.
            </Text>
            <Text style={styles.textBold}>
              REPRESENTATIONS AND WARRANTIES
            </Text>
            <Text style={styles.textRegular}>
              EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, THE APP IS PROVIDED “AS IS”, WITH
              ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. FREYJA HEREBY
              DISCLAIMS ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING ANY WARRANTY OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NONINFRINGEMENT, AND ANY
              WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE IN TRADE.
            </Text>
            <Text style={styles.textBold}>
              LIMITATION OF LIABILITY
            </Text>
            <Text style={styles.textRegular}>
              YOU ACKNOWLEDGE THAT THE APP IS EXPERIMENTAL AND THAT YOU ARE NOT RECEIVING A
              FINAL COMMERCIAL VERSION, AND THAT FREYJA HAS NO OBLIGATION TO CONTINUE TO
              DEVELOP THE APP, OR TO SUPPORT, REPAIR, OR OFFER THE APP FOR SALE. EXCEPT AS
              OTHERWISE REQUIRED BY LAW, IN NO EVENT SHALL FREYJA, ITS OFFICERS, DIRECTORS, AND
              EMPLOYEES, BE LIABLE FOR ANY DAMAGES WHATSOVER, INCLUDING DIRECT DAMAGES,
              INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE OR CONSEQUENTIAL DAMAGES, INCLUDING
              DAMAGES FOR LOSS OF PROFITS, BUSINESS, REVENUE, DATA OR DATA USE, EVEN IF
              ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THESE LIMITATIONS WILL APPLY
              NOTWITHSTANDING THE FAILURE OF THE ESSENTIAL PURPOSE OF ANY REMEDY, WHETHER
              IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
              OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THE APP, RELATED
              DOCUMENTATION, PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR INFORMATION
              AVAILABLE FROM THE SERVICES. The limitations of liability set forth in this Agreement reflect the
              allocation of risk negotiated and agreed to by the Parties. The Parties would not enter into this
              Agreement without these limitations on its liability. These limitations will apply notwithstanding
              any failure of essential purpose of any limited remedy.
            </Text>
            <Text style={styles.textBold}>
              GENERAL TERMS
            </Text>
            <Text style={styles.textRegular}>
              You may not assign or otherwise transfer, by operation of law or otherwise, any of Your rights under this
              Agreement without Freyja’s prior written consent, and any attempted assignment without such consent
              will be null and void ab initio. This Agreement constitutes the entire agreement between the You and
              Freyja regarding the App, and supersedes any and all prior agreements, communications and
              understandings with respect to the App. The terms of this Agreement shall be construed in accordance
              with the laws of the State of California (excluding its body of law controlling conflicts of law).
              The parties expressly agree that the United Nations Convention on Contracts for the International
              Sale of Goods will not apply. Any legal action or proceeding arising under this Agreement will be
              brought exclusively in the federal or state courts located in the Northern District of California
              and the parties hereby irrevocably consent to the personal jurisdiction and venue therein. If any
              provision of this Agreement is held invalid or unenforceable by a court of competent jurisdiction,
              such provision will be construed so as to be enforceable to the maximum extent permissible by law,
              and the remaining provisions of the Agreement will remain in full force and effect. The waiver of
              any breach or default will not constitute a waiver of any other right hereunder or of any subsequent
              breach or default. If any provision of this Agreement shall be found by a court to be void, invalid,
              or unenforceable, the same shall be amended to comply with applicable law or stricken if not so amendable,
              so as not to affect the validity or enforceability of this Agreement.
            </Text>
          </View>
        </ScrollView>
        <ButtonCustomFeedback
          {...STYLE_BTN}
          titleStyle={{ ...STYLE_BTN.titleStyle, letterSpacing: 2 }}
          containerStyle={styles.bottomBtn}
          propsOnPressIn={{
            ...STYLE_BTN_PRESS,
            titleStyle: {
              ...STYLE_BTN_PRESS.titleStyle,
              letterSpacing: 2
            }
          }}
          title="ACCEPT"
          onPress={this.onPressBtn}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  ...styleGuide,
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: '100%',
    paddingBottom: SMALL_IPHONE ? 95 : 105,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    padding: 15,
    paddingBottom: 5,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative'
  },
  logo: {
    width: 128,
    height: 77,
    margin: 10
  },
  h3: {
    ...styleGuide.h3,
    lineHeight: SMALL_IPHONE ? 23 : 28,
    paddingTop: SMALL_IPHONE ? 8 : 10,
    paddingBottom: SMALL_IPHONE ? 16 : 20,
    textAlign: 'center'
  },
  textRegular: {
    ...styleGuide.textRegular,
    color: COLOR_BLACK,
    textAlign: 'left',
    width: '100%'
  },
  textBold: {
    ...styleGuide.textBold,
    textAlign: 'left',
    width: '100%',
    fontSize: SMALL_IPHONE ? 14 : 16,
    lineHeight: SMALL_IPHONE ? 18 : 22,
    paddingTop: SMALL_IPHONE ? 12 : 15,
    paddingBottom: SMALL_IPHONE ? 12 : 15
  }
});

export default Disclaimer;
