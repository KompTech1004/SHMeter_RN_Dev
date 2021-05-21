import { Linking } from 'react-native';

const TIME_BLOCKED = 1500;

export const blockedDoubleCall = (time = TIME_BLOCKED) => {
  let isBlocked = false;

  return () => {
    if (isBlocked) {
      return true;
    }

    isBlocked = true;
    setTimeout(() => isBlocked = false, time);

    return false;
  };
};

const blockedDoubleOpenURL = blockedDoubleCall();

export const openURL = link => {
  if (blockedDoubleOpenURL()) return;

  Linking.canOpenURL(link)
    .then(supported => {
      if (supported) {
        Linking.openURL(link);
      }
    });
};
