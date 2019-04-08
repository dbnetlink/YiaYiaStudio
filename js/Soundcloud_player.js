
var _components = require("react-soundplayer/components");

var _addons = require("react-soundplayer/addons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var clientId = 'L6pWQKWWm6oT4Nv0mTWEkxKypNpleA5m';
var resolveUrl = 'https://soundcloud.com/yiayias-studio/sets/yiayias-recordings';
var Player = (0, _addons.withSoundCloudAudio)(function (props) {
    var track = props.track,
        currentTime = props.currentTime;
    return _react.default.createElement("div", {
        className: "custom-player"
    }, _react.default.createElement(_components.PlayButton, _extends({
        className: "custom-player-btn",
        onPlayClick: function onPlayClick() {
            console.log('play button clicked!');
        }
    }, props)), _react.default.createElement("h2", {
        className: "custom-player-title"
    }, track ? track.title : 'Loading...'), _react.default.createElement(_components.Timer, _extends({
        className: "custom-player-timer",
        duration: track ? track.duration / 1000 : 0,
        currentTime: currentTime
    }, props)));
});

var App = function App() {
    return _react.default.createElement(Player, {
        clientId: clientId,
        resolveUrl: resolveUrl,
        onReady: function onReady() {
            return console.log('track is loaded!');
        }
    });
};

_reactDom.default.render(_react.default.createElement(App, null), document.getElementById('#app'));