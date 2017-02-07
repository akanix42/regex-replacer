'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createReplacer = createReplacer;
function createReplacer(replacer) {
  if (Array.isArray(replacer)) {
    var pattern = replacer.shift();
    var regexOptions = void 0;
    if (replacer.length === 2) {
      regexOptions = replacer.shift();
    }
    var regex = new RegExp(pattern, regexOptions);
    var replacement = replacer.shift();

    return makeReplacer(regex, replacement);
  }

  return makeReplacer(new RegExp(replacer));
}

function makeReplacer(regex) {
  var replacement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return function replaceText(textToReplace) {
    return textToReplace.replace(regex, replacement);
  };
}
//# sourceMappingURL=regex-replacer.js.map
