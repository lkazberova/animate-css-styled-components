'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlashAnimation = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  from, 50%, to {\n     opacity: 1;\n   }\n\n   25%, 75% {\n     opacity: 0;\n   }\n'], ['\n  from, 50%, to {\n     opacity: 1;\n   }\n\n   25%, 75% {\n     opacity: 0;\n   }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  animation-name: ', ';\n'], ['\n  animation-name: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _BaseAnimation = require('../BaseAnimation');

var _BaseAnimation2 = _interopRequireDefault(_BaseAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FlashAnimation = exports.FlashAnimation = (0, _styledComponents.keyframes)(_templateObject);

var Flash = (0, _styledComponents2.default)(_BaseAnimation2.default)(_templateObject2, FlashAnimation);

exports.default = Flash;