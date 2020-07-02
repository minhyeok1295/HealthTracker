const log = console.log;

export const addNotificationHandler = (ctx, type, title, message) => {
  log('Creating notification...');
  const notif = new Notification(type, title, message);
  const user = ctx.state.activeUser;
  user.notifications.push(notif);
  ctx.setState({
    activeUser: user,
  });
  log('Successfully created notification' + ctx.state.activeUser.notifications);
};

export const removeNotificationHandler = (ctx, id) => {
  const user = ctx.state.activeUser;
  const notifications = user.notifications;
  const index = _getNotificationIndex(notifications, id);
  notifications.splice(index, 1);
  user.notifications = notifications;
  ctx.setState({
    activeUser: user,
  });
};

const _getNotificationIndex = (list, id) => {
  let i;
  for (i = 0; i < list.lenght; i++) {
    if (list[i].id === id) {
      return i;
    }
  }
};

export class Notification {
  constructor(type, title, message) {
    this.type = type;
    this.title = title;
    this.message = message;
    this.id = this._generateId();
  }

  _generateId = () => {
    return 'n' + Math.random().toString(36).substr(3, 8);
  };
}
