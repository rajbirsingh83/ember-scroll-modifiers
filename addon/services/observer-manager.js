import Service from '@ember/service';
import IntersectionObserverAdmin from 'intersection-observer-admin';

export default class ObserverManagerService extends Service {
  _admin;

  constructor() {
    super(...arguments);
    this._admin = new IntersectionObserverAdmin();
  }

  observe(element, options) {
    this._admin.observe(element, options)
  }

  unobserve(element) {
    this._admin.unobserve(element);
  }

  addEnterCallback(element, callback) {
    this._admin.addEnterCallback(element, callback);
  }

  addExitCallback(element, callback) {
    this._admin.addExitCallback(element, callback);
  }

  willDestroy() {
    this._admin.destroy();
  }
}
