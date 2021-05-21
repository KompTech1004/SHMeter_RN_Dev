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
  WIDTH_WITHOUT_PADDING,
  COLOR_GREEN
} from '../constants/style';
import meditation from '../resources/meditation.png';
import Info from '../components/Info';
import { blockedDoubleCall, openURL } from '../common';

export const screenName = 'Empowerment';

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
    title: (
      <Text>
        Let’s face it, life can be downright difficult at times. A person or event can drain your
        emotional reserves, as well as trigger unrelated, disempowering feelings that bring you
        ‘down’. High drama means high emotions.  And when your emotions take over, it’s
        difficult to think clearly and express yourself effectively.
        {'\n'}{'\n'}
        However, you deserve to feel good, healthy and confident, so when emotions
        overwhelm you and prevent you from being the person and leader you want to be, it’s
        important to have simple tools that can help restore your balance. Below are some
        empowerment tools to assist you in moving forward with confidence and helping you
        see how awesome you really are. The following is a list of
        <Text style={{ color: COLOR_GREEN }}> EMPOWERMENT TOOLS </Text>
        that may help you move forward with confidence.
      </Text>
    ),
    sections: [
      {
        id: 0,
        title: (
          <Text>
            Take 100% responsibility for your life and happiness
          </Text>
        ),
        content: (
          <Text>
            There’s no power in being a victim. The mere act of claiming to yourself that you are
            100% responsible for your well-being creates a magic serum for the future and puts you
            in control. You may be going through a difficult time right now but you’re the only one
            who can move you forward.
          </Text>
        )
      },
      {
        id: 1,
        title: (
          <Text>
            Try a technique called “Name it to Tame it”, created by author and psychiatrist, Dr.
            Daniel Siegel, to help you calm an emotion by naming it.
          </Text>
        ),
        content: (
          <Text>
            Let your emotions “inform you and not overwhelm you” by putting this simple technique
            to work: Once you notice a strong emotional reaction, the next step is to name it to
            yourself or out loud. Choosing words to describe subtle emotions like, “I’m feeling angry”
            or “I have a tight ball of nerves in my gut” calms down your emotional limbic
            brain, and allows your executive brain to filter and organize your reactive, drama filled
            emotions. The simple act of “naming it” can “tame” your emotions from hijacking your
            ability to think clearly. Now you’ll have a greater capacity to choose your response in the
            moment and strengthen your ability to make good decisions and move forward with
            confidence. Name it and tame it!
          </Text>
        )
      },
      {
        id: 2,
        title: (
          <Text>
            Interrupt a negative pattern by affirming what you want
          </Text>
        ),
        content: (
          <Text>
            As humans we have a habitual tendency to focus on negative thoughts but since “like
            attracts like”, a negative mindset will likely attract more negativity. You have strength,
            wisdom and intuition that’s waiting to be unleashed. Ask yourself, “If I could have, do or
            be anything I could ever want without fear of failure, what would it be?” Allow yourself to
            imagine as big as you can! Write it down. Look at it often until you start to feel it. This
            will help to change your focus.
          </Text>
        )
      },
      {
        id: 3,
        title: (
          <Text>
            Try using affirmations for well-being, self-care, and creating what you want.
          </Text>
        ),
        content: (
          <Text>
            “I love and approve of myself exactly as I am”, “I deserve to feel good”, “Every day in
            every way I’m getting better and better”, “I’m a good person”, “I do the best that I can”.
            (Make up your own.) Repeat them all day if you need to until you start believing it.
            {'\n'}{'\n'}
            When you catch yourself running a negative thought, stop and say to yourself, “What do
            I want? I know I don’t want to feel X (upset, hurt, minimized, etc.) but I do want to feel
            XX (confident, appreciated, etc.)” Then focus on what you want. You’ll start to feel better
            in 17 seconds.
          </Text>
        )
      },
      {
        id: 4,
        title: (
          <Text>
            Monitor your self-talk. If you find you are harshly judging yourself, stop!
          </Text>
        ),
        content: (
          <Text>
            Redirect your thoughts to an affirmation that supports you. You can also focus on
            something totally unrelated that makes you feel happy; your dog, your baby, dancing to
            great music, etc.
          </Text>
        )
      },
      {
        id: 5,
        title: (
          <Text>
            Change your posture for two minutes
          </Text>
        ),
        content: (
          <Text>
            Hold a “Wonder Woman” pose by standing with legs apart, hands on hips and chin
            forward, for as little as 120 seconds. Studies prove this will raise testosterone
            (confidence) and reduce cortisol (stress).
          </Text>
        )
      },
      {
        id: 6,
        title: (
          <Text>
            Make a list of your positive traits
          </Text>
        ),
        content: (
          <Text>
            Get a pen and paper or email yourself about all of your positive attributes; “I’m a good
            person”, “I do the best I can”, “I’m a strong person”, “I never give up”, etc. Write them
            down in a journal and on post-it notes, and place them where you will see them daily, ie;
            bathroom mirror, refrigerator, your car sun-visor, etc. The key here is to focus and
            repeat until you feel better.
          </Text>
        )
      },
      {
        id: 7,
        title: (
          <Text>
            This is your only life. Honor yourself and don’t sell yourself short
          </Text>
        ),
        content: (
          <Text>
            Honor yourself by honoring your inner voice. You deserve to speak your truth,
            regardless of others’ opinions. Ask yourself, “If I do X now, how will I feel about myself
            tomorrow?” Listen to your gut. Your intuition (wisdom within) speaks through your gut or
            cerebral hunches. Follow it. If you don’t feel like agreeing with someone, calmly speak
            your mind. No one knows better than you about how you really feel.
          </Text>
        )
      },
      {
        id: 8,
        title: (
          <Text>
            Develop compassion and empathy for yourself
          </Text>
        ),
        content: (
          <Text>
            Where compassion, empathy and respect are present, there is no harassment, to
            ourselves or others. Cultivate compassion for yourself. Be kind and gentle to yourself.
            Your feelings matter. Don’t shut down. Talk about them. If you feel like crying, let it rip.
            Most people intellectualize their feelings, but feelings need to be experienced. This is a
            key element to self-care.
          </Text>
        )
      },
      {
        id: 8,
        title: (
          <Text>
            Mirror work
          </Text>
        ),
        content: (
          <Text>
            Look into a mirror, breathe deeply and stare into your eyes. Engage with your Inner-
            Spirit, looking back at you through your eyes. Tell your reflection, “I love you. I’m willing
            to love you.” You may feel silly at first, but every time you look in a mirror, take a
            moment to say something kind and gentle to your reflection. “I love you.”, “You are a
            good person”, “I’m here for you”, “Every day in every way, you’re getting better and
            better”. Do this every day and every time you pass a mirror. For more info, check out
            Louise Hay’s book, Mirror Work at&nbsp;
            <Text style={styles.textLink} onPress={() => openURL('https://www.hayhouse.com')}>www.HayHouse.com</Text>
          </Text>
        )
      },
      {
        id: 9,
        title: (
          <Text>
            Meditate 15 minutes a day to reduce stress.
          </Text>
        ),
        content: (
          <Text>
            Experts estimate that the mind thinks 60,000 to 80,000 thoughts per day. That’s an
            average of 2500 to 3300 thoughts per hour. The goal of meditation is to go beyond the
            mind and experience our essential nature- which is described as peace, happiness and bliss.
            {'\n'}{'\n'}
            There are many different types of meditation such as Transcendental Meditation, Zen
            Meditation, Loving-kindness Meditation, Mindfulness Meditation, Breath Awareness
            Meditation, Chakra Meditation, Kundalini Yoga. Find out which one is right for you
            (thank you internet) and start with five minutes and gradually extend your practice to 15
            minutes a day. Studies say meditation reduces stress, controls anxiety, promotes
            emotional health, enhances self-awareness, lengthens attention span, and may even
            help generate kindness, help fight addictions and may reduce age-related memory
            loss.
          </Text>
        )
      },
      {
        id: 10,
        title: (
          <Text>
            Make a decision to focus on feeling good
          </Text>
        ),
        content: (
          <Text>
            The act of making a decision to care about feeling good trains us to focus on the
            practices that feel good to our hearts. It’s a great habit to cultivate. And when we feel
            good, we tend to attract people, places and things that resonate with the energetic
            vibrations we hold inside.
            {'\n'}{'\n'}
            You deserve to feel good, happy and move forward with confidence. You are worthy.
            You matter. Let your light shine for yourself and others.
          </Text>
        )
      }
    ]
  },
  2: {
    title: (
      <Text>
        Let’s face it, life can be downright difficult at times. A person or event can drain your
        emotional reserves, as well as trigger unrelated, disempowering feelings that bring you
        ‘down’. High drama means high emotions.  And when your emotions take over, it’s
        difficult to think clearly and express yourself effectively.
        {'\n'}{'\n'}
        However, you deserve to feel good, healthy and confident, so when emotions
        overwhelm you and prevent you from being the person and leader you want to be, it’s
        important to have simple tools that can help restore your balance. Below are some
        empowerment tools to assist you in moving forward with confidence and helping you
        see how awesome you really are. The following is a list of
        <Text style={{ color: COLOR_GREEN }}> EMPOWERMENT TOOLS </Text>
        that may help you move forward with confidence.
      </Text>
    ),
    sections: [
      {
        id: 0,
        title: (
          <Text>
            Take 100% responsibility for your life and happiness
          </Text>
        ),
        content: (
          <Text>
            There’s no power in being a victim. The mere act of claiming to yourself that you are
            100% responsible for your well-being creates a magic serum for the future and puts you
            in control. You may be going through a difficult time right now but you’re the only one
            who can move you forward.
          </Text>
        )
      },
      {
        id: 1,
        title: (
          <Text>
            Try a technique called “Name it to Tame it”, created by author and psychiatrist, Dr.
            Daniel Siegel, to help you calm an emotion by naming it
          </Text>
        ),
        content: (
          <Text>
            Let your emotions “inform you and not overwhelm you” by putting this simple technique
            to work: Once you notice a strong emotional reaction, the next step is to name it to
            yourself or out loud. Choosing words to describe subtle emotions like, “I’m feeling angry”
            or “I have a tight ball of nerves in my gut” calms down your emotional limbic
            brain, and allows your executive brain to filter and organize your reactive, drama filled
            emotions. The simple act of “naming it” can “tame” your emotions from hijacking your
            ability to think clearly. Now you’ll have a greater capacity to choose your response in the
            moment and strengthen your ability to make good decisions and move forward with
            confidence. Name it and tame it!
          </Text>
        )
      },
      {
        id: 2,
        title: (
          <Text>
            Interrupt a negative pattern by affirming what you want
          </Text>
        ),
        content: (
          <Text>
            As humans we have a habitual tendency to focus on negative thoughts but since “like
            attracts like”, a negative mindset will likely attract more negativity. You have strength,
            wisdom and intuition that’s waiting to be unleashed. Ask yourself, “If I could have, do or
            be anything I could ever want without fear of failure, what would it be?” Allow yourself to
            imagine as big as you can! Write it down. Look at it often until you start to feel it. This
            will help to change your focus.
          </Text>
        )
      },
      {
        id: 3,
        title: (
          <Text>
            Try using affirmations for well-being, self-care, and creating what you want
          </Text>
        ),
        content: (
          <Text>
            “I love and approve of myself exactly as I am”, “I deserve to feel good”, “Every day in
            every way I’m getting better and better”, “I’m a good person”, “I do the best that I can”.
            (Make up your own.) Repeat them all day if you need to until you start believing it.
            {'\n'}{'\n'}
            When you catch yourself running a negative thought, stop and say to yourself, “What do
            I want? I know I don’t want to feel X (upset, hurt, minimized, etc.) but I do want to feel
            XX (confident, appreciated, etc.)” Then focus on what you want. You’ll start to feel better
            in 17 seconds.
          </Text>
        )
      },
      {
        id: 4,
        title: (
          <Text>
            Monitor your self-talk. If you find you are harshly judging yourself, stop!
          </Text>
        ),
        content: (
          <Text>
            Redirect your thoughts to an affirmation that supports you. You can also focus on
            something totally unrelated that makes you feel happy; your dog, your baby, dancing to
            great music, etc.
          </Text>
        )
      },
      {
        id: 5,
        title: (
          <Text>
            Change your posture for two minutes
          </Text>
        ),
        content: (
          <Text>
            Hold a “Wonder Woman” pose by standing with legs apart, hands on hips and chin
            forward, for as little as 120 seconds. Studies prove this will raise testosterone
            (confidence) and reduce cortisol (stress).
          </Text>
        )
      },
      {
        id: 6,
        title: (
          <Text>
            Make a list of your positive traits
          </Text>
        ),
        content: (
          <Text>
            Get a pen and paper or email yourself about all of your positive attributes; “I’m a good
            person”, “I do the best I can”, “I’m a strong person”, “I never give up”, etc. Write them
            down in a journal and on post-it notes, and place them where you will see them daily, ie;
            bathroom mirror, refrigerator, your car sun-visor, etc. The key here is to focus and
            repeat until you feel better.
          </Text>
        )
      },
      {
        id: 7,
        title: (
          <Text>
            This is your only life. Honor yourself and don’t sell yourself short
          </Text>
        ),
        content: (
          <Text>
            Honor yourself by honoring your inner voice. You deserve to speak your truth,
            regardless of others’ opinions. Ask yourself, “If I do X now, how will I feel about myself
            tomorrow?” Listen to your gut. Your intuition (wisdom within) speaks through your gut or
            cerebral hunches. Follow it. If you don’t feel like agreeing with someone, calmly speak
            your mind. No one knows better than you about how you really feel.
          </Text>
        )
      },
      {
        id: 8,
        title: (
          <Text>
            Develop compassion and empathy for yourself
          </Text>
        ),
        content: (
          <Text>
            Where compassion, empathy and respect are present, there is no harassment, to
            ourselves or others. Cultivate compassion for yourself. Be kind and gentle to yourself.
            Your feelings matter. Don’t shut down. Talk about them. If you feel like crying, let it rip.
            Most people intellectualize their feelings, but feelings need to be experienced. This is a
            key element to self-care.
          </Text>
        )
      },
      {
        id: 9,
        title: (
          <Text>
            Mirror work
          </Text>
        ),
        content: (
          <Text>
            Look into a mirror, breathe deeply and stare into your eyes. Engage with your Inner-
            Spirit, looking back at you through your eyes. Tell your reflection, “I love you. I’m willing
            to love you.” You may feel silly at first, but every time you look in a mirror, take a
            moment to say something kind and gentle to your reflection. “I love you.”, “You are a
            good person”, “I’m here for you”, “Every day in every way, you’re getting better and
            better”. Do this every day and every time you pass a mirror. For more info, check out
            Louise Hay’s book, Mirror Work at&nbsp;
            <Text style={styles.textLink} onPress={() => openURL('https://www.hayhouse.com')}>www.HayHouse.com</Text>
          </Text>
        )
      },
      {
        id: 10,
        title: (
          <Text>
            Meditate 15 minutes a day to reduce stress
          </Text>
        ),
        content: (
          <Text>
            Experts estimate that the mind thinks 60,000 to 80,000 thoughts per day. That’s an
            average of 2500 to 3300 thoughts per hour. The goal of meditation is to go beyond the
            mind and experience our essential nature- which is described as peace, happiness and
            bliss.
            {'\n'}{'\n'}
            There are many different types of meditation such as Transcendental Meditation, Zen
            Meditation, Loving-kindness Meditation, Mindfulness Meditation, Breath Awareness
            Meditation, Chakra Meditation, Kundalini Yoga. Find out which one is right for you
            (thank you internet) and start with five minutes and gradually extend your practice to 15
            minutes a day. Studies say meditation reduces stress, controls anxiety, promotes
            emotional health, enhances self-awareness, lengthens attention span, and may even
            help generate kindness, help fight addictions and may reduce age-related memory
            loss.
          </Text>
        )
      },
      {
        id: 11,
        title: (
          <Text>
            Make a decision to focus on feeling good
          </Text>
        ),
        content: (
          <Text>
            The act of making a decision to care about feeling good trains us to focus on the
            practices that feel good to our hearts. It’s a great habit to cultivate. And when we feel
            good, we tend to attract people, places and things that resonate with the energetic
            vibrations we hold inside.
            {'\n'}{'\n'}
            You deserve to feel good, happy and move forward with confidence. You are worthy.
            You matter. Let your light shine for yourself and others.
          </Text>
        )
      }
    ]
  },
  3: {
    title: (
      <Text>
        Let’s face it, life can be downright difficult at times. A person or event can drain your
        emotional reserves, as well as trigger unrelated, disempowering feelings that bring you
        ‘down’. High drama means high emotions.  And when your emotions take over, it’s
        difficult to think clearly and express yourself effectively.
        {'\n'}{'\n'}
        However, you deserve to feel good, healthy and confident, so when emotions
        overwhelm you and prevent you from being the person and leader you want to be, it’s
        important to have simple tools that can help restore your balance. Below are some
        empowerment tools to assist you in moving forward with confidence and helping you
        see how awesome you really are. The following is a list of
        <Text style={{ color: COLOR_GREEN }}> EMPOWERMENT TOOLS </Text>
        that may help you move forward with confidence.
      </Text>
    ),
    sections: [
      {
        id: 0,
        title: (
          <Text>
            Take 100% responsibility for your life and happiness
          </Text>
        ),
        content: (
          <Text>
            There’s no power in being a victim. The mere act of claiming to yourself that you are
            100% responsible for your well-being creates a magic serum for the future and puts you
            in control. You may be going through a difficult time right now but you’re the only one
            who can move you forward.
          </Text>
        )
      },
      {
        id: 1,
        title: (
          <Text>
            Try a technique called “Name it to Tame it”, created by author and psychiatrist, Dr.
            Daniel Siegel, to help you calm an emotion by naming it
          </Text>
        ),
        content: (
          <Text>
            Let your emotions “inform you and not overwhelm you” by putting this simple technique
            to work: Once you notice a strong emotional reaction, the next step is to name it to
            yourself or out loud. Choosing words to describe subtle emotions like, “I’m feeling angry”
            or “I have a tight ball of nerves in my gut” calms down your emotional limbic
            brain, and allows your executive brain to filter and organize your reactive, drama filled
            emotions. The simple act of “naming it” can “tame” your emotions from hijacking your
            ability to think clearly. Now you’ll have a greater capacity to choose your response in the
            moment and strengthen your ability to make good decisions and move forward with
            confidence. Name it and tame it!
          </Text>
        )
      },
      {
        id: 2,
        title: (
          <Text>
            Interrupt a negative pattern by affirming what you want
          </Text>
        ),
        content: (
          <Text>
            As humans we have a habitual tendency to focus on negative thoughts but since “like
            attracts like”, a negative mindset will likely attract more negativity. You have strength,
            wisdom and intuition that’s waiting to be unleashed. Ask yourself, “If I could have, do or
            be anything I could ever want without fear of failure, what would it be?” Allow yourself to
            imagine as big as you can! Write it down. Look at it often until you start to feel it. This
            will help to change your focus.
          </Text>
        )
      },
      {
        id: 3,
        title: (
          <Text>
            Try using affirmations for well-being, self-care, and creating what you want
          </Text>
        ),
        content: (
          <Text>
            “I love and approve of myself exactly as I am”, “I deserve to feel good”, “Every day in
            every way I’m getting better and better”, “I’m a good person”, “I do the best that I can”.
            (Make up your own.) Repeat them all day if you need to until you start believing it.
            {'\n'}{'\n'}
            When you catch yourself running a negative thought, stop and say to yourself, “What do
            I want? I know I don’t want to feel X (upset, hurt, minimized, etc.) but I do want to feel
            XX (confident, appreciated, etc.)” Then focus on what you want. You’ll start to feel better
            in 17 seconds.
          </Text>
        )
      },
      {
        id: 4,
        title: (
          <Text>
            Monitor your self-talk. If you find you are harshly judging yourself, stop!
          </Text>
        ),
        content: (
          <Text>
            Redirect your thoughts to an affirmation that supports you. You can also focus on
            something totally unrelated that makes you feel happy; your dog, your baby, dancing to
            great music, etc.
          </Text>
        )
      },
      {
        id: 5,
        title: (
          <Text>
            Change your posture for two minutes
          </Text>
        ),
        content: (
          <Text>
            Hold a “Wonder Woman” pose by standing with legs apart, hands on hips and chin
            forward, for as little as 120 seconds. Studies prove this will raise testosterone
            (confidence) and reduce cortisol (stress).
          </Text>
        )
      },
      {
        id: 6,
        title: (
          <Text>
            Make a list of your positive traits
          </Text>
        ),
        content: (
          <Text>
            Get a pen and paper or email yourself about all of your positive attributes; “I’m a good
            person”, “I do the best I can”, “I’m a strong person”, “I never give up”, etc. Write them
            down in a journal and on post-it notes, and place them where you will see them daily, ie;
            bathroom mirror, refrigerator, your car sun-visor, etc. The key here is to focus and
            repeat until you feel better.
          </Text>
        )
      },
      {
        id: 7,
        title: (
          <Text>
            This is your only life. Honor yourself and don’t sell yourself short.
          </Text>
        ),
        content: (
          <Text>
            Honor yourself by honoring your inner voice. You deserve to speak your truth,
            regardless of others’ opinions. Ask yourself, “If I do X now, how will I feel about myself
            tomorrow?” Listen to your gut. Your intuition (wisdom within) speaks through your gut or
            cerebral hunches. Follow it. If you don’t feel like agreeing with someone, calmly speak
            your mind. No one knows better than you about how you really feel.
          </Text>
        )
      },
      {
        id: 8,
        title: (
          <Text>
            Develop compassion and empathy for yourself
          </Text>
        ),
        content: (
          <Text>
            Where compassion, empathy and respect are present, there is no harassment, to
            ourselves or others. Cultivate compassion for yourself. Be kind and gentle to yourself.
            Your feelings matter. Don’t shut down. Talk about them. If you feel like crying, let it rip.
            Most people intellectualize their feelings, but feelings need to be experienced. This is a
            key element to self-care.
          </Text>
        )
      },
      {
        id: 9,
        title: (
          <Text>
            Mirror work
          </Text>
        ),
        content: (
          <Text>
            Look into a mirror, breathe deeply and stare into your eyes. Engage with your Inner-
            Spirit, looking back at you through your eyes. Tell your reflection, “I love you. I’m willing
            to love you.” You may feel silly at first, but every time you look in a mirror, take a
            moment to say something kind and gentle to your reflection. “I love you.”, “You are a
            good person”, “I’m here for you”, “Every day in every way, you’re getting better and
            better”. Do this every day and every time you pass a mirror. For more info, check out
            Louise Hay’s book, Mirror Work at&nbsp;
            <Text style={styles.textLink} onPress={() => openURL('https://www.hayhouse.com')}>www.HayHouse.com</Text>
          </Text>
        )
      },
      {
        id: 10,
        title: (
          <Text>
            Meditate 15 minutes a day to reduce stress
          </Text>
        ),
        content: (
          <Text>
            Experts estimate that the mind thinks 60,000 to 80,000 thoughts per day. That’s an
            average of 2500 to 3300 thoughts per hour. The goal of meditation is to go beyond the
            mind and experience our essential nature- which is described as peace, happiness and
            bliss.
            {'\n'}{'\n'}
            There are many different types of meditation such as Transcendental Meditation, Zen
            Meditation, Loving-kindness Meditation, Mindfulness Meditation, Breath Awareness
            Meditation, Chakra Meditation, Kundalini Yoga. Find out which one is right for you
            (thank you internet) and start with five minutes and gradually extend your practice to 15
            minutes a day. Studies say meditation reduces stress, controls anxiety, promotes
            emotional health, enhances self-awareness, lengthens attention span, and may even
            help generate kindness, help fight addictions and may reduce age-related memory
            loss.
          </Text>
        )
      },
      {
        id: 11,
        title: (
          <Text>
            Make a decision to focus on feeling good
          </Text>
        ),
        content: (
          <Text>
            The act of making a decision to care about feeling good trains us to focus on the
            practices that feel good to our hearts. It’s a great habit to cultivate. And when we feel
            good, we tend to attract people, places and things that resonate with the energetic
            vibrations we hold inside.
            {'\n'}{'\n'}
            You deserve to feel good, happy and move forward with confidence. You are worthy.
            You matter. Let your light shine for yourself and others.
          </Text>
        )
      }
    ]
  },
  4: {
    title: (
      <Text>
        Stress and trauma from sexual harassment can leave you feeling powerless, vulnerable
        and isolated. There’s a stigma attached. You may also be afraid of how others will react.
        Will others look at you differently? Are you judging yourself? It may seem easier to
        downplay what happened or keep it a secret. But when you stay silent, you deny
        yourself help and reinforce your victimhood. High drama means high emotions.  And
        when your emotions take over, it’s difficult to think clearly and express yourself
        effectively.
        {'\n'}{'\n'}
        You deserve to feel good, healthy and confident. You possess the strength and coping
        skills to get through this difficult time. Below are some
        <Text style={{ color: COLOR_GREEN }}> EMPOWERMENT TOOLS </Text>
        to assist you to move forward with confidence.
      </Text>
    ),
    sections: [
      {
        id: 0,
        title: (
          <Text>
            Reach out to someone you trust
          </Text>
        ),
        content: (
          <Text>
            It can be extraordinarily difficult to admit that you were sexually harassed. It’s common
            to think that if you don’t talk about your situation, it didn’t really happen. But you can’t
            heal when you’re avoiding the truth. And hiding only adds to feelings of shame. As scary
            as it is to open up, it will set you free. However, it’s important to be selective about who
            you tell, especially at first. Your best bet is someone who will be supportive, empathetic,
            and calm.
          </Text>
        )
      },
      {
        id: 1,
        title: (
          <Text>
            Take 100% responsibility for your life and happiness
          </Text>
        ),
        content: (
          <Text>
            There’s no power in being a victim. The mere act of claiming to yourself that you are
            100% responsible for your well-being creates a magic serum for the future and puts you
            in control. You may be going through a difficult time right now but you’re the only one
            who can move you forward.
          </Text>
        )
      },
      {
        id: 2,
        title: (
          <Text>
            Try a technique called “Name it to Tame it”, created by author and psychiatrist, Dr.
            Daniel Siegel, to help you calm an emotion by naming it
          </Text>
        ),
        content: (
          <Text>
            Let your emotions “inform you and not overwhelm you” by putting this simple technique
            to work: Once you notice a strong emotional reaction, the next step is to name it to
            yourself or out loud. Choosing words to describe subtle emotions like, “I’m feeling angry”
            or “I have a tight ball of nerves in my gut” calms down your emotional limbic
            brain, and allows your executive brain to filter and organize your reactive, drama filled
            emotions. The simple act of “naming it” can “tame” your emotions from hijacking your
            ability to think clearly. Now you’ll have a greater capacity to choose your response in the
            moment and strengthen your ability to make good decisions and move forward with
            confidence. Name it and tame it!
          </Text>
        )
      },
      {
        id: 3,
        title: (
          <Text>
            Interrupt a negative pattern by affirming what you want
          </Text>
        ),
        content: (
          <Text>
            As humans we have a habitual tendency to focus on negative thoughts but since “like
            attracts like”, a negative mindset will likely attract more negativity. You have strength,
            wisdom and intuition that’s waiting to be unleashed. Ask yourself, “If I could have, do or
            be anything I could ever want without fear of failure, what would it be?” Allow yourself to
            imagine as big as you can! Write it down. Look at it often until you start to feel it. This
            will help to change your focus.
          </Text>
        )
      },
      {
        id: 4,
        title: (
          <Text>
            Try using affirmations for well-being, self-care, and creating what you want.
          </Text>
        ),
        content: (
          <Text>
            “I love and approve of myself exactly as I am”, “I deserve to feel good”, “Every day in
            every way I’m getting better and better”, “I’m a good person”, “I do the best that I can”.
            (Make up your own.) Repeat them all day if you need to until you start believing it.
            {'\n'}{'\n'}
            When you catch yourself running a negative thought, stop and say to yourself, “What do
            I want? I know I don’t want to feel X (upset, hurt, minimized, etc.) but I do want to feel
            XX (confident, appreciated, etc.)” Then focus on what you want. You’ll start to feel better
            in 17 seconds.
          </Text>
        )
      },
      {
        id: 5,
        title: (
          <Text>
            Monitor your self-talk. If you find you are harshly judging yourself, stop!
          </Text>
        ),
        content: (
          <Text>
            Redirect your thoughts to an affirmation that supports you. You can also focus on
            something totally unrelated that makes you feel happy; your dog, your baby, dancing to
            great music, etc.
          </Text>
        )
      },
      {
        id: 6,
        title: (
          <Text>
            Change your posture for two minutes
          </Text>
        ),
        content: (
          <Text>
            Hold a “Wonder Woman” pose by standing with legs apart, hands on hips and chin
            forward, for as little as 120 seconds. Studies prove this will raise testosterone
            (confidence) and reduce cortisol (stress).
          </Text>
        )
      },
      {
        id: 7,
        title: (
          <Text>
            Make a list of your positive traits
          </Text>
        ),
        content: (
          <Text>
            Get a pen and paper or email yourself about all of your positive attributes; “I’m a good
            person”, “I do the best I can”, “I’m a strong person”, “I never give up”, etc. Write them
            down in a journal and on post-it notes, and place them where you will see them daily, ie;
            bathroom mirror, refrigerator, your car sun-visor, etc. The key here is to focus and
            repeat until you feel better.
          </Text>
        )
      },
      {
        id: 8,
        title: (
          <Text>
            This is your only life. Honor yourself and don’t sell yourself short
          </Text>
        ),
        content: (
          <Text>
            Honor yourself by honoring your inner voice. You deserve to speak your truth,
            regardless of others’ opinions. Ask yourself, “If I do X now, how will I feel about myself
            tomorrow?” Listen to your gut. Your intuition (wisdom within) speaks through your gut or
            cerebral hunches. Follow it. If you don’t feel like agreeing with someone, calmly speak
            your mind. No one knows better than you about how you really feel.
          </Text>
        )
      },
      {
        id: 9,
        title: (
          <Text>
            Develop compassion and empathy for yourself
          </Text>
        ),
        content: (
          <Text>
            Where compassion, empathy and respect are present, there is no harassment, to
            ourselves or others. Cultivate compassion for yourself. Be kind and gentle to yourself.
            Your feelings matter. Don’t shut down. Talk about them. If you feel like crying, let it rip.
            Most people intellectualize their feelings, but feelings need to be experienced. This is a
            key element to self-care.
          </Text>
        )
      },
      {
        id: 10,
        title: (
          <Text>
            Mirror work
          </Text>
        ),
        content: (
          <Text>
            Look into a mirror, breathe deeply and stare into your eyes. Engage with your Inner-
            Spirit, looking back at you through your eyes. Tell your reflection, “I love you. I’m willing
            to love you.” You may feel silly at first, but every time you look in a mirror, take a
            moment to say something kind and gentle to your reflection. “I love you.”, “You are a
            good person”, “I’m here for you”, “Every day in every way, you’re getting better and
            better”. Do this every day and every time you pass a mirror. For more info, check out
            Louise Hay’s book, Mirror Work at&nbsp;
            <Text style={styles.textLink} onPress={() => openURL('https://www.hayhouse.com')}>www.HayHouse.com</Text>
          </Text>
        )
      },
      {
        id: 11,
        title: (
          <Text>
            Meditate 15 minutes a day to reduce stress
          </Text>
        ),
        content: (
          <Text>
            Experts estimate that the mind thinks 60,000 to 80,000 thoughts per day. That’s an
            average of 2500 to 3300 thoughts per hour. The goal of meditation is to go beyond the
            mind and experience our essential nature- which is described as peace, happiness and
            bliss.
            {'\n'}{'\n'}
            There are many different types of meditation such as Transcendental Meditation, Zen
            Meditation, Loving-kindness Meditation, Mindfulness Meditation, Breath Awareness
            Meditation, Chakra Meditation, Kundalini Yoga. Find out which one is right for you
            (thank you internet) and start with five minutes and gradually extend your practice to 15
            minutes a day. Studies say meditation reduces stress, controls anxiety, promotes
            emotional health, enhances self-awareness, lengthens attention span, and may even
            help generate kindness, help fight addictions and may reduce age-related memory
            loss.
          </Text>
        )
      },
      {
        id: 12,
        title: (
          <Text>
            Make a decision to focus on feeling good
          </Text>
        ),
        content: (
          <Text>
            The act of making a decision to care about feeling good trains us to focus on the
            practices that feel good to our hearts. It’s a great habit to cultivate. And when we feel good,
            we tend to attract people, places and things that resonate with the energetic vibrations we hold inside.
            {'\n'}{'\n'}
            You are not defined by your circumstances. You deserve to feel good, happy and move
            forward with confidence. Let your light shine for yourself and others.
          </Text>
        )
      }
    ]
  },
  5: {
    title: (
      <Text>
        It can be hard to admit that you were sexually assaulted. It seems easier to downplay
        what happened or keep it a secret. But when you stay silent, you deny yourself help and
        reinforce your victimhood. It’s important to remind yourself that you have strengths and
        coping skills that can get you through tough times. It will also challenge your sense of
        helplessness and isolation. Below are
        <Text style={{ color: COLOR_GREEN }}> EMPOWERMENT TOOLS </Text>
        that have been shown
        to support mental health and well-being during times of extreme stress which can assist
        you to move forward with confidence.
      </Text>
    ),
    sections: [
      {
        id: 0,
        title: (
          <Text>
            Reach out to someone you trust
          </Text>
        ),
        content: (
          <Text>
            It can be extraordinarily difficult to admit that you were sexually assaulted. There’s a
            stigma attached. It can make you feel dirty and weak. You may also be afraid of how
            others will react. Will they look at you differently? Are you judging yourself? It’s common
            to think that if you don’t talk about your assault, it didn’t really happen. But you can’t
            heal when you’re avoiding the truth. And hiding only adds to feelings of shame. As scary
            as it is to open up, it will set you free. However, it’s important to be selective about who
            you tell, especially at first. Your best bet is someone who will be supportive, empathetic,
            and calm. If you don’t have someone you trust, talk to a therapist or call a rape crisis hotline.
          </Text>
        )
      },
      {
        id: 1,
        title: (
          <Text>
            Cope with feelings of guilt and shame
          </Text>
        ),
        content: (
          <Text>
            Even if you intellectually understand that you’re not to blame for the assault, you may
            still struggle with a sense of guilt or shame. These feelings can surface immediately
            following the assault or arise years after the attack. But as you acknowledge the truth of
            what happened, it will be easier to fully accept that you are not responsible. You did not
            bring the assault on yourself and you have nothing to be ashamed about.
          </Text>
        )
      },
      {
        id: 2,
        title: (
          <Text>
            Acknowledge the impact
          </Text>
        ),
        content: (
          <Text>
            When a trauma has occurred, it’s easy to intellectualize or avoid but studies prove that
            by admitting that there’s been an impact (mentally, spiritually, socially, physically), you
            allow yourself to accept the truth, which opens the way to address your deepest needs
            with self-care, love and kind attention towards yourself.
          </Text>
        )
      },
      {
        id: 3,
        title: (
          <Text>
            Take 100% responsibility for your life and happiness
          </Text>
        ),
        content: (
          <Text>
            There’s no power in being a victim. The mere act of claiming to yourself that you are
            100% responsible for your well-being creates a magic serum for the future and puts you
            in control. You may be going through a difficult time right now but you’re the only one
            who can move you forward.
          </Text>
        )
      },
      {
        id: 4,
        title: (
          <Text>
            Try a technique called “Name it to Tame it”, created by author and psychiatrist, Dr.
            Daniel Siegel, to help you calm an emotion by naming it
          </Text>
        ),
        content: (
          <Text>
            Let your emotions “inform you and not overwhelm you” by putting this simple technique
            to work: Once you notice a strong emotional reaction, the next step is to name it to
            yourself or out loud. Choosing words to describe subtle emotions like, “I’m feeling angry”
            or “I have a tight ball of nerves in my gut” calms down your emotional limbic
            brain, and allows your executive brain to filter and organize your reactive, drama filled
            emotions. The simple act of “naming it” can “tame” your emotions from hijacking your
            ability to think clearly. Now you’ll have a greater capacity to choose your response in the
            moment and strengthen your ability to make good decisions and move forward with
            confidence. Name it and tame it!
          </Text>
        )
      },
      {
        id: 5,
        title: (
          <Text>
            Interrupt a negative pattern by affirming what you want
          </Text>
        ),
        content: (
          <Text>
            As humans we have a habitual tendency to focus on negative thoughts but since “like
            attracts like”, a negative mindset will likely attract more negativity. You have strength,
            wisdom and intuition that’s waiting to be unleashed. Ask yourself, “If I could have, do or
            be anything I could ever want without fear of failure, what would it be?” Allow yourself to
            imagine as big as you can! Write it down. Look at it often until you start to feel it. This
            will help to change your focus.
          </Text>
        )
      },
      {
        id: 6,
        title: (
          <Text>
            Try using affirmations for well-being, self-care, and creating what you want
          </Text>
        ),
        content: (
          <Text>
            “I love and approve of myself exactly as I am”, “I deserve to feel good”, “Every day in
            every way I’m getting better and better”, “I’m a good person”, “I do the best that I can”.
            (Make up your own.) Repeat them all day if you need to until you start believing it.
            {'\n'}{'\n'}
            When you catch yourself running a negative thought, stop and say to yourself, “What do
            I want? I know I don’t want to feel X (upset, hurt, minimized, etc.) but I do want to feel
            XX (confident, appreciated, etc.)” Then focus on what you want. You’ll start to feel better
            in 17 seconds.
          </Text>
        )
      },
      {
        id: 7,
        title: (
          <Text>
            Monitor your self-talk. If you find you are harshly judging yourself, stop!
          </Text>
        ),
        content: (
          <Text>
            Redirect your thoughts to an affirmation that supports you. You can also focus on
            something totally unrelated that makes you feel happy; your dog, your baby, dancing to
            great music, etc.
          </Text>
        )
      },
      {
        id: 8,
        title: (
          <Text>
            Change your posture for two minutes
          </Text>
        ),
        content: (
          <Text>
            Hold a “Wonder Woman” pose by standing with legs apart, hands on hips and chin
            forward, for as little as 120 seconds. Studies prove this will raise testosterone
            (confidence) and reduce cortisol (stress).
          </Text>
        )
      },
      {
        id: 9,
        title: (
          <Text>
            Make a list of your positive traits
          </Text>
        ),
        content: (
          <Text>
            Get a pen and paper or email yourself about all of your positive attributes; “I’m a good
            person”, “I do the best I can”, “I’m a strong person”, “I never give up”, etc. Write them
            down in a journal and on post-it notes, and place them where you will see them daily, ie;
            bathroom mirror, refrigerator, your car sun-visor, etc. The key here is to focus and
            repeat until you feel better.
          </Text>
        )
      },
      {
        id: 10,
        title: (
          <Text>
            This is your only life. Honor yourself and don’t sell yourself short
          </Text>
        ),
        content: (
          <Text>
            Honor yourself by honoring your inner voice. You deserve to speak your truth,
            regardless of others’ opinions. Ask yourself, “If I do X now, how will I feel about myself
            tomorrow?” Listen to your gut. Your intuition (wisdom within) speaks through your gut or
            cerebral hunches. Follow it. If you don’t feel like agreeing with someone, calmly speak
            your mind. No one knows better than you about how you really feel.
          </Text>
        )
      },
      {
        id: 11,
        title: (
          <Text>
            Develop compassion and empathy for yourself
          </Text>
        ),
        content: (
          <Text>
            Where compassion, empathy and respect are present, there is no harassment, to
            ourselves or others. Cultivate compassion for yourself. Be kind and gentle to yourself.
            Your feelings matter. Don’t shut down. Talk about them. If you feel like crying, let it rip.
            Most people intellectualize their feelings, but feelings need to be experienced. This is a
            key element to self-care.
          </Text>
        )
      },
      {
        id: 12,
        title: (
          <Text>
            Mirror work
          </Text>
        ),
        content: (
          <Text>
            Look into a mirror, breathe deeply and stare into your eyes. Engage with your Inner-
            Spirit, looking back at you through your eyes. Tell your reflection, “I love you. I’m willing
            to love you.” You may feel silly at first, but every time you look in a mirror, take a
            moment to say something kind and gentle to your reflection. “I love you.”, “You are a
            good person”, “I’m here for you”, “Every day in every way, you’re getting better and
            better”. Do this every day and every time you pass a mirror. For more info, check out
            Louise Hay’s book, Mirror Work at&nbsp;
            <Text style={styles.textLink} onPress={() => openURL('https://www.hayhouse.com')}>www.HayHouse.com</Text>
          </Text>
        )
      },
      {
        id: 13,
        title: (
          <Text>
            Meditate 15 minutes a day to reduce stress
          </Text>
        ),
        content: (
          <Text>
            Experts estimate that the mind thinks 60,000 to 80,000 thoughts per day. That’s an
            average of 2500 to 3300 thoughts per hour. The goal of meditation is to go beyond the
            mind and experience our essential nature- which is described as peace, happiness and
            bliss.
            {'\n'}{'\n'}
            There are many different types of meditation such as Transcendental Meditation, Zen
            Meditation, Loving-kindness Meditation, Mindfulness Meditation, Breath Awareness
            Meditation, Chakra Meditation, Kundalini Yoga. Find out which one is right for you
            (thank you internet) and start with five minutes and gradually extend your practice to 15
            minutes a day. Studies say meditation reduces stress, controls anxiety, promotes
            emotional health, enhances self-awareness, lengthens attention span, and may even
            help generate kindness, help fight addictions and may reduce age-related memory
            loss.
          </Text>
        )
      },
      {
        id: 14,
        title: (
          <Text>
            Make a decision to focus on feeling good
          </Text>
        ),
        content: (
          <Text>
            The act of making a decision to care about feeling good trains us to focus on the
            practices that feel good to our hearts. It’s a great habit to cultivate. And when we feel good,
            we tend to attract people, places and things that resonate with the energetic vibrations we hold inside.
            {'\n'}{'\n'}
            You are not defined by your circumstances. You deserve to feel good, happy and move
            forward with confidence. Let your light shine for yourself and others.
          </Text>
        )
      }
    ]
  }
};

class Empowerment extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  blockedButton = blockedDoubleCall();

  onPress = count => {
    if (this.blockedButton()) return;

    this.props.navigation.pop(count);
  };

  render() {
    const { navigation } = this.props;
    const status = navigation.getParam('status');
    const { id } = status;

    return (
      <SafeAreaView style={styles.container} forceInset={{ bottom: 'never', top: 'always' }}>
        <TopBar title="EMPOWERMENT TOOLS" />
        <ScrollView style={{ flex: 1, width: '100%' }}>
          <View style={styles.content}>
            <Image
              resizeMode="contain"
              style={{ width: 105, height: 104, marginTop: 15, marginBottom: 10 }}
              source={meditation}
            />
            <Info
              title={DATA[id].title}
              sections={DATA[id].sections}
            />
            <ButtonCustomFeedback
              {...STYLE_BTN}
              propsOnPressIn={STYLE_BTN_PRESS}
              containerStyle={styles.btn}
              title="LEAVE FEEDBACK"
              onPress={() => openURL('https://forms.gle/1b6ACgJacbmr9by59')}
            />
            <ButtonCustomFeedback
              {...STYLE_BTN}
              propsOnPressIn={STYLE_BTN_PRESS}
              containerStyle={styles.btn}
              title="ACTION STEPS"
              onPress={() => this.onPress()}
            />
            <ButtonCustomFeedback
              {...STYLE_BTN}
              propsOnPressIn={STYLE_BTN_PRESS}
              containerStyle={styles.btn}
              title="BACK TO RESULTS"
              onPress={() => this.onPress(2)}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Empowerment;
