const DEFAULT_TIMEOUT_MS = 250;
const TIMEOUT_MAX = 20000;

export class ReconnectingWebSocket {
  constructor(url) {
    this.check = this.check.bind(this);
    this.connect = this.connect.bind(this);
    this.handleConnect = this.handleConnect.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleReconnect = this.handleReconnect.bind(this);
    this._url = url;
    this._timeout = DEFAULT_TIMEOUT_MS;
    this.check();
    this._listeners = [];
  }

  addEventListener(type, callback) {
    this._listeners.push({type, callback});
    if (this._socket && this._socket.readyState === WebSocket.OPEN) {
      this.addListeners();
    }
  }

  addListeners() {
    for (let { type, callback } of this._listeners) {
      this._socket.addEventListener(type, callback);
    }
  }

  check() {
    if (!this._socket || this._socket.readyState === WebSocket.CLOSED) {
      this.connect();
    }
  };

  connect() {
    console.log('Socket connecting...');
    this._socket = new WebSocket(this._url);
    this._socket.addEventListener('open', this.handleConnect);
    this._socket.addEventListener('close', this.handleReconnect);
    this._socket.addEventListener('error', this.handleError);
  }

  handleConnect() {
    console.log('Socket connected.');
    this.addListeners();
    clearTimeout(this._retry);
    this._timeout = DEFAULT_TIMEOUT_MS;
  }

  handleError(e) {
    console.error(`Socket encountered error: ${e.message}.`);
    this._socket.close();
  }

  handleReconnect(e) {
    this._timeout = Math.min(TIMEOUT_MAX, 2 * this._timeout);
    console.log(
      `Socket is closed. Reconnect will be attempted in ${this._timeout} ms.`,
      e.reason
    );
    this._retry = setTimeout(this.connect, this._timeout);
  }
}
