'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomOutAnimation = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  from {\n   opacity: 1;\n  }\n\n  50% {\n   opacity: 0;\n   transform: scale3d(.3, .3, .3);\n  }\n\n  to {\n   opacity: 0;\n  }\n'], ['\n  from {\n   opacity: 1;\n  }\n\n  50% {\n   opacity: 0;\n   transform: scale3d(.3, .3, .3);\n  }\n\n  to {\n   opacity: 0;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  animation-name: ', ';\n'], ['\n  animation-name: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _BaseAnimation = require('../BaseAnimation');

var _BaseAnimation2 = _interopRequireDefault(_BaseAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ZoomOutAnimation = exports.ZoomOutAnimation = (0, _styledComponents.keyframes)(_templateObject);

var ZoomOut = (0, _styledComponents2.default)(_BaseAnimation2.default)(_templateObject2, ZoomOutAnimation);

exports.default = ZoomOut;