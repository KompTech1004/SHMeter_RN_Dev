import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import TopBar from '../components/TopBar';
import { SafeAreaView } from 'react-navigation';
import styleGuide, {
  ButtonCustomFeedback,
  STYLE_BTN,
  STYLE_BTN_PRESS,
  DEFAULT_PADDING,
  WIDTH_WITHOUT_PADDING
} from '../constants/style';
import run from '../resources/run.png';
import Info from '../components/Info';
import { screenName as screenNameEmpowerment } from './Empowerment';
import { blockedDoubleCall, openURL } from '../common';

export const screenName = 'Steps';

const styles = StyleSheet.create({
  ...styleGuide,
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: DEFAULT_PADDING / 2
  },
  btn: {
    width: WIDTH_WITHOUT_PADDING,
    paddingBottom: DEFAULT_PADDING / 2
  }
});

const DATA = {
  1: {
    title: 'The following is a list of possible action steps to help you move forward with confidence:',
    sections: [
      {
        id: 0,
        title: (
          <Text>
            Be assertive
          </Text>
        ),
        content: (
          <Text>
            Quite simply, assertiveness is respectfully educating others about how to treat you.
          </Text>
        )
      },
      {
        id: 1,
        title: (
          <Text>
            Acknowledge your feelings
          </Text>
        ),
        content: (
          <Text>
            Your feelings matter, and they can’t be wrong. Don’t sell yourself short. Don’t deny your
            reality. Instead, take responsibility to identify your feelings.
          </Text>
        )
      },
      {
        id: 2,
        title: (
          <Text>
            Speak up, calmly and in private
          </Text>
        ),
        content: (
          <Text>
            Speak your truth and tell the person that you don&#39;t like the behavior in question.
          </Text>
        )
      },
      {
        id: 3,
        title: (
          <Text>
            Use an &quot;I-statement”; &quot;When you X, I feel X, I want you to X …”
          </Text>
        ),
        content: (
          <Text>
            Example: “When you call me ‘honey’, I feel disrespected. In the future, I want you to use
            my name.” This direct form of communicating garners better results than attacking or
            sarcastic language like, “You wish I were your honey!” People tend to react defensively
            to indirect forms of communication.
          </Text>
        )
      },
      {
        id: 4,
        title: (
          <Text>
            Use the &quot;Broken-Record Technique&quot;
          </Text>
        ),
        content: (
          <Text>
            Acknowledge the person&#39;s response and then repeat your statement. If the offending
            employee responds by saying, “I didn&#39;t mean to hurt your feelings” or “You&#39;re too
            sensitive”, etc., you don’t need to change your original “I” statement. You can say, &quot;I
            understand that “you didn&#39;t mean to hurt my feelings” or “you think I’m too sensitive”,
            however, when you X, I feel X, I want you to X.&quot;
          </Text>
        )
      },
      {
        id: 5,
        title: (
          <Text>
            Alternative to the “I-statement”
          </Text>
        ),
        content: (
          <Text>
            For anyone who’s concerned about using an “I feel X” statement for fear of having their
            feelings negated, another example of assertive communication is, “I know you think that
            calling me ‘Honey’ is endearing but it’s not professional so from now on, I want you to
            call me by my name.” Use the “Broken-Record Technique” if the offending employee
            responds defensively.
          </Text>
        )
      },
      {
        id: 6,
        title: (
          <Text>
            Be specific
          </Text>
        ),
        content: (
          <Text>
            You really do need to tell the person what you want. Keep it in the present. &quot;Please
            always call me by my name”, “Don&#39;t touch me”, “Don&#39;t tell me those jokes.”
          </Text>
        )
      }
    ]
  },
  2: {
    title: 'The following is a list of possible action steps to help you move forward with confidence:',
    sections: [
      {
        id: 0,
        title: (
          <Text>
            Be assertive
          </Text>
        ),
        content: (
          <Text>
            Quite simply, assertiveness is respectfully educating others about how to treat you.
          </Text>
        )
      },
      {
        id: 1,
        title: (
          <Text>
            Acknowledge your feelings
          </Text>
        ),
        content: (
          <Text>
            Your feelings matter, and they can’t be wrong. Don’t sell yourself short. Don’t deny your
            reality. Instead, take responsibility to identify your feelings.
          </Text>
        )
      },
      {
        id: 2,
        title: (
          <Text>
            Speak up, calmly and in private
          </Text>
        ),
        content: (
          <Text>
            Speak your truth and tell the person that you don&#39;t like the behavior in question.
          </Text>
        )
      },
      {
        id: 3,
        title: (
          <Text>
            Use an &quot;I-statement”, &quot;When you X, I feel X, I want you to X.”
          </Text>
        ),
        content: (
          <Text>
            Example: “When you call me ‘honey’, I feel disrespected. In the future, I want you to use
            my name.” This direct form of communicating garners better results than attacking or
            sarcastic language like, “You wish I were your honey!” or, “Okay, sweet thing.” People
            tend to react defensively to indirect forms of communication.
          </Text>
        )
      },
      {
        id: 4,
        title: (
          <Text>
            Use the &quot;Broken-Record Technique&quot;
          </Text>
        ),
        content: (
          <Text>
            Acknowledge the person&#39;s response and then repeat your statement. If the offending
            employee responds by saying, “I didn&#39;t mean to hurt your feelings” or “You&#39;re too
            sensitive”, etc., you don’t need to change your original “I” statement. You can say, &quot;I
            understand that you “didn&#39;t mean to hurt my feelings” or “you think I’m too sensitive”,
            however, when you X, I feel X, I want you to X.&quot;
          </Text>
        )
      },
      {
        id: 5,
        title: (
          <Text>
            Alternative to the “I-statement”
          </Text>
        ),
        content: (
          <Text>
            For anyone who’s concerned about using an “I feel X” statement for fear of having their
            feelings negated, another example of assertive communication is, “I know you think that
            calling me ‘Honey’ is endearing but it’s not professional so from now on, I want you to
            call me by my name.” Use the “Broken-Record Technique” if the offending employee
            responds defensively.
          </Text>
        )
      },
      {
        id: 6,
        title: (
          <Text>
            Be specific
          </Text>
        ),
        content: (
          <Text>
            You really do need to tell the person what you want. Keep it in the present. &quot;Please
            always call me by my name”, “Don&#39;t touch me”, “Don&#39;t tell me those jokes.”
            {'\n'}{'\n'}
            Remember…
            {'\n'}{'\n'}
            Being assertive isn’t a personality trait - it’s an effective communication style. The more
            you use it, the easier it gets and you will see results.
            {'\n'}{'\n'}
            Some people are boundary-testers. They do what they think they can get away with.
            When we call out a particular behavior, they become aware of the boundary and stop
            the unwanted behavior because they no longer feel powerful. In fact, they feel they have
            been put on notice and are aware of others’ awareness of their behavior. Just the
            simple act of saying what you want will likely produce results.
            {'\n'}{'\n'}
            Pat yourself on the back for taking care of yourself by speaking your truth.
          </Text>
        )
      }
    ]
  },
  3: {
    title: 'The following is a list of possible action steps to help you move forward with confidence:',
    sections: [
      {
        id: 0,
        title: (
          <Text>
            Acknowledge the Impact
          </Text>
        ),
        content: (
          <Text>
            Regardless of how hardy and resilient you may be, being the target of harassment at
            any level can take a toll. We recommend that you refer to the Empowerment Tools in
            this app for support and direction.
          </Text>
        )
      },
      {
        id: 1,
        title: (
          <Text>
            Be assertive
          </Text>
        ),
        content: (
          <Text>
            Quite simply, assertiveness is respectfully educating others about how to treat you.
          </Text>
        )
      },
      {
        id: 2,
        title: (
          <Text>
            Acknowledge your feelings
          </Text>
        ),
        content: (
          <Text>
            Your feelings matter, and they can’t be wrong. Don’t sell yourself short. Don’t deny your
            reality. Instead, take responsibility to identify your feelings.
          </Text>
        )
      },
      {
        id: 3,
        title: (
          <Text>
            Speak up, calmly and in private.
          </Text>
        ),
        content: (
          <Text>
            Speak your truth and tell the person that you don&#39;t like the behavior in question.
          </Text>
        )
      },
      {
        id: 4,
        title: (
          <Text>
            Use an &quot;I-statement”, &quot;When you X, I feel X, I want you to X.”
          </Text>
        ),
        content: (
          <Text>
            Example: “When you call me ‘honey’, I feel disrespected. In the future, I want you to use
            my name.” This direct form of communicating garners better results than attacking or
            sarcastic language like, “You wish I were your honey!” or, “Okay, sweet thing.” People
            tend to react defensively to indirect forms of communication.
          </Text>
        )
      },
      {
        id: 5,
        title: (
          <Text>
            Use the &quot;Broken-Record Technique&quot;
          </Text>
        ),
        content: (
          <Text>
            Acknowledge the person&#39;s response and then repeat your statement. If the offending
            employee responds by saying, “I didn&#39;t mean to hurt your feelings” or “You&#39;re too
            sensitive”, etc., you don’t need to change your original “I” statement. You can say, &quot;I
            understand that you “didn&#39;t mean to hurt my feelings” or “you think I’m too sensitive”,
            however, when you X, I feel X, I want you to X.&quot;
          </Text>
        )
      },
      {
        id: 6,
        title: (
          <Text>
            Alternative to the “I-statement”
          </Text>
        ),
        content: (
          <Text>
            For anyone who’s concerned about using an “I feel X” statement for fear of having their
            feelings negated, another example of assertive communication is, “I know you think that
            calling me ‘Honey’ is endearing but it’s not professional so from now on, I want you to
            call me by my name.” Use the “Broken-Record Technique” if the offending employee
            responds defensively.
          </Text>
        )
      },
      {
        id: 7,
        title: (
          <Text>
            Be specific
          </Text>
        ),
        content: (
          <Text>
            You really do need to tell the person what you want. Keep it in the present. &quot;Please
            always call me by my name”, “Don&#39;t touch me”, “Don&#39;t tell me those jokes.”
            {'\n'}{'\n'}
            Remember…
            {'\n'}{'\n'}
            Being assertive isn’t a personality trait - it’s an effective communication style. The more
            you use it, the easier it gets and you will see results.
            {'\n'}{'\n'}
            Some people are boundary-testers. They do what they think they can get away with.
            When we call out a particular behavior, they become aware of the boundary and stop
            the unwanted behavior because they no longer feel powerful. In fact, they feel they have
            been put on notice and are aware of others’ awareness of their behavior. Just the
            simple act of saying what you want will likely produce results.
            {'\n'}{'\n'}
            Pat yourself on the back for taking care of yourself by speaking your truth.
          </Text>
        )
      },
      {
        id: 8,
        title: (
          <Text>
            Write Down What Happened
          </Text>
        ),
        content: (
          <Text>
            As soon as you experience what you think may constitute sexual harassment, start
            writing it down. Write down dates, places, times, and possible witnesses to what
            happened. If possible, ask your co-workers to write down what they saw or heard,
            especially if the same thing is happening to them. Remember that others may (and
            probably will) read this written record at some point. It’s a good idea to keep the record
            at home or in some safe place. Don’t keep the record at work.
          </Text>
        )
      },
      {
        id: 9,
        title: (
          <Text>
            Report the Harassment
          </Text>
        ),
        content: (
          <Text>
            If it’s possible for you to do so, tell your supervisor, your Human Resources department,
            or some other department or person within your organization who has the power to stop
            the harassment. Become familiar with the sexual harassment policy in your employee
            handbook and follow the protocol for reporting an incident.
          </Text>
        )
      }
    ]
  },
  4: {
    title: 'The following is a list of possible action steps to help you move forward with confidence:',
    sections: [
      {
        id: 0,
        title: (
          <Text>
            Acknowledge the Impact
          </Text>
        ),
        content: (
          <Text>
            Regardless of how hardy and resilient you may be, being the target of harassment can
            take a toll. We recommend that you refer to the Empowerment Tools in this app for
            support and direction.
          </Text>
        )
      },
      {
        id: 1,
        title: (
          <Text>
            Confront the Harasser
          </Text>
        ),
        content: (
          <Text>
            Speak up, calmly and in private, and tell the person to stop.
          </Text>
        )
      },
      {
        id: 2,
        title: (
          <Text>
            Be specific
          </Text>
        ),
        content: (
          <Text>
            Keep it in the present. You really do need to tell the person what you want. &quot;Please
            always call me by my name”, “Don&#39;t touch me”, “Don&#39;t tell me those jokes.”
          </Text>
        )
      },
      {
        id: 3,
        title: (
          <Text>
            Use an &quot;I-statement”, &quot;When you X, I feel X, I want you to X.”
          </Text>
        ),
        content: (
          <Text>
            Example: “When you call me ‘honey’, I feel disrespected. In the future, I want you to use
            my name.” This direct form of communicating garners better results than attacking or
            sarcastic language like, “You wish I were your honey!” or, “Okay, sweet thing.” People
            tend to react defensively to indirect forms of communication.
          </Text>
        )
      },
      {
        id: 4,
        title: (
          <Text>
            Use the &quot;Broken-Record Technique&quot;
          </Text>
        ),
        content: (
          <Text>
            Acknowledge the person&#39;s response and then repeat your statement. If the offending
            employee responds by saying, “I didn&#39;t mean to hurt your feelings” or “You&#39;re too
            sensitive”, etc., you don’t need to change your original “I” statement. You can say, &quot;I
            understand that you “didn&#39;t mean to hurt my feelings” or “you think I’m too sensitive”,
            however, when you X, I feel X, I want you to X.&quot;
          </Text>
        )
      },
      {
        id: 5,
        title: (
          <Text>
            Alternative to the “I-statement”
          </Text>
        ),
        content: (
          <Text>
            For anyone who’s concerned about using an “I feel X” statement for fear of having their
            feelings negated, another example of assertive communication is, “I know you think that
            calling me ‘Honey’ is endearing but it’s not professional so from now on, I want you to
            call me by my name.” Use the “Broken-Record Technique” if the offending employee
            responds defensively.
          </Text>
        )
      },
      {
        id: 6,
        title: (
          <Text>
            Write Down What Happened
          </Text>
        ),
        content: (
          <Text>
            As soon as you experience what you think may constitute sexual harassment, start
            writing it down. Write down dates, places, times, and possible witnesses to what
            happened. If possible, ask your co-workers to write down what they saw or heard,
            especially if the same thing is happening to them. Remember that others may (and probably will)
            read this written record at some point. It’s a good idea to keep the record
            at home or in some safe place. Don’t keep the record at work.
          </Text>
        )
      },
      {
        id: 7,
        title: (
          <Text>
            Report the Harassment
          </Text>
        ),
        content: (
          <Text>
            If it’s possible for you to do so, tell your supervisor, your Human Resources department,
            or some other department or person within your organization who has the power to stop
            the harassment. Become familiar with the sexual harassment policy in your employee
            handbook and follow the protocol for reporting an incident.
          </Text>
        )
      },
      {
        id: 8,
        title: (
          <Text>
            Start a Paper Trail
          </Text>
        ),
        content: (
          <Text>
            When you report the sexual harassment to your employer, do it in writing. Describe the
            problem and how you want it fixed. This creates a written record of when you
            complained and what happened in response to it. Keep copies of everything you send
            and receive from your employer.
          </Text>
        )
      },
      {
        id: 9,
        title: (
          <Text>
            File a Discrimination Complaint with a Government Agency
          </Text>
        ),
        content: (
          <Text>
            If you want to file a lawsuit in federal or state court, you must first file a formal sexual
            harassment complaint (or “charge”) with the federal Equal Employment Opportunity
            Commission (EEOC) at&nbsp;
            <Text style={styles.textLink} onPress={() => openURL('https://www.eeoc.gov')}>www.eeoc.gov</Text>
            &nbsp;or 1-800-669-4000 and/or your state’s fair
            employment agency (if your state has one).
            {'\n'}{'\n'}
            Remember…
            {'\n'}{'\n'}
            Don&#39;t assume the behavior will stop if you ignore it. Seventy-five percent of the time,
            sexual harassment problems get worse when ignored.
            {'\n'}{'\n'}
            Don&#39;t try to deal with severe harassment alone, even the first time. In serious cases, let
            someone in the company know about it immediately.  Get help.
            {'\n'}{'\n'}
            Keep in mind that unwanted behavior, at any level, is a problem that isn’t likely to go
            away without addressing it.
            {'\n'}{'\n'}
            It’s not your fault. No one asks to be harassed.
          </Text>
        )
      },
      {
        id: 10,
        title: (
          <Text>
            Be assertive
          </Text>
        ),
        content: (
          <Text>
            Quite simply, assertiveness is respectfully educating others about how to treat you.
            Assertiveness isn’t a personality trait - it’s an effective communication style. The more
            you use it, the easier it gets and you will see results.
          </Text>
        )
      },
      {
        id: 11,
        title: (
          <Text>
            Acknowledge your feelings
          </Text>
        ),
        content: (
          <Text>
            Your feelings matter, and they can’t be wrong. Don’t sell yourself short. Don’t deny your
            reality. Instead, take responsibility to identify your feelings.
            {'\n'}{'\n'}
            Remember…
            {'\n'}{'\n'}
            Some people are boundary-testers. They do what they think they can get away with.
            When we call out a particular behavior, they become aware of the boundary and stop
            the unwanted behavior because they no longer feel powerful. In fact, they feel they have
            been put on notice and are aware of others’ awareness of their behavior. Just the
            simple act of saying what you want will likely produce results.
            {'\n'}{'\n'}
            Pat yourself on the back for taking care of yourself by speaking your truth.
          </Text>
        )
      }
    ]
  },
  5: {
    title: 'The following is a list of possible action steps to help you move forward with confidence:',
    sections: [
      {
        id: 0,
        title: (
          <Text>
            Document the incident
          </Text>
        ),
        content: (
          <Text>
            If you haven’t already, write down dates, places, times, and possible witnesses to what
            happened. If possible, ask your co-workers to write down what they saw or heard. A
            single incident that rises to the level of sexual assault is one too many and should be
            addressed.
          </Text>
        )
      },
      {
        id: 1,
        title: (
          <Text>
            Report it to management
          </Text>
        ),
        content: (
          <Text>
            If it is possible for you to do so, tell your supervisor, your Human Resources
            department, or some other department or person within your organization in a position
            of authority. If you can, it’s best to put your complaint in writing.
          </Text>
        )
      },
      {
        id: 2,
        title: (
          <Text>
            Report the assault to your local police department
          </Text>
        ),
        content: (
          <Text>
            Sexual assault is a crime. Never let guilt or a desire to protect your attacker keep you
            from asserting your rights. You are not to blame for someone else’s actions.
            {'\n'}
            Remember…
            {'\n'}
            For confidential support, call 800.656.HOPE (4673) to be connected with a trained staff
            member from a sexual assault service provider in your area.
            The only person to blame for a sexual assault is the assailant.
            {'\n'}{'\n'}
            We support you and honor your efforts to learn how to bravely step forward and address
            this challenging and uncomfortable situation. Check out EMPOWERMENT TOOLS to
            support you during this difficult time.
          </Text>
        )
      }
    ]
  }
};

class Steps extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  blockedButton = blockedDoubleCall();

  onPress = () => {
    if (this.blockedButton()) return;

    const status = this.props.navigation.getParam('status');

    this.props.navigation.push(screenNameEmpowerment, { status });
  };

  render() {
    const { navigation } = this.props;
    const status = navigation.getParam('status');
    const { id } = status;

    return (
      <SafeAreaView style={styles.container} forceInset={{ bottom: 'never', top: 'always' }}>
        <TopBar title="ACTION STEPS" />
        <ScrollView style={{ flex: 1, width: '100%' }}>
          <View style={styles.content}>
            <Image
              resizeMode="contain"
              style={{ width: 116, height: 126, marginTop: 15 }}
              source={run}
            />
            <Info
              title={DATA[id].title}
              sections={DATA[id].sections}
            />
            <ButtonCustomFeedback
              {...STYLE_BTN}
              propsOnPressIn={STYLE_BTN_PRESS}
              containerStyle={styles.btn}
              title="EMPOWERMENT TOOLS"
              onPress={this.onPress}
            />
            <ButtonCustomFeedback
              {...STYLE_BTN}
              propsOnPressIn={STYLE_BTN_PRESS}
              containerStyle={styles.btn}
              title="LEAVE FEEDBACK"
              onPress={() => openURL('https://forms.gle/1b6ACgJacbmr9by59')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Steps;
