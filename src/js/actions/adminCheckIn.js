import { NOTIFICATION_TYPE, USER_ACCOUNT_TYPE } from '../constants';
import { Notification } from './notification';
import { AppLocation } from './checkIn';

const log = console.log;

export const sendAlertHandler = (ctx, location) => {
  log('Alerting users...');
  const users = ctx.state.userDB;
  for (let key in users) {
    let user = users[key];
    if (user.type === USER_ACCOUNT_TYPE && _wasUserCheckedIn(user, location)) {
      let notif = new Notification(
        NOTIFICATION_TYPE.alert,
        'You May Have COVID',
        `A covid case has been reported at ${location.name}`,
      );
      user.notifications.push(notif);
      users[key] = user;
    }
  }

  ctx.setState(
    {
      userDB: users,
    },
    () => {
      log('Successfully alerted users ' + JSON.stringify(ctx.state.userDB));
    },
  );
};

const _wasUserCheckedIn = (user, location) => {
  const locs = user.checkInHistory;
  for (let loc in locs) {
    if (loc.id === location.id) {
      return true;
    }
  }
  return false;
};

export const addLocationHandler = (ctx, addLocCtx) => {
  log('Adding new location...');
  if (_locationInputValidate(addLocCtx)) {
    const locDB = ctx.state.locationsDB;
    const { locationName, address, imageUrl, maxOccupancy, description } = addLocCtx.state;
    const newLoc = new AppLocation(locationName, maxOccupancy, address, description, imageUrl);
    locDB[newLoc.id] = newLoc;
    ctx.setState(
      {
        locationsDB: locDB,
      },
      () => {
        log('Successfully added new location to DB' + JSON.stringify(ctx.state.locationsDB));
      },
    );
    addLocCtx.setState({
      newLocationAdded: true,
    });
  } else {
    log('Unuccessful in adding new location to DB');
  }
};

const _locationInputValidate = (locCtx) => {
  log('Validating reminder inputs...');
  const isNameValid = _isInvalid(locCtx.state.locationName);
  const isAddressValid = _isInvalid(locCtx.state.address);
  const isImageUrlValid = _isInvalid(locCtx.state.imageUrl);
  const isMaxOccValid = _isInvalid(locCtx.state.maxOccupancy);
  const isDescValid = _isInvalid(locCtx.state.description);

  locCtx.setState({
    isNameValid: isNameValid,
    isAddressValid: isAddressValid,
    isImageUrlValid: isImageUrlValid,
    isMaxOccValid: isMaxOccValid,
    isDescValid: isDescValid,
  });

  return isNameValid && isAddressValid && isImageUrlValid && isMaxOccValid && isDescValid;
};

const _isInvalid = (value) => {
  return value !== null && value !== undefined && value !== '' && value !== 'select';
};