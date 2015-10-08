import _ = require('lodash');

interface StoreListener {
    object: any;
    callback: Function;
}

class Store {
    _listeners: Array<StoreListener>;

    addListener(listenerObject: any, listenerCallback: Function) {
        this._listeners = this._listeners || [];

        this._listeners.push({
            object: listenerObject,
            callback: listenerCallback,
        });
    }


    removeListener(listenerObject: any) {
        this._listeners = _.remove(this._listeners, (listener: StoreListener) => {
            return listener.object === listenerObject;
        });
    }

    emitChange() {
        this._listeners.forEach((listener: StoreListener) => {
            listener.callback.call(null);
        });
    }
}

export = Store;

