var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/@babel/helper-validator-identifier/7.27.1/lib/identifier.js
var require_identifier = __commonJS({
  "../../../../Library/Caches/deno/npm/registry.npmjs.org/@babel/helper-validator-identifier/7.27.1/lib/identifier.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isIdentifierChar = isIdentifierChar;
    exports.isIdentifierName = isIdentifierName4;
    exports.isIdentifierStart = isIdentifierStart;
    var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
    var nonASCIIidentifierChars = "\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\u30FB\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F\uFF65";
    var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
    var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
    nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
    var astralIdentifierStartCodes = [
      0,
      11,
      2,
      25,
      2,
      18,
      2,
      1,
      2,
      14,
      3,
      13,
      35,
      122,
      70,
      52,
      268,
      28,
      4,
      48,
      48,
      31,
      14,
      29,
      6,
      37,
      11,
      29,
      3,
      35,
      5,
      7,
      2,
      4,
      43,
      157,
      19,
      35,
      5,
      35,
      5,
      39,
      9,
      51,
      13,
      10,
      2,
      14,
      2,
      6,
      2,
      1,
      2,
      10,
      2,
      14,
      2,
      6,
      2,
      1,
      4,
      51,
      13,
      310,
      10,
      21,
      11,
      7,
      25,
      5,
      2,
      41,
      2,
      8,
      70,
      5,
      3,
      0,
      2,
      43,
      2,
      1,
      4,
      0,
      3,
      22,
      11,
      22,
      10,
      30,
      66,
      18,
      2,
      1,
      11,
      21,
      11,
      25,
      71,
      55,
      7,
      1,
      65,
      0,
      16,
      3,
      2,
      2,
      2,
      28,
      43,
      28,
      4,
      28,
      36,
      7,
      2,
      27,
      28,
      53,
      11,
      21,
      11,
      18,
      14,
      17,
      111,
      72,
      56,
      50,
      14,
      50,
      14,
      35,
      39,
      27,
      10,
      22,
      251,
      41,
      7,
      1,
      17,
      2,
      60,
      28,
      11,
      0,
      9,
      21,
      43,
      17,
      47,
      20,
      28,
      22,
      13,
      52,
      58,
      1,
      3,
      0,
      14,
      44,
      33,
      24,
      27,
      35,
      30,
      0,
      3,
      0,
      9,
      34,
      4,
      0,
      13,
      47,
      15,
      3,
      22,
      0,
      2,
      0,
      36,
      17,
      2,
      24,
      20,
      1,
      64,
      6,
      2,
      0,
      2,
      3,
      2,
      14,
      2,
      9,
      8,
      46,
      39,
      7,
      3,
      1,
      3,
      21,
      2,
      6,
      2,
      1,
      2,
      4,
      4,
      0,
      19,
      0,
      13,
      4,
      31,
      9,
      2,
      0,
      3,
      0,
      2,
      37,
      2,
      0,
      26,
      0,
      2,
      0,
      45,
      52,
      19,
      3,
      21,
      2,
      31,
      47,
      21,
      1,
      2,
      0,
      185,
      46,
      42,
      3,
      37,
      47,
      21,
      0,
      60,
      42,
      14,
      0,
      72,
      26,
      38,
      6,
      186,
      43,
      117,
      63,
      32,
      7,
      3,
      0,
      3,
      7,
      2,
      1,
      2,
      23,
      16,
      0,
      2,
      0,
      95,
      7,
      3,
      38,
      17,
      0,
      2,
      0,
      29,
      0,
      11,
      39,
      8,
      0,
      22,
      0,
      12,
      45,
      20,
      0,
      19,
      72,
      200,
      32,
      32,
      8,
      2,
      36,
      18,
      0,
      50,
      29,
      113,
      6,
      2,
      1,
      2,
      37,
      22,
      0,
      26,
      5,
      2,
      1,
      2,
      31,
      15,
      0,
      328,
      18,
      16,
      0,
      2,
      12,
      2,
      33,
      125,
      0,
      80,
      921,
      103,
      110,
      18,
      195,
      2637,
      96,
      16,
      1071,
      18,
      5,
      26,
      3994,
      6,
      582,
      6842,
      29,
      1763,
      568,
      8,
      30,
      18,
      78,
      18,
      29,
      19,
      47,
      17,
      3,
      32,
      20,
      6,
      18,
      433,
      44,
      212,
      63,
      129,
      74,
      6,
      0,
      67,
      12,
      65,
      1,
      2,
      0,
      29,
      6135,
      9,
      1237,
      42,
      9,
      8936,
      3,
      2,
      6,
      2,
      1,
      2,
      290,
      16,
      0,
      30,
      2,
      3,
      0,
      15,
      3,
      9,
      395,
      2309,
      106,
      6,
      12,
      4,
      8,
      8,
      9,
      5991,
      84,
      2,
      70,
      2,
      1,
      3,
      0,
      3,
      1,
      3,
      3,
      2,
      11,
      2,
      0,
      2,
      6,
      2,
      64,
      2,
      3,
      3,
      7,
      2,
      6,
      2,
      27,
      2,
      3,
      2,
      4,
      2,
      0,
      4,
      6,
      2,
      339,
      3,
      24,
      2,
      24,
      2,
      30,
      2,
      24,
      2,
      30,
      2,
      24,
      2,
      30,
      2,
      24,
      2,
      30,
      2,
      24,
      2,
      7,
      1845,
      30,
      7,
      5,
      262,
      61,
      147,
      44,
      11,
      6,
      17,
      0,
      322,
      29,
      19,
      43,
      485,
      27,
      229,
      29,
      3,
      0,
      496,
      6,
      2,
      3,
      2,
      1,
      2,
      14,
      2,
      196,
      60,
      67,
      8,
      0,
      1205,
      3,
      2,
      26,
      2,
      1,
      2,
      0,
      3,
      0,
      2,
      9,
      2,
      3,
      2,
      0,
      2,
      0,
      7,
      0,
      5,
      0,
      2,
      0,
      2,
      0,
      2,
      2,
      2,
      1,
      2,
      0,
      3,
      0,
      2,
      0,
      2,
      0,
      2,
      0,
      2,
      0,
      2,
      1,
      2,
      0,
      3,
      3,
      2,
      6,
      2,
      3,
      2,
      3,
      2,
      0,
      2,
      9,
      2,
      16,
      6,
      2,
      2,
      4,
      2,
      16,
      4421,
      42719,
      33,
      4153,
      7,
      221,
      3,
      5761,
      15,
      7472,
      16,
      621,
      2467,
      541,
      1507,
      4938,
      6,
      4191
    ];
    var astralIdentifierCodes = [
      509,
      0,
      227,
      0,
      150,
      4,
      294,
      9,
      1368,
      2,
      2,
      1,
      6,
      3,
      41,
      2,
      5,
      0,
      166,
      1,
      574,
      3,
      9,
      9,
      7,
      9,
      32,
      4,
      318,
      1,
      80,
      3,
      71,
      10,
      50,
      3,
      123,
      2,
      54,
      14,
      32,
      10,
      3,
      1,
      11,
      3,
      46,
      10,
      8,
      0,
      46,
      9,
      7,
      2,
      37,
      13,
      2,
      9,
      6,
      1,
      45,
      0,
      13,
      2,
      49,
      13,
      9,
      3,
      2,
      11,
      83,
      11,
      7,
      0,
      3,
      0,
      158,
      11,
      6,
      9,
      7,
      3,
      56,
      1,
      2,
      6,
      3,
      1,
      3,
      2,
      10,
      0,
      11,
      1,
      3,
      6,
      4,
      4,
      68,
      8,
      2,
      0,
      3,
      0,
      2,
      3,
      2,
      4,
      2,
      0,
      15,
      1,
      83,
      17,
      10,
      9,
      5,
      0,
      82,
      19,
      13,
      9,
      214,
      6,
      3,
      8,
      28,
      1,
      83,
      16,
      16,
      9,
      82,
      12,
      9,
      9,
      7,
      19,
      58,
      14,
      5,
      9,
      243,
      14,
      166,
      9,
      71,
      5,
      2,
      1,
      3,
      3,
      2,
      0,
      2,
      1,
      13,
      9,
      120,
      6,
      3,
      6,
      4,
      0,
      29,
      9,
      41,
      6,
      2,
      3,
      9,
      0,
      10,
      10,
      47,
      15,
      343,
      9,
      54,
      7,
      2,
      7,
      17,
      9,
      57,
      21,
      2,
      13,
      123,
      5,
      4,
      0,
      2,
      1,
      2,
      6,
      2,
      0,
      9,
      9,
      49,
      4,
      2,
      1,
      2,
      4,
      9,
      9,
      330,
      3,
      10,
      1,
      2,
      0,
      49,
      6,
      4,
      4,
      14,
      10,
      5350,
      0,
      7,
      14,
      11465,
      27,
      2343,
      9,
      87,
      9,
      39,
      4,
      60,
      6,
      26,
      9,
      535,
      9,
      470,
      0,
      2,
      54,
      8,
      3,
      82,
      0,
      12,
      1,
      19628,
      1,
      4178,
      9,
      519,
      45,
      3,
      22,
      543,
      4,
      4,
      5,
      9,
      7,
      3,
      6,
      31,
      3,
      149,
      2,
      1418,
      49,
      513,
      54,
      5,
      49,
      9,
      0,
      15,
      0,
      23,
      4,
      2,
      14,
      1361,
      6,
      2,
      16,
      3,
      6,
      2,
      1,
      2,
      4,
      101,
      0,
      161,
      6,
      10,
      9,
      357,
      0,
      62,
      13,
      499,
      13,
      245,
      1,
      2,
      9,
      726,
      6,
      110,
      6,
      6,
      9,
      4759,
      9,
      787719,
      239
    ];
    function isInAstralSet(code2, set2) {
      let pos = 65536;
      for (let i = 0, length = set2.length; i < length; i += 2) {
        pos += set2[i];
        if (pos > code2) return false;
        pos += set2[i + 1];
        if (pos >= code2) return true;
      }
      return false;
    }
    function isIdentifierStart(code2) {
      if (code2 < 65) return code2 === 36;
      if (code2 <= 90) return true;
      if (code2 < 97) return code2 === 95;
      if (code2 <= 122) return true;
      if (code2 <= 65535) {
        return code2 >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code2));
      }
      return isInAstralSet(code2, astralIdentifierStartCodes);
    }
    function isIdentifierChar(code2) {
      if (code2 < 48) return code2 === 36;
      if (code2 < 58) return true;
      if (code2 < 65) return false;
      if (code2 <= 90) return true;
      if (code2 < 97) return code2 === 95;
      if (code2 <= 122) return true;
      if (code2 <= 65535) {
        return code2 >= 170 && nonASCIIidentifier.test(String.fromCharCode(code2));
      }
      return isInAstralSet(code2, astralIdentifierStartCodes) || isInAstralSet(code2, astralIdentifierCodes);
    }
    function isIdentifierName4(name) {
      let isFirst = true;
      for (let i = 0; i < name.length; i++) {
        let cp = name.charCodeAt(i);
        if ((cp & 64512) === 55296 && i + 1 < name.length) {
          const trail = name.charCodeAt(++i);
          if ((trail & 64512) === 56320) {
            cp = 65536 + ((cp & 1023) << 10) + (trail & 1023);
          }
        }
        if (isFirst) {
          isFirst = false;
          if (!isIdentifierStart(cp)) {
            return false;
          }
        } else if (!isIdentifierChar(cp)) {
          return false;
        }
      }
      return !isFirst;
    }
  }
});

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/@babel/helper-validator-identifier/7.27.1/lib/keyword.js
var require_keyword = __commonJS({
  "../../../../Library/Caches/deno/npm/registry.npmjs.org/@babel/helper-validator-identifier/7.27.1/lib/keyword.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isKeyword = isKeyword;
    exports.isReservedWord = isReservedWord;
    exports.isStrictBindOnlyReservedWord = isStrictBindOnlyReservedWord;
    exports.isStrictBindReservedWord = isStrictBindReservedWord;
    exports.isStrictReservedWord = isStrictReservedWord;
    var reservedWords = {
      keyword: [
        "break",
        "case",
        "catch",
        "continue",
        "debugger",
        "default",
        "do",
        "else",
        "finally",
        "for",
        "function",
        "if",
        "return",
        "switch",
        "throw",
        "try",
        "var",
        "const",
        "while",
        "with",
        "new",
        "this",
        "super",
        "class",
        "extends",
        "export",
        "import",
        "null",
        "true",
        "false",
        "in",
        "instanceof",
        "typeof",
        "void",
        "delete"
      ],
      strict: [
        "implements",
        "interface",
        "let",
        "package",
        "private",
        "protected",
        "public",
        "static",
        "yield"
      ],
      strictBind: [
        "eval",
        "arguments"
      ]
    };
    var keywords = new Set(reservedWords.keyword);
    var reservedWordsStrictSet = new Set(reservedWords.strict);
    var reservedWordsStrictBindSet = new Set(reservedWords.strictBind);
    function isReservedWord(word, inModule) {
      return inModule && word === "await" || word === "enum";
    }
    function isStrictReservedWord(word, inModule) {
      return isReservedWord(word, inModule) || reservedWordsStrictSet.has(word);
    }
    function isStrictBindOnlyReservedWord(word) {
      return reservedWordsStrictBindSet.has(word);
    }
    function isStrictBindReservedWord(word, inModule) {
      return isStrictReservedWord(word, inModule) || isStrictBindOnlyReservedWord(word);
    }
    function isKeyword(word) {
      return keywords.has(word);
    }
  }
});

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/@babel/helper-validator-identifier/7.27.1/lib/index.js
var require_lib = __commonJS({
  "../../../../Library/Caches/deno/npm/registry.npmjs.org/@babel/helper-validator-identifier/7.27.1/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "isIdentifierChar", {
      enumerable: true,
      get: function() {
        return _identifier.isIdentifierChar;
      }
    });
    Object.defineProperty(exports, "isIdentifierName", {
      enumerable: true,
      get: function() {
        return _identifier.isIdentifierName;
      }
    });
    Object.defineProperty(exports, "isIdentifierStart", {
      enumerable: true,
      get: function() {
        return _identifier.isIdentifierStart;
      }
    });
    Object.defineProperty(exports, "isKeyword", {
      enumerable: true,
      get: function() {
        return _keyword.isKeyword;
      }
    });
    Object.defineProperty(exports, "isReservedWord", {
      enumerable: true,
      get: function() {
        return _keyword.isReservedWord;
      }
    });
    Object.defineProperty(exports, "isStrictBindOnlyReservedWord", {
      enumerable: true,
      get: function() {
        return _keyword.isStrictBindOnlyReservedWord;
      }
    });
    Object.defineProperty(exports, "isStrictBindReservedWord", {
      enumerable: true,
      get: function() {
        return _keyword.isStrictBindReservedWord;
      }
    });
    Object.defineProperty(exports, "isStrictReservedWord", {
      enumerable: true,
      get: function() {
        return _keyword.isStrictReservedWord;
      }
    });
    var _identifier = require_identifier();
    var _keyword = require_keyword();
  }
});

// deno:https://jsr.io/@std/internal/1.0.12/_os.ts
function checkWindows() {
  const global2 = globalThis;
  const os = global2.Deno?.build?.os;
  return typeof os === "string" ? os === "windows" : global2.navigator?.platform?.startsWith("Win") ?? global2.process?.platform?.startsWith("win") ?? false;
}

// deno:https://jsr.io/@std/internal/1.0.12/os.ts
var isWindows = checkWindows();

// deno:https://jsr.io/@std/path/1.1.2/_common/assert_path.ts
function assertPath(path) {
  if (typeof path !== "string") {
    throw new TypeError(`Path must be a string, received "${JSON.stringify(path)}"`);
  }
}

// deno:https://jsr.io/@std/path/1.1.2/_common/normalize.ts
function assertArg(path) {
  assertPath(path);
  if (path.length === 0) return ".";
}

// deno:https://jsr.io/@std/path/1.1.2/_common/constants.ts
var CHAR_UPPERCASE_A = 65;
var CHAR_LOWERCASE_A = 97;
var CHAR_UPPERCASE_Z = 90;
var CHAR_LOWERCASE_Z = 122;
var CHAR_DOT = 46;
var CHAR_FORWARD_SLASH = 47;
var CHAR_BACKWARD_SLASH = 92;
var CHAR_COLON = 58;

// deno:https://jsr.io/@std/path/1.1.2/_common/normalize_string.ts
function normalizeString(path, allowAboveRoot, separator, isPathSeparator2) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let code2;
  for (let i = 0; i <= path.length; ++i) {
    if (i < path.length) code2 = path.charCodeAt(i);
    else if (isPathSeparator2(code2)) break;
    else code2 = CHAR_FORWARD_SLASH;
    if (isPathSeparator2(code2)) {
      if (lastSlash === i - 1 || dots === 1) {
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== CHAR_DOT || res.charCodeAt(res.length - 2) !== CHAR_DOT) {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf(separator);
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
            }
            lastSlash = i;
            dots = 0;
            continue;
          } else if (res.length === 2 || res.length === 1) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0) res += `${separator}..`;
          else res = "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) res += separator + path.slice(lastSlash + 1, i);
        else res = path.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code2 === CHAR_DOT && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}

// deno:https://jsr.io/@std/path/1.1.2/posix/_util.ts
function isPosixPathSeparator(code2) {
  return code2 === CHAR_FORWARD_SLASH;
}

// deno:https://jsr.io/@std/path/1.1.2/_common/from_file_url.ts
function assertArg2(url) {
  url = url instanceof URL ? url : new URL(url);
  if (url.protocol !== "file:") {
    throw new TypeError(`URL must be a file URL: received "${url.protocol}"`);
  }
  return url;
}

// deno:https://jsr.io/@std/path/1.1.2/posix/from_file_url.ts
function fromFileUrl(url) {
  url = assertArg2(url);
  return decodeURIComponent(url.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"));
}

// deno:https://jsr.io/@std/path/1.1.2/posix/normalize.ts
function normalize(path) {
  if (path instanceof URL) {
    path = fromFileUrl(path);
  }
  assertArg(path);
  const isAbsolute3 = isPosixPathSeparator(path.charCodeAt(0));
  const trailingSeparator = isPosixPathSeparator(path.charCodeAt(path.length - 1));
  path = normalizeString(path, !isAbsolute3, "/", isPosixPathSeparator);
  if (path.length === 0 && !isAbsolute3) path = ".";
  if (path.length > 0 && trailingSeparator) path += "/";
  if (isAbsolute3) return `/${path}`;
  return path;
}

// deno:https://jsr.io/@std/path/1.1.2/windows/_util.ts
function isPathSeparator(code2) {
  return code2 === CHAR_FORWARD_SLASH || code2 === CHAR_BACKWARD_SLASH;
}
function isWindowsDeviceRoot(code2) {
  return code2 >= CHAR_LOWERCASE_A && code2 <= CHAR_LOWERCASE_Z || code2 >= CHAR_UPPERCASE_A && code2 <= CHAR_UPPERCASE_Z;
}

// deno:https://jsr.io/@std/path/1.1.2/windows/from_file_url.ts
function fromFileUrl2(url) {
  url = assertArg2(url);
  let path = decodeURIComponent(url.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
  if (url.hostname !== "") {
    path = `\\\\${url.hostname}${path}`;
  }
  return path;
}

// deno:https://jsr.io/@std/path/1.1.2/windows/normalize.ts
function normalize2(path) {
  if (path instanceof URL) {
    path = fromFileUrl2(path);
  }
  assertArg(path);
  const len = path.length;
  let rootEnd = 0;
  let device;
  let isAbsolute3 = false;
  const code2 = path.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator(code2)) {
      isAbsolute3 = true;
      if (isPathSeparator(path.charCodeAt(1))) {
        let j = 2;
        let last = j;
        for (; j < len; ++j) {
          if (isPathSeparator(path.charCodeAt(j))) break;
        }
        if (j < len && j !== last) {
          const firstPart = path.slice(last, j);
          last = j;
          for (; j < len; ++j) {
            if (!isPathSeparator(path.charCodeAt(j))) break;
          }
          if (j < len && j !== last) {
            last = j;
            for (; j < len; ++j) {
              if (isPathSeparator(path.charCodeAt(j))) break;
            }
            if (j === len) {
              return `\\\\${firstPart}\\${path.slice(last)}\\`;
            } else if (j !== last) {
              device = `\\\\${firstPart}\\${path.slice(last, j)}`;
              rootEnd = j;
            }
          }
        }
      } else {
        rootEnd = 1;
      }
    } else if (isWindowsDeviceRoot(code2)) {
      if (path.charCodeAt(1) === CHAR_COLON) {
        device = path.slice(0, 2);
        rootEnd = 2;
        if (len > 2) {
          if (isPathSeparator(path.charCodeAt(2))) {
            isAbsolute3 = true;
            rootEnd = 3;
          }
        }
      }
    }
  } else if (isPathSeparator(code2)) {
    return "\\";
  }
  let tail;
  if (rootEnd < len) {
    tail = normalizeString(path.slice(rootEnd), !isAbsolute3, "\\", isPathSeparator);
  } else {
    tail = "";
  }
  if (tail.length === 0 && !isAbsolute3) tail = ".";
  if (tail.length > 0 && isPathSeparator(path.charCodeAt(len - 1))) {
    tail += "\\";
  }
  if (device === void 0) {
    if (isAbsolute3) {
      if (tail.length > 0) return `\\${tail}`;
      else return "\\";
    }
    return tail;
  } else if (isAbsolute3) {
    if (tail.length > 0) return `${device}\\${tail}`;
    else return `${device}\\`;
  }
  return device + tail;
}

// deno:https://jsr.io/@std/path/1.1.2/normalize.ts
function normalize3(path) {
  return isWindows ? normalize2(path) : normalize(path);
}

// deno:https://jsr.io/@skmtc/core/0.0.964/dsl/Import.ts
var Import = class {
  /** The module path to import from */
  module;
  /** Array of parsed import names with potential aliases */
  importNames;
  /**
   * Creates a new Import instance.
   * 
   * @param args - Import configuration
   * @param args.module - The module path to import from (e.g., './types', 'react')
   * @param args.importNames - Array of import names, can be strings or alias objects
   * 
   * @example
   * ```typescript
   * const importStatement = new Import({
   *   module: './models/User',
   *   importNames: [
   *     'User',                           // Simple import
   *     { 'UserType': 'IUser' },         // Aliased import 
   *     'createUser'                     // Another simple import
   *   ]
   * });
   * ```
   */
  constructor({ module, importNames }) {
    this.module = module;
    this.importNames = importNames.map((importName) => new ImportName(importName));
  }
  /**
   * Converts the import to a record format.
   * 
   * This method creates a record representation where the module path is the key
   * and the import names are the value. Useful for serialization or when working
   * with import maps.
   * 
   * @returns A record with module as key and import names as value
   * 
   * @example
   * ```typescript
   * const importStatement = new Import({
   *   module: './types',
   *   importNames: ['User', { 'Product': 'IProduct' }]
   * });
   * 
   * const record = importStatement.toRecord();
   * console.log(record);
   * // {
   * //   './types': ['User', { 'Product': 'IProduct' }]
   * // }
   * ```
   */
  toRecord() {
    return {
      [this.module]: this.importNames.map(({ name, alias }) => alias ? {
        [name]: alias
      } : name)
    };
  }
  /**
   * Generates the TypeScript import statement string.
   * 
   * This method produces a properly formatted ES6 import statement that can be
   * written directly to a TypeScript file. It handles both simple and aliased
   * imports correctly.
   * 
   * @returns The formatted import statement string
   * 
   * @example
   * ```typescript
   * const basicImport = new Import({
   *   module: './utils',
   *   importNames: ['formatDate', 'parseJson']
   * });
   * 
   * console.log(basicImport.toString());
   * // import { formatDate, parseJson } from './utils'
   * 
   * const aliasedImport = new Import({
   *   module: 'lodash',
   *   importNames: [{ 'isEqual': 'deepEqual' }, 'cloneDeep']
   * });
   * 
   * console.log(aliasedImport.toString());
   * // import { isEqual as deepEqual, cloneDeep } from 'lodash'
   * ```
   * 
   * @todo Move syntax to typescript package to enable language-agnostic use
   */
  toString() {
    return `import { ${this.importNames.join(", ")} } from '${this.module}'`;
  }
};
var ImportName = class {
  /** The original name being imported */
  name;
  /** The alias to use (if any) */
  alias;
  /**
   * Creates a new ImportName instance.
   * 
   * @param name - Either a string for simple imports or an object for aliased imports
   * 
   * @example Simple import
   * ```typescript
   * const importName = new ImportName('User');
   * // Results in: User
   * ```
   * 
   * @example Aliased import
   * ```typescript
   * const importName = new ImportName({ 'UserInterface': 'IUser' });
   * // Results in: UserInterface as IUser
   * ```
   */
  constructor(name) {
    if (typeof name === "string") {
      this.name = name;
    } else {
      const [n, alias] = Object.entries(name)[0];
      this.name = n;
      this.alias = alias;
    }
  }
  /**
   * Generates the string representation of the import name.
   * 
   * This method creates the appropriate import specifier syntax,
   * either a simple name or an aliased import using TypeScript's
   * 'as' keyword.
   * 
   * @returns The formatted import specifier string
   * 
   * @example Simple import
   * ```typescript
   * const simple = new ImportName('useState');
   * console.log(simple.toString()); // 'useState'
   * ```
   * 
   * @example Aliased import
   * ```typescript
   * const aliased = new ImportName({ 'Component': 'ReactComponent' });
   * console.log(aliased.toString()); // 'Component as ReactComponent'
   * ```
   */
  toString() {
    return this.alias ? `${this.name} as ${this.alias}` : this.name;
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/dsl/ContentBase.ts
var ContentBase = class {
  /** The generation context providing access to OAS objects and utilities */
  context;
  /** Whether this generator has been skipped */
  skipped = false;
  /** Optional generator key for identification and tracking */
  generatorKey;
  /**
   * Creates a new ContentBase instance.
   *
   * @param args - Construction arguments
   * @param args.context - The generation context
   * @param args.generatorKey - Optional generator key
   */
  constructor({ context, generatorKey }) {
    this.context = context;
    this.generatorKey = generatorKey;
  }
  /**
   * Registers generated artifacts with the rendering pipeline.
   *
   * This method is called by generator implementations to add files,
   * JSON artifacts, or other content to the generation output.
   *
   * @param args - The artifacts to register
   * @param args.file - Optional file to register
   * @param args.jsonFile - Optional JSON file to register
   *
   * @example Registering a file
   * ```typescript
   * const file = new File({
   *   context: this.context,
   *   path: './output.ts',
   *   content: 'export const value = 42;'
   * });
   *
   * this.register({ file });
   * ```
   *
   * @example Registering JSON data
   * ```typescript
   * const jsonFile = new JsonFile({
   *   context: this.context,
   *   path: './config.json',
   *   data: { version: '1.0.0', features: ['api'] }
   * });
   *
   * this.register({ jsonFile });
   * ```
   */
  register(args) {
    this.context.register(args);
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/typescript/withDescription.ts
var withDescription = (value, { description }) => {
  return description ? `/** ${description} */
${value}` : `${value}`;
};

// deno:https://jsr.io/@skmtc/core/0.0.964/dsl/Definition.ts
var Definition = class extends ContentBase {
  /** The identifier for this definition */
  identifier;
  /** Optional description for JSDoc comments */
  description;
  /** The generated value content */
  value;
  /** Whether to skip the export keyword */
  noExport;
  /**
   * Creates a new Definition instance.
   *
   * @param args - Definition configuration
   * @param args.context - Generation context for pipeline access
   * @param args.identifier - The identifier (name and type info) for this definition
   * @param args.value - The generated content value
   * @param args.description - Optional description for JSDoc comments
   * @param args.noExport - Whether to omit the export keyword (default: false)
   *
   * @example
   * ```typescript
   * const constant = new Definition({
   *   context: generateContext,
   *   identifier: Identifier.createVariable('API_BASE_URL', 'string'),
   *   description: 'Base URL for all API requests',
   *   value: {
   *     generatorKey: 'constants',
   *     content: "'https://api.example.com'"
   *   }
   * });
   * ```
   */
  constructor({ context, identifier, value, description, noExport }) {
    super({
      context,
      generatorKey: value.generatorKey
    });
    this.value = value;
    this.identifier = identifier;
    this.description = description;
    this.noExport = noExport;
  }
  /**
   * Generates the complete TypeScript definition code.
   *
   * This method produces a properly formatted TypeScript definition with:
   * - Optional JSDoc comments from the description
   * - Export keyword (unless noExport is true)
   * - Entity type (const, type, function, etc.)
   * - Identifier with optional type annotation
   * - Generated value content
   *
   * The output follows TypeScript syntax conventions and can be written
   * directly to a .ts file.
   *
   * @returns The complete TypeScript definition as a string
   *
   * @example Type definition
   * ```typescript
   * const typeDef = new Definition({
   *   context,
   *   identifier: Identifier.createType('Status'),
   *   description: 'Possible status values',
   *   value: { generatorKey: 'types', content: "'pending' | 'complete' | 'failed'" }
   * });
   *
   * console.log(typeDef.toString());
   * //
   * // Possible status values
   * //
   * // export type Status = 'pending' | 'complete' | 'failed';
   * ```
   *
   * @example Constant definition
   * ```typescript
   * const constDef = new Definition({
   *   context,
   *   identifier: Identifier.createVariable('DEFAULT_TIMEOUT', 'number'),
   *   value: { generatorKey: 'config', content: '5000' }
   * });
   *
   * console.log(constDef.toString());
   * // export const DEFAULT_TIMEOUT: number = 5000;
   * ```
   *
   * @todo Move syntax to typescript package to enable language-agnostic use
   */
  toString() {
    const identifier = this.identifier.typeName ? `${this.identifier.name}: ${this.identifier.typeName}` : this.identifier.name;
    return withDescription(`${this.noExport ? "" : "export "}${this.identifier.entityType} ${identifier} = ${this.value};
`, {
      description: this.description
    });
  }
};

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/valibot/1.1.0/dist/index.js
var store;
// @__NO_SIDE_EFFECTS__
function getGlobalConfig(config2) {
  return {
    lang: config2?.lang ?? store?.lang,
    message: config2?.message,
    abortEarly: config2?.abortEarly ?? store?.abortEarly,
    abortPipeEarly: config2?.abortPipeEarly ?? store?.abortPipeEarly
  };
}
var store2;
// @__NO_SIDE_EFFECTS__
function getGlobalMessage(lang) {
  return store2?.get(lang);
}
var store3;
// @__NO_SIDE_EFFECTS__
function getSchemaMessage(lang) {
  return store3?.get(lang);
}
var store4;
// @__NO_SIDE_EFFECTS__
function getSpecificMessage(reference, lang) {
  return store4?.get(reference)?.get(lang);
}
// @__NO_SIDE_EFFECTS__
function _stringify(input) {
  const type = typeof input;
  if (type === "string") {
    return `"${input}"`;
  }
  if (type === "number" || type === "bigint" || type === "boolean") {
    return `${input}`;
  }
  if (type === "object" || type === "function") {
    return (input && Object.getPrototypeOf(input)?.constructor?.name) ?? "null";
  }
  return type;
}
function _addIssue(context, label, dataset, config2, other) {
  const input = other && "input" in other ? other.input : dataset.value;
  const expected = other?.expected ?? context.expects ?? null;
  const received = other?.received ?? /* @__PURE__ */ _stringify(input);
  const issue = {
    kind: context.kind,
    type: context.type,
    input,
    expected,
    received,
    message: `Invalid ${label}: ${expected ? `Expected ${expected} but r` : "R"}eceived ${received}`,
    requirement: context.requirement,
    path: other?.path,
    issues: other?.issues,
    lang: config2.lang,
    abortEarly: config2.abortEarly,
    abortPipeEarly: config2.abortPipeEarly
  };
  const isSchema = context.kind === "schema";
  const message2 = other?.message ?? context.message ?? /* @__PURE__ */ getSpecificMessage(context.reference, issue.lang) ?? (isSchema ? /* @__PURE__ */ getSchemaMessage(issue.lang) : null) ?? config2.message ?? /* @__PURE__ */ getGlobalMessage(issue.lang);
  if (message2 !== void 0) {
    issue.message = typeof message2 === "function" ? (
      // @ts-expect-error
      message2(issue)
    ) : message2;
  }
  if (isSchema) {
    dataset.typed = false;
  }
  if (dataset.issues) {
    dataset.issues.push(issue);
  } else {
    dataset.issues = [
      issue
    ];
  }
}
// @__NO_SIDE_EFFECTS__
function _getStandardProps(context) {
  return {
    version: 1,
    vendor: "valibot",
    validate(value2) {
      return context["~run"]({
        value: value2
      }, /* @__PURE__ */ getGlobalConfig());
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _isValidObjectKey(object2, key) {
  return Object.hasOwn(object2, key) && key !== "__proto__" && key !== "prototype" && key !== "constructor";
}
// @__NO_SIDE_EFFECTS__
function _joinExpects(values2, separator) {
  const list = [
    ...new Set(values2)
  ];
  if (list.length > 1) {
    return `(${list.join(` ${separator} `)})`;
  }
  return list[0] ?? "never";
}
var ValiError = class extends Error {
  /**
   * Creates a Valibot error with useful information.
   *
   * @param issues The error issues.
   */
  constructor(issues) {
    super(issues[0].message);
    this.name = "ValiError";
    this.issues = issues;
  }
};
// @__NO_SIDE_EFFECTS__
function integer(message2) {
  return {
    kind: "validation",
    type: "integer",
    reference: integer,
    async: false,
    expects: null,
    requirement: Number.isInteger,
    message: message2,
    "~run"(dataset, config2) {
      if (dataset.typed && !this.requirement(dataset.value)) {
        _addIssue(this, "integer", dataset, config2);
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function getFallback(schema, dataset, config2) {
  return typeof schema.fallback === "function" ? (
    // @ts-expect-error
    schema.fallback(dataset, config2)
  ) : (
    // @ts-expect-error
    schema.fallback
  );
}
// @__NO_SIDE_EFFECTS__
function getDefault(schema, dataset, config2) {
  return typeof schema.default === "function" ? (
    // @ts-expect-error
    schema.default(dataset, config2)
  ) : (
    // @ts-expect-error
    schema.default
  );
}
// @__NO_SIDE_EFFECTS__
function is(schema, input) {
  return !schema["~run"]({
    value: input
  }, {
    abortEarly: true
  }).issues;
}
// @__NO_SIDE_EFFECTS__
function any() {
  return {
    kind: "schema",
    type: "any",
    reference: any,
    expects: "any",
    async: false,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset) {
      dataset.typed = true;
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function array(item, message2) {
  return {
    kind: "schema",
    type: "array",
    reference: array,
    expects: "Array",
    async: false,
    item,
    message: message2,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      const input = dataset.value;
      if (Array.isArray(input)) {
        dataset.typed = true;
        dataset.value = [];
        for (let key = 0; key < input.length; key++) {
          const value2 = input[key];
          const itemDataset = this.item["~run"]({
            value: value2
          }, config2);
          if (itemDataset.issues) {
            const pathItem = {
              type: "array",
              origin: "value",
              input,
              key,
              value: value2
            };
            for (const issue of itemDataset.issues) {
              if (issue.path) {
                issue.path.unshift(pathItem);
              } else {
                issue.path = [
                  pathItem
                ];
              }
              dataset.issues?.push(issue);
            }
            if (!dataset.issues) {
              dataset.issues = itemDataset.issues;
            }
            if (config2.abortEarly) {
              dataset.typed = false;
              break;
            }
          }
          if (!itemDataset.typed) {
            dataset.typed = false;
          }
          dataset.value.push(itemDataset.value);
        }
      } else {
        _addIssue(this, "type", dataset, config2);
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function boolean(message2) {
  return {
    kind: "schema",
    type: "boolean",
    reference: boolean,
    expects: "boolean",
    async: false,
    message: message2,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      if (typeof dataset.value === "boolean") {
        dataset.typed = true;
      } else {
        _addIssue(this, "type", dataset, config2);
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function enum_(enum__, message2) {
  const options = [];
  for (const key in enum__) {
    if (`${+key}` !== key || typeof enum__[key] !== "string" || !Object.is(enum__[enum__[key]], +key)) {
      options.push(enum__[key]);
    }
  }
  return {
    kind: "schema",
    type: "enum",
    reference: enum_,
    expects: /* @__PURE__ */ _joinExpects(options.map(_stringify), "|"),
    async: false,
    enum: enum__,
    options,
    message: message2,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      if (this.options.includes(dataset.value)) {
        dataset.typed = true;
      } else {
        _addIssue(this, "type", dataset, config2);
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function lazy(getter) {
  return {
    kind: "schema",
    type: "lazy",
    reference: lazy,
    expects: "unknown",
    async: false,
    getter,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      return this.getter(dataset.value)["~run"](dataset, config2);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function literal(literal_, message2) {
  return {
    kind: "schema",
    type: "literal",
    reference: literal,
    expects: /* @__PURE__ */ _stringify(literal_),
    async: false,
    literal: literal_,
    message: message2,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      if (dataset.value === this.literal) {
        dataset.typed = true;
      } else {
        _addIssue(this, "type", dataset, config2);
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function looseObject(entries2, message2) {
  return {
    kind: "schema",
    type: "loose_object",
    reference: looseObject,
    expects: "Object",
    async: false,
    entries: entries2,
    message: message2,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      const input = dataset.value;
      if (input && typeof input === "object") {
        dataset.typed = true;
        dataset.value = {};
        for (const key in this.entries) {
          const valueSchema = this.entries[key];
          if (key in input || (valueSchema.type === "exact_optional" || valueSchema.type === "optional" || valueSchema.type === "nullish") && // @ts-expect-error
          valueSchema.default !== void 0) {
            const value2 = key in input ? (
              // @ts-expect-error
              input[key]
            ) : /* @__PURE__ */ getDefault(valueSchema);
            const valueDataset = valueSchema["~run"]({
              value: value2
            }, config2);
            if (valueDataset.issues) {
              const pathItem = {
                type: "object",
                origin: "value",
                input,
                key,
                value: value2
              };
              for (const issue of valueDataset.issues) {
                if (issue.path) {
                  issue.path.unshift(pathItem);
                } else {
                  issue.path = [
                    pathItem
                  ];
                }
                dataset.issues?.push(issue);
              }
              if (!dataset.issues) {
                dataset.issues = valueDataset.issues;
              }
              if (config2.abortEarly) {
                dataset.typed = false;
                break;
              }
            }
            if (!valueDataset.typed) {
              dataset.typed = false;
            }
            dataset.value[key] = valueDataset.value;
          } else if (valueSchema.fallback !== void 0) {
            dataset.value[key] = /* @__PURE__ */ getFallback(valueSchema);
          } else if (valueSchema.type !== "exact_optional" && valueSchema.type !== "optional" && valueSchema.type !== "nullish") {
            _addIssue(this, "key", dataset, config2, {
              input: void 0,
              expected: `"${key}"`,
              path: [
                {
                  type: "object",
                  origin: "key",
                  input,
                  key,
                  // @ts-expect-error
                  value: input[key]
                }
              ]
            });
            if (config2.abortEarly) {
              break;
            }
          }
        }
        if (!dataset.issues || !config2.abortEarly) {
          for (const key in input) {
            if (/* @__PURE__ */ _isValidObjectKey(input, key) && !(key in this.entries)) {
              dataset.value[key] = input[key];
            }
          }
        }
      } else {
        _addIssue(this, "type", dataset, config2);
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function null_(message2) {
  return {
    kind: "schema",
    type: "null",
    reference: null_,
    expects: "null",
    async: false,
    message: message2,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      if (dataset.value === null) {
        dataset.typed = true;
      } else {
        _addIssue(this, "type", dataset, config2);
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function number(message2) {
  return {
    kind: "schema",
    type: "number",
    reference: number,
    expects: "number",
    async: false,
    message: message2,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      if (typeof dataset.value === "number" && !isNaN(dataset.value)) {
        dataset.typed = true;
      } else {
        _addIssue(this, "type", dataset, config2);
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function object(entries2, message2) {
  return {
    kind: "schema",
    type: "object",
    reference: object,
    expects: "Object",
    async: false,
    entries: entries2,
    message: message2,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      const input = dataset.value;
      if (input && typeof input === "object") {
        dataset.typed = true;
        dataset.value = {};
        for (const key in this.entries) {
          const valueSchema = this.entries[key];
          if (key in input || (valueSchema.type === "exact_optional" || valueSchema.type === "optional" || valueSchema.type === "nullish") && // @ts-expect-error
          valueSchema.default !== void 0) {
            const value2 = key in input ? (
              // @ts-expect-error
              input[key]
            ) : /* @__PURE__ */ getDefault(valueSchema);
            const valueDataset = valueSchema["~run"]({
              value: value2
            }, config2);
            if (valueDataset.issues) {
              const pathItem = {
                type: "object",
                origin: "value",
                input,
                key,
                value: value2
              };
              for (const issue of valueDataset.issues) {
                if (issue.path) {
                  issue.path.unshift(pathItem);
                } else {
                  issue.path = [
                    pathItem
                  ];
                }
                dataset.issues?.push(issue);
              }
              if (!dataset.issues) {
                dataset.issues = valueDataset.issues;
              }
              if (config2.abortEarly) {
                dataset.typed = false;
                break;
              }
            }
            if (!valueDataset.typed) {
              dataset.typed = false;
            }
            dataset.value[key] = valueDataset.value;
          } else if (valueSchema.fallback !== void 0) {
            dataset.value[key] = /* @__PURE__ */ getFallback(valueSchema);
          } else if (valueSchema.type !== "exact_optional" && valueSchema.type !== "optional" && valueSchema.type !== "nullish") {
            _addIssue(this, "key", dataset, config2, {
              input: void 0,
              expected: `"${key}"`,
              path: [
                {
                  type: "object",
                  origin: "key",
                  input,
                  key,
                  // @ts-expect-error
                  value: input[key]
                }
              ]
            });
            if (config2.abortEarly) {
              break;
            }
          }
        }
      } else {
        _addIssue(this, "type", dataset, config2);
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function optional(wrapped, default_) {
  return {
    kind: "schema",
    type: "optional",
    reference: optional,
    expects: `(${wrapped.expects} | undefined)`,
    async: false,
    wrapped,
    default: default_,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      if (dataset.value === void 0) {
        if (this.default !== void 0) {
          dataset.value = /* @__PURE__ */ getDefault(this, dataset, config2);
        }
        if (dataset.value === void 0) {
          dataset.typed = true;
          return dataset;
        }
      }
      return this.wrapped["~run"](dataset, config2);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function picklist(options, message2) {
  return {
    kind: "schema",
    type: "picklist",
    reference: picklist,
    expects: /* @__PURE__ */ _joinExpects(options.map(_stringify), "|"),
    async: false,
    options,
    message: message2,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      if (this.options.includes(dataset.value)) {
        dataset.typed = true;
      } else {
        _addIssue(this, "type", dataset, config2);
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function record(key, value2, message2) {
  return {
    kind: "schema",
    type: "record",
    reference: record,
    expects: "Object",
    async: false,
    key,
    value: value2,
    message: message2,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      const input = dataset.value;
      if (input && typeof input === "object") {
        dataset.typed = true;
        dataset.value = {};
        for (const entryKey in input) {
          if (/* @__PURE__ */ _isValidObjectKey(input, entryKey)) {
            const entryValue = input[entryKey];
            const keyDataset = this.key["~run"]({
              value: entryKey
            }, config2);
            if (keyDataset.issues) {
              const pathItem = {
                type: "object",
                origin: "key",
                input,
                key: entryKey,
                value: entryValue
              };
              for (const issue of keyDataset.issues) {
                issue.path = [
                  pathItem
                ];
                dataset.issues?.push(issue);
              }
              if (!dataset.issues) {
                dataset.issues = keyDataset.issues;
              }
              if (config2.abortEarly) {
                dataset.typed = false;
                break;
              }
            }
            const valueDataset = this.value["~run"]({
              value: entryValue
            }, config2);
            if (valueDataset.issues) {
              const pathItem = {
                type: "object",
                origin: "value",
                input,
                key: entryKey,
                value: entryValue
              };
              for (const issue of valueDataset.issues) {
                if (issue.path) {
                  issue.path.unshift(pathItem);
                } else {
                  issue.path = [
                    pathItem
                  ];
                }
                dataset.issues?.push(issue);
              }
              if (!dataset.issues) {
                dataset.issues = valueDataset.issues;
              }
              if (config2.abortEarly) {
                dataset.typed = false;
                break;
              }
            }
            if (!keyDataset.typed || !valueDataset.typed) {
              dataset.typed = false;
            }
            if (keyDataset.typed) {
              dataset.value[keyDataset.value] = valueDataset.value;
            }
          }
        }
      } else {
        _addIssue(this, "type", dataset, config2);
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function string(message2) {
  return {
    kind: "schema",
    type: "string",
    reference: string,
    expects: "string",
    async: false,
    message: message2,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      if (typeof dataset.value === "string") {
        dataset.typed = true;
      } else {
        _addIssue(this, "type", dataset, config2);
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function undefined_(message2) {
  return {
    kind: "schema",
    type: "undefined",
    reference: undefined_,
    expects: "undefined",
    async: false,
    message: message2,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      if (dataset.value === void 0) {
        dataset.typed = true;
      } else {
        _addIssue(this, "type", dataset, config2);
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _subIssues(datasets) {
  let issues;
  if (datasets) {
    for (const dataset of datasets) {
      if (issues) {
        issues.push(...dataset.issues);
      } else {
        issues = dataset.issues;
      }
    }
  }
  return issues;
}
// @__NO_SIDE_EFFECTS__
function union(options, message2) {
  return {
    kind: "schema",
    type: "union",
    reference: union,
    expects: /* @__PURE__ */ _joinExpects(options.map((option) => option.expects), "|"),
    async: false,
    options,
    message: message2,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      let validDataset;
      let typedDatasets;
      let untypedDatasets;
      for (const schema of this.options) {
        const optionDataset = schema["~run"]({
          value: dataset.value
        }, config2);
        if (optionDataset.typed) {
          if (optionDataset.issues) {
            if (typedDatasets) {
              typedDatasets.push(optionDataset);
            } else {
              typedDatasets = [
                optionDataset
              ];
            }
          } else {
            validDataset = optionDataset;
            break;
          }
        } else {
          if (untypedDatasets) {
            untypedDatasets.push(optionDataset);
          } else {
            untypedDatasets = [
              optionDataset
            ];
          }
        }
      }
      if (validDataset) {
        return validDataset;
      }
      if (typedDatasets) {
        if (typedDatasets.length === 1) {
          return typedDatasets[0];
        }
        _addIssue(this, "type", dataset, config2, {
          issues: /* @__PURE__ */ _subIssues(typedDatasets)
        });
        dataset.typed = true;
      } else if (untypedDatasets?.length === 1) {
        return untypedDatasets[0];
      } else {
        _addIssue(this, "type", dataset, config2, {
          issues: /* @__PURE__ */ _subIssues(untypedDatasets)
        });
      }
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function unknown() {
  return {
    kind: "schema",
    type: "unknown",
    reference: unknown,
    expects: "unknown",
    async: false,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset) {
      dataset.typed = true;
      return dataset;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function variant(key, options, message2) {
  return {
    kind: "schema",
    type: "variant",
    reference: variant,
    expects: "Object",
    async: false,
    key,
    options,
    message: message2,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      const input = dataset.value;
      if (input && typeof input === "object") {
        let outputDataset;
        let maxDiscriminatorPriority = 0;
        let invalidDiscriminatorKey = this.key;
        let expectedDiscriminators = [];
        const parseOptions = (variant2, allKeys) => {
          for (const schema of variant2.options) {
            if (schema.type === "variant") {
              parseOptions(schema, new Set(allKeys).add(schema.key));
            } else {
              let keysAreValid = true;
              let currentPriority = 0;
              for (const currentKey of allKeys) {
                const discriminatorSchema = schema.entries[currentKey];
                if (currentKey in input ? discriminatorSchema["~run"](
                  // @ts-expect-error
                  {
                    typed: false,
                    value: input[currentKey]
                  },
                  {
                    abortEarly: true
                  }
                ).issues : discriminatorSchema.type !== "exact_optional" && discriminatorSchema.type !== "optional" && discriminatorSchema.type !== "nullish") {
                  keysAreValid = false;
                  if (invalidDiscriminatorKey !== currentKey && (maxDiscriminatorPriority < currentPriority || maxDiscriminatorPriority === currentPriority && currentKey in input && !(invalidDiscriminatorKey in input))) {
                    maxDiscriminatorPriority = currentPriority;
                    invalidDiscriminatorKey = currentKey;
                    expectedDiscriminators = [];
                  }
                  if (invalidDiscriminatorKey === currentKey) {
                    expectedDiscriminators.push(schema.entries[currentKey].expects);
                  }
                  break;
                }
                currentPriority++;
              }
              if (keysAreValid) {
                const optionDataset = schema["~run"]({
                  value: input
                }, config2);
                if (!outputDataset || !outputDataset.typed && optionDataset.typed) {
                  outputDataset = optionDataset;
                }
              }
            }
            if (outputDataset && !outputDataset.issues) {
              break;
            }
          }
        };
        parseOptions(this, /* @__PURE__ */ new Set([
          this.key
        ]));
        if (outputDataset) {
          return outputDataset;
        }
        _addIssue(this, "type", dataset, config2, {
          // @ts-expect-error
          input: input[invalidDiscriminatorKey],
          expected: /* @__PURE__ */ _joinExpects(expectedDiscriminators, "|"),
          path: [
            {
              type: "object",
              origin: "value",
              input,
              key: invalidDiscriminatorKey,
              // @ts-expect-error
              value: input[invalidDiscriminatorKey]
            }
          ]
        });
      } else {
        _addIssue(this, "type", dataset, config2);
      }
      return dataset;
    }
  };
}
function parse(schema, input, config2) {
  const dataset = schema["~run"]({
    value: input
  }, /* @__PURE__ */ getGlobalConfig(config2));
  if (dataset.issues) {
    throw new ValiError(dataset.issues);
  }
  return dataset.value;
}
// @__NO_SIDE_EFFECTS__
function pipe(...pipe2) {
  return {
    ...pipe2[0],
    pipe: pipe2,
    get "~standard"() {
      return /* @__PURE__ */ _getStandardProps(this);
    },
    "~run"(dataset, config2) {
      for (const item of pipe2) {
        if (item.kind !== "metadata") {
          if (dataset.issues && (item.kind === "schema" || item.kind === "transformation")) {
            dataset.typed = false;
            break;
          }
          if (!dataset.issues || !config2.abortEarly && !config2.abortPipeEarly) {
            dataset = item["~run"](dataset, config2);
          }
        }
      }
      return dataset;
    }
  };
}

// deno:https://jsr.io/@skmtc/core/0.0.964/types/Method.ts
var methodValues = [
  "get",
  "put",
  "post",
  "delete",
  "options",
  "head",
  "patch",
  "trace"
];
var method = union([
  literal("get"),
  literal("post"),
  literal("put"),
  literal("patch"),
  literal("delete"),
  literal("head"),
  literal("options"),
  literal("trace")
]);
var methods = array(method);

// deno:https://jsr.io/@skmtc/core/0.0.964/dsl/GeneratorKeys.ts
var toOperationGeneratorKey = ({ generatorId, ...rest }) => {
  const { path, method: method2 } = "operation" in rest ? rest.operation : rest;
  const nakedKey = `${generatorId}|${path}|${method2}`;
  return nakedKey;
};
var toModelGeneratorKey = ({ generatorId, refName }) => {
  const nakedKey = `${generatorId}|${refName}`;
  return nakedKey;
};
var toGeneratorOnlyKey = ({ generatorId }) => {
  const nakedKey = `${generatorId}`;
  return nakedKey;
};

// deno:https://jsr.io/@skmtc/core/0.0.964/dsl/operation/OperationDriver.ts
var OperationDriver = class {
  /** The generation context providing access to OAS objects and utilities */
  context;
  /** The insertable object that provides generation configuration */
  insertable;
  /** The OpenAPI operation object being processed */
  operation;
  /** Content settings for customizing generation behavior */
  settings;
  /** Optional custom destination path for generated files */
  destinationPath;
  /** The generated definition containing the transformed operation */
  definition;
  /** Whether to exclude this operation from exports */
  noExport;
  /**
   * Creates a new OperationDriver instance.
   *
   * @param args - Configuration for the operation driver
   * @param args.context - Generation context
   * @param args.insertable - Insertable providing generation configuration
   * @param args.operation - OpenAPI operation to process
   * @param args.destinationPath - Optional custom destination path
   * @param args.noExport - Whether to exclude from exports
   */
  constructor({ context, insertable, operation, destinationPath, noExport }) {
    this.context = context;
    this.insertable = insertable;
    this.operation = operation;
    this.destinationPath = destinationPath;
    this.noExport = noExport;
    this.settings = this.context.toOperationContentSettings({
      operation,
      insertable
    });
    this.definition = this.apply({
      destinationPath
    });
  }
  /**
   * Applies generation configuration to create the operation definition.
   *
   * This method handles the core generation logic for operations, including
   * identifier resolution, export path management, and import registration
   * for cross-file dependencies.
   *
   * @template T - The generation type
   * @param args - Apply configuration arguments
   * @param args.generation - Optional generation type (unused currently)
   * @param args.destinationPath - Optional destination path for imports
   * @returns Generated definition for the operation
   */
  apply({ destinationPath } = {}) {
    const { identifier, exportPath } = this.settings;
    const definition = this.getDefinition({
      identifier,
      exportPath
    });
    if (destinationPath && normalize3(exportPath) !== normalize3(destinationPath)) {
      this.context.register({
        imports: {
          [exportPath]: [
            identifier.name
          ]
        },
        destinationPath
      });
    }
    return definition;
  }
  /**
   * Retrieves or creates a definition for the operation.
   *
   * This method first checks for cached definitions to avoid duplicate generation,
   * then creates a new definition if none exists. It handles the complete operation
   * transformation process including schema resolution and value generation.
   *
   * @param args - Definition retrieval arguments
   * @param args.identifier - The identifier for the definition
   * @param args.exportPath - The export path for the definition
   * @returns Operation definition instance
   */
  getDefinition({ identifier, exportPath }) {
    const cachedDefinition = this.context.findDefinition({
      name: identifier.name,
      exportPath
    });
    if (this.affirmDefinition(cachedDefinition, exportPath)) {
      return cachedDefinition;
    }
    const value = new this.insertable({
      context: this.context,
      operation: this.operation,
      settings: this.settings
    });
    const definition = new Definition({
      context: this.context,
      value,
      identifier,
      noExport: this.noExport
    });
    this.context.register({
      definitions: [
        definition
      ],
      destinationPath: exportPath
    });
    return definition;
  }
  /**
   * Type guard to verify a definition matches the expected generated value type.
   *
   * This method performs type narrowing to ensure a cached definition is compatible
   * with the current generation requirements, including export path validation.
   *
   * @template V - The expected generated value type
   * @param definition - The definition to verify (may be undefined)
   * @param exportPath - Expected export path for validation
   * @returns True if definition matches expected type and constraints
   */
  affirmDefinition(definition, exportPath) {
    if (!definition) {
      return false;
    }
    const currentKey = toOperationGeneratorKey({
      generatorId: this.insertable.id,
      operation: this.operation
    });
    if (currentKey !== definition.generatorKey) {
      throw new Error(`Registered definition mismatch: '${definition.identifier.name}' in file '${exportPath}'. Cached key '${definition.generatorKey}' does not match new key '${currentKey}'`);
    }
    return definition.value instanceof this.insertable;
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/dsl/model/ModelDriver.ts
var ModelDriver = class {
  /** The generation context */
  context;
  /** The insertable model configuration */
  insertable;
  /** Reference name for the model */
  refName;
  /** Content settings for the model */
  settings;
  /** Optional destination path for the generated file */
  destinationPath;
  /** The generated definition */
  definition;
  /** Optional root reference name */
  rootRef;
  /** Whether to skip export declaration */
  noExport;
  /**
   * Creates a new ModelDriver instance.
   *
   * @param args - Constructor arguments
   * @param args.context - Generation context
   * @param args.insertable - Model insertable configuration
   * @param args.refName - Reference name for the model
   * @param args.destinationPath - Optional destination path
   * @param args.rootRef - Optional root reference name
   * @param args.noExport - Whether to skip export declaration
   */
  constructor({ context, insertable, refName, destinationPath, rootRef, noExport }) {
    this.context = context;
    this.insertable = insertable;
    this.refName = refName;
    this.destinationPath = destinationPath;
    this.rootRef = rootRef;
    this.noExport = noExport;
    this.context.modelDepth[`${insertable.id}:${refName}`] = 0;
    this.settings = this.context.toModelContentSettings({
      refName,
      insertable
    });
    this.definition = this.apply({
      destinationPath
    });
    this.context.modelDepth[`${insertable.id}:${refName}`] = 0;
  }
  /**
   * Applies generation configuration to create the model definition.
   *
   * This method handles the core generation logic, including identifier resolution,
   * export path management, and import registration for cross-file dependencies.
   *
   * @param args - Apply configuration arguments
   * @param args.destinationPath - Optional destination path for imports
   * @returns Generated definition for the model
   */
  apply({ destinationPath } = {}) {
    const { identifier, exportPath } = this.settings;
    const definition = this.getDefinition({
      identifier,
      exportPath
    });
    if (destinationPath && normalize3(exportPath) !== normalize3(destinationPath)) {
      this.context.register({
        imports: {
          [exportPath]: [
            identifier.name
          ]
        },
        destinationPath
      });
    }
    return definition;
  }
  /**
   * Retrieves or creates a definition for the model.
   *
   * This method first checks for cached definitions to avoid duplicate generation,
   * then creates a new definition if none exists. It handles the complete model
   * transformation process including schema resolution and value generation.
   *
   * @param args - Definition retrieval arguments
   * @param args.identifier - The identifier for the definition
   * @param args.exportPath - The export path for the definition
   * @returns Model definition instance
   */
  getDefinition({ identifier, exportPath }) {
    const cachedDefinition = this.context.findDefinition({
      name: identifier.name,
      exportPath
    });
    if (this.affirmDefinition(cachedDefinition, exportPath)) {
      return cachedDefinition;
    }
    const value = new this.insertable({
      refName: this.refName,
      context: this.context,
      settings: this.settings,
      destinationPath: this.settings.exportPath,
      rootRef: this.rootRef
    });
    const definition = new Definition({
      context: this.context,
      value,
      identifier,
      noExport: this.noExport
    });
    this.context.register({
      definitions: [
        definition
      ],
      destinationPath: exportPath
    });
    return definition;
  }
  /**
   * Type guard to verify a definition matches the expected generated value type.
   *
   * This method performs type narrowing to ensure a cached definition is compatible
   * with the current generation requirements, including export path validation.
   *
   * @template V - The expected generated value type
   * @param definition - The definition to verify (may be undefined)
   * @param exportPath - Expected export path for validation
   * @returns True if definition matches expected type and constraints
   */
  affirmDefinition(definition, exportPath) {
    if (!definition) {
      return false;
    }
    const currentKey = toModelGeneratorKey({
      generatorId: this.insertable.id,
      refName: this.refName
    });
    if (currentKey !== definition.generatorKey) {
      throw new Error(`Registered definition mismatch: '${definition.identifier.name}' in file '${exportPath}'. Cached key '${definition.generatorKey}' does not match new key '${currentKey}'`);
    }
    return definition.value instanceof this.insertable;
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/dsl/ContentSettings.ts
var ContentSettings = class _ContentSettings {
  /** The identifier for the content being generated */
  identifier;
  /** The path where generated content will be exported */
  exportPath;
  /** Custom enrichment data for extending generation */
  enrichments;
  /**
   * Creates a new ContentSettings instance with enrichments.
   *
   * @param args - Settings configuration
   * @param args.identifier - The identifier for the content being generated
   * @param args.exportPath - The path where generated content will be exported
   * @param args.enrichments - Custom enrichment data for extending generation
   *
   * @example
   * ```typescript
   * const settings = new ContentSettings({
   *   identifier: Identifier.createType('ApiModels'),
   *   exportPath: './src/api/models.ts',
   *   enrichments: {
   *     includeValidation: true,
   *     format: 'detailed'
   *   }
   * });
   * ```
   */
  constructor({ identifier, exportPath, enrichments }) {
    this.identifier = identifier;
    this.exportPath = exportPath;
    this.enrichments = enrichments;
  }
  /**
   * Factory method to create ContentSettings without enrichments.
   *
   * This is a convenience method for creating ContentSettings when no
   * custom enrichment data is needed. It explicitly sets enrichments
   * to undefined and returns a properly typed instance.
   *
   * @param args - Basic settings arguments
   * @param args.identifier - The identifier for the content being generated
   * @param args.exportPath - The path where generated content will be exported
   * @returns ContentSettings instance with undefined enrichments
   *
   * @example
   * ```typescript
   * const basicSettings = ContentSettings.empty({
   *   identifier: Identifier.createType('SimpleModels'),
   *   exportPath: './src/models.ts'
   * });
   *
   * console.log(basicSettings.enrichments); // undefined
   *
   * // Use in generator
   * class SimpleGenerator extends ModelBase {
   *   constructor(args) {
   *     super({
   *       ...args,
   *       settings: ContentSettings.empty({
   *         identifier: Identifier.createType(args.refName),
   *         exportPath: './src/simple-models.ts'
   *       })
   *     });
   *   }
   * }
   * ```
   */
  static empty({ identifier, exportPath }) {
    return new _ContentSettings({
      identifier,
      exportPath,
      enrichments: void 0
    });
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/dsl/Inserted.ts
var Inserted = class {
  /** Content settings including identifier and export path */
  settings;
  /** The generated definition with its value */
  definition;
  /**
   * Creates a new Inserted instance.
   *
   * @param args - Insertion configuration
   * @param args.settings - Content settings with identifier and export path
   * @param args.definition - The generated definition containing the value
   */
  constructor({ settings, definition }) {
    this.settings = settings;
    this.definition = definition;
  }
  /**
   * Gets the name of the inserted artifact.
   *
   * This method returns the string name from the identifier, which is commonly
   * used when referencing the generated artifact in code or templates.
   *
   * @returns The name of the inserted artifact
   *
   * @example
   * ```typescript
   * const userModel = this.insertModel(generator, 'User');
   * const name = userModel.toName(); // 'User'
   *
   * // Use in generated code
   * const code = `interface Order { user: ${name}; }`;
   * ```
   */
  toName() {
    return this.settings.identifier.name;
  }
  /**
   * Gets the full identifier of the inserted artifact.
   *
   * This method returns the complete Identifier object, which includes both
   * the name and type information. Useful when you need access to entity type
   * or type annotations.
   *
   * @returns The complete Identifier object
   *
   * @example
   * ```typescript
   * const model = this.insertModel(generator, 'User');
   * const identifier = model.toIdentifier();
   *
   * console.log(identifier.name);        // 'User'
   * console.log(identifier.entityType);  // EntityType instance
   * console.log(identifier.typeName);    // Optional type annotation
   * ```
   */
  toIdentifier() {
    return this.settings.identifier;
  }
  /**
   * Gets the export path where the artifact was generated.
   *
   * This method returns the file path where the generated artifact is located,
   * which is useful for creating import statements or understanding the file
   * structure of generated code.
   *
   * @returns The export path of the generated artifact
   *
   * @example
   * ```typescript
   * const userModel = this.insertModel(generator, 'User');
   * const exportPath = userModel.toExportPath(); // './src/models/User.ts'
   *
   * // Create import statement
   * const importStmt = `import { User } from '${exportPath}';`;
   * ```
   */
  toExportPath() {
    return this.settings.exportPath;
  }
  /**
   * Gets the generated value from the inserted artifact.
   *
   * This method returns the actual generated content with proper type safety
   *
   * @returns The generated value
   *
   * @example
   * ```typescript
   * const userModel = this.insertModel(generator, 'User');
   * const value = userModel.toValue(); // UserModelValue
   *
   * // Use the generated value
   * const code = `type OrderUser = ${value};`;
   * ```
   */
  toValue() {
    return this.definition.value;
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/dsl/File.ts
var File2 = class {
  /** The file type, always 'ts' for TypeScript files */
  fileType = "ts";
  /** The file path for this generated file */
  path;
  /** Map of module paths to re-exported symbols organized by export type */
  reExports;
  /** Map of module paths to imported symbols */
  imports;
  /** Map of definition names to their Definition objects */
  definitions;
  /** Package configuration for path resolution */
  packages;
  /**
   * Creates a new File instance.
   *
   * @param args - File configuration
   * @param args.path - The output path for this file
   * @param args.settings - Client settings containing package configuration
   *
   * @example
   * ```typescript
   * const file = new File({
   *   path: './src/generated/models.ts',
   *   settings: {
   *     packages: [
   *       { rootPath: './packages/shared', moduleName: '@company/shared' }
   *     ]
   *   }
   * });
   * ```
   */
  constructor({ path, settings }) {
    this.path = path;
    this.reExports = /* @__PURE__ */ new Map();
    this.imports = /* @__PURE__ */ new Map();
    this.definitions = /* @__PURE__ */ new Map();
    this.packages = settings?.packages;
  }
  /**
   * Generates the complete TypeScript file content.
   *
   * This method orchestrates the rendering of all file components in the correct order:
   * re-exports first, then imports, and finally definitions. It automatically handles
   * module path normalization based on package configuration and filters out empty sections.
   *
   * @returns The complete TypeScript file content as a string
   *
   * @example Basic file generation
   * ```typescript
   * const file = new File({ path: './api.ts', settings: undefined });
   *
   * // Add some imports and definitions
   * file.imports.set('./types', new Set(['User', 'Product']));
   * file.definitions.set('ApiClient', someDefinition);
   *
   * const content = file.toString();
   * console.log(content);
   * // import { User, Product } from './types'
   * //
   * // export class ApiClient {
   * //   // ... definition content
   * // }
   * ```
   *
   * @example With re-exports
   * ```typescript
   * const file = new File({ path: './index.ts', settings: undefined });
   *
   * file.reExports.set('./models', {
   *   'type': new Set(['User', 'Product']),
   *   'const': new Set(['DEFAULT_CONFIG'])
   * });
   *
   * const content = file.toString();
   * console.log(content);
   * // export type { User, Product } from './models'
   * // export { DEFAULT_CONFIG } from './models'
   * ```
   */
  toString() {
    const reExports = Array.from(this.reExports.entries()).flatMap(([module, entityTypes]) => {
      const updatedModuleName = normaliseModuleName({
        destinationPath: this.path,
        exportPath: module,
        packages: this.packages
      });
      return Object.entries(entityTypes).map(([entityType, names]) => {
        const prefix2 = entityType === "type" ? "type" : "";
        return `export ${prefix2} { ${Array.from(names).join(", ")} } from '${updatedModuleName}'`;
      });
    });
    const imports = Array.from(this.imports.entries()).map(([module, importItems]) => {
      const updatedModuleName = this.packages ? normaliseModuleName({
        destinationPath: this.path,
        exportPath: module,
        packages: this.packages
      }) : module;
      return new Import({
        module: updatedModuleName,
        importNames: Array.from(importItems)
      });
    });
    const definitions = Array.from(this.definitions.values());
    return [
      reExports,
      imports,
      definitions
    ].filter((section) => Boolean(section.length)).map((section) => section.join("\n")).join("\n\n");
  }
};
var normaliseModuleName = ({ destinationPath, exportPath, packages = [] }) => {
  const matchingModule = packages.find((packageModule) => {
    return exportPath.startsWith(packageModule.rootPath);
  });
  if (!matchingModule) {
    return exportPath;
  }
  const { rootPath, moduleName } = matchingModule;
  if (destinationPath.startsWith(rootPath)) {
    return exportPath.replace(rootPath, "@");
  }
  if (!moduleName) {
    throw new Error(`Module name is not set for ${rootPath}`);
  }
  return moduleName;
};

// deno:https://jsr.io/@skmtc/core/0.0.964/dsl/JsonFile.ts
var JsonFile = class {
  /** The file type, always 'json' for JSON files */
  fileType = "json";
  /** The file path for this generated JSON file */
  path;
  /** The JSON content to write to the file */
  content;
  /**
   * Creates a new JsonFile instance.
   *
   * @param args - JSON file configuration
   * @param args.path - The output path for this JSON file
   * @param args.content - The JSON content to write
   *
   * @example
   * ```typescript
   * const configFile = new JsonFile({
   *   path: './config/settings.json',
   *   content: {
   *     theme: 'dark',
   *     language: 'en',
   *     features: ['auth', 'notifications']
   *   }
   * });
   * ```
   */
  constructor({ path, content }) {
    this.path = path;
    this.content = content;
  }
  /**
   * Converts the JSON content to a formatted string.
   *
   * This method serializes the content object to JSON with 2-space indentation
   * for readable output. The resulting string is suitable for writing directly
   * to a file or including in the generation pipeline.
   *
   * @returns The formatted JSON content as a string
   *
   * @example
   * ```typescript
   * const file = new JsonFile({
   *   path: './data.json',
   *   content: { name: 'test', value: 42 }
   * });
   *
   * console.log(file.toString());
   * // {
   * //   "name": "test",
   * //   "value": 42
   * // }
   * ```
   */
  toString() {
    return JSON.stringify(this.content, null, 2);
  }
};

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/tiny-invariant/1.3.3/dist/esm/tiny-invariant.js
var isProduction = false;
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
  throw new Error(value);
}

// deno:https://jsr.io/@skmtc/core/0.0.964/context/GenerateContext.ts
var GenerateContext = class {
  #files;
  #previews;
  #mappings;
  /** The parsed OpenAPI document being processed */
  oasDocument;
  /** Client settings for customization (optional) */
  settings;
  /** Logger instance for tracking generation progress */
  logger;
  /** Function to capture processing results at current stack position */
  captureCurrentResult;
  /** Function that returns the generator configuration map */
  toGeneratorConfigMap;
  /** Tracking model nesting depth to prevent infinite recursion */
  modelDepth;
  /**
   * Creates a new GenerateContext instance for the generation phase.
   *
   * @param args - Constructor arguments including document, settings, and handlers
   */
  constructor({ oasDocument, settings, logger, captureCurrentResult, toGeneratorConfigMap }) {
    this.logger = logger;
    this.#files = /* @__PURE__ */ new Map();
    this.#previews = {};
    this.#mappings = {};
    this.oasDocument = oasDocument;
    this.settings = settings;
    this.captureCurrentResult = captureCurrentResult;
    this.toGeneratorConfigMap = toGeneratorConfigMap;
    this.modelDepth = {};
  }
  /**
   * @internal
   */
  toArtifacts(stackTrail) {
    const generators = Object.values(this.toGeneratorConfigMap());
    generators.forEach((generatorConfig) => {
      stackTrail.trace(generatorConfig.id, (st) => {
        if (this.settings?.skip?.includes(generatorConfig.id)) {
          return;
        }
        const skip2 = this.settings?.skip?.find((skip3) => {
          return typeof skip3 === "object" && Boolean(skip3[generatorConfig.id]);
        });
        switch (generatorConfig.type) {
          case "operation":
            this.#runOperationGenerator(this.oasDocument, generatorConfig, toSkipPaths(skip2, generatorConfig.id), st);
            break;
          case "model":
            this.#runModelGenerator(this.oasDocument, generatorConfig, toSkipModels(skip2, generatorConfig.id), st);
            break;
          default:
            throw new Error(`Invalid generator type: '${generatorConfig.type}' on ${generatorConfig.id}`);
        }
      });
    });
    return {
      files: this.#files,
      previews: this.#previews,
      mappings: this.#mappings
    };
  }
  #runOperationGenerator(oasDocument, generatorConfig, skip2, stackTrail) {
    oasDocument.operations.reduce((acc, operation) => {
      return stackTrail.trace(`${operation.path}:${operation.method}`, (st) => {
        try {
          if (typeof generatorConfig?.isSupported === "function" && !generatorConfig.isSupported({
            operation,
            context: this
          })) {
            this.captureCurrentResult("notSupported", st);
            return acc;
          }
          if (skip2?.[operation.path]?.includes(operation.method)) {
            this.captureCurrentResult("skipped", st);
            return acc;
          }
          const result = generatorConfig.transform({
            context: this,
            operation,
            acc
          });
          const source2 = toOperationSource({
            operation,
            generatorId: generatorConfig.id
          });
          this.#addPreview(source2, generatorConfig.toPreviewModule?.({
            context: this,
            operation
          }));
          this.#addMapping(source2, generatorConfig.toMappingModule?.({
            context: this,
            operation
          }));
          this.captureCurrentResult("success", st);
          return result;
        } catch (error) {
          this.logger.error(error);
          this.captureCurrentResult("error", st);
        }
      });
    }, void 0);
  }
  #runModelGenerator(oasDocument, generatorConfig, skip2, stackTrail) {
    const refNames = oasDocument.components?.toSchemasRefNames() ?? [];
    return refNames.reduce((acc, refName) => {
      return stackTrail.trace(refName, (st) => {
        try {
          if (skip2?.includes(refName)) {
            this.captureCurrentResult("skipped", st);
            return acc;
          }
          const result = generatorConfig.transform({
            context: this,
            refName,
            acc
          });
          const source2 = toModelSource({
            refName,
            generatorId: generatorConfig.id
          });
          this.#addPreview(source2, generatorConfig.toPreviewModule?.({
            context: this,
            refName
          }));
          this.#addMapping(source2, generatorConfig.toMappingModule?.({
            context: this,
            refName
          }));
          this.captureCurrentResult("success", st);
          return result;
        } catch (error) {
          this.logger.error(error);
          this.captureCurrentResult("error", st);
        }
      });
    }, void 0);
  }
  #addPreview(source2, module) {
    if (!module) {
      return;
    }
    if (!this.#previews[module.group]) {
      this.#previews[module.group] = {};
    }
    if (this.#previews[module.group][module.name]) {
      throw new Error(`Cannot override preview module "${module.name}" in group "${module.group}"`);
    }
    this.#previews[module.group][module.name] = {
      module,
      source: source2
    };
  }
  #addMapping(source2, module) {
    if (!module) {
      return;
    }
    if (!this.#mappings[module.group]) {
      this.#mappings[module.group] = {};
    }
    if (this.#mappings[module.group][module.name]) {
      throw new Error(`Cannot override mapping module "${module.name}" in group "${module.group}"`);
    }
    this.#mappings[module.group][module.name] = {
      module,
      source: source2
    };
  }
  #getFile(filePath, { throwIfNotFound = false } = {}) {
    const normalisedPath = normalize3(filePath);
    const currentFile = this.#files.get(normalisedPath);
    if (!currentFile) {
      if (throwIfNotFound) {
        throw new Error(`File not found: '${normalisedPath}'`);
      } else {
        return this.#addFile(normalisedPath);
      }
    }
    return currentFile;
  }
  /**
   * Create and register a definition with the given `identifier` at `destinationPath`.
   *
   * @experimental
   */
  defineAndRegister({ identifier, value, destinationPath, noExport }) {
    const cachedDefinition = this.findDefinition({
      name: identifier.name,
      exportPath: destinationPath
    });
    if (cachedDefinition) {
      return cachedDefinition;
    }
    return this.#defineAndRegister({
      identifier,
      value,
      destinationPath,
      noExport
    });
  }
  /**
   * Create and register a definition with the given `identifier` at `destinationPath` without duplication checks.
   *
   * @experimental
   */
  #defineAndRegister({ identifier, value, destinationPath, noExport }) {
    const definition = new Definition({
      context: this,
      identifier,
      value,
      noExport
    });
    this.register({
      definitions: [
        definition
      ],
      destinationPath
    });
    return definition;
  }
  /**
   * Registers JSON content for output to a file.
   *
   * @experimental This method is experimental and may change in future versions
   * @param args - Registration arguments with destination path and JSON content
   */
  registerJson({ destinationPath, json }) {
    const currentFile = this.#getFile(destinationPath);
    invariant(currentFile instanceof JsonFile, `File at "${destinationPath}" is not a "JsonFile" type`);
    currentFile.content = json;
  }
  /**
   * Insert supplied `imports` and `definitions` into file at `destinationPath`.
   *
   * If an import from a specified module already exists in the file, the
   * import names are appended to the existing import.
   *
   * Definitions will only be added if there is not already a definition with
   * the same name in the file.
   *
   * @mutates this.files
   */
  register({ imports = {}, definitions, destinationPath, reExports }) {
    const currentFile = this.#getFile(destinationPath);
    invariant(currentFile instanceof File2, `File at "${destinationPath}" is not a "File" type`);
    Object.entries(reExports ?? {}).forEach(([importModule, identifiers]) => {
      if (!currentFile.reExports.get(importModule) && identifiers.length) {
        currentFile.reExports.set(importModule, {});
      }
      identifiers.forEach((identifier) => {
        const entityType = identifier.entityType.type;
        const module = currentFile.reExports.get(importModule);
        invariant(module, "Module not found");
        if (!module[entityType]) {
          module[entityType] = /* @__PURE__ */ new Set();
        }
        module[entityType].add(identifier.name);
      });
    });
    Object.entries(imports).forEach(([importModule, importNames]) => {
      const module = currentFile.imports.get(importModule);
      const importItem = new Import({
        module: importModule,
        importNames
      });
      if (module) {
        importItem.importNames.forEach((n) => module.add(`${n}`));
      } else {
        currentFile.imports.set(importModule, new Set(importItem.importNames.map((n) => `${n}`)));
      }
    });
    definitions?.forEach((definition) => {
      if (!definition) {
        return;
      }
      const { name } = definition.identifier;
      if (!currentFile.definitions.has(name)) {
        currentFile.definitions.set(name, definition);
      }
    });
  }
  /**
   * Insert operation into the output file with path `destinationPath`.
   *
   * Insert will perform the following steps:
   * 1. Generate content settings for the supplied operation
   * 2. Look up definition in file with path `destinationPath`
   * 3. If definition is not found, it will create a new one and register it
   * 4. If the definition is defined at a location that is different from
   *    the current file, it will add an import to the current file from
   *    that location
   * 5. Use the content settings to generate the operation using the
   *    insertable's driver
   * @mutates this.files
   */
  insertOperation(insertable, operation, { destinationPath, noExport = false } = {}) {
    const { settings, definition } = new OperationDriver({
      context: this,
      insertable,
      operation,
      destinationPath,
      noExport
    });
    return new Inserted({
      settings,
      definition
    });
  }
  /**
   * Inserts a normalized model definition into the generation context.
   *
   * @param insertable - Model insertable configuration with prototype and transform functions
   * @param schema - OAS schema, reference, or void type to generate model from
   * @param options - Insertion options including generation type and destination
   * @returns Inserted model instance with settings and definition
   */
  insertNormalisedModel(insertable, { schema, fallbackName, destinationPath }, { noExport = false } = {}) {
    if (schema.isRef()) {
      const { definition: definition2 } = this.insertModel(insertable, schema.toRefName(), {
        destinationPath,
        noExport
      });
      return definition2;
    }
    const cachedDefinition = this.findDefinition({
      name: fallbackName,
      exportPath: destinationPath
    });
    if (cachedDefinition) {
      return cachedDefinition;
    }
    const value = insertable.schemaToValueFn({
      context: this,
      schema,
      destinationPath,
      required: true
    });
    const definition = this.#defineAndRegister({
      identifier: insertable.createIdentifier(fallbackName),
      value,
      destinationPath,
      noExport
    });
    return definition;
  }
  /**
   * Insert model into the output file with path `destinationPath`.
   *
   * Insert will perform the following steps:
   * 1. Generate content settings for the supplied model
   * 2. Look up definition in file with path `destinationPath`
   * 3. If definition is not found, it will create a new one and register it
   * 4. If the definition is defined at a location that is different from
   *    the current file, it will add an import to the current file from
   *    that location
   * 5. Use the content settings to generate the model using the
   *    insertable's driver
   * @mutates this.files
   */
  insertModel(insertable, refName, { destinationPath, noExport = false } = {}) {
    const { settings, definition } = new ModelDriver({
      context: this,
      insertable,
      refName,
      destinationPath,
      rootRef: refName,
      noExport
    });
    return new Inserted({
      settings,
      definition
    });
  }
  /**
   * Generate and return content settings for operation insertable and
   * operation.
   *
   * Content settings are produced by passing base settings and operation
   * through toIdentifier and toExportPath static methods on the
   * insertable.
   * @param { operation, insertable }
   * @returns
   */
  toOperationContentSettings({ operation, insertable }) {
    return new ContentSettings({
      identifier: insertable.toIdentifier(operation),
      exportPath: insertable.toExportPath(operation),
      enrichments: insertable.toEnrichments({
        operation,
        context: this
      })
    });
  }
  /**
   * Generate and return content settings for model insertable and refName.
   *
   * Content settings are produced by passing base settings and refName
   * through toIdentifier and toExportPath static methods on the
   * insertable.
   * @param { refName, insertable }
   * @returns Content settings for model
   */
  toModelContentSettings({ refName, insertable }) {
    return new ContentSettings({
      identifier: insertable.toIdentifier(refName),
      exportPath: insertable.toExportPath(refName),
      enrichments: insertable.toEnrichments({
        refName,
        context: this
      })
    });
  }
  #addFile(normalisedPath) {
    if (this.#files.has(normalisedPath)) {
      throw new Error(`File already exists: ${normalisedPath}`);
    }
    const extension = normalisedPath.split(".").pop();
    let newFile;
    switch (extension) {
      case "json":
        newFile = new JsonFile({
          path: normalisedPath,
          content: {}
        });
        break;
      default:
        newFile = new File2({
          path: normalisedPath,
          settings: this.settings
        });
        break;
    }
    this.#files.set(normalisedPath, newFile);
    return newFile;
  }
  /**
   * Perform one lookup of schema by `refName`.
   * @param refName
   * @returns Matching schema or ref
   * @throws if schema is not found
   */
  resolveSchemaRefOnce(refName, generatorId) {
    this.modelDepth[`${generatorId}:${refName}`]++;
    const schema = this.oasDocument.components?.schemas?.[refName]?.resolveOnce();
    if (!schema) {
      throw new Error(`Schema not found: ${refName}`);
    }
    return schema;
  }
  /**
   * Check if definition name `name` in file with path `exportPath`
   * has already been created and registered.
   *
   * @param { name, exportPath }
   * @returns Matching definition if found or `undefined` otherwise
   */
  findDefinition({ name, exportPath }) {
    const file = this.#getFile(exportPath);
    invariant(file instanceof File2, `File at "${exportPath}" is not a "File" type`);
    return file.definitions.get(name);
  }
};
var toOperationSource = ({ operation, generatorId }) => ({
  type: "operation",
  generatorId,
  operationPath: operation.path,
  operationMethod: operation.method
});
var toModelSource = ({ refName, generatorId }) => ({
  type: "model",
  generatorId,
  refName
});
var toSkipPaths = (skip2, generatorId) => {
  const generatorSkip = skip2?.[generatorId];
  if (typeof generatorSkip === "object" && !Array.isArray(generatorSkip)) {
    return generatorSkip;
  }
  return void 0;
};
var toSkipModels = (skip2, generatorId) => {
  const generatorSkip = skip2?.[generatorId];
  if (Array.isArray(generatorSkip)) {
    return generatorSkip;
  }
  return void 0;
};

// deno:https://jsr.io/@std/path/1.1.2/posix/join.ts
function join(path, ...paths) {
  if (path === void 0) return ".";
  if (path instanceof URL) {
    path = fromFileUrl(path);
  }
  paths = path ? [
    path,
    ...paths
  ] : paths;
  paths.forEach((path2) => assertPath(path2));
  const joined = paths.filter((path2) => path2.length > 0).join("/");
  return joined === "" ? "." : normalize(joined);
}

// deno:https://jsr.io/@std/path/1.1.2/windows/join.ts
function join2(path, ...paths) {
  if (path instanceof URL) {
    path = fromFileUrl2(path);
  }
  paths = path ? [
    path,
    ...paths
  ] : paths;
  paths.forEach((path2) => assertPath(path2));
  paths = paths.filter((path2) => path2.length > 0);
  if (paths.length === 0) return ".";
  let needsReplace = true;
  let slashCount = 0;
  const firstPart = paths[0];
  if (isPathSeparator(firstPart.charCodeAt(0))) {
    ++slashCount;
    const firstLen = firstPart.length;
    if (firstLen > 1) {
      if (isPathSeparator(firstPart.charCodeAt(1))) {
        ++slashCount;
        if (firstLen > 2) {
          if (isPathSeparator(firstPart.charCodeAt(2))) ++slashCount;
          else {
            needsReplace = false;
          }
        }
      }
    }
  }
  let joined = paths.join("\\");
  if (needsReplace) {
    for (; slashCount < joined.length; ++slashCount) {
      if (!isPathSeparator(joined.charCodeAt(slashCount))) break;
    }
    if (slashCount >= 2) joined = `\\${joined.slice(slashCount)}`;
  }
  return normalize2(joined);
}

// deno:https://jsr.io/@std/path/1.1.2/join.ts
function join3(path, ...paths) {
  return isWindows ? join2(path, ...paths) : join(path, ...paths);
}

// deno:https://jsr.io/@skmtc/core/0.0.964/helpers/toResolvedArtifactPath.ts
var toResolvedArtifactPath = ({ basePath, destinationPath }) => {
  return join3(basePath ?? "./", destinationPath.replace(/^@\//, ""));
};

// deno:https://jsr.io/@skmtc/core/0.0.964/context/RenderContext.ts
var RenderContext = class {
  /** Map of generated files to render */
  files;
  /** Preview data for generated content */
  previews;
  /** Mapping data for file relationships */
  mappings;
  /** Optional formatter configuration (using Prettier format for compatibility) */
  #prettierConfig;
  /** Base path for resolving file paths */
  basePath;
  /** Logger instance for debug information */
  logger;
  /** Function to capture result status */
  captureCurrentResult;
  /**
   * Creates a new RenderContext instance with the specified configuration.
   *
   * Initializes the rendering context with files to render, preview data,
   * formatting configuration, and logging/tracing infrastructure.
   *
   * @param args - Constructor arguments containing all required configuration
   */
  constructor({ files, previews, mappings, prettierConfig, basePath, logger, captureCurrentResult }) {
    this.files = files;
    this.previews = previews;
    this.mappings = mappings;
    this.#prettierConfig = prettierConfig;
    this.basePath = basePath;
    this.logger = logger;
    this.captureCurrentResult = captureCurrentResult;
  }
  /**
   * Renders all files in the context to their final formatted form.
   *
   * This is the main rendering method that orchestrates the collation and
   * formatting of all generated files. It processes files through Biome
   * formatting (if configured), resolves paths, and produces the final
   * artifacts ready for writing to the filesystem.
   *
   * @returns Promise resolving to render result containing artifacts, file metadata, previews, and mappings
   *
   * @example
   * ```typescript
   * const renderContext = new RenderContext({
   *   files: generatedFiles,
   *   previews: previewData,
   *   mappings: mappingData,
   *   prettierConfig: { semi: false, singleQuote: true },
   *   basePath: './src/generated',
   *   stackTrail: traceStack,
   *   logger: logger,
   *   captureCurrentResult: resultHandler
   * });
   *
   * const result = await renderContext.render();
   *
   * // Access rendered files
   * Object.entries(result.artifacts).forEach(([path, content]) => {
   *   console.log(`Rendered ${path}: ${result.files[path].lines} lines`);
   * });
   * ```
   */
  render(stackTrail) {
    const result = this.collate(stackTrail);
    const rendered = {
      artifacts: result.artifacts,
      files: result.files,
      previews: this.previews,
      mappings: this.mappings
    };
    return rendered;
  }
  /**
   * Collates all files in the context into a unified render result.
   *
   * This method processes each file in the context through the rendering pipeline,
   * applying Biome formatting and path resolution. It coordinates the parallel
   * processing of all files and aggregates the results into a single output structure.
   *
   * The collation process includes:
   * - File content rendering with optional Biome formatting
   * - Path resolution using base path configuration
   * - Metadata calculation (line count, character count)
   * - Result aggregation into artifacts and file metadata maps
   *
   * @returns Promise resolving to collated files with artifacts and metadata
   *
   * @example
   * ```typescript
   * const collated = await renderContext.collate();
   *
   * // Access rendered file content
   * console.log(collated.artifacts['/path/to/file.ts']);
   *
   * // Access file metadata
   * console.log(collated.files['/path/to/file.ts'].lines);
   * console.log(collated.files['/path/to/file.ts'].characters);
   * ```
   */
  collate(stackTrail) {
    const fileEntries = Array.from(this.files.entries());
    const fileObjects = fileEntries.map(([destinationPath, file]) => {
      return stackTrail.trace(destinationPath, (st) => {
        const renderedFile = renderFile({
          content: file.toString(),
          destinationPath,
          basePath: this.basePath,
          prettierConfig: this.#prettierConfig
        });
        this.captureCurrentResult("success", st);
        return renderedFile;
      });
    }).filter((fileObject) => fileObject !== void 0);
    const output = {
      artifacts: {},
      files: {}
    };
    for (const fileObject of fileObjects) {
      output.artifacts[fileObject.path] = fileObject.content;
      output.files[fileObject.path] = {
        destinationPath: fileObject.destinationPath,
        lines: fileObject.lines,
        characters: fileObject.characters
      };
    }
    return output;
  }
  /**
   * Retrieves a file from the context by its normalized path.
   *
   * This method looks up a file in the context's file map using path normalization
   * to ensure consistent path resolution. It validates that the requested file
   * exists and throws an error if not found.
   *
   * @param filePath - The file path to retrieve (will be normalized)
   * @returns The File or JsonFile instance
   * @throws {Error} When the file is not found in the context
   *
   * @example
   * ```typescript
   * const file = renderContext.getFile('./src/models/User.ts');
   * console.log(file.toString()); // Access file content
   *
   * // Works with various path formats
   * const sameFile = renderContext.getFile('src/models/User.ts');
   * const alsoSameFile = renderContext.getFile('/absolute/path/src/models/User.ts');
   * ```
   */
  getFile(filePath) {
    const normalisedPath = normalize3(filePath);
    const currentFile = this.files.get(normalisedPath);
    invariant(currentFile, `File not found during render phase: ${normalisedPath}`);
    return currentFile;
  }
  /**
   * Picks a specific definition from a file in the context.
   *
   * This method retrieves a named definition (type, interface, etc.) from
   * a specific file in the context. It validates that the target file is
   * a File type (not JsonFile) and returns the requested definition if found.
   *
   * @param args - Object containing the definition name and export path
   * @param args.name - The name of the definition to retrieve
   * @param args.exportPath - The path to the file containing the definition
   * @returns The Definition instance if found, undefined otherwise
   * @throws {Error} When the file is not found or is not a File type
   *
   * @example
   * ```typescript
   * const userDefinition = renderContext.pick({
   *   name: 'User',
   *   exportPath: './src/models/User.ts'
   * });
   *
   * if (userDefinition) {
   *   console.log(userDefinition.identifier); // Access definition details
   * }
   *
   * // Pick interface definition
   * const apiInterface = renderContext.pick({
   *   name: 'ApiResponse',
   *   exportPath: './src/types/api.ts'
   * });
   * ```
   */
  pick({ name, exportPath }) {
    const file = this.getFile(exportPath);
    invariant(file instanceof File2, `File at "${exportPath}" is not a "File" type`);
    return file.definitions.get(name);
  }
};
var renderFile = ({ content, destinationPath, basePath }) => {
  const path = toResolvedArtifactPath({
    basePath,
    destinationPath
  });
  return {
    content,
    path,
    destinationPath,
    lines: content.split("\n").length,
    characters: content.length
  };
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/tag/Tag.ts
var OasTag = class {
  oasType = "tag";
  #fields;
  constructor(fields) {
    this.#fields = fields;
  }
  get name() {
    return this.#fields.name;
  }
  get description() {
    return this.#fields.description;
  }
  /** Specification Extension fields */
  get extensionFields() {
    return this.#fields.extensionFields;
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/helpers/isEmpty.ts
var isEmpty = (value) => {
  return !Object.keys(value).length;
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/specificationExtensions/toSpecificationExtensionsV3.ts
var toSpecificationExtensionsV3 = ({ skipped: s, parent, parentType, stackTrail, context }) => {
  const { skipped, extensionFields } = extractExtensions(s);
  if (skipped) {
    context.logSkippedFields({
      skipped,
      parent,
      stackTrail,
      parentType
    });
  }
  return extensionFields;
};
var extractExtensions = (item) => {
  const entries = Object.entries(item);
  const skipped = {};
  const extensionFields = {};
  for (const [key, value] of entries) {
    if (!key.startsWith("x-")) {
      skipped[key] = value;
    } else {
      extensionFields[key] = value;
    }
  }
  return {
    skipped: isEmpty(skipped) ? void 0 : skipped,
    extensionFields: isEmpty(extensionFields) ? void 0 : extensionFields
  };
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/tag/toTagsV3.ts
var toTagsV3 = ({ tags, stackTrail, context }) => {
  if (!tags) {
    return void 0;
  }
  return tags.map((tag) => toTagV3({
    tag,
    stackTrail,
    context
  }));
};
var toTagV3 = ({ tag, stackTrail, context }) => {
  const { name, description, ...skipped } = tag;
  const extensionFields = toSpecificationExtensionsV3({
    skipped,
    parent: tag,
    context,
    stackTrail,
    parentType: "tag"
  });
  const fields = {
    name,
    description,
    extensionFields
  };
  return new OasTag(fields);
};

// deno:https://jsr.io/@skmtc/core/0.0.964/helpers/refFns.ts
var toRefName = ($ref) => {
  const refName = $ref.split("/").slice(-1)[0];
  if (!refName) {
    throw new Error("Invalid reference");
  }
  return refName;
};
var isRef = (value) => {
  if (value && typeof value === "object" && "$ref" in value && typeof value.$ref === "string") {
    return true;
  } else {
    return false;
  }
};
var toGetRef = (oasDocument) => ({ $ref }) => {
  const refName = toRefName($ref);
  const item = oasDocument.components?.schemas?.[refName];
  if (isRef(item)) {
    return toGetRef(oasDocument)(item);
  }
  if (item) {
    return item;
  }
  throw new Error(`Invalid reference: ${$ref}`);
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/ref/Ref.ts
var MAX_LOOKUPS = 10;
function refTypeToPluralPath(refType) {
  switch (refType) {
    case "schema":
      return "schemas";
    case "requestBody":
      return "requestBodies";
    case "parameter":
      return "parameters";
    case "response":
      return "responses";
    case "example":
      return "examples";
    case "header":
      return "headers";
    case "securityScheme":
      return "securitySchemes";
    default: {
      const _exhaustive = refType;
      throw new Error(`Unhandled ref type: ${_exhaustive}`);
    }
  }
}
var OasRef = class {
  /** OAS type identifier */
  oasType = "ref";
  /** Type identifier */
  type = "ref";
  #fields;
  #oasDocument;
  /**
   * Creates a new OAS reference instance.
   * 
   * @param fields - Reference field data including refType and $ref
   * @param oasDocument - Document containing the referenced component
   */
  constructor(fields, oasDocument) {
    this.#fields = fields;
    this.#oasDocument = oasDocument;
  }
  /**
   * Type guard to check if this instance is a reference.
   * 
   * @returns Always true for OasRef instances
   */
  isRef() {
    return true;
  }
  /**
   * Recursively resolves this reference to its final target component.
   * 
   * Follows reference chains until reaching a non-reference component,
   * with protection against infinite loops.
   * 
   * @param lookupsPerformed - Internal counter to prevent infinite recursion
   * @returns The resolved component
   * @throws Error if maximum lookup depth is exceeded
   */
  resolve(lookupsPerformed = 0) {
    if (lookupsPerformed >= MAX_LOOKUPS) {
      throw new Error("Max lookups reached");
    }
    const resolved = this.resolveOnce();
    return resolved.isRef() ? resolved.resolve(lookupsPerformed + 1) : resolved;
  }
  /**
   * Resolves this reference one level, potentially returning another reference.
   * 
   * @returns Either the resolved component or another reference in the chain
   */
  resolveOnce() {
    const c = this.oasDocument.components;
    const refName = toRefName(this.$ref);
    const refType = this.refType;
    let resolved;
    switch (refType) {
      case "schema":
        resolved = c?.schemas?.[refName];
        break;
      case "requestBody":
        resolved = c?.requestBodies?.[refName];
        break;
      case "parameter":
        resolved = c?.parameters?.[refName];
        break;
      case "response":
        resolved = c?.responses?.[refName];
        break;
      case "example":
        resolved = c?.examples?.[refName];
        break;
      case "header":
        resolved = c?.headers?.[refName];
        break;
      case "securityScheme":
        resolved = c?.securitySchemes?.[refName];
        break;
      default: {
        const _exhaustive = refType;
        throw new Error(`Unhandled ref type: ${_exhaustive}`);
      }
    }
    if (!resolved) {
      throw new Error(`Ref "${this.#fields.$ref}" not found`);
    }
    if (resolved.isRef()) {
      if (resolved.refType !== this.refType) {
        throw new Error(`Ref type mismatch for "${this.$ref}". Expected "${this.refType}" but got "${resolved.refType}"`);
      }
    } else {
      if (resolved.oasType !== this.refType) {
        throw new Error(`Type mismatch for "${this.$ref}". Expected "${this.refType}" but got "${resolved.oasType}"`);
      }
    }
    return resolved;
  }
  toRefName() {
    return toRefName(this.#fields.$ref);
  }
  get $ref() {
    return this.#fields.$ref;
  }
  get refType() {
    return this.#fields.refType;
  }
  get oasDocument() {
    return this.#oasDocument;
  }
  toJsonSchema({ resolve: resolve3 }) {
    if (resolve3) {
      const resolved = this.resolve().toJsonSchema({
        resolve: resolve3
      });
      return resolved;
    }
    const ref = {
      $ref: `#/components/${refTypeToPluralPath(this.refType)}/${this.toRefName()}`
    };
    return ref;
  }
  toJSON() {
    return {
      $ref: `#/components/${refTypeToPluralPath(this.refType)}/${this.toRefName()}`
    };
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/ref/toRefV31.ts
var toRefV31 = ({ ref, refType, stackTrail, context }) => {
  const { $ref, ...skipped } = ref;
  if (!isEmpty(skipped)) {
    context.logSkippedFields({
      skipped,
      parent: ref,
      parentType: "ref",
      stackTrail
    });
  }
  context.registerRef(stackTrail.clone(), $ref);
  return new OasRef({
    refType,
    $ref
  }, context.oasDocument);
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/array/Array.ts
var OasArray = class {
  /**
   * Object is part the 'schema' set which is used
   * to define data types in an OpenAPI document.
   */
  oasType = "schema";
  /**
   * Constant value 'array' useful for type narrowing and tagged unions.
   */
  type = "array";
  /**
   * Defines the type of items in the array.
   */
  items;
  /**
   * A short summary of the array.
   */
  title;
  /**
   * A description of the array.
   */
  description;
  /**
   * Indicates whether value can be null.
   */
  nullable;
  /**
   * Indicates whether the array items must be unique.
   */
  uniqueItems;
  /** Specification Extension fields */
  extensionFields;
  /**
   * An example of the array.
   */
  example;
  /**
   * The maximum number of items in the array.
   */
  maxItems;
  /**
   * The minimum number of items in the array.
   */
  minItems;
  /**
   * The enum values for the array.
   */
  enums;
  /**
   * The default value for the array.
   */
  defaultValue;
  /**
   * Creates a new OasArray instance.
   *
   * @param fields - Array configuration fields including items schema, validation constraints, and metadata
   */
  /**
  * Whether the array is read-only.
  */
  readOnly;
  /**
   * Whether the array is write-only.
   */
  writeOnly;
  /**
   * Whether the array is deprecated.
   */
  deprecated;
  constructor(fields) {
    this.items = fields.items;
    this.title = fields.title;
    this.description = fields.description;
    this.nullable = fields.nullable;
    this.uniqueItems = fields.uniqueItems;
    this.extensionFields = fields.extensionFields;
    this.example = fields.example;
    this.maxItems = fields.maxItems;
    this.minItems = fields.minItems;
    this.enums = fields.enums;
    this.defaultValue = fields.defaultValue;
    this.readOnly = fields.readOnly;
    this.writeOnly = fields.writeOnly;
    this.deprecated = fields.deprecated;
  }
  /**
   * Determines if this array is a reference object.
   *
   * @returns Always returns false since this is a concrete array instance, not a reference
   */
  isRef() {
    return false;
  }
  /**
   * Resolves this array object.
   *
   * @returns The array instance itself since it's already a concrete object, not a reference
   */
  resolve() {
    return this;
  }
  /**
   * Resolves this array object one level.
   *
   * @returns The array instance itself since it's already a concrete object, not a reference
   */
  resolveOnce() {
    return this;
  }
  /**
   * Converts this OAS array to an OpenAPI v3 JSON schema representation.
   *
   * @param options - Conversion options including reference handling and formatting preferences
   * @returns OpenAPI v3 array schema object with type, items schema, and all validation constraints
   */
  toJsonSchema(options) {
    return {
      type: "array",
      items: this.items.toJsonSchema(options),
      title: this.title,
      enum: this.enums,
      description: this.description,
      nullable: this.nullable,
      example: this.example,
      maxItems: this.maxItems,
      minItems: this.minItems,
      uniqueItems: this.uniqueItems,
      default: this.defaultValue,
      readOnly: this.readOnly,
      writeOnly: this.writeOnly
    };
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_helpers/parseNullable.ts
var parseNullable = ({ value, stackTrail, context }) => {
  if (value.nullable === void 0) {
    return {
      nullable: void 0,
      value
    };
  }
  const { nullable, ...rest } = value;
  if (typeof nullable === "boolean") {
    return {
      nullable,
      value: rest
    };
  }
  context.logIssue({
    key: "nullable",
    stackTrail,
    parent: value,
    level: "warning",
    message: `Invalid nullable: ${value}`,
    type: "INVALID_NULLABLE"
  });
  return {
    nullable: void 0,
    value: rest
  };
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_helpers/parseEnum.ts
var parseEnum = ({ value, nullable, parent, context, check, toMessage, stackTrail }) => {
  if (Array.isArray(value)) {
    for (const item of value) {
      if (nullable && item === null) {
        continue;
      }
      if (check(item)) {
        continue;
      }
      context.logIssue({
        key: "default",
        level: "warning",
        message: toMessage(item),
        parent,
        stackTrail,
        type: "INVALID_DEFAULT"
      });
      return void 0;
    }
    return value;
  }
  return void 0;
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/array/array-types.ts
var oasArrayDataWithoutItems = object({
  type: literal("array"),
  title: optional(string()),
  description: optional(string()),
  default: optional(array(unknown())),
  maxItems: optional(number()),
  minItems: optional(number()),
  uniqueItems: optional(boolean()),
  enums: optional(array(unknown())),
  readOnly: optional(boolean()),
  writeOnly: optional(boolean()),
  deprecated: optional(boolean())
});

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/array/toArray.ts
var toArray = ({ value, context, stackTrail }) => {
  const { nullable, value: valueWithoutNullable } = parseNullable({
    value,
    context,
    stackTrail
  });
  const { example: unparsedExample, ...valueWithoutExample } = valueWithoutNullable;
  const example = parseExample({
    example: unparsedExample,
    context,
    parent: valueWithoutNullable,
    nullable,
    stackTrail
  });
  const { enum: unparsedEnums, ...valueWithoutEnums } = valueWithoutExample;
  const enums = parseEnum({
    value: unparsedEnums,
    nullable,
    stackTrail,
    parent: valueWithoutExample,
    context,
    check: Array.isArray,
    toMessage: (item) => `Removed invalid enum. Expected "array", got: ${item}`
  });
  const { default: unparsedDefaultValue, ...valueWithoutDefault } = valueWithoutEnums;
  const defaultValue = parseDefault({
    defaultValue: unparsedDefaultValue,
    context,
    parent: valueWithoutEnums,
    nullable,
    stackTrail
  });
  return toParsedArray({
    context,
    nullable,
    example,
    enums,
    defaultValue,
    stackTrail,
    value: valueWithoutDefault
  });
};
var toParsedArray = ({ context, stackTrail, nullable, example, enums, defaultValue, value }) => {
  const { items, ...rest } = value;
  if (!is(oasArrayDataWithoutItems, rest)) {
    parse(oasArrayDataWithoutItems, rest);
  }
  const { type: _type, title, description, uniqueItems, maxItems, minItems, readOnly, writeOnly, deprecated, ...skipped } = rest;
  const extensionFields = toSpecificationExtensionsV3({
    skipped,
    parent: value,
    context,
    stackTrail,
    parentType: "schema:array"
  });
  return new OasArray({
    title,
    description,
    nullable,
    defaultValue,
    items: stackTrail.trace("items", (st) => toSchemaV3({
      schema: items,
      stackTrail: st,
      context
    })),
    extensionFields,
    example,
    uniqueItems,
    maxItems,
    minItems,
    enums,
    readOnly,
    writeOnly,
    deprecated
  });
};
var parseExample = ({ example, context, parent, nullable, stackTrail }) => {
  if (example === void 0) {
    return void 0;
  }
  if (nullable && example === null) {
    return example;
  }
  if (!Array.isArray(example)) {
    context.logIssue({
      key: "example",
      level: "warning",
      message: `Removed invalid example. Expected "array", got: ${example}`,
      parent,
      stackTrail,
      type: "INVALID_EXAMPLE"
    });
    return void 0;
  }
  return example;
};
var parseDefault = ({ defaultValue, context, parent, nullable, stackTrail }) => {
  if (defaultValue === void 0) {
    return void 0;
  }
  if (nullable && defaultValue === null) {
    return defaultValue;
  }
  if (!Array.isArray(defaultValue)) {
    context.logIssue({
      key: "default",
      level: "warning",
      message: `Invalid default: ${defaultValue}`,
      parent,
      stackTrail,
      type: "INVALID_DEFAULT"
    });
    return void 0;
  }
  return defaultValue;
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/object/Object.ts
var OasObject = class _OasObject {
  /**
   * Object is part the 'schema' set which is used
   * to define data types in an OpenAPI document.
   */
  oasType = "schema";
  /**
   * Constant value 'object' useful for type narrowing and tagged unions.
   */
  type = "object";
  /**
   * A short summary of the object.
   */
  title;
  /**
   * A description of the object.
   */
  description;
  /**
   * Indicates whether value can be null.
   */
  nullable;
  /**
   * A record which maps property names of the object to their schemas.
   */
  properties;
  /**
   * An array of required property names.
   */
  required;
  /**
   * Indicates whether additional properties are allowed.
   *
   * This is equivalent to a Record type in TypeScript.
   */
  additionalProperties;
  /** Specification Extension fields */
  extensionFields;
  /**
   * An example of the object.
   */
  example;
  /**
   * The default value of the object.
   */
  default;
  /** Maximum number of properties allowed in the object */
  maxProperties;
  /** Minimum number of properties required in the object */
  minProperties;
  /** Whether the object is read-only */
  readOnly;
  /** Whether the object is write-only */
  writeOnly;
  /** Whether the object schema is deprecated */
  deprecated;
  /** Array of valid enum values for the object */
  enums;
  /**
   * Creates a new OasObject instance.
   *
   * @param fields - Object configuration fields
   *
   * @example
   * ```typescript
   * const userSchema = new OasObject({
   *   title: 'User',
   *   properties: {
   *     id: new OasString({ title: 'ID' }),
   *     name: new OasString({ title: 'Name' })
   *   },
   *   required: ['id'],
   *   additionalProperties: false
   * });
   * ```
   */
  constructor(fields = {}) {
    this.title = fields.title;
    this.description = fields.description;
    this.properties = fields.properties;
    this.required = fields.required;
    this.additionalProperties = fields.additionalProperties;
    this.nullable = fields.nullable;
    this.extensionFields = fields.extensionFields;
    this.example = fields.example;
    this.default = fields.default;
    this.maxProperties = fields.maxProperties;
    this.minProperties = fields.minProperties;
    this.readOnly = fields.readOnly;
    this.deprecated = fields.deprecated;
    this.enums = fields.enums;
  }
  /**
   * Creates a new empty OasObject with no properties.
   *
   * This factory method creates a non-nullable object with empty properties
   * and required arrays, useful as a starting point for dynamic object building.
   *
   * @returns A new empty OasObject instance
   *
   * @example
   * ```typescript
   * // Start with empty object and build up
   * let schema = OasObject.empty();
   *
   * schema = schema.addProperty({
   *   name: 'id',
   *   schema: new OasString(),
   *   required: true
   * });
   *
   * schema = schema.addProperty({
   *   name: 'name',
   *   schema: new OasString(),
   *   required: true
   * });
   * ```
   */
  static empty() {
    return new _OasObject({
      nullable: false,
      properties: {},
      required: []
    });
  }
  /**
   * Adds a new property to the object.
   *
   * This method returns a new OasObject instance with the added property,
   * following an immutable pattern. If the property is marked as required,
   * it will be added to the required array.
   *
   * @param args - Property addition arguments
   * @param args.name - The name of the property to add
   * @param args.schema - The schema definition for the property
   * @param args.required - Whether the property should be required (default: false)
   * @returns A new OasObject with the added property
   *
   * @example Adding a simple property
   * ```typescript
   * const original = OasObject.empty();
   * const withName = original.addProperty({
   *   name: 'username',
   *   schema: new OasString({ minLength: 3 }),
   *   required: true
   * });
   *
   * console.log(withName.required); // ['username']
   * ```
   *
   * @example Chaining property additions
   * ```typescript
   * const userSchema = OasObject.empty()
   *   .addProperty({
   *     name: 'id',
   *     schema: new OasInteger(),
   *     required: true
   *   })
   *   .addProperty({
   *     name: 'email',
   *     schema: new OasString({ format: 'email' }),
   *     required: true
   *   })
   *   .addProperty({
   *     name: 'age',
   *     schema: new OasInteger({ minimum: 0 }),
   *     required: false
   *   });
   * ```
   */
  addProperty({ name, schema, required }) {
    if (!schema) {
      return this;
    }
    return new _OasObject({
      title: this.title,
      description: this.description,
      properties: {
        ...this.properties,
        [name]: schema
      },
      required: required ? [
        ...this.required ?? [],
        name
      ] : this.required,
      additionalProperties: this.additionalProperties,
      nullable: this.nullable,
      extensionFields: this.extensionFields
    });
  }
  /**
   * Removes a property from the object.
   *
   * This method returns a new OasObject instance with the specified property
   * removed. If the property was required, it will also be removed from the
   * required array. If the property doesn't exist, returns the same instance.
   *
   * @param name - The name of the property to remove
   * @returns A new OasObject with the property removed, or the same instance if property doesn't exist
   *
   * @example
   * ```typescript
   * const userSchema = new OasObject({
   *   properties: {
   *     id: new OasString(),
   *     name: new OasString(),
   *     email: new OasString(),
   *     temporaryField: new OasString()
   *   },
   *   required: ['id', 'name', 'temporaryField']
   * });
   *
   * // Remove temporary field
   * const cleanedSchema = userSchema.removeProperty('temporaryField');
   *
   * console.log(cleanedSchema.required); // ['id', 'name']
   * console.log('temporaryField' in cleanedSchema.properties); // false
   * ```
   */
  removeProperty(name) {
    if (!this.properties?.[name]) {
      return this;
    }
    const { [name]: _removed, ...properties } = this.properties;
    return new _OasObject({
      title: this.title,
      description: this.description,
      properties,
      required: this.required?.filter((n) => n !== name),
      additionalProperties: this.additionalProperties,
      nullable: this.nullable,
      extensionFields: this.extensionFields
    });
  }
  isRef() {
    return false;
  }
  resolve() {
    return this;
  }
  resolveOnce() {
    return this;
  }
  /**
   * Converts the OasObject to a standard JSON Schema object.
   *
   * This method serializes the object to the JSON Schema format used in
   * OpenAPI specifications. It handles property conversion, additional
   * properties rules, and validation constraints.
   *
   * @param options - Conversion options for handling references and context
   * @returns A JSON Schema representation of the object
   *
   * @example
   * ```typescript
   * const userObject = new OasObject({
   *   title: 'User',
   *   properties: {
   *     id: new OasString(),
   *     name: new OasString()
   *   },
   *   required: ['id'],
   *   additionalProperties: false
   * });
   *
   * const jsonSchema = userObject.toJsonSchema({ refContext: new Map() });
   *
   * console.log(jsonSchema);
   * // {
   * //   type: 'object',
   * //   title: 'User',
   * //   properties: {
   * //     id: { type: 'string' },
   * //     name: { type: 'string' }
   * //   },
   * //   required: ['id'],
   * //   additionalProperties: false
   * // }
   * ```
   */
  toJsonSchema(options) {
    return {
      type: "object",
      title: this.title,
      description: this.description,
      nullable: this.nullable,
      example: this.example,
      properties: this.properties ? Object.fromEntries(Object.entries(this.properties).filter(([_key, value]) => value.type !== "custom").map(([key, value]) => [
        key,
        value.toJsonSchema(options)
      ])) : void 0,
      required: this.required,
      maxProperties: this.maxProperties,
      minProperties: this.minProperties,
      enum: this.enums,
      additionalProperties: (() => {
        if (this.additionalProperties === null || this.additionalProperties === void 0) {
          return false;
        } else if (typeof this.additionalProperties === "boolean") {
          return this.additionalProperties;
        } else {
          return this.additionalProperties.toJsonSchema(options);
        }
      })(),
      readOnly: this.readOnly,
      writeOnly: this.writeOnly,
      deprecated: this.deprecated
    };
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/object/toAdditionalPropertiesV3.ts
var toAdditionalPropertiesV3 = ({ additionalProperties, stackTrail, context }) => {
  if (typeof additionalProperties === "boolean") {
    return additionalProperties;
  }
  if (additionalProperties === void 0) {
    return void 0;
  }
  return toSchemaV3({
    schema: additionalProperties,
    stackTrail,
    context
  });
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/object/toObject.ts
var toObject = ({ value, context, stackTrail }) => {
  const { nullable, value: valueWithoutNullable } = parseNullable({
    value,
    context,
    stackTrail
  });
  const { example: unparsedExample, ...valueWithoutExample } = valueWithoutNullable;
  const example = parseExample2({
    example: unparsedExample,
    context,
    parent: valueWithoutNullable,
    nullable,
    stackTrail
  });
  const { enum: unparsedEnums, ...valueWithoutEnums } = valueWithoutExample;
  const enums = parseEnum({
    value: unparsedEnums,
    nullable,
    parent: valueWithoutExample,
    context,
    stackTrail,
    check: isObject,
    toMessage: (item) => `Removed invalid enum. Expected "object", got: ${item}`
  });
  return toParsedObject({
    context,
    nullable,
    example,
    enums,
    value: valueWithoutEnums,
    stackTrail
  });
};
var toParsedObject = ({ context, stackTrail, nullable, example, enums, value }) => {
  const { type: _type, title, description, deprecated, properties, required, maxProperties, minProperties, additionalProperties, default: defaultValue, readOnly, writeOnly, ...skipped } = value;
  const extensionFields = toSpecificationExtensionsV3({
    skipped,
    parent: value,
    context,
    stackTrail,
    parentType: "schema:object"
  });
  return new OasObject({
    title,
    description,
    nullable,
    example,
    enums,
    properties: stackTrail.trace("properties", (st) => toOptionalSchemasV3({
      schemas: properties,
      stackTrail: st,
      context
    })),
    required,
    maxProperties,
    minProperties,
    additionalProperties: stackTrail.trace("additionalProperties", (st) => toAdditionalPropertiesV3({
      additionalProperties,
      stackTrail: st,
      context
    })),
    extensionFields,
    default: defaultValue,
    deprecated,
    readOnly,
    writeOnly
  });
};
var parseExample2 = ({ example, context, parent, nullable, stackTrail }) => {
  if (example === void 0) {
    return void 0;
  }
  if (nullable && example === null) {
    return example;
  }
  if (!isObject(example)) {
    context.logIssue({
      key: "example",
      level: "warning",
      message: `Invalid example: ${example}`,
      parent,
      stackTrail,
      type: "INVALID_EXAMPLE"
    });
    return void 0;
  }
  return example;
};
var isObject = (value) => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/integer/Integer.ts
var OasInteger = class {
  /**
   * Object is part the 'schema' set which is used
   * to define data types in an OpenAPI document.
   */
  oasType = "schema";
  /**
   * Constant value 'integer' useful for type narrowing and tagged unions.
   */
  type = "integer";
  /**
   * A short summary of the integer.
   */
  title;
  /**
   * A description of the integer.
   */
  description;
  /**
   * Indicates whether value can be null.
   */
  nullable;
  /**
   * The format of the integer.
   */
  format;
  /**
   * An array of allowed values for the integer.
   */
  enums;
  /** Specification Extension fields */
  extensionFields;
  /**
   * An example of the integer.
   */
  example;
  /**
   * The multiple of the integer.
   */
  multipleOf;
  /**
   * The maximum value of the integer.
   */
  maximum;
  /**
   * Whether the maximum value is exclusive.
   */
  exclusiveMaximum;
  /**
   * The minimum value of the integer.
   */
  minimum;
  /**
   * Whether the minimum value is exclusive.
   */
  exclusiveMinimum;
  /**
   * The default value of the integer.
   */
  default;
  /**
   * Whether the integer is read-only.
   */
  readOnly;
  /**
   * Whether the integer is write-only.
   */
  writeOnly;
  /**
   * Whether the integer is deprecated.
   */
  deprecated;
  constructor(fields = {}) {
    this.title = fields.title;
    this.description = fields.description;
    this.nullable = fields.nullable;
    this.format = fields.format;
    this.enums = fields.enums;
    this.extensionFields = fields.extensionFields;
    this.example = fields.example;
    this.multipleOf = fields.multipleOf;
    this.maximum = fields.maximum;
    this.exclusiveMaximum = fields.exclusiveMaximum;
    this.minimum = fields.minimum;
    this.exclusiveMinimum = fields.exclusiveMinimum;
    this.default = fields.default;
    this.readOnly = fields.readOnly;
    this.writeOnly = fields.writeOnly;
    this.deprecated = fields.deprecated;
  }
  isRef() {
    return false;
  }
  resolve() {
    return this;
  }
  resolveOnce() {
    return this;
  }
  // deno-lint-ignore no-unused-vars
  toJsonSchema(options) {
    return {
      type: "integer",
      title: this.title,
      description: this.description,
      nullable: this.nullable,
      format: this.format,
      enum: this.enums,
      example: this.example,
      multipleOf: this.multipleOf,
      maximum: this.maximum,
      exclusiveMaximum: this.exclusiveMaximum,
      minimum: this.minimum,
      exclusiveMinimum: this.exclusiveMinimum,
      default: this.default,
      readOnly: this.readOnly,
      writeOnly: this.writeOnly
    };
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/integer/integer-types.ts
var integerSchema = pipe(number(), integer());
var integerFormat = union([
  literal("int32"),
  literal("int64")
]);
var oasIntegerData = object({
  type: literal("integer"),
  title: optional(string()),
  description: optional(string()),
  default: optional(integerSchema),
  format: optional(integerFormat),
  enum: optional(array(integerSchema)),
  nullable: optional(boolean()),
  example: optional(integerSchema),
  multipleOf: optional(integerSchema),
  maximum: optional(integerSchema),
  exclusiveMaximum: optional(boolean()),
  minimum: optional(integerSchema),
  exclusiveMinimum: optional(boolean()),
  readOnly: optional(boolean()),
  writeOnly: optional(boolean()),
  deprecated: optional(boolean())
});

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/integer/toInteger.ts
var toInteger = ({ value, stackTrail, context }) => {
  const { nullable, value: valueWithoutNullable } = parseNullable({
    value,
    context,
    stackTrail
  });
  const { example: unparsedExample, ...valueWithoutExample } = valueWithoutNullable;
  const example = parseExample3({
    example: unparsedExample,
    context,
    parent: valueWithoutNullable,
    nullable,
    stackTrail
  });
  const { enum: unparsedEnums, ...valueWithoutEnums } = valueWithoutExample;
  const enums = parseEnum({
    value: unparsedEnums,
    nullable,
    parent: valueWithoutExample,
    context,
    check: Number.isInteger,
    toMessage: (item) => `Removed invalid enum. Expected "integer", got: ${item}`,
    stackTrail
  });
  return toParsedInteger({
    context,
    nullable,
    example,
    enums,
    value: valueWithoutEnums,
    stackTrail
  });
};
var toParsedInteger = ({ context, nullable, example, enums, value: valueWithoutEnums, stackTrail }) => {
  const { format: unparsedFormat, ...valueWithoutFormat } = valueWithoutEnums;
  const format3 = parseIntegerFormat({
    format: unparsedFormat,
    context,
    parent: valueWithoutEnums,
    stackTrail
  });
  if (!is(oasIntegerData, valueWithoutFormat)) {
    parse(oasIntegerData, valueWithoutFormat);
  }
  const { type: _type, title, description, default: defaultValue, multipleOf, maximum, exclusiveMaximum, minimum, exclusiveMinimum, readOnly, writeOnly, deprecated, ...skipped } = valueWithoutFormat;
  const extensionFields = toSpecificationExtensionsV3({
    skipped,
    parent: valueWithoutEnums,
    context,
    stackTrail,
    parentType: "schema:integer"
  });
  return new OasInteger({
    title,
    description,
    nullable,
    format: format3,
    enums,
    example,
    multipleOf,
    maximum,
    exclusiveMaximum,
    minimum,
    exclusiveMinimum,
    default: defaultValue,
    readOnly,
    writeOnly,
    extensionFields,
    deprecated
  });
};
var parseIntegerFormat = ({ format: format3, context, parent, stackTrail }) => {
  if (format3 === void 0) {
    return void 0;
  }
  if (!is(integerFormat, format3)) {
    context.logIssue({
      key: "format",
      level: "warning",
      message: `Invalid format: ${format3}`,
      parent,
      stackTrail,
      type: "INVALID_FORMAT"
    });
    return void 0;
  }
  return format3;
};
var parseExample3 = ({ example, context, parent, nullable, stackTrail }) => {
  if (example === void 0) {
    return void 0;
  }
  if (nullable && example === null) {
    return example;
  }
  if (!isInteger(example)) {
    context.logIssue({
      key: "example",
      level: "warning",
      message: `Removed invalid example. Expected "integer", got: ${example}`,
      parent,
      stackTrail,
      type: "INVALID_EXAMPLE"
    });
    return void 0;
  }
  return example;
};
var isInteger = (value) => {
  return Number.isInteger(value);
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/number/Number.ts
var OasNumber = class {
  /**
   * Object is part the 'schema' set which is used
   * to define data types in an OpenAPI document.
   */
  oasType = "schema";
  /**
   * Constant value 'number' useful for type narrowing and tagged unions.
   */
  type = "number";
  /**
   * A short summary of the number.
   */
  title;
  /**
   * The default value of the number.
   */
  default;
  /**
   * A description of the number.
   */
  description;
  /**
   * Indicates whether value can be null.
   */
  nullable;
  /** Specification Extension fields */
  extensionFields;
  /**
   * An example of the number.
   */
  example;
  /**
   * An array of allowed values for the number.
   */
  enums;
  /**
   * The format of the number.
   */
  format;
  /**
   * The multiple of the number.
   */
  multipleOf;
  /**
   * The maximum value of the number.
   */
  maximum;
  /**
   * Whether the maximum value is exclusive.
   */
  exclusiveMaximum;
  /**
   * The minimum value of the number.
   */
  minimum;
  /**
   * Whether the minimum value is exclusive.
   */
  exclusiveMinimum;
  /**
   * Whether the number is read-only.
   */
  readOnly;
  /**
   * Whether the number is write-only.
   */
  writeOnly;
  /**
   * Whether the number is deprecated.
   */
  deprecated;
  constructor(fields = {}) {
    this.title = fields.title;
    this.description = fields.description;
    this.nullable = fields.nullable;
    this.default = fields.default;
    this.extensionFields = fields.extensionFields;
    this.example = fields.example;
    this.enums = fields.enums;
    this.format = fields.format;
    this.multipleOf = fields.multipleOf;
    this.maximum = fields.maximum;
    this.exclusiveMaximum = fields.exclusiveMaximum;
    this.minimum = fields.minimum;
    this.exclusiveMinimum = fields.exclusiveMinimum;
    this.readOnly = fields.readOnly;
    this.writeOnly = fields.writeOnly;
    this.deprecated = fields.deprecated;
  }
  isRef() {
    return false;
  }
  resolve() {
    return this;
  }
  resolveOnce() {
    return this;
  }
  // deno-lint-ignore no-unused-vars
  toJsonSchema(options) {
    return {
      type: "number",
      title: this.title,
      description: this.description,
      nullable: this.nullable,
      example: this.example,
      enum: this.enums,
      format: this.format,
      multipleOf: this.multipleOf,
      maximum: this.maximum,
      exclusiveMaximum: this.exclusiveMaximum,
      minimum: this.minimum,
      exclusiveMinimum: this.exclusiveMinimum,
      readOnly: this.readOnly,
      writeOnly: this.writeOnly
    };
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/number/number-types.ts
var numberFormat = union([
  literal("float"),
  literal("double")
]);
var oasNumberData = object({
  type: literal("number"),
  title: optional(string()),
  description: optional(string()),
  default: optional(number()),
  format: optional(numberFormat),
  enum: optional(array(number())),
  nullable: optional(boolean()),
  example: optional(number()),
  multipleOf: optional(number()),
  maximum: optional(number()),
  exclusiveMaximum: optional(boolean()),
  minimum: optional(number()),
  exclusiveMinimum: optional(boolean()),
  readOnly: optional(boolean()),
  writeOnly: optional(boolean()),
  deprecated: optional(boolean())
});

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/number/toNumber.ts
var toNumber = ({ context, value, stackTrail }) => {
  const { nullable, value: valueWithoutNullable } = parseNullable({
    value,
    context,
    stackTrail
  });
  const { example: unparsedExample, ...valueWithoutExample } = valueWithoutNullable;
  const example = parseExample4({
    example: unparsedExample,
    context,
    parent: valueWithoutNullable,
    nullable,
    stackTrail
  });
  const { enum: unparsedEnums, ...valueWithoutEnums } = valueWithoutExample;
  const enums = parseEnum({
    value: unparsedEnums,
    nullable,
    stackTrail,
    parent: valueWithoutExample,
    context,
    check: isNumber,
    toMessage: (item) => `Removed invalid enum. Expected "number", got: ${item}`
  });
  return toParsedNumber({
    context,
    nullable,
    example,
    enums,
    value: valueWithoutEnums,
    stackTrail
  });
};
var toParsedNumber = ({ context, nullable, example, enums, value: valueWithoutEnums, stackTrail }) => {
  const { format: unparsedFormat, ...valueWithoutFormat } = valueWithoutEnums;
  const format3 = parseNumberFormat({
    format: unparsedFormat,
    context,
    stackTrail,
    parent: valueWithoutEnums
  });
  if (!is(oasNumberData, valueWithoutFormat)) {
    parse(oasNumberData, valueWithoutFormat);
  }
  const { type: _type, title, description, multipleOf, maximum, exclusiveMaximum, minimum, exclusiveMinimum, default: defaultValue, readOnly, writeOnly, deprecated, ...skipped } = valueWithoutFormat;
  const extensionFields = toSpecificationExtensionsV3({
    skipped,
    parent: valueWithoutFormat,
    context,
    stackTrail,
    parentType: "schema:number"
  });
  return new OasNumber({
    title,
    description,
    nullable,
    default: defaultValue,
    extensionFields,
    example,
    enums,
    format: format3,
    multipleOf,
    maximum,
    exclusiveMaximum,
    minimum,
    readOnly,
    writeOnly,
    exclusiveMinimum,
    deprecated
  });
};
var parseNumberFormat = ({ format: format3, context, parent, stackTrail }) => {
  if (format3 === void 0) {
    return void 0;
  }
  if (!is(numberFormat, format3)) {
    context.logIssue({
      key: "format",
      level: "warning",
      message: `Invalid format: ${format3}`,
      parent,
      stackTrail,
      type: "INVALID_FORMAT"
    });
    return void 0;
  }
  return format3;
};
var parseExample4 = ({ example, context, parent, nullable, stackTrail }) => {
  if (example === void 0) {
    return void 0;
  }
  if (nullable && example === null) {
    return example;
  }
  if (!isNumber(example)) {
    context.logIssue({
      key: "example",
      level: "warning",
      message: `Removed invalid example. Expected "number", got: ${example}`,
      parent,
      stackTrail,
      type: "INVALID_EXAMPLE"
    });
    return void 0;
  }
  return example;
};
var isNumber = (value) => {
  return typeof value === "number";
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/boolean/Boolean.ts
var OasBoolean = class {
  /**
   * Object is part the 'schema' set which is used
   * to define data types in an OpenAPI document.
   */
  oasType = "schema";
  /**
   * Constant value 'boolean' useful for type narrowing and tagged unions.
   */
  type = "boolean";
  /**
   * A short summary of the boolean.
   */
  title;
  /**
   * A description of the boolean.
   */
  description;
  /**
   * Indicates whether value can be null.
   */
  nullable;
  /** Specification Extension fields */
  extensionFields;
  /**
   * An example of the boolean.
   */
  example;
  /**
   * Possible values the boolean can have
   */
  enums;
  /**
   * The default value of the boolean.
   */
  default;
  /** Whether the boolean is read-only */
  readOnly;
  /** Whether the boolean is write-only */
  writeOnly;
  /** Whether the boolean is deprecated */
  deprecated;
  /**
   * Creates a new OasBoolean instance.
   *
   * @param fields - Boolean configuration fields including validation constraints and metadata
   */
  constructor(fields = {}) {
    this.title = fields.title;
    this.description = fields.description;
    this.nullable = fields.nullable;
    this.extensionFields = fields.extensionFields;
    this.example = fields.example;
    this.enums = fields.enums;
    this.default = fields.default;
    this.readOnly = fields.readOnly;
    this.writeOnly = fields.writeOnly;
    this.deprecated = fields.deprecated;
  }
  /**
   * Determines if this boolean is a reference object.
   *
   * @returns Always returns false since this is a concrete boolean instance, not a reference
   */
  isRef() {
    return false;
  }
  /**
   * Resolves this boolean object.
   *
   * @returns The boolean instance itself since it's already a concrete object, not a reference
   */
  resolve() {
    return this;
  }
  /**
   * Resolves this boolean object one level.
   *
   * @returns The boolean instance itself since it's already a concrete object, not a reference
   */
  resolveOnce() {
    return this;
  }
  /**
   * Converts this OAS boolean to an OpenAPI v3 JSON schema representation.
   *
   * @param options - Conversion options (currently unused for boolean schemas)
   * @returns OpenAPI v3 boolean schema object with type and all validation constraints
   */
  // deno-lint-ignore no-unused-vars
  toJsonSchema(options) {
    return {
      type: "boolean",
      title: this.title,
      description: this.description,
      nullable: this.nullable,
      example: this.example,
      enum: this.enums,
      default: this.default,
      readOnly: this.readOnly,
      writeOnly: this.writeOnly,
      deprecated: this.deprecated
    };
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/boolean/boolean-types.ts
var oasBooleanData = object({
  type: literal("boolean"),
  title: optional(string()),
  description: optional(string()),
  default: optional(boolean()),
  enum: optional(array(boolean())),
  readOnly: optional(boolean()),
  writeOnly: optional(boolean()),
  deprecated: optional(boolean())
});

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/boolean/toBoolean.ts
var toBoolean = ({ value, stackTrail, context }) => {
  const { nullable, value: valueWithoutNullable } = parseNullable({
    value,
    context,
    stackTrail
  });
  const { example: unparsedExample, ...valueWithoutExample } = valueWithoutNullable;
  const example = parseExample5({
    example: unparsedExample,
    context,
    parent: valueWithoutNullable,
    nullable,
    stackTrail
  });
  const { enum: unparsedEnums, ...valueWithoutEnums } = valueWithoutExample;
  const enums = parseEnum({
    value: unparsedEnums,
    nullable,
    parent: valueWithoutExample,
    stackTrail,
    context,
    check: isBoolean,
    toMessage: (item) => `Removed invalid enum. Expected "boolean", got: ${item}`
  });
  const { default: unparsedDefaultValue, ...valueWithoutDefault } = valueWithoutEnums;
  const defaultValue = parseDefault2({
    defaultValue: unparsedDefaultValue,
    context,
    parent: valueWithoutEnums,
    nullable,
    stackTrail
  });
  return toParsedBoolean({
    context,
    nullable,
    example,
    enums,
    defaultValue,
    value: valueWithoutDefault,
    stackTrail
  });
};
var toParsedBoolean = ({ context, nullable, example, enums, defaultValue, value, stackTrail }) => {
  if (!is(oasBooleanData, value)) {
    parse(oasBooleanData, value);
  }
  const { type: _type, title, description, readOnly, writeOnly, deprecated, ...skipped } = value;
  const extensionFields = toSpecificationExtensionsV3({
    skipped,
    parent: value,
    context,
    stackTrail,
    parentType: "schema:boolean"
  });
  return new OasBoolean({
    nullable,
    title,
    description,
    example,
    enums,
    default: defaultValue,
    extensionFields,
    readOnly,
    writeOnly,
    deprecated
  });
};
var parseExample5 = ({ example, context, parent, nullable, stackTrail }) => {
  if (example === void 0) {
    return void 0;
  }
  if (nullable && example === null) {
    return example;
  }
  if (typeof example !== "boolean") {
    context.logIssue({
      key: "example",
      level: "warning",
      message: `Removed invalid example. Expected "boolean", got: ${example}`,
      parent,
      stackTrail,
      type: "INVALID_EXAMPLE"
    });
    return void 0;
  }
  return example;
};
var parseDefault2 = ({ defaultValue, context, parent, nullable, stackTrail }) => {
  if (defaultValue === void 0) {
    return void 0;
  }
  if (nullable && defaultValue === null) {
    return defaultValue;
  }
  if (typeof defaultValue !== "boolean") {
    context.logIssue({
      key: "default",
      level: "warning",
      message: `Removed invalid default. Expected "boolean", got: ${defaultValue}`,
      parent,
      stackTrail,
      type: "INVALID_DEFAULT"
    });
    return void 0;
  }
  return defaultValue;
};
var isBoolean = (value) => {
  return typeof value === "boolean";
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/string/String.ts
var OasString = class {
  /**
   * Object is part the 'schema' set which is used
   * to define data types in an OpenAPI document.
   */
  oasType = "schema";
  /**
   * Constant value 'string' useful for type narrowing and tagged unions.
   */
  type = "string";
  /**
   * A short summary of the string.
   */
  title;
  /**
   * A description of the string.
   */
  description;
  /**
   * The format of the string.
   */
  format;
  /**
   * An array of allowed values for the string.
   */
  enums;
  /**
   * The maximum length of the string.
   */
  maxLength;
  /**
   * The minimum length of the string.
   */
  minLength;
  /**
   * Indicates whether value can be null.
   */
  nullable;
  /** Specification Extension fields */
  extensionFields;
  /** An example of the string. */
  example;
  /**
   * The pattern of the string.
   */
  pattern;
  /**
   * The default value of the string.
   */
  default;
  /**
   * Whether the string is read-only.
   */
  readOnly;
  /**
   * Whether the string is write-only.
   */
  writeOnly;
  /**
   * Whether the string is deprecated.
   */
  deprecated;
  constructor(fields = {}) {
    this.title = fields.title;
    this.description = fields.description;
    this.format = fields.format;
    this.enums = fields.enums;
    this.nullable = fields.nullable;
    this.extensionFields = fields.extensionFields;
    this.example = fields.example;
    this.maxLength = fields.maxLength;
    this.minLength = fields.minLength;
    this.pattern = fields.pattern;
    this.default = fields.default;
    this.readOnly = fields.readOnly;
    this.writeOnly = fields.writeOnly;
    this.deprecated = fields.deprecated;
  }
  isRef() {
    return false;
  }
  resolve() {
    return this;
  }
  resolveOnce() {
    return this;
  }
  // deno-lint-ignore no-unused-vars
  toJsonSchema(options) {
    return {
      type: "string",
      title: this.title,
      description: this.description,
      nullable: this.nullable,
      example: this.example,
      format: this.format,
      enum: this.enums,
      maxLength: this.maxLength,
      minLength: this.minLength,
      pattern: this.pattern,
      default: this.default,
      readOnly: this.readOnly,
      writeOnly: this.writeOnly
    };
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/string/string-types.ts
var stringFormat = enum_({
  "date-time": "date-time",
  time: "time",
  date: "date",
  duration: "duration",
  email: "email",
  hostname: "hostname",
  ipv4: "ipv4",
  ipv6: "ipv6",
  uuid: "uuid",
  uri: "uri",
  regex: "regex",
  password: "password",
  byte: "byte",
  binary: "binary",
  "uri-template": "uri-template"
});
var oasStringData = object({
  type: literal("string"),
  title: optional(string()),
  description: optional(string()),
  default: optional(string()),
  maxLength: optional(number()),
  minLength: optional(number()),
  pattern: optional(string()),
  enum: optional(array(string())),
  format: optional(string()),
  nullable: optional(boolean()),
  example: optional(string()),
  readOnly: optional(boolean()),
  writeOnly: optional(boolean()),
  deprecated: optional(boolean())
});

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/string/toString.ts
var toString = ({ context, value, stackTrail }) => {
  if (value.type === "string" && Object.keys(value).length === 1) {
    return new OasString();
  }
  const { nullable, value: valueWithoutNullable } = parseNullable({
    value,
    context,
    stackTrail
  });
  const { example: unparsedExample, ...valueWithoutExample } = valueWithoutNullable;
  const example = parseExample6({
    example: unparsedExample,
    context,
    parent: valueWithoutNullable,
    nullable,
    stackTrail
  });
  const { enum: unparsedEnums, ...valueWithoutEnums } = valueWithoutExample;
  const enums = parseEnum({
    value: unparsedEnums,
    nullable,
    parent: valueWithoutExample,
    context,
    check: isString,
    toMessage: (item) => `Removed invalid enum. Expected "string", got: ${item}`,
    stackTrail
  });
  const { default: unparsedDefaultValue, ...valueWithoutDefault } = valueWithoutEnums;
  const defaultValue = parseDefault3({
    defaultValue: unparsedDefaultValue,
    context,
    parent: valueWithoutEnums,
    nullable,
    stackTrail
  });
  return toParsedString({
    context,
    nullable,
    example,
    enums,
    defaultValue,
    value: valueWithoutDefault,
    stackTrail
  });
};
var toParsedString = ({ context, nullable, example, enums, defaultValue, value, stackTrail }) => {
  if (!is(oasStringData, value)) {
    parse(oasStringData, value);
  }
  const { type: _type, title, description, format: format3, maxLength, minLength, pattern, readOnly, writeOnly, deprecated, ...skipped } = value;
  const extensionFields = toSpecificationExtensionsV3({
    skipped,
    parent: value,
    context,
    stackTrail,
    parentType: "schema:string"
  });
  if (format3 && !is(stringFormat, format3)) {
    context.logIssue({
      key: "format",
      level: "warning",
      message: `Unexpected format: ${format3}`,
      parent: value,
      stackTrail,
      type: "UNEXPECTED_FORMAT"
    });
  }
  return new OasString({
    title,
    description,
    enums,
    nullable,
    example,
    format: format3,
    maxLength,
    minLength,
    pattern,
    readOnly,
    writeOnly,
    default: defaultValue,
    extensionFields,
    deprecated
  });
};
var isString = (value) => {
  return typeof value === "string";
};
var parseExample6 = ({ example, context, parent, nullable, stackTrail }) => {
  if (example === void 0) {
    return void 0;
  }
  if (nullable && example === null) {
    return example;
  }
  if (!isString(example)) {
    context.logIssue({
      key: "example",
      level: "warning",
      message: `Removed invalid example. Expected "string", got: ${example}`,
      parent,
      stackTrail,
      type: "INVALID_EXAMPLE"
    });
    return void 0;
  }
  return example;
};
var parseDefault3 = ({ defaultValue, context, parent, nullable, stackTrail }) => {
  if (defaultValue === void 0) {
    return void 0;
  }
  if (nullable && defaultValue === null) {
    return defaultValue;
  }
  if (!isString(defaultValue)) {
    context.logIssue({
      key: "default",
      level: "warning",
      message: `Removed invalid default. Expected "string", got: ${defaultValue}`,
      parent,
      stackTrail,
      type: "INVALID_DEFAULT"
    });
    return void 0;
  }
  return defaultValue;
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/unknown/Unknown.ts
var OasUnknown = class {
  /**
   * Object is part the 'schema' set which is used
   * to define data types in an OpenAPI document.
   */
  oasType = "schema";
  /**
   * Constant value 'unknown' useful for type narrowing and tagged unions.
   */
  type = "unknown";
  /**
   * A short summary of the unknown type.
   */
  title;
  /**
   * A description of the unknown type.
   */
  description;
  /** Specification Extension fields */
  extensionFields;
  /** An example of the unknown type. */
  example;
  /** Whether the unknown type is nullable */
  nullable;
  constructor(fields = {}) {
    this.title = fields.title;
    this.description = fields.description;
    this.extensionFields = fields.extensionFields;
    this.example = fields.example;
    this.nullable = fields.nullable;
  }
  isRef() {
    return false;
  }
  resolve() {
    return this;
  }
  resolveOnce() {
    return this;
  }
  toJsonSchema(_options) {
    return {
      title: this.title,
      description: this.description,
      example: this.example
    };
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/unknown/toUnknown.ts
var toUnknown = ({ value, stackTrail, context }) => {
  const { type: _type, title, description, example, nullable, ...skipped } = value;
  const extensionFields = toSpecificationExtensionsV3({
    skipped,
    parent: value,
    context,
    stackTrail,
    parentType: "schema:unknown"
  });
  return new OasUnknown({
    title,
    description,
    nullable,
    extensionFields,
    example
  });
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/union/Union.ts
var OasUnion = class {
  /**
   * Object is part the 'schema' set which is used
   * to define data types in an OpenAPI document.
   */
  oasType = "schema";
  /**
   * Constant value 'union' useful for type narrowing and tagged unions.
   */
  type = "union";
  /**
   * A short summary of the union.
   */
  title;
  /**
   * A description of the union.
   */
  description;
  /**
   * Indicates whether value can be null.
   */
  nullable;
  /**
   * Discriminator object used to tag member types and make the union a tagged union.
   */
  discriminator;
  /**
   * Array of schemas or references to schemas that are part of the union.
   */
  members;
  /** Specification Extension fields */
  extensionFields;
  /**
   * An example of the union type.
   */
  example;
  /**
   * The default value of the union type.
   */
  default;
  constructor(fields) {
    this.title = fields.title;
    this.description = fields.description;
    this.nullable = fields.nullable;
    this.discriminator = fields.discriminator;
    this.members = fields.members;
    this.extensionFields = fields.extensionFields;
    this.example = fields.example;
    this.default = fields.default;
  }
  isRef() {
    return false;
  }
  resolve() {
    return this;
  }
  resolveOnce() {
    return this;
  }
  toJsonSchema(options) {
    return {
      title: this.title,
      description: this.description,
      nullable: this.nullable,
      example: this.example,
      default: this.default,
      oneOf: this.members.map((member) => member.toJsonSchema(options))
    };
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/discriminator/Discriminator.ts
var OasDiscriminator = class {
  oasType = "discriminator";
  propertyName;
  mapping;
  constructor(fields) {
    this.propertyName = fields.propertyName;
    this.mapping = fields.mapping;
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/discriminator/toDiscriminatorV3.ts
var toDiscriminatorV3 = ({ discriminator, stackTrail, context }) => {
  if (!discriminator) {
    return void 0;
  }
  const { propertyName, mapping: mapping2, ...skipped } = discriminator;
  if (!isEmpty(skipped)) {
    context.logSkippedFields({
      skipped,
      parent: discriminator,
      parentType: "discriminator",
      stackTrail
    });
  }
  return new OasDiscriminator({
    propertyName,
    mapping: mapping2
  });
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/union/toUnion.ts
var toUnion = ({ value, members, parentType, stackTrail, context }) => {
  const { discriminator, title, description, nullable, example, default: defaultValue, ...skipped } = value;
  const extensionFields = toSpecificationExtensionsV3({
    skipped,
    parent: value,
    context,
    stackTrail,
    parentType: `schema:${parentType}`
  });
  return new OasUnion({
    title,
    description,
    nullable,
    default: defaultValue,
    discriminator: stackTrail.trace("discriminator", (st) => toDiscriminatorV3({
      discriminator,
      stackTrail: st,
      context
    })),
    members: members.reduce((acc, item, index) => {
      if (item === void 0 || item === null) {
        return acc;
      }
      return [
        ...acc,
        stackTrail.trace(`${index}`, (st) => toSchemaV3({
          schema: item,
          stackTrail: st,
          context
        }))
      ];
    }, []),
    example,
    extensionFields
  });
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_merge-all-of/decompose-intersection.ts
var decomposeIntersection = ({ schema }) => {
  if (!schema.allOf) {
    return [
      schema
    ];
  }
  let location = "before";
  const output = {
    before: [],
    inside: [],
    after: []
  };
  for (const [key, value] of Object.entries(schema)) {
    if (key === "allOf") {
      output.inside = value;
      location = "after";
    } else {
      output[location].push([
        key,
        value
      ]);
    }
  }
  return [
    output.before.length > 0 ? Object.fromEntries(output.before) : void 0,
    ...output.inside,
    output.after.length > 0 ? Object.fromEntries(output.after) : void 0
  ].filter((item) => item !== void 0);
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_merge-all-of/check-type-conflicts.ts
var checkTypeConflicts = (first, second) => {
  if (first.type && second.type && first.type !== second.type) {
    throw new Error(`Cannot merge schemas: conflicting types '${first.type}' and '${second.type}', ${JSON.stringify(first)} and ${JSON.stringify(second)}`);
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_merge-all-of/check-read-only-write-only-conflicts.ts
var checkReadOnlyWriteOnlyConflicts = (a, b) => {
  if (a.readOnly && b.writeOnly || a.writeOnly && b.readOnly) {
    throw new Error("Cannot merge schemas: property cannot be both readOnly and writeOnly");
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_merge-all-of/check-format-conflicts.ts
var checkFormatConflicts = (a, b) => {
  if (a.format && b.format && a.format !== b.format) {
    throw new Error(`Cannot merge schemas: conflicting formats '${a.format}' and '${b.format}'`);
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_merge-all-of/is-equal.ts
var isEqual = (first, second) => {
  if (Array.isArray(first) && Array.isArray(second)) {
    if (first.length !== second.length) return false;
    return first.every((value, index) => isEqual(value, second[index]));
  }
  if (typeof first === "object" && typeof second === "object" && first !== null && second !== null) {
    const aKeys = Object.keys(first);
    const bKeys = Object.keys(second);
    if (aKeys.length !== bKeys.length) return false;
    return aKeys.every((key) => bKeys.includes(key) && isEqual(first[key], second[key]));
  }
  return first === second;
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_merge-all-of/check-enum-conflicts.ts
var checkEnumConflicts = (first, second) => {
  if (first.enum && second.enum) {
    const intersection = first.enum.filter((value) => {
      return second.enum.some((bValue) => isEqual(value, bValue));
    });
    if (intersection.length === 0) {
      throw new Error(`Cannot merge schemas: enum values have no intersection. First: ${first.enum}, Second: ${second.enum}`);
    }
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_merge-all-of/check-number-constraints-conflicts.ts
var checkNumberConstraintsConflicts = (a, b) => {
  if (a.type === "number" && b.type === "number") {
    const aMin = a.minimum ?? -Infinity;
    const aMax = a.maximum ?? Infinity;
    const bMin = b.minimum ?? -Infinity;
    const bMax = b.maximum ?? Infinity;
    if (aMin > bMax || bMin > aMax) {
      throw new Error(`Cannot merge schemas: incompatible number ranges [${aMin},${aMax}] and [${bMin},${bMax}]`);
    }
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_merge-all-of/check-array-item-type-conflicts.ts
var checkArrayItemTypeConflicts = (a, b) => {
  if (a.type === "array" && b.type === "array" && "items" in a && "items" in b) {
    const aItems = a.items;
    const bItems = b.items;
    if (aItems.type && bItems.type && aItems.type !== bItems.type) {
      throw new Error(`Cannot merge schemas: array items have conflicting types '${aItems.type}' and '${bItems.type}'`);
    }
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_merge-all-of/merge-enum-values.ts
var containsEnum = (schema) => {
  return Array.isArray(schema.enum);
};
function mergeEnumValues(first, second, typeCheck) {
  if (!containsEnum(first) && !containsEnum(second)) {
    return {};
  }
  if (!containsEnum(first) && containsEnum(second)) {
    return {
      enum: second.enum
    };
  }
  if (containsEnum(first) && !containsEnum(second)) {
    return {
      enum: first.enum
    };
  }
  const intersection = first.enum.filter((value) => second.enum.some((bValue) => isEqual(value, bValue))).map((value) => typeCheck ? is(typeCheck, value) ? value : void 0 : value);
  if (intersection.length === 0) {
    throw new Error("Merged schema has empty enum array");
  }
  return {
    enum: intersection
  };
}

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_merge-all-of/merge-properties.ts
var mergeProperties = (first, second, getRef) => {
  if (containsProperties(first, second)) {
    const properties = {
      ...first.properties
    };
    if (!properties) {
      return {
        properties: second.properties
      };
    }
    for (const key in second.properties) {
      if (key in properties) {
        properties[key] = mergeSchemasOrRefs(properties[key], second.properties[key], getRef);
      } else {
        properties[key] = second.properties[key];
      }
    }
    return {
      properties
    };
  }
};
var containsProperties = (first, second) => {
  return Boolean(first.properties || second.properties);
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_merge-all-of/merge-required.ts
var containsRequired = (first, second) => {
  return Boolean(first.required || second.required);
};
var mergeRequired = (first, second) => {
  if (containsRequired(first, second)) {
    return {
      required: [
        ...first.required ?? [],
        ...second.required ?? []
      ]
    };
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_merge-all-of/generic-merge.ts
var genericMerge = (first, second, getRef, typeCheck) => {
  return {
    ...first,
    ...second,
    ...mergeProperties(first, second, getRef),
    ...mergeRequired(first, second),
    ...mergeEnumValues(first, second, typeCheck)
  };
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_merge-all-of/merge-object-constraints.ts
var mergeObjectConstraints = (first, second, getRef) => {
  checkTypeConflicts(first, second);
  const result = genericMerge(first, second, getRef, record(string(), any()));
  if (typeof second.additionalProperties === "object" && typeof first.additionalProperties === "object") {
    result.additionalProperties = mergeSchemasOrRefs(first.additionalProperties, second.additionalProperties, getRef);
  } else if (second.additionalProperties !== void 0) {
    result.additionalProperties = second.additionalProperties;
  } else if (first.additionalProperties !== void 0) {
    result.additionalProperties = first.additionalProperties;
  }
  if (second.minProperties !== void 0 || first.minProperties !== void 0) {
    result.minProperties = Math.max(second.minProperties ?? 0, first.minProperties ?? 0);
  }
  if (second.maxProperties !== void 0 || first.maxProperties !== void 0) {
    result.maxProperties = Math.min(second.maxProperties ?? Infinity, first.maxProperties ?? Infinity);
  }
  return result;
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_merge-all-of/merge-array-constraints.ts
function mergeArrayConstraints(first, second, getRef) {
  checkTypeConflicts(first, second);
  if (!("items" in first) && !("items" in second)) {
    throw new Error("Cannot merge array constraints: no items found");
  }
  const result = {
    ...genericMerge(first, second, getRef, array(any())),
    type: "array",
    items: mergeItems(first, second, getRef)
  };
  if (first.minItems !== void 0 || second.minItems !== void 0) {
    const minA = first.minItems ?? 0;
    const minB = second.minItems ?? 0;
    result.minItems = Math.max(minA, minB);
  }
  if (first.maxItems !== void 0 || second.maxItems !== void 0) {
    const maxA = first.maxItems ?? Infinity;
    const maxB = second.maxItems ?? Infinity;
    result.maxItems = Math.min(maxA, maxB);
  }
  if (first.uniqueItems || second.uniqueItems) {
    result.uniqueItems = true;
  }
  return result;
}
var mergeItems = (first, second, getRef) => {
  if ("items" in first && "items" in second && first.items && second.items) {
    return mergeSchemasOrRefs(first.items, second.items, getRef);
  }
  if ("items" in first && first.items) {
    return first.items;
  }
  if ("items" in second && second.items) {
    return second.items;
  }
  throw new Error("Cannot merge array constraints: no items found");
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_merge-all-of/check-at-least-one-type-match.ts
var checkAtLeastOneTypeMatch = (first, second, type) => {
  return first.type === type && second.type === type || first.type === type && !second.type || !first.type && second.type === type;
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_merge-all-of/merge-string-constraints.ts
function mergeStringConstraints(first, second, getRef) {
  checkTypeConflicts(first, second);
  if (!checkAtLeastOneTypeMatch(first, second, "string")) {
    return genericMerge(first, second, getRef);
  }
  const result = genericMerge(first, second, getRef, string());
  result.type = "string";
  if (first.minLength !== void 0 || second.minLength !== void 0) {
    const minA = first.minLength ?? 0;
    const minB = second.minLength ?? 0;
    result.minLength = Math.max(minA, minB);
  }
  if (first.maxLength !== void 0 || second.maxLength !== void 0) {
    const maxA = first.maxLength ?? Infinity;
    const maxB = second.maxLength ?? Infinity;
    result.maxLength = Math.min(maxA, maxB);
  }
  if (first.pattern !== void 0 && second.pattern !== void 0) {
    if (first.pattern !== second.pattern) {
      throw new Error(`Cannot merge schemas: conflicting patterns '${first.pattern}' and '${second.pattern}'`);
    }
    result.pattern = first.pattern;
  } else if (first.pattern !== void 0) {
    result.pattern = first.pattern;
  } else if (second.pattern !== void 0) {
    result.pattern = second.pattern;
  }
  if (first.format !== void 0 && second.format !== void 0) {
    if (first.format !== second.format) {
      throw new Error("Incompatible string formats");
    }
    result.format = first.format;
  } else if (first.format !== void 0) {
    result.format = first.format;
  } else if (second.format !== void 0) {
    result.format = second.format;
  }
  return result;
}

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_merge-all-of/merge-number-constraints.ts
function mergeNumberConstraints(first, second, getRef) {
  checkTypeConflicts(first, second);
  const result = genericMerge(first, second, getRef, number());
  result.type = "number";
  if (first.minimum !== void 0 || second.minimum !== void 0) {
    const minA = first.minimum ?? -Infinity;
    const minB = second.minimum ?? -Infinity;
    result.minimum = Math.max(minA, minB);
    if (first.exclusiveMinimum || second.exclusiveMinimum) {
      result.exclusiveMinimum = true;
    }
  }
  if (first.maximum !== void 0 || second.maximum !== void 0) {
    const maxA = first.maximum ?? Infinity;
    const maxB = second.maximum ?? Infinity;
    result.maximum = Math.min(maxA, maxB);
    if (first.exclusiveMaximum || second.exclusiveMaximum) {
      result.exclusiveMaximum = true;
    }
  }
  if (first.multipleOf !== void 0 && second.multipleOf !== void 0) {
    result.multipleOf = first.multipleOf * second.multipleOf;
  } else if (first.multipleOf !== void 0) {
    result.multipleOf = first.multipleOf;
  } else if (second.multipleOf !== void 0) {
    result.multipleOf = second.multipleOf;
  }
  return result;
}

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_merge-all-of/merge-integer-constraints.ts
function mergeIntegerConstraints(first, second, getRef) {
  checkTypeConflicts(first, second);
  const result = genericMerge(first, second, getRef, number());
  result.type = "integer";
  if (first.minimum !== void 0 || second.minimum !== void 0) {
    const minA = first.minimum ?? -Infinity;
    const minB = second.minimum ?? -Infinity;
    result.minimum = Math.max(minA, minB);
    if (first.exclusiveMinimum || second.exclusiveMinimum) {
      result.exclusiveMinimum = true;
    }
  }
  if (first.maximum !== void 0 || second.maximum !== void 0) {
    const maxA = first.maximum ?? Infinity;
    const maxB = second.maximum ?? Infinity;
    result.maximum = Math.min(maxA, maxB);
    if (first.exclusiveMaximum || second.exclusiveMaximum) {
      result.exclusiveMaximum = true;
    }
  }
  if (first.multipleOf !== void 0 && second.multipleOf !== void 0) {
    result.multipleOf = first.multipleOf * second.multipleOf;
  } else if (first.multipleOf !== void 0) {
    result.multipleOf = first.multipleOf;
  } else if (second.multipleOf !== void 0) {
    result.multipleOf = second.multipleOf;
  }
  return result;
}

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_merge-all-of/merge-boolean-constraints.ts
function mergeBooleanConstraints(first, second, getRef) {
  checkTypeConflicts(first, second);
  return genericMerge(first, second, getRef, boolean());
}

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_merge-all-of/decompose-union.ts
var decomposeUnion = ({ schema, groupType }) => {
  if (!schema[groupType]) {
    console.log("NO GROUP TYPE", JSON.stringify(schema, null, 2));
    return {
      beforeExcluded: {},
      decomposed: [
        schema
      ],
      afterExcluded: {}
    };
  }
  let location = "before";
  const output = {
    before: [],
    inside: [],
    after: []
  };
  for (const [key, value] of Object.entries(schema)) {
    if (key === groupType) {
      output.inside = [
        {
          [groupType]: value
        }
      ];
      location = "after";
    } else {
      output[location].push([
        key,
        value
      ]);
    }
  }
  const { retained: before, excluded: beforeExcluded } = exclude(output.before);
  const { retained: after, excluded: afterExcluded } = exclude(output.after);
  const decomposed = [
    before.length > 0 ? Object.fromEntries(before) : void 0,
    ...output.inside,
    after.length > 0 ? Object.fromEntries(after) : void 0
  ].filter((item) => item !== void 0);
  const result = {
    beforeExcluded: Object.fromEntries(beforeExcluded),
    decomposed,
    afterExcluded: Object.fromEntries(afterExcluded)
  };
  return result;
};
var excludedProperties = [
  "discriminator",
  "default"
];
var exclude = (entries) => {
  return entries.reduce((acc, [key, value]) => {
    if (excludedProperties.includes(key)) {
      acc.excluded.push([
        key,
        value
      ]);
    } else {
      acc.retained.push([
        key,
        value
      ]);
    }
    return acc;
  }, {
    retained: [],
    excluded: []
  });
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_merge-all-of/cross-product.ts
var crossProduct = (a, b) => {
  return a.reduce((acc, x) => [
    ...acc,
    ...b.map((y) => [
      x,
      y
    ])
  ], []);
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_merge-all-of/merge-union.ts
var mergeUnion = ({ schema, getRef, groupType }) => {
  const { beforeExcluded, decomposed, afterExcluded } = decomposeUnion({
    schema,
    groupType
  });
  const dereffed = decomposed.map((decomposed2) => {
    return "$ref" in decomposed2 ? getRef(decomposed2) : decomposed2;
  });
  const result = dereffed.reduce((acc, decomposed2) => {
    const merged = mergeCrossProduct({
      first: acc,
      second: decomposed2,
      getRef,
      groupType
    });
    return merged;
  }, {});
  const output = {
    ...beforeExcluded,
    ...result,
    ...afterExcluded
  };
  return output;
};
var mergeCrossProduct = ({ first, second, getRef, groupType }) => {
  const firstGroup = Array.isArray(first[groupType]) ? first[groupType] : [
    first
  ];
  const secondGroup = Array.isArray(second[groupType]) ? second[groupType] : [
    second
  ];
  const mergedGroup = crossProduct(firstGroup, secondGroup).map(([firstItem, secondItem]) => {
    try {
      const result = mergeSchemasOrRefs(firstItem, secondItem, getRef);
      return result;
    } catch (_error) {
      return void 0;
    }
  }).filter((item) => item !== void 0);
  return {
    [groupType]: mergedGroup.flatMap((item) => {
      if (!isRef(item) && Array.isArray(item[groupType])) {
        return item[groupType];
      }
      return [
        item
      ];
    })
  };
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_merge-all-of/nullable-merge.ts
var mergeNullOnly = (schema) => {
  if (schema.enum && !schema.enum.includes(null)) {
    schema.enum.push(null);
  }
  schema.nullable = true;
  return schema;
};
var isNullOnly = (schema) => {
  const { type: _type, nullable, enum: enumValues, ...rest } = schema;
  return Boolean(nullable) && enumValues?.length === 1 && enumValues[0] === null && isEmpty(rest ?? {});
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_merge-all-of/merge.ts
var mergeSchemasOrRefs = (first, second, getRef) => {
  if (containsRef(first, second)) {
    return mergeWithRef(first, second, getRef);
  }
  if (isRef(first)) {
    throw new Error("Ref in first");
  }
  if (isRef(second)) {
    throw new Error("Ref in second");
  }
  if (containsAllOf(first) || containsAllOf(second)) {
    const mergedFirst = containsAllOf(first) ? mergeIntersection({
      schema: first,
      getRef
    }) : first;
    const mergedSecond = containsAllOf(second) ? mergeIntersection({
      schema: second,
      getRef
    }) : second;
    return mergeSchemasOrRefs(mergedFirst, mergedSecond, getRef);
  }
  if (containsOneOf(first, second)) {
    return mergeCrossProduct({
      first,
      second,
      getRef,
      groupType: "oneOf"
    });
  }
  if (containsAnyOf(first, second)) {
    return mergeCrossProduct({
      first,
      second,
      getRef,
      groupType: "anyOf"
    });
  }
  if (isNullOnly(first)) {
    return mergeNullOnly(second);
  }
  if (isNullOnly(second)) {
    return mergeNullOnly(first);
  }
  return mergeSchemas(first, second, getRef);
};
var containsAllOf = (schema) => {
  if (schema.allOf) {
    if (schema.allOf?.length) {
      return true;
    }
    throw new Error("Empty allOf");
  }
  return false;
};
var containsAnyOf = (first, second) => {
  if (first.anyOf) {
    if (first.anyOf?.length) {
      return true;
    }
    throw new Error("Empty anyOf");
  }
  if (second.anyOf) {
    if (second.anyOf?.length) {
      return true;
    }
    throw new Error("Empty anyOf");
  }
  return false;
};
var containsOneOf = (first, second) => {
  if (first.oneOf) {
    if (first.oneOf?.length) {
      return true;
    }
    throw new Error("Empty oneOf");
  }
  if (second.oneOf) {
    if (second.oneOf?.length) {
      return true;
    }
    throw new Error("Empty oneOf");
  }
  return false;
};
var containsRef = (first, second) => {
  return isRef(first) || isRef(second);
};
var mergeSchemas = (first, second, getRef) => {
  try {
    checkTypeConflicts(first, second);
  } catch (e) {
    throw e;
  }
  checkReadOnlyWriteOnlyConflicts(first, second);
  checkFormatConflicts(first, second);
  checkEnumConflicts(first, second);
  checkNumberConstraintsConflicts(first, second);
  checkArrayItemTypeConflicts(first, second);
  if (first.not || second.not) {
    throw new Error('Merging schemas with "not" keyword is not supported');
  }
  return typedMerge(first, second, getRef);
};
var typedMerge = (first, second, getRef) => {
  if (!first.type && !second.type) {
    return genericMerge(first, second, getRef);
  }
  if (checkAtLeastOneTypeMatch(first, second, "object")) {
    return mergeObjectConstraints(first, second, getRef);
  }
  if (checkAtLeastOneTypeMatch(first, second, "array")) {
    return mergeArrayConstraints(first, second, getRef);
  }
  if (checkAtLeastOneTypeMatch(first, second, "string")) {
    return mergeStringConstraints(first, second, getRef);
  }
  if (checkAtLeastOneTypeMatch(first, second, "number")) {
    return mergeNumberConstraints(first, second, getRef);
  }
  if (checkAtLeastOneTypeMatch(first, second, "integer")) {
    return mergeIntegerConstraints(first, second, getRef);
  }
  if (checkAtLeastOneTypeMatch(first, second, "boolean")) {
    return mergeBooleanConstraints(first, second, getRef);
  }
  throw new Error(`Cannot merge schemas with type "${first.type}" with type "${second.type}"`);
};
var mergeWithRef = (first, second, getRef) => {
  if (isRef(first) && isRef(second)) {
    if (first.$ref === second.$ref) {
      return {
        ...first,
        ...second
      };
    } else {
      return mergeSchemas(getRef(first), getRef(second), getRef);
    }
  }
  if (isRef(first) && !isRef(second)) {
    const merged = isEmpty(second) ? first : mergeSchemas(getRef(first), second, getRef);
    return merged;
  }
  if (!isRef(first) && isRef(second)) {
    const merged = isEmpty(first) ? second : mergeSchemas(first, getRef(second), getRef);
    return merged;
  }
  throw new Error("Invalid input");
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/_merge-all-of/merge-intersection.ts
var mergeIntersection = ({ schema, getRef }) => {
  const decomposed = decomposeIntersection({
    schema
  });
  if (decomposed.length === 1) {
    return decomposed[0];
  }
  const dereffed = decomposed.map((decomposed2) => {
    return "$ref" in decomposed2 ? getRef(decomposed2) : decomposed2;
  });
  const result = dereffed.reduce((acc, decomposed2) => {
    const merged = mergeSchemasOrRefs(acc, decomposed2, getRef);
    return merged;
  }, {});
  return result;
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/schema/toSchemasV3.ts
var toSchemasV3 = ({ schemas, stackTrail, context }) => {
  const output = {};
  const entries = Object.entries(schemas);
  for (const [key, schema] of entries) {
    try {
      output[key] = stackTrail.trace(key, (st) => toSchemaV3({
        schema,
        stackTrail: st,
        context
      }));
    } catch (error) {
      invariant(error instanceof Error, "Invalid error");
      context.logIssue({
        key,
        level: "error",
        error,
        parent: schema,
        stackTrail,
        type: "INVALID_SCHEMA"
      });
    }
  }
  return output;
};
var toOptionalSchemasV3 = ({ schemas, stackTrail, context }) => {
  if (!schemas) {
    return void 0;
  }
  return toSchemasV3({
    schemas,
    stackTrail,
    context
  });
};
var toSchemaV3 = ({ schema, stackTrail, context }) => {
  if (isRef(schema)) {
    return toRefV31({
      ref: schema,
      refType: "schema",
      stackTrail,
      context
    });
  }
  if ("allOf" in schema && Array.isArray(schema.allOf)) {
    return stackTrail.trace("allOf", (st) => {
      const merged = mergeIntersection({
        schema,
        getRef: toGetRef(context.documentObject)
      });
      return toSchemaV3({
        schema: merged,
        stackTrail: st,
        context
      });
    });
  }
  if ("oneOf" in schema && Array.isArray(schema.oneOf)) {
    return stackTrail.trace("oneOf", (st) => {
      const merged = mergeUnion({
        schema,
        getRef: toGetRef(context.documentObject),
        groupType: "oneOf"
      });
      if (!("oneOf" in merged) || !Array.isArray(merged.oneOf)) {
        throw new Error('Missing "oneOf" array');
      }
      const { oneOf: members, ...value } = merged;
      if (members.length === 0) {
        throw new Error('"oneOf" array is empty');
      }
      if (members.length === 1) {
        return toSchemaV3({
          schema: members[0],
          stackTrail: st,
          context
        });
      }
      return toUnion({
        value,
        members,
        parentType: "oneOf",
        stackTrail: st,
        context
      });
    });
  }
  if ("anyOf" in schema && Array.isArray(schema.anyOf)) {
    return stackTrail.trace("anyOf", (st) => {
      if (schema["x-expansionResources"] && Array.isArray(schema.anyOf)) {
        const { anyOf, ...value2 } = schema;
        return toUnion({
          value: value2,
          members: anyOf,
          parentType: "anyOf",
          stackTrail: st,
          context
        });
      }
      const merged = mergeUnion({
        schema,
        getRef: toGetRef(context.documentObject),
        groupType: "anyOf"
      });
      if (!("anyOf" in merged) || !Array.isArray(merged.anyOf)) {
        throw new Error('Missing "anyOf" array');
      }
      const { anyOf: members, ...value } = merged;
      if (members.length === 0) {
        throw new Error('"anyOf" array is empty');
      }
      if (members.length === 1) {
        return toSchemaV3({
          schema: members[0],
          stackTrail: st,
          context
        });
      }
      return toUnion({
        value,
        members,
        parentType: "anyOf",
        stackTrail: st,
        context
      });
    });
  }
  if ("type" in schema) {
    switch (schema.type) {
      case "object":
        return toObject({
          value: schema,
          stackTrail,
          context
        });
      case "array":
        return toArray({
          value: schema,
          stackTrail,
          context
        });
      case "integer":
        return toInteger({
          value: schema,
          stackTrail,
          context
        });
      case "number":
        return toNumber({
          value: schema,
          stackTrail,
          context
        });
      case "boolean":
        return toBoolean({
          value: schema,
          stackTrail,
          context
        });
      case "string":
        return toString({
          value: schema,
          stackTrail,
          context
        });
    }
  }
  if (possibleObject(schema)) {
    context.logIssueNoKey({
      level: "warning",
      message: 'Object has "properties" property, but is missing type="object" property',
      parent: schema,
      stackTrail,
      type: "MISSING_OBJECT_TYPE"
    });
    return toObject({
      value: {
        ...schema,
        type: "object"
      },
      stackTrail,
      context
    });
  }
  if (possibleArray(schema)) {
    context.logIssueNoKey({
      level: "warning",
      message: 'Object has "items" property, but is missing type="array" property',
      parent: schema,
      stackTrail,
      type: "MISSING_ARRAY_TYPE"
    });
    return toArray({
      value: {
        ...schema,
        type: "array"
      },
      stackTrail,
      context
    });
  }
  if (possibleBoolean(schema)) {
    context.logIssueNoKey({
      level: "warning",
      message: 'Object has a boolean "default" or "example" property, but is missing type="boolean" property',
      parent: schema,
      stackTrail,
      type: "MISSING_BOOLEAN_TYPE"
    });
    return toBoolean({
      value: {
        ...schema,
        type: "boolean"
      },
      stackTrail,
      context
    });
  }
  if (possibleString(schema)) {
    context.logIssueNoKey({
      level: "warning",
      message: 'Object has a string "default" or "example" property, but is missing type="string" property',
      parent: schema,
      stackTrail,
      type: "MISSING_STRING_TYPE"
    });
    return toString({
      value: {
        ...schema,
        type: "string"
      },
      stackTrail,
      context
    });
  }
  return toUnknown({
    value: schema,
    stackTrail,
    context
  });
};
var possibleString = (value) => {
  return value && typeof value === "object" && ("default" in value && typeof value.default === "string" || "example" in value && typeof value.example === "string" || "enum" in value && Array.isArray(value.enum) && value.enum.every((item) => typeof item === "string") || "format" in value && typeof value.format === "string" && [
    "date",
    "date-time",
    "binary",
    "byte"
  ].includes(value.format));
};
var possibleBoolean = (value) => {
  return value && typeof value === "object" && ("default" in value && typeof value.default === "boolean" || "example" in value && typeof value.example === "boolean");
};
var possibleArray = (value) => {
  return value && typeof value === "object" && "items" in value && value.items && typeof value.items === "object" && value.items;
};
var possibleObject = (value) => {
  return value && typeof value === "object" && "properties" in value && typeof value.properties === "object" && value.properties;
};
var toOptionalSchemaV3 = ({ schema, stackTrail, context }) => {
  if (!schema) {
    return void 0;
  }
  return toSchemaV3({
    schema,
    stackTrail,
    context
  });
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/example/Example.ts
var OasExample = class {
  /** Static identifier property for OasExample */
  oasType = "example";
  /** @internal */
  summary;
  description;
  value;
  externalValue;
  extensionFields;
  constructor(fields) {
    this.summary = fields.summary;
    this.description = fields.description;
    this.value = fields.value;
    this.externalValue = fields.externalValue;
    this.extensionFields = fields.extensionFields;
  }
  /** Returns true if object is a reference */
  isRef() {
    return false;
  }
  /** Returns itself */
  resolve() {
    return this;
  }
  resolveOnce() {
    return this;
  }
  toJsonSchema(_options) {
    return {
      summary: this.summary,
      description: this.description,
      value: this.value
    };
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/example/toExamplesV3.ts
var toExampleSimpleV3 = ({ example }) => {
  const fields = {
    value: example.value,
    summary: example.summary,
    description: example.description,
    externalValue: example.externalValue
  };
  return new OasExample(fields);
};
var toExamplesV3 = ({ example, examples, exampleKey, stackTrail, context }) => {
  if (example && examples) {
    context.logIssue({
      key: "example",
      level: "warning",
      message: `Both example and examples are defined for ${exampleKey}`,
      parent: examples,
      stackTrail,
      type: "EXAMPLE_AND_EXAMPLES_DEFINED"
    });
  }
  if (example) {
    return {
      [exampleKey]: stackTrail.trace("example", (st) => toExampleSimpleV3({
        example,
        stackTrail: st,
        context
      }))
    };
  }
  if (examples) {
    return stackTrail.trace("examples", (st) => {
      const output = {};
      const entries = Object.entries(examples);
      for (const [key, value] of entries) {
        output[key] = st.trace(key, (st2) => toExampleV3({
          example: value,
          stackTrail: st2,
          context
        }));
      }
      return output;
    });
  }
  return void 0;
};
var toExampleV3 = ({ example, stackTrail, context }) => {
  if (isRef(example)) {
    return toRefV31({
      ref: example,
      refType: "example",
      stackTrail,
      context
    });
  }
  const { summary, description, value, ...skipped } = example;
  const extensionFields = toSpecificationExtensionsV3({
    skipped,
    parent: example,
    context,
    stackTrail,
    parentType: "example"
  });
  return new OasExample({
    summary,
    description,
    value,
    extensionFields
  });
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/mediaType/MediaType.ts
var OasMediaType = class {
  /** Type identifier for this OAS media type */
  oasType = "mediaType";
  /** The media type identifier (e.g., 'application/json', 'text/xml') */
  mediaType;
  /** The schema defining the structure and validation rules for the content */
  schema;
  /** Example values demonstrating the media type content */
  examples;
  /** Custom extension fields (x-* properties) defined for this media type */
  extensionFields;
  /** Encoding information for multipart and form data serialization */
  encoding;
  /**
   * Creates a new OasMediaType instance.
   * 
   * @param fields - Media type configuration including content schema, examples, and encoding
   */
  constructor(fields) {
    this.mediaType = fields.mediaType;
    this.schema = fields.schema;
    this.examples = fields.examples;
    this.encoding = fields.encoding;
    this.extensionFields = fields.extensionFields;
  }
  /**
   * Converts this OAS media type to an OpenAPI v3 JSON schema representation.
   * 
   * @param options - Conversion options including reference handling and formatting preferences
   * @returns OpenAPI v3 media type object with schema and examples
   */
  toJsonSchema(options) {
    return {
      schema: this.schema?.toJsonSchema(options),
      examples: this.examples
    };
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/mediaType/toMediaTypeItemV3.ts
var toMediaTypeItemV3 = ({ mediaTypeItem, mediaType, stackTrail, context }) => {
  const { schema, example, examples, encoding, ...skipped } = mediaTypeItem;
  const extensionFields = toSpecificationExtensionsV3({
    skipped,
    parent: mediaTypeItem,
    context,
    stackTrail,
    parentType: "mediaType"
  });
  const fields = {
    mediaType,
    encoding,
    schema: stackTrail.trace("schema", (st) => toOptionalSchemaV3({
      schema,
      stackTrail: st,
      context
    })),
    examples: stackTrail.trace("examples", (st) => toExamplesV3({
      example,
      examples,
      exampleKey: mediaType,
      stackTrail: st,
      context
    })),
    extensionFields
  };
  return new OasMediaType(fields);
};
var toMediaTypeItemsV3 = ({ content, stackTrail, context }) => {
  const output = {};
  const entries = Object.entries(content);
  for (const [mediaType, value] of entries) {
    output[mediaType] = stackTrail.trace(mediaType, (st) => toMediaTypeItemV3({
      mediaTypeItem: value,
      mediaType,
      stackTrail: st,
      context
    }));
  }
  return output;
};
var toOptionalMediaTypeItemsV3 = ({ content, stackTrail, context }) => {
  if (!content) {
    return;
  }
  return toMediaTypeItemsV3({
    content,
    stackTrail,
    context
  });
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/requestBody/RequestBody.ts
var OasRequestBody = class {
  oasType = "requestBody";
  description;
  content;
  required;
  extensionFields;
  constructor(fields) {
    this.description = fields.description;
    this.content = fields.content;
    this.required = fields.required;
    this.extensionFields = fields.extensionFields;
  }
  isRef() {
    return false;
  }
  resolve() {
    return this;
  }
  resolveOnce() {
    return this;
  }
  toSchema(mediaType = "application/json") {
    return this.content?.[mediaType]?.schema;
  }
  toJsonSchema(options) {
    return {
      description: this.description,
      content: Object.fromEntries(Object.entries(this.content).map(([mediaType, mediaTypeObject]) => [
        mediaType,
        mediaTypeObject.toJsonSchema(options)
      ])),
      required: this.required
    };
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/requestBody/toRequestBodiesV3.ts
var toRequestBodyV3 = ({ requestBody, stackTrail, context }) => {
  if (!requestBody) {
    return void 0;
  }
  if (isRef(requestBody)) {
    return toRefV31({
      ref: requestBody,
      refType: "requestBody",
      stackTrail,
      context
    });
  }
  const { description, content, required, ...skipped } = requestBody;
  const extensionFields = toSpecificationExtensionsV3({
    skipped,
    parent: requestBody,
    context,
    stackTrail,
    parentType: "requestBody"
  });
  const fields = {
    description,
    content: stackTrail.trace("content", (st) => {
      return toMediaTypeItemsV3({
        content,
        stackTrail: st,
        context
      });
    }),
    required,
    extensionFields
  };
  return new OasRequestBody(fields);
};
var toRequestBodiesV3 = ({ requestBodies, stackTrail, context }) => {
  if (!requestBodies) {
    return void 0;
  }
  const entries = Object.entries(requestBodies).map(([key, value]) => {
    return [
      key,
      stackTrail.trace(key, (st) => toRequestBodyV3({
        requestBody: value,
        stackTrail: st,
        context
      }))
    ];
  }).filter(([, value]) => Boolean(value));
  return Object.fromEntries(entries);
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/header/Header.ts
var OasHeader = class {
  oasType = "header";
  /** Brief description of header */
  description;
  /** Indicates if header is mandatory. Default value is `false` */
  required;
  /** Indicates if header is deprecated and should no longer be used. Default value is false */
  deprecated;
  /** Schema for the header */
  schema;
  /** Examples of the header */
  examples;
  /** Content of the header */
  content;
  /** Specification Extension fields */
  extensionFields;
  constructor(fields) {
    this.description = fields.description;
    this.required = fields.required;
    this.deprecated = fields.deprecated;
    this.schema = fields.schema;
    this.examples = fields.examples;
    this.content = fields.content;
    this.extensionFields = fields.extensionFields;
  }
  /** Returns true if object is a reference */
  isRef() {
    return false;
  }
  /** Returns itself */
  resolve() {
    return this;
  }
  resolveOnce() {
    return this;
  }
  /** Returns schema for the header. Either, `schema` property if
   * definedor value matching `mediaType` from `content` property.
   *
   * @param mediaType - Optional media type to get schema for. Defaults to `application/json`
   */
  toSchema(mediaType = "application/json") {
    if (this.schema) {
      return this.schema;
    }
    const schema = this.content?.[mediaType]?.schema;
    if (!schema) {
      throw new Error(`Schema not found for media type ${mediaType}`);
    }
    return schema;
  }
  toJsonSchema(options) {
    return {
      description: this.description,
      required: this.required ?? false,
      deprecated: this.deprecated ?? false,
      schema: this.schema?.toJsonSchema(options),
      examples: this.examples
    };
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/header/toHeadersV3.ts
var toHeadersV3 = ({ headers, stackTrail, context }) => {
  if (!headers) {
    return void 0;
  }
  const output = {};
  const entries = Object.entries(headers);
  for (const [key, value] of entries) {
    output[key] = stackTrail.trace(key, (st) => toHeaderV3({
      header: value,
      stackTrail: st,
      context
    }));
  }
  return output;
};
var toHeaderV3 = ({ header, stackTrail, context }) => {
  if (isRef(header)) {
    return toRefV31({
      ref: header,
      refType: "header",
      stackTrail,
      context
    });
  }
  const { description, required, deprecated, schema, example, examples, content, ...skipped } = header;
  const extensionFields = toSpecificationExtensionsV3({
    skipped,
    parent: header,
    context,
    stackTrail,
    parentType: "header"
  });
  const fields = {
    description,
    required,
    deprecated,
    schema: stackTrail.trace("schema", (st) => toOptionalSchemaV3({
      schema,
      stackTrail: st,
      context
    })),
    examples: toExamplesV3({
      examples,
      example,
      exampleKey: `TEMP`,
      stackTrail,
      context
    }),
    content: stackTrail.trace("content", (st) => toOptionalMediaTypeItemsV3({
      content,
      stackTrail: st,
      context
    })),
    extensionFields
  };
  return new OasHeader(fields);
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/response/Response.ts
var OasResponse = class {
  oasType = "response";
  description;
  headers;
  content;
  extensionFields;
  constructor(fields) {
    this.description = fields.description;
    this.headers = fields.headers;
    this.content = fields.content;
    this.extensionFields = fields.extensionFields;
  }
  isRef() {
    return false;
  }
  resolve() {
    return this;
  }
  resolveOnce() {
    return this;
  }
  toSchema(mediaType = "application/json") {
    return this.content?.[mediaType]?.schema;
  }
  toJsonSchema(options) {
    return {
      description: this.description ?? "",
      headers: this.headers ? Object.fromEntries(Object.entries(this.headers).map(([header, headerObject]) => [
        header,
        headerObject.toJsonSchema(options)
      ])) : void 0,
      content: this.content ? Object.fromEntries(Object.entries(this.content).map(([mediaType, mediaTypeObject]) => [
        mediaType,
        mediaTypeObject.toJsonSchema(options)
      ])) : void 0
    };
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/response/toResponseV3.ts
var toResponsesV3 = ({ responses, stackTrail, context }) => {
  const output = {};
  const entries = Object.entries(responses);
  for (const [key, value] of entries) {
    try {
      output[key] = stackTrail.trace(key, (st) => toResponseV3({
        response: value,
        stackTrail: st,
        context
      }));
    } catch (error) {
      invariant(error instanceof Error, "Invalid error");
      context.logIssue({
        key,
        level: "error",
        error,
        parent: value,
        stackTrail,
        type: "INVALID_RESPONSE"
      });
    }
  }
  return output;
};
var toOptionalResponsesV3 = ({ responses, stackTrail, context }) => {
  if (!responses) {
    return void 0;
  }
  return toResponsesV3({
    responses,
    stackTrail,
    context
  });
};
var toResponseV3 = ({ response, stackTrail, context }) => {
  if (isRef(response)) {
    return toRefV31({
      ref: response,
      refType: "response",
      stackTrail,
      context
    });
  }
  const { description, headers, content, ...skipped } = response;
  const extensionFields = toSpecificationExtensionsV3({
    skipped,
    parent: response,
    context,
    stackTrail,
    parentType: "response"
  });
  return new OasResponse({
    description,
    headers: stackTrail.trace("headers", (st) => toHeadersV3({
      headers,
      stackTrail: st,
      context
    })),
    content: stackTrail.trace("content", (st) => toOptionalMediaTypeItemsV3({
      content,
      stackTrail: st,
      context
    })),
    extensionFields
  });
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/parameter/parameter-types.ts
var oasParameterLocation = enum_({
  query: "query",
  header: "header",
  path: "path",
  cookie: "cookie"
});
var oasParameterStyle = enum_({
  matrix: "matrix",
  label: "label",
  form: "form",
  simple: "simple",
  spaceDelimited: "spaceDelimited",
  pipeDelimited: "pipeDelimited",
  deepObject: "deepObject"
});

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/parameter/Parameter.ts
var OasParameter = class {
  /** Type identifier for OAS parameter objects */
  oasType = "parameter";
  /** The name of the parameter */
  name;
  /** Where the parameter is located (path, query, header, cookie) */
  location;
  /** A brief description of the parameter's purpose and usage */
  description;
  /** Determines whether this parameter is mandatory for the operation */
  required;
  /** Indicates that the parameter is deprecated and should be avoided */
  deprecated;
  /** Whether to allow empty values for this parameter */
  allowEmptyValue;
  /** Whether reserved characters are allowed in parameter values */
  allowReserved;
  /** The schema defining the parameter's data type and validation rules */
  schema;
  /** Example values demonstrating parameter usage */
  examples;
  /** Media type definitions for complex parameter content */
  content;
  /** The serialization style for the parameter (form, simple, etc.) */
  style;
  /** Whether to explode parameter values into separate key-value pairs */
  explode;
  /** Custom extension fields (x-* properties) defined for this parameter */
  extensionFields;
  /**
   * Creates a new OasParameter instance.
   *
   * @param fields - Parameter configuration fields including name, location, schema, and serialization options
   */
  constructor(fields) {
    this.name = fields.name;
    this.location = fields.location;
    this.style = fields.style;
    this.explode = fields.explode;
    this.description = fields.description;
    this.required = fields.required;
    this.deprecated = fields.deprecated;
    this.allowEmptyValue = fields.allowEmptyValue;
    this.allowReserved = fields.allowReserved;
    this.schema = fields.schema;
    this.examples = fields.examples;
    this.content = fields.content;
    this.extensionFields = fields.extensionFields;
  }
  /**
   * Determines if this parameter is a reference object.
   *
   * @returns Always false since this is a concrete parameter instance, not a reference
   */
  isRef() {
    return false;
  }
  /**
   * Resolves this parameter object.
   *
   * @returns The parameter instance itself since it's already a concrete object
   */
  resolve() {
    return this;
  }
  /**
   * Resolves this parameter object one level.
   *
   * @returns The parameter instance itself since it's already a concrete object
   */
  resolveOnce() {
    return this;
  }
  /**
   * Extracts the schema for this parameter.
   *
   * Returns the direct schema if available, or extracts schema from content
   * for the specified media type.
   *
   * @param mediaType - Media type to extract schema from when using content definitions
   * @returns The parameter's schema object
   * @throws Error if no schema is found for the specified media type
   */
  toSchema(mediaType = "application/json") {
    if (this.schema) {
      return this.schema;
    }
    const schema = this.content?.[mediaType]?.schema;
    if (!schema) {
      throw new Error(`Schema not found for media type ${mediaType}`);
    }
    return schema;
  }
  /**
   * Converts this OAS parameter to an OpenAPI v3 JSON schema representation.
   *
   * @param options - Conversion options including reference handling and formatting preferences
   * @returns OpenAPI v3 parameter object with all properties and validation constraints
   */
  toJsonSchema(options) {
    return {
      name: this.name,
      in: this.location,
      description: this.description,
      required: this.required,
      deprecated: this.deprecated,
      allowEmptyValue: this.allowEmptyValue,
      allowReserved: this.allowReserved,
      schema: this.schema?.toJsonSchema(options),
      examples: this.examples,
      content: this.content ? Object.fromEntries(Object.entries(this.content).map(([mediaType, mediaTypeObject]) => [
        mediaType,
        mediaTypeObject.toJsonSchema(options)
      ])) : void 0,
      style: this.style,
      explode: this.explode
    };
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/parameter/toParameterV3.ts
var toParameterListV3 = ({ parameters, stackTrail, context }) => {
  if (!parameters) {
    return void 0;
  }
  return parameters.map((parameter, index) => {
    return stackTrail.trace(`${index}`, (st) => toParameterV3({
      parameter,
      stackTrail: st,
      context
    }));
  });
};
var toParametersV3 = ({ parameters, stackTrail, context }) => {
  const output = {};
  const entries = Object.entries(parameters);
  for (const [key, parameter] of entries) {
    try {
      output[key] = stackTrail.trace(key, (st) => toParameterV3({
        parameter,
        stackTrail: st,
        context
      }));
    } catch (error) {
      invariant(error instanceof Error, "Invalid error");
      context.logIssue({
        key,
        level: "error",
        error,
        parent: parameter,
        stackTrail,
        type: "INVALID_PARAMETER"
      });
    }
  }
  return output;
};
var toOptionalParametersV3 = ({ parameters, stackTrail, context }) => {
  if (!parameters) {
    return void 0;
  }
  return toParametersV3({
    parameters,
    stackTrail,
    context
  });
};
var toParameterV3 = ({ parameter, stackTrail, context }) => {
  if (isRef(parameter)) {
    return toRefV31({
      ref: parameter,
      refType: "parameter",
      stackTrail,
      context
    });
  }
  const { name, in: location, description, required, deprecated, allowEmptyValue, allowReserved, schema, example, examples, content, style, explode, ...skipped } = parameter;
  const extensionFields = toSpecificationExtensionsV3({
    skipped,
    parent: parameter,
    context,
    stackTrail,
    parentType: "parameter"
  });
  const parsedLocation = parse(oasParameterLocation, location);
  if (parsedLocation === "path" && !required) {
    console.warn(`Path parameters must be required`);
  }
  const defaultRequired = typeof required === "undefined" ? parsedLocation === "path" ? true : false : required;
  const fields = {
    name,
    location: parsedLocation,
    description,
    required: defaultRequired,
    deprecated,
    style: stackTrail.trace("style", (st) => toStyle({
      style,
      location: parsedLocation,
      stackTrail: st
    })),
    explode: stackTrail.trace("explode", (st) => toExplode({
      explode,
      style,
      stackTrail: st
    })),
    allowEmptyValue,
    allowReserved,
    schema: stackTrail.trace("schema", (st) => toOptionalSchemaV3({
      schema,
      stackTrail: st,
      context
    })),
    examples: stackTrail.trace("examples", (st) => toExamplesV3({
      examples,
      example,
      exampleKey: `${name}-${parsedLocation}`,
      stackTrail: st,
      context
    })),
    content: stackTrail.trace("content", (st) => toOptionalMediaTypeItemsV3({
      content,
      stackTrail: st,
      context
    })),
    extensionFields
  };
  return new OasParameter(fields);
};
var toStyle = ({ style, location, stackTrail }) => {
  const parsed = parse(optional(oasParameterStyle), style);
  if (parsed !== void 0) {
    return parsed;
  }
  switch (location) {
    case "path":
    case "header":
      return "simple";
    case "query":
    case "cookie":
      return "form";
    default: {
      const _exhaustive = location;
      throw new Error(`Unhandled location: ${_exhaustive}`);
    }
  }
};
var toExplode = ({ explode, style, stackTrail }) => {
  if (explode !== void 0) {
    return explode;
  }
  switch (style) {
    case "form":
      return true;
    default:
      return false;
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/operation/Operation.ts
var OasOperation = class {
  /** Type identifier for OAS operation objects */
  oasType = "operation";
  /** The API path for this operation */
  path;
  /** The HTTP method for this operation */
  method;
  /** The parent path item containing this operation */
  pathItem;
  /** Unique identifier for the operation */
  operationId;
  /** Brief summary of the operation */
  summary;
  /** Tags for organizing operations in documentation */
  tags;
  /** Detailed description of the operation */
  description;
  /** Parameters accepted by this operation */
  parameters;
  /** Request body specification for this operation */
  requestBody;
  /** Response specifications mapped by status code */
  responses;
  /** Security requirements for this operation */
  security;
  /** Whether this operation is deprecated */
  deprecated;
  /** External documentation for this operation */
  externalDocs;
  /** OpenAPI specification extensions */
  extensionFields;
  /** Servers for this operation */
  servers;
  /**
   * Creates a new OasOperation instance from operation field data.
   *
   * @param fields - Operation field data from OpenAPI specification
   */
  constructor(fields) {
    this.path = fields.path;
    this.method = fields.method;
    this.pathItem = fields.pathItem;
    this.operationId = fields.operationId;
    this.summary = fields.summary;
    this.tags = fields.tags;
    this.description = fields.description;
    this.parameters = fields.parameters;
    this.requestBody = fields.requestBody;
    this.responses = fields.responses;
    this.security = fields.security;
    this.deprecated = fields.deprecated;
    this.externalDocs = fields.externalDocs;
    this.extensionFields = fields.extensionFields;
    this.servers = fields.servers;
  }
  /**
   * Returns the successful response definition for this operation.
   *
   * Looks for the lowest numbered 2xx response code and returns its response definition.
   *
   * @returns Success response object or undefined if none found
   */
  toSuccessResponse() {
    const successCode = this.toSuccessResponseCode();
    return successCode ? this.responses[successCode] : void 0;
  }
  /**
   * Returns the HTTP status code for the primary success response.
   *
   * Finds the lowest numbered 2xx status code in the responses.
   *
   * @returns Success status code as string or undefined if none found
   */
  toSuccessResponseCode() {
    const successCode = Object.keys(this.responses).map((httpCode) => parseInt(httpCode)).sort((a, b) => a - b).find((httpCode) => httpCode >= 200 && httpCode < 300);
    if (successCode) {
      return successCode.toString();
    }
    if (this.responses.default) {
      return "default";
    }
    return void 0;
  }
  /**
   * Maps the request body schema to a custom value using the provided mapping function.
   *
   * @param map - Function to transform the request body schema and metadata
   * @param mediaType - Media type to extract schema from (default: 'application/json')
   * @returns Mapped value or undefined if no request body schema found
   */
  toRequestBody(map, mediaType = "application/json") {
    const requestBody = this.requestBody?.resolve();
    const schema = requestBody?.content[mediaType]?.schema;
    return schema ? map({
      schema,
      requestBody
    }) : void 0;
  }
  /**
   * Resolve all parameters and optionally filter by location
   *
   * @param filter - only include parameters from specified locations
   * @returns
   */
  toParams(filter) {
    return this.parameters?.map((param) => param.resolve()).filter((param) => filter?.length ? filter.includes(param.location) : true) ?? [];
  }
  /**
   * Creates an OAS object representation of operation parameters.
   *
   * @param filter - Optional array of parameter locations to include
   * @returns OAS object with parameter properties
   */
  toParametersObject(filter) {
    const parameters = this.toParams(filter);
    return parameters.reduce((acc, parameter) => {
      return acc.addProperty({
        name: parameter.name,
        schema: parameter.toSchema(),
        required: parameter.required
      });
    }, OasObject.empty());
  }
  /**
   * Converts the operation to OpenAPI v3 JSON schema format.
   *
   * @param options - Conversion options for nested components
   * @returns OpenAPI v3 operation object
   */
  toJsonSchema(options) {
    return {
      tags: this.tags,
      summary: this.summary,
      description: this.description,
      operationId: this.operationId,
      parameters: this.parameters?.map((param) => param.toJsonSchema(options)),
      requestBody: this.requestBody?.toJsonSchema(options),
      responses: Object.fromEntries(Object.entries(this.responses).map(([key, value]) => [
        key,
        value.toJsonSchema(options)
      ])),
      security: this.security?.map((security) => security.toJsonSchema()),
      deprecated: this.deprecated,
      ...this.extensionFields
    };
  }
  /**
   * Serializes the operation to a plain JavaScript object.
   *
   * @returns Plain object representation of the operation
   */
  toJSON() {
    return {
      tags: this.tags,
      summary: this.summary,
      description: this.description,
      operationId: this.operationId,
      parameters: this.parameters,
      requestBody: this.requestBody,
      responses: this.responses,
      security: this.security,
      deprecated: this.deprecated,
      ...this.extensionFields
    };
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/pathItem/PathItem.ts
var OasPathItem = class {
  oasType = "pathItem";
  summary;
  description;
  parameters;
  extensionFields;
  constructor(fields = {}) {
    this.summary = fields.summary;
    this.description = fields.description;
    this.parameters = fields.parameters;
    this.extensionFields = fields.extensionFields;
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/pathItem/toPathItemV3.ts
var toPathItemV3 = ({ pathItem, stackTrail, context }) => {
  const { summary, description, parameters, ...skipped } = pathItem;
  return new OasPathItem({
    summary,
    description,
    parameters: stackTrail.trace("parameters", (st) => toParameterListV3({
      parameters,
      stackTrail: st,
      context
    })),
    extensionFields: toSpecificationExtensionsV3({
      skipped,
      parent: pathItem,
      context,
      stackTrail,
      parentType: "pathItem"
    })
  });
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/securityRequirement/SecurityRequirement.ts
var OasSecurityRequirement = class {
  oasType = "securityRequirement";
  requirement;
  #oasDocument;
  constructor(fields, oasDocument) {
    this.requirement = fields.requirement;
    this.#oasDocument = oasDocument;
  }
  toSecurityScheme() {
    return Object.keys(this.requirement).map((key) => this.#oasDocument.components?.securitySchemes?.[key]?.resolve()).filter((securityScheme) => securityScheme !== void 0);
  }
  toJsonSchema() {
    return {
      ...this.requirement
    };
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/securityRequirement/toSecurityRequirement.ts
var toSecurityRequirementsV3 = ({ security, stackTrail, context }) => {
  if (!security) {
    return void 0;
  }
  return security.map((requirement) => {
    return new OasSecurityRequirement({
      requirement
    }, context.oasDocument);
  });
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/externalDocs/ExternalDocs.ts
var OasExternalDocs = class {
  url;
  description;
  constructor(fields) {
    this.url = fields.url;
    this.description = fields.description;
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/markdown/markdown-types.ts
var markdown = string();

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/externalDocs/externalDocsTypes.ts
var oasExternalDocsData = object({
  description: optional(markdown),
  url: string()
});

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/externalDocs/toExternalDocs.ts
var toExternalDocs = ({ externalDocs, stackTrail }) => {
  if (!externalDocs) {
    return void 0;
  }
  if (!is(oasExternalDocsData, externalDocs)) {
    parse(oasExternalDocsData, externalDocs);
  }
  return new OasExternalDocs({
    url: externalDocs.url,
    description: externalDocs.description
  });
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/server/Server.ts
var OasServer = class {
  /** Type identifier for this OAS server */
  oasType = "server";
  /** Human-readable description of the server */
  description;
  /** Server URL with optional variable templating */
  url;
  /** Variable definitions for URL templating */
  variables;
  /** Custom extension fields (x-* properties) */
  extensionFields;
  /**
   * Creates a new OasServer instance.
   * 
   * @param fields - Server configuration including URL, description, and variables
   */
  constructor(fields) {
    this.description = fields.description;
    this.url = fields.url;
    this.variables = fields.variables;
    this.extensionFields = fields.extensionFields;
  }
  /**
   * Determines if this server is a reference object.
   * 
   * @returns Always false since servers are not reference objects in OpenAPI
   */
  isRef() {
    return false;
  }
  /**
   * Resolves this server object.
   * 
   * @returns The server instance itself since it's already a concrete object
   */
  resolve() {
    return this;
  }
  /**
   * Resolves this server object one level.
   * 
   * @returns The server instance itself since it's already a concrete object
   */
  resolveOnce() {
    return this;
  }
  /**
   * Converts this OAS server to an OpenAPI v3 JSON schema representation.
   * 
   * @param _options - Conversion options (currently unused for server objects)
   * @returns OpenAPI v3 server object with URL, description, and variables
   */
  toJsonSchema(_options) {
    return {
      description: this.description,
      url: this.url,
      variables: this.variables
    };
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/serverVariable/ServerVariable.ts
var OasServerVariable = class {
  /** Type identifier for OAS server variable objects */
  oasType = "serverVariable";
  /** Human-readable description of the server variable */
  description;
  /** Default value for the server variable */
  default;
  /** Array of allowed values for the server variable */
  enums;
  /** OpenAPI specification extensions */
  extensionFields;
  constructor(fields) {
    this.description = fields.description;
    this.default = fields.default;
    this.enums = fields.enums;
    this.extensionFields = fields.extensionFields;
  }
  isRef() {
    return false;
  }
  resolve() {
    return this;
  }
  resolveOnce() {
    return this;
  }
  toJsonSchema(_options) {
    return {
      description: this.description,
      default: this.default,
      enum: this.enums
    };
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/serverVariable/toServerVariableV3.ts
var toServerVariablesV3 = ({ serverVariables, stackTrail, context }) => {
  return Object.fromEntries(Object.entries(serverVariables).map(([key, serverVariable]) => [
    key,
    toServerVariableV3({
      serverVariable,
      stackTrail,
      context
    })
  ]));
};
var toOptionalServerVariablesV3 = ({ serverVariables, stackTrail, context }) => {
  if (!serverVariables) {
    return void 0;
  }
  return toServerVariablesV3({
    serverVariables,
    stackTrail,
    context
  });
};
var toServerVariableV3 = ({ serverVariable, stackTrail, context }) => {
  const { description, default: defaultValue, enum: enums, ...skipped } = serverVariable;
  const extensionFields = toSpecificationExtensionsV3({
    skipped,
    parent: serverVariable,
    context,
    stackTrail,
    parentType: "serverVariable"
  });
  return new OasServerVariable({
    description,
    default: defaultValue,
    enums,
    extensionFields
  });
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/server/toServerV3.ts
var toServersV3 = ({ servers, stackTrail, context }) => {
  return servers.map((server, index) => {
    return stackTrail.trace(server.url ?? index, (st) => toServerV3({
      server,
      stackTrail: st,
      context
    }));
  });
};
var toOptionalServersV3 = ({ servers, stackTrail, context }) => {
  if (!servers) {
    return void 0;
  }
  return toServersV3({
    servers,
    stackTrail,
    context
  });
};
var toServerV3 = ({ server, stackTrail, context }) => {
  const { description, url, variables, ...skipped } = server;
  const extensionFields = toSpecificationExtensionsV3({
    skipped,
    parent: server,
    context,
    stackTrail,
    parentType: "server"
  });
  return new OasServer({
    description,
    url,
    variables: toOptionalServerVariablesV3({
      serverVariables: variables,
      stackTrail,
      context
    }),
    extensionFields
  });
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/operation/toOperationsV3.ts
var toOperationV3 = ({ operation, operationInfo, stackTrail, context }) => {
  const { method: method2, path, pathItem } = operationInfo;
  const { operationId, tags, summary, description, parameters, requestBody, responses, deprecated, security, externalDocs, servers, ...skipped } = operation;
  const extensionFields = toSpecificationExtensionsV3({
    skipped,
    parent: operation,
    context,
    stackTrail,
    parentType: "operation"
  });
  return new OasOperation({
    pathItem,
    path,
    method: method2,
    operationId,
    summary,
    tags,
    description,
    parameters: stackTrail.trace("parameters", (st) => toParameterListV3({
      parameters,
      stackTrail: st,
      context
    })),
    requestBody: stackTrail.trace("requestBody", (st) => toRequestBodyV3({
      requestBody,
      stackTrail: st,
      context
    })),
    responses: stackTrail.trace("responses", (st) => toResponsesV3({
      responses,
      stackTrail: st,
      context
    })),
    deprecated,
    security: stackTrail.trace("security", (st) => toSecurityRequirementsV3({
      security,
      stackTrail: st,
      context
    })),
    externalDocs: stackTrail.trace("externalDocs", (st) => toExternalDocs({
      externalDocs,
      stackTrail: st,
      context
    })),
    servers: stackTrail.trace("servers", (st) => toOptionalServersV3({
      servers,
      stackTrail: st,
      context
    })),
    extensionFields
  });
};
var toOperationsV3 = ({ paths, stackTrail, context }) => {
  return Object.entries(paths).flatMap(([path, pathItem]) => {
    return stackTrail.trace(path, (st) => {
      if (!pathItem) {
        return [];
      }
      const cleaned = Object.entries(pathItem).reduce(({ rest, methodObject }, [key, operation]) => {
        const isMethod2 = methodValues.includes(key);
        if (isMethod2) {
          const { [key]: _deleted, ...remaining } = rest;
          return {
            rest: remaining,
            methodObject: {
              ...methodObject,
              [key]: operation
            }
          };
        }
        return {
          rest,
          methodObject
        };
      }, {
        rest: pathItem,
        methodObject: {}
      });
      const pathItemObject = !isEmpty(cleaned.rest) ? toPathItemV3({
        pathItem: cleaned.rest,
        stackTrail: st,
        context
      }) : void 0;
      return Object.entries(cleaned.methodObject).map(([method2, operation]) => {
        return stackTrail.trace(method2, (st2) => {
          if (!operation) {
            return;
          }
          try {
            return toOperationV3({
              operation,
              operationInfo: {
                method: method2,
                path,
                pathItem: pathItemObject
              },
              stackTrail: st2,
              context
            });
          } catch (error) {
            invariant(error instanceof Error, "Invalid error");
            context.logIssue({
              key: method2,
              parent: operation,
              level: "error",
              error,
              stackTrail: st2,
              type: "INVALID_OPERATION"
            });
            return void 0;
          }
        });
      }).filter((item) => Boolean(item));
    });
  });
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/components/Components.ts
var componentsKeys = [
  "schemas",
  "responses",
  "parameters",
  "examples",
  "requestBodies",
  "headers",
  "securitySchemes"
];
var OasComponents = class {
  /** Static identifier property for OasComponents */
  oasType = "components";
  /** @internal */
  #fields;
  /**
   * Creates a new OasComponents instance.
   * 
   * @param fields - Component definitions (defaults to empty object)
   * 
   * @example
   * ```typescript
   * const components = new OasComponents({
   *   schemas: {
   *     User: userSchema,
   *     Product: productSchema
   *   },
   *   responses: {
   *     NotFound: notFoundResponse
   *   }
   * });
   * ```
   */
  constructor(fields = {}) {
    this.#fields = fields;
  }
  /**
   * Gets all schema reference names.
   * 
   * This method extracts the keys from the schemas object and returns them
   * as an array of RefName types. Useful for iterating over all available
   * schemas or checking schema availability.
   * 
   * @returns Array of reference names for all schemas
   * 
   * @example
   * ```typescript
   * const components = new OasComponents({
   *   schemas: {
   *     User: userSchema,
   *     Product: productSchema,
   *     Order: orderSchema
   *   }
   * });
   * 
   * const schemaNames = components.toSchemasRefNames();
   * console.log(schemaNames); // ['User', 'Product', 'Order']
   * 
   * // Use for processing
   * schemaNames.forEach(name => {
   *   const schema = components.schemas?.[name];
   *   console.log(`Processing schema: ${name}`);
   * });
   * ```
   */
  toSchemasRefNames() {
    return Object.keys(this.#fields.schemas ?? {});
  }
  /** Record holding re-usable {@link OasSchema} objects or Refs  */
  get schemas() {
    return this.#fields.schemas;
  }
  /**
   * Removes a schema from the components and returns it.
   * 
   * This method permanently removes a schema from the components object
   * and returns the removed schema. This is useful during processing when
   * you need to extract and handle specific schemas separately.
   * 
   * @param refName - The reference name of the schema to remove
   * @returns The removed schema object or reference
   * 
   * @throws {Error} When the schema doesn't exist or schemas object is undefined
   * 
   * @example
   * ```typescript
   * const components = new OasComponents({
   *   schemas: {
   *     User: userSchema,
   *     Product: productSchema,
   *     Internal: internalSchema
   *   }
   * });
   * 
   * // Remove internal schema that shouldn't be exposed
   * const internalSchema = components.removeSchema('Internal');
   * console.log('Removed internal schema');
   * 
   * // Check remaining schemas
   * const remainingSchemas = components.toSchemasRefNames();
   * console.log(remainingSchemas); // ['User', 'Product']
   * 
   * // Process removed schema separately
   * if (!internalSchema.isRef()) {
   *   console.log('Processing internal schema privately');
   * }
   * ```
   */
  removeSchema(refName) {
    const { [refName]: removed, ...rest } = this.#fields.schemas;
    this.#fields.schemas = rest;
    return removed;
  }
  /** Record holding re-usable {@link OasResponse} objects or Refs  */
  get responses() {
    return this.#fields.responses;
  }
  /** Record holding re-usable {@link OasParameter} objects or Refs  */
  get parameters() {
    return this.#fields.parameters;
  }
  /** Record holding re-usable {@link OasExample} objects or Refs  */
  get examples() {
    return this.#fields.examples;
  }
  /** Record holding re-usable {@link OasRequestBody} objects or Refs  */
  get requestBodies() {
    return this.#fields.requestBodies;
  }
  /** Record holding re-usable {@link OasHeader} objects or Refs  */
  get headers() {
    return this.#fields.headers;
  }
  /** Record holding re-usable {@link OasSecurityScheme} objects or Refs  */
  get securitySchemes() {
    return this.#fields.securitySchemes;
  }
  /** Specification Extension fields */
  get extensionFields() {
    return this.#fields.extensionFields;
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/securitySchemes/SecurityScheme.ts
var OasHttpSecurityScheme = class {
  oasType = "securityScheme";
  type = "http";
  description;
  scheme;
  bearerFormat;
  constructor(fields) {
    this.description = fields.description;
    this.scheme = fields.scheme;
    this.bearerFormat = fields.bearerFormat;
  }
  isRef() {
    return false;
  }
  resolve() {
    return this;
  }
  resolveOnce() {
    return this;
  }
  toJsonSchema() {
    return {
      type: "http",
      description: this.description,
      scheme: this.scheme,
      bearerFormat: this.bearerFormat
    };
  }
};
var OasApiKeySecurityScheme = class {
  oasType = "securityScheme";
  type = "apiKey";
  description;
  name;
  location;
  constructor(fields) {
    this.description = fields.description;
    this.name = fields.name;
    this.location = fields.in;
  }
  isRef() {
    return false;
  }
  resolve() {
    return this;
  }
  resolveOnce() {
    return this;
  }
  toJsonSchema() {
    return {
      type: "apiKey",
      name: this.name,
      in: this.location
    };
  }
};
var OasOAuth2SecurityScheme = class {
  oasType = "securityScheme";
  type = "oauth2";
  description;
  flows;
  constructor(fields) {
    this.description = fields.description;
    this.flows = fields.flows;
  }
  isRef() {
    return false;
  }
  resolve() {
    return this;
  }
  resolveOnce() {
    return this;
  }
  toJsonSchema() {
    return {
      type: "oauth2",
      description: this.description,
      flows: {
        authorizationCode: this.flows.authorizationCode,
        clientCredentials: this.flows.clientCredentials,
        implicit: this.flows.implicit,
        password: this.flows.password
      }
    };
  }
};
var OasOpenIdSecurityScheme = class {
  oasType = "securityScheme";
  type = "openIdConnect";
  description;
  openIdConnectUrl;
  constructor(fields) {
    this.description = fields.description;
    this.openIdConnectUrl = fields.openIdConnectUrl;
  }
  isRef() {
    return false;
  }
  resolve() {
    return this;
  }
  resolveOnce() {
    return this;
  }
  toJsonSchema() {
    return {
      type: "openIdConnect",
      description: this.description,
      openIdConnectUrl: this.openIdConnectUrl
    };
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/securitySchemes/security-scheme-types.ts
var oasHttpSecuritySchemeData = object({
  type: literal("http"),
  description: optional(string()),
  scheme: string(),
  bearerFormat: optional(string())
});
var oasApiKeySecuritySchemeData = object({
  type: literal("apiKey"),
  description: optional(string()),
  name: string(),
  in: union([
    literal("header"),
    literal("query"),
    literal("cookie")
  ])
});
var oasImplicitOAuth2FlowData = object({
  authorizationUrl: string(),
  refreshUrl: optional(string()),
  scopes: record(string(), string())
});
var oasAuthorizationCodeOAuth2FlowData = object({
  authorizationUrl: string(),
  tokenUrl: string(),
  refreshUrl: optional(string()),
  scopes: record(string(), string())
});
var oasClientCredentialsOAuth2FlowData = object({
  tokenUrl: string(),
  refreshUrl: optional(string()),
  scopes: record(string(), string())
});
var oasPasswordOAuth2FlowData = object({
  tokenUrl: string(),
  refreshUrl: optional(string()),
  scopes: record(string(), string())
});
var oasOAuth2FlowsData = object({
  authorizationCode: optional(oasAuthorizationCodeOAuth2FlowData),
  clientCredentials: optional(oasClientCredentialsOAuth2FlowData),
  implicit: optional(oasImplicitOAuth2FlowData),
  password: optional(oasPasswordOAuth2FlowData)
});
var oasOAuth2SecuritySchemeData = object({
  type: literal("oauth2"),
  description: optional(string()),
  flows: oasOAuth2FlowsData
});
var oasOpenIdSecuritySchemeData = object({
  type: literal("openIdConnect"),
  description: optional(string()),
  openIdConnectUrl: string()
});
var oasSecuritySchemeData = union([
  oasHttpSecuritySchemeData,
  oasApiKeySecuritySchemeData,
  oasOAuth2SecuritySchemeData,
  oasOpenIdSecuritySchemeData
]);

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/securitySchemes/toSecuritySchemes.ts
var toSecuritySchemesV3 = ({ securitySchemes, stackTrail, context }) => {
  if (!securitySchemes) {
    return void 0;
  }
  return Object.fromEntries(Object.entries(securitySchemes).map(([key, value]) => {
    return [
      key,
      stackTrail.trace(key, (st) => toSecuritySchemeV3({
        securityScheme: value,
        stackTrail: st,
        context
      }))
    ];
  }));
};
var toSecuritySchemeV3 = ({ securityScheme, stackTrail, context }) => {
  if (isRef(securityScheme)) {
    return toRefV31({
      ref: securityScheme,
      refType: "securityScheme",
      stackTrail,
      context
    });
  }
  switch (securityScheme.type) {
    case "http": {
      const { type: _type, description, scheme, bearerFormat, ...skipped } = parse(oasHttpSecuritySchemeData, securityScheme);
      if (!isEmpty(skipped)) {
        context.logSkippedFields({
          skipped,
          parent: securityScheme,
          stackTrail,
          parentType: "securityScheme:http"
        });
      }
      return new OasHttpSecurityScheme({
        description,
        scheme,
        bearerFormat
      });
    }
    case "apiKey": {
      const { type: _type, in: location, description, name, ...skipped } = parse(oasApiKeySecuritySchemeData, securityScheme);
      if (!isEmpty(skipped)) {
        context.logSkippedFields({
          skipped,
          parent: securityScheme,
          stackTrail,
          parentType: "securityScheme:apiKey"
        });
      }
      return new OasApiKeySecurityScheme({
        description,
        name,
        in: location
      });
    }
    case "oauth2": {
      const { type: _type, flows, description, ...skipped } = parse(oasOAuth2SecuritySchemeData, securityScheme);
      if (!isEmpty(skipped)) {
        context.logSkippedFields({
          skipped,
          parent: securityScheme,
          stackTrail,
          parentType: "securityScheme:oauth2"
        });
      }
      return new OasOAuth2SecurityScheme({
        description,
        flows
      });
    }
    case "openIdConnect": {
      const { type: _type, description, openIdConnectUrl, ...skipped } = parse(oasOpenIdSecuritySchemeData, securityScheme);
      if (!isEmpty(skipped)) {
        context.logSkippedFields({
          skipped,
          parent: securityScheme,
          stackTrail,
          parentType: "securityScheme:openIdConnect"
        });
      }
      return new OasOpenIdSecurityScheme({
        description,
        openIdConnectUrl
      });
    }
    default:
      throw new Error(`Unknown security scheme type: ${securityScheme.type}`);
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/components/toComponentsV3.ts
var toComponentsV3 = ({ components, stackTrail, context }) => {
  if (!components) {
    return void 0;
  }
  const { schemas, responses, parameters, examples, requestBodies, headers, securitySchemes, ...skipped } = components;
  const extensionFields = toSpecificationExtensionsV3({
    skipped,
    parent: components,
    context,
    stackTrail,
    parentType: "components"
  });
  const fields = {
    schemas: stackTrail.trace("schemas", (st) => toOptionalSchemasV3({
      schemas,
      stackTrail: st,
      context
    })),
    responses: stackTrail.trace("responses", (st) => toOptionalResponsesV3({
      responses,
      stackTrail: st,
      context
    })),
    parameters: stackTrail.trace("parameters", (st) => toOptionalParametersV3({
      parameters,
      stackTrail: st,
      context
    })),
    examples: toExamplesV3({
      examples,
      example: void 0,
      exampleKey: "TEMP",
      stackTrail,
      context
    }),
    requestBodies: stackTrail.trace("requestBodies", (st) => toRequestBodiesV3({
      requestBodies,
      stackTrail: st,
      context
    })),
    headers: stackTrail.trace("headers", (st) => toHeadersV3({
      headers,
      stackTrail: st,
      context
    })),
    securitySchemes: stackTrail.trace("securitySchemes", (st) => toSecuritySchemesV3({
      securitySchemes,
      stackTrail: st,
      context
    })),
    extensionFields
  };
  return new OasComponents(fields);
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/info/Info.ts
var OasInfo = class {
  /** Type identifier for this OAS info object */
  oasType = "info";
  /** Private storage for all info fields */
  #fields;
  /**
   * Creates a new OasInfo instance.
   * 
   * @param fields - API information fields including title, version, description, and contact details
   */
  constructor(fields) {
    this.#fields = fields;
  }
  /**
   * Gets the API title.
   * 
   * @returns The title of the API
   */
  get title() {
    return this.#fields.title;
  }
  /**
   * Gets the API description.
   * 
   * @returns Optional detailed description of the API's purpose and functionality
   */
  get description() {
    return this.#fields.description;
  }
  /**
   * Gets the terms of service URL.
   * 
   * @returns Optional URL pointing to the API's terms of service
   */
  get termsOfService() {
    return this.#fields.termsOfService;
  }
  /**
   * Gets the contact information.
   * 
   * @returns Optional contact information for API support and inquiries
   */
  get contact() {
    return this.#fields.contact;
  }
  /**
   * Gets the license information.
   * 
   * @returns Optional license information governing API usage
   */
  get license() {
    return this.#fields.license;
  }
  /**
   * Gets the API version.
   * 
   * @returns The version string of the API (e.g., '1.0.0', '2.1.3')
   */
  get version() {
    return this.#fields.version;
  }
  /** Specification Extension fields */
  get extensionFields() {
    return this.#fields.extensionFields;
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/contact/Contact.ts
var OasContact = class {
  /** Type identifier for this OAS contact object */
  oasType = "contact";
  /** The identifying name of the contact person/organization */
  name;
  /** URL pointing to the contact information */
  url;
  /** Email address of the contact person/organization */
  email;
  /** Custom extension fields (x-* properties) for additional contact metadata */
  extensionFields;
  /**
   * Creates a new OasContact instance.
   * 
   * @param fields - Contact information fields including name, URL, and email
   */
  constructor(fields = {}) {
    this.name = fields.name;
    this.url = fields.url;
    this.email = fields.email;
    this.extensionFields = fields.extensionFields;
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/contact/toContactV3.ts
var toContactV3 = (contact, stackTrail, context) => {
  const { name, url, email, ...skipped } = contact;
  const extensionFields = toSpecificationExtensionsV3({
    skipped,
    parent: contact,
    context,
    stackTrail,
    parentType: "contact"
  });
  return new OasContact({
    name,
    url,
    email,
    extensionFields
  });
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/license/License.ts
var OasLicense = class {
  oasType = "license";
  name;
  url;
  extensionFields;
  constructor(fields = {}) {
    this.name = fields.name;
    this.url = fields.url;
    this.extensionFields = fields.extensionFields;
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/license/toLicenseV3.ts
var toLicenseV3 = (license, stackTrail, context) => {
  const { name, url, ...skipped } = license;
  const extensionFields = toSpecificationExtensionsV3({
    skipped,
    parent: license,
    context,
    stackTrail,
    parentType: "license"
  });
  return new OasLicense({
    name,
    url,
    extensionFields
  });
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/info/toInfoV3.ts
var toInfoV3 = ({ info, stackTrail, context }) => {
  const { title, description, termsOfService, contact, license, version, ...skipped } = info;
  const extensionFields = toSpecificationExtensionsV3({
    skipped,
    parent: info,
    context,
    stackTrail,
    parentType: "info"
  });
  return new OasInfo({
    title,
    description,
    termsOfService,
    contact: contact ? toContactV3(contact, stackTrail, context) : void 0,
    license: license ? toLicenseV3(license, stackTrail, context) : void 0,
    version,
    extensionFields
  });
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/document/toDocumentFieldsV3.ts
var toDocumentFieldsV3 = ({ documentObject, stackTrail, context }) => {
  const { openapi, info, paths, components, tags, servers, security, externalDocs, ...skipped } = documentObject;
  const extensionFields = toSpecificationExtensionsV3({
    skipped,
    parent: documentObject,
    context,
    stackTrail,
    parentType: "document"
  });
  return {
    openapi,
    info: stackTrail.trace("info", (st) => toInfoV3({
      info,
      stackTrail: st,
      context
    })),
    servers: stackTrail.trace("servers", (st) => toOptionalServersV3({
      servers,
      stackTrail: st,
      context
    })),
    operations: stackTrail.trace("paths", (st) => toOperationsV3({
      paths,
      stackTrail: st,
      context
    })),
    components: stackTrail.trace("components", (st) => toComponentsV3({
      components,
      stackTrail: st,
      context
    })),
    tags: stackTrail.trace("tags", (st) => toTagsV3({
      tags,
      stackTrail: st,
      context
    })),
    security: stackTrail.trace("security", (st) => toSecurityRequirementsV3({
      security,
      stackTrail: st,
      context
    })),
    extensionFields,
    externalDocs: stackTrail.trace("externalDocs", (st) => toExternalDocs({
      externalDocs,
      stackTrail: st,
      context
    }))
  };
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/document/Document.ts
var OasDocument = class {
  /** Static identifier property for OasDocument */
  oasType = "openapi";
  /** @internal Private fields storage */
  #fields;
  /**
   * Creates a new OasDocument instance.
   *
   * The document is typically created with undefined fields and populated
   * later during the parsing process. This allows for lazy initialization
   * and proper error handling during document processing.
   *
   * @param fields - Optional document fields (usually set later during parsing)
   *
   * @example
   * ```typescript
   * // Usually created without fields during parsing
   * const document = new OasDocument();
   *
   * // Fields are set later by the parser
   * document.fields = parsedDocumentFields;
   * ```
   */
  constructor(fields) {
    this.#fields = fields;
  }
  /**
   * Removes an item from the document based on a stack trail path.
   *
   * This method is used internally during document processing to remove
   * specific operations or schema components. The stack trail indicates
   * the path to the item within the document structure.
   *
   * @param stackTrail - Path to the item to remove
   * @returns The removed item, or undefined if not found
   *
   * @internal This method is primarily used by the processing pipeline
   *
   * @example
   * ```typescript
   * // Remove an operation at /users POST
   * const removed = document.removeItem(new StackTrail(['paths', '/users', 'post']));
   *
   * // Remove a schema component
   * const removedSchema = document.removeItem(new StackTrail(['components', 'schemas', 'User']));
   * ```
   */
  removeItem(stackTrail) {
    const [first, second, third] = stackTrail.stackTrail;
    switch (first) {
      case "paths": {
        const index = this.#fields.operations.findIndex(({ path, method: method2 }) => path === second && method2 === third);
        if (index === -1) {
          return void 0;
        }
        const [removed] = this.#fields.operations.splice(index, 1);
        return removed;
      }
      case "components": {
        if (typeof third !== "string") {
          throw new Error(`RefName cannot be a number: ${third}`);
        }
        return this.#fields.components.removeSchema(third);
      }
      default:
        throw new Error(`Unexpected stack trail: ${stackTrail}`);
    }
  }
  /**
   * Sets the document fields after parsing.
   *
   * This setter is called by the parsing pipeline to populate the document
   * with parsed OpenAPI data. It enables lazy initialization and proper
   * error handling during document processing.
   *
   * @param fields - The parsed document fields
   *
   * @example
   * ```typescript
   * const document = new OasDocument();
   * document.fields = {
   *   openapi: '3.0.0',
   *   info: { title: 'API', version: '1.0' },
   *   operations: [],
   *   // ... other fields
   * };
   * ```
   */
  set fields(fields) {
    this.#fields = fields;
  }
  /** OpenAPI specification version */
  get openapi() {
    if (!this.#fields) {
      throw new Error(`Accessing 'openapi' before fields are set`);
    }
    return this.#fields.openapi;
  }
  /** API metadata */
  get info() {
    if (!this.#fields) {
      throw new Error(`Accessing 'info' before fields are set`);
    }
    return this.#fields.info;
  }
  get servers() {
    if (!this.#fields) {
      throw new Error(`Accessing 'servers' before fields are set`);
    }
    return this.#fields.servers;
  }
  /** List of all operations for the API */
  get operations() {
    if (!this.#fields) {
      throw new Error(`Accessing 'operations' before fields are set`);
    }
    return this.#fields.operations;
  }
  /** Container object for re-usable schema items within the API */
  get components() {
    if (!this.#fields) {
      throw new Error(`Accessing 'components' before fields are set`);
    }
    return this.#fields.components;
  }
  /** List of tags used by API with additional metadata */
  get tags() {
    if (!this.#fields) {
      throw new Error(`Accessing 'tags' before fields are set`);
    }
    return this.#fields.tags;
  }
  /** List of security requirements for the API */
  get security() {
    if (!this.#fields) {
      throw new Error(`Accessing 'security' before fields are set`);
    }
    return this.#fields.security;
  }
  /** Specification Extension fields */
  get extensionFields() {
    if (!this.#fields) {
      throw new Error(`Accessing 'extensionFields' before fields are set`);
    }
    return this.#fields.extensionFields;
  }
  /** External documentation for the API */
  get externalDocs() {
    if (!this.#fields) {
      throw new Error(`Accessing 'externalDocs' before fields are set`);
    }
    return this.#fields.externalDocs;
  }
  /**
   * Converts the document back to a JSON-serializable OpenAPI object.
   *
   * This method serializes the document to a standard OpenAPI v3 format,
   * which can be used for output, validation, or further processing. The
   * resulting object follows the OpenAPI specification structure.
   *
   * @returns A JSON-serializable object representing the OpenAPI document
   *
   * @example
   * ```typescript
   * // Convert document back to standard OpenAPI format
   * const openApiJson = document.toJSON();
   *
   * // Can be stringified for output
   * const yamlString = JSON.stringify(openApiJson, null, 2);
   *
   * // Or used with OpenAPI tools
   * await validateOpenApiDocument(openApiJson);
   * ```
   */
  toJSON() {
    return {
      openapi: this.openapi,
      info: this.info,
      servers: this.servers,
      operations: this.operations,
      components: this.components,
      tags: this.tags,
      security: this.security,
      ...this.extensionFields
    };
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/context/ParseContext.ts
var ParseContext = class {
  /** The original OpenAPI v3 document being parsed */
  documentObject;
  /** Logger instance for tracking parse progress and issues */
  logger;
  /** The parsed OAS document result */
  oasDocument;
  /** Collection of parsing issues encountered during processing */
  issues;
  /** Whether to suppress console output during parsing */
  silent;
  #refStackTrails;
  #refErrors;
  /**
   * Creates a new ParseContext instance for the parsing phase.
   *
   * @param args - Constructor arguments including document object, logger, and options
   */
  constructor({ documentObject, logger, silent = true }) {
    this.documentObject = documentObject;
    this.logger = logger;
    this.oasDocument = new OasDocument();
    this.silent = silent;
    this.issues = [];
    this.#refStackTrails = {};
    this.#refErrors = {};
  }
  /**
   * Parses the OpenAPI v3 document and returns the internal OAS document representation.
   *
   * @returns Parsed OAS document with all components and operations
   */
  parse(stackTrail) {
    this.oasDocument.fields = toDocumentFieldsV3({
      documentObject: this.documentObject,
      stackTrail,
      context: this
    });
    this.removeErroredItems();
    return this.oasDocument;
  }
  /**
   * Removes items from the parsed document that encountered errors during parsing.
   */
  removeErroredItems() {
    Object.entries(this.#refErrors).forEach(([$ref, errors]) => {
      errors.forEach((error) => {
        this.#refStackTrails[$ref]?.forEach((stackTrail) => {
          const removed = this.oasDocument.removeItem(stackTrail);
          if (removed) {
            this.issues.push({
              level: "error",
              error,
              location: stackTrail.toString(),
              parent: removed,
              type: "INVALID_DEPENDENCY_REF"
            });
          }
        });
      });
    });
  }
  /**
   * Registers a reference ($ref) with its associated stack trail for error tracking.
   *
   * @param stackTrail - Current processing context stack trail
   * @param $ref - OpenAPI reference string to register
   */
  registerRef(stackTrail, $ref) {
    const refStackTrails = this.#refStackTrails[$ref];
    refStackTrails ? refStackTrails.push(stackTrail) : this.#refStackTrails[$ref] = [
      stackTrail
    ];
  }
  /**
   * Registers an error that occurred while processing a reference.
   *
   * @param error - Error that occurred during reference processing
   * @param $ref - Reference string that caused the error (if available)
   */
  registerRefError(error, $ref) {
    if ($ref) {
      const refErrors = this.#refErrors[$ref];
      refErrors ? refErrors.push(error) : this.#refErrors[$ref] = [
        error
      ];
    }
  }
  /**
   * Logs warnings for fields that were skipped during parsing.
   *
   * @param args - Arguments containing skipped fields and parent context
   */
  logSkippedFields({ skipped, stackTrail, parent, parentType }) {
    Object.keys(skipped).forEach((key) => {
      this.logIssue({
        key,
        stackTrail,
        parent,
        level: "warning",
        message: `Unexpected property '${key}' in '${parentType}'`,
        type: "UNEXPECTED_PROPERTY"
      });
    });
  }
  // /**
  //  * Executes a function within a traced context for debugging and monitoring.
  //  *
  //  * @param token - Trace identifier or path segments
  //  * @param fn - Function to execute within the trace context
  //  * @returns The result of the traced function execution
  //  */
  // trace<T>(token: string, fn: () => T): T {
  //   return tracer(this.stackTrail, token, fn, this.logger)
  // }
  /**
   * Logs a parsing issue with associated key context.
   *
   * @param args - Issue arguments including key, parent object, and issue details
   */
  logIssue({ key, parent, type, stackTrail, ...issue }) {
    stackTrail.trace(key, (st) => this.logIssueNoKey({
      parent,
      type,
      stackTrail: st,
      ...issue
    }));
  }
  /**
   * Logs a parsing issue without specific key context.
   *
   * @param args - Issue arguments including parent object and issue details
   */
  logIssueNoKey({ parent, type, stackTrail, ...issue }) {
    if (issue.level === "error") {
      this.registerRefError(issue.error, stackTrail.toStackRef());
    }
    this.issues.push({
      ...issue,
      location: stackTrail.toString(),
      parent,
      type
    });
    if (!this.silent) {
      this.logger.warn({
        ...issue,
        location: stackTrail.toString(),
        parent: JSON.stringify(parent),
        type
      });
    }
  }
};

// deno:https://jsr.io/@std/log/0.224.14/levels.ts
var LogLevels = {
  NOTSET: 0,
  DEBUG: 10,
  INFO: 20,
  WARN: 30,
  ERROR: 40,
  CRITICAL: 50
};
var LogLevelNames = Object.keys(LogLevels).filter((key) => isNaN(Number(key)));
var byLevel = {
  [LogLevels.NOTSET]: "NOTSET",
  [LogLevels.DEBUG]: "DEBUG",
  [LogLevels.INFO]: "INFO",
  [LogLevels.WARN]: "WARN",
  [LogLevels.ERROR]: "ERROR",
  [LogLevels.CRITICAL]: "CRITICAL"
};
function getLevelByName(name) {
  const level = LogLevels[name];
  if (level !== void 0) {
    return level;
  }
  throw new Error(`Cannot get log level: no level named ${name}`);
}
function getLevelName(level) {
  const levelName = byLevel[level];
  if (levelName) {
    return levelName;
  }
  throw new Error(`Cannot get log level: no name for level: ${level}`);
}

// deno:https://jsr.io/@std/log/0.224.14/base_handler.ts
var _computedKey;
var DEFAULT_FORMATTER = ({ levelName, msg }) => `${levelName} ${msg}`;
_computedKey = Symbol.dispose;
var BaseHandler = class {
  #levelName;
  #level;
  /**
   * The function that formats log records.
   *
   * @example Usage
   * ```ts
   * import { BaseHandler } from "@std/log/base-handler";
   * import { LogRecord } from "@std/log/logger";
   * import { LogLevels } from "@std/log/levels";
   * import { assertEquals } from "@std/assert/equals";
   *
   * class MyHandler extends BaseHandler {
   *  log(msg: string) {
   *   console.log(msg);
   * }
   * }
   *
   * const handler = new MyHandler("INFO");
   * const record = new LogRecord({
   *   msg: "Hello, world!",
   *   args: ["foo", "bar"],
   *   level: LogLevels.INFO,
   *   loggerName: "example",
   * });
   * const formatted = handler.formatter(record);
   * assertEquals(formatted, "INFO Hello, world!");
   * ```
   */
  formatter;
  /**
   * Constructs a new instance.
   *
   * @param levelName The name of the log level to handle.
   * @param options Options for the handler.
   */
  constructor(levelName, options) {
    const { formatter = DEFAULT_FORMATTER } = options ?? {};
    this.#levelName = levelName;
    this.#level = getLevelByName(levelName);
    this.formatter = formatter;
  }
  /**
   * Getter for the log level that this handler will handle.
   *
   * @example Usage
   * ```ts
   * import { BaseHandler } from "@std/log/base-handler";
   * import { LogLevels } from "@std/log/levels";
   * import { assertEquals } from "@std/assert/equals";
   *
   * class MyHandler extends BaseHandler {
   *   log(msg: string) {
   *     console.log(msg);
   *   }
   * }
   *
   * const handler = new MyHandler("INFO");
   * assertEquals(handler.level, LogLevels.INFO);
   * ```
   *
   * @returns The log level to handle.
   */
  get level() {
    return this.#level;
  }
  /**
   * Setter for the log level that this handler will handle.
   *
   * @example Usage
   * ```ts
   * import { BaseHandler } from "@std/log/base-handler";
   * import { LogLevels } from "@std/log/levels";
   * import { assertEquals } from "@std/assert/equals";
   *
   * class MyHandler extends BaseHandler {
   *   log(msg: string) {
   *     console.log(msg);
   *   }
   * }
   *
   * const handler = new MyHandler("INFO");
   * handler.level = LogLevels.DEBUG;
   * assertEquals(handler.level, LogLevels.DEBUG);
   * ```
   *
   * @param level The log level to handle.
   */
  set level(level) {
    this.#level = level;
    this.#levelName = getLevelName(level);
  }
  /**
   * Getter for the name of the log level that this handler will handle.
   *
   * @example Usage
   * ```ts
   * import { BaseHandler } from "@std/log/base-handler";
   * import { assertEquals } from "@std/assert/equals";
   *
   * class MyHandler extends BaseHandler {
   *   log(msg: string) {
   *     console.log(msg);
   *   }
   * }
   *
   * const handler = new MyHandler("INFO");
   * assertEquals(handler.levelName, "INFO");
   * ```
   *
   * @returns The name of the log level to handle.
   */
  get levelName() {
    return this.#levelName;
  }
  /**
   * Setter for the name of the log level that this handler will handle.
   *
   * @param levelName The name of the log level to handle.
   *
   * @example Usage
   * ```ts
   * import { BaseHandler } from "@std/log/base-handler";
   * import { assertEquals } from "@std/assert/equals";
   *
   * class MyHandler extends BaseHandler {
   *   log(msg: string) {
   *     console.log(msg);
   *   }
   * }
   *
   * const handler = new MyHandler("INFO");
   * handler.levelName = "DEBUG";
   * assertEquals(handler.levelName, "DEBUG");
   * ```
   */
  set levelName(levelName) {
    this.#levelName = levelName;
    this.#level = getLevelByName(levelName);
  }
  /**
   * Handles a log record.
   *
   * @param logRecord The log record to handle.
   *
   * @example Usage
   * ```ts
   * import { BaseHandler } from "@std/log/base-handler";
   * import { LogRecord } from "@std/log/logger";
   * import { LogLevels } from "@std/log/levels";
   * import { assertInstanceOf } from "@std/assert/instance-of";
   *
   * class MyHandler extends BaseHandler {
   *   log(msg: string) {
   *     console.log(msg);
   *   }
   * }
   *
   * const handler = new MyHandler("INFO");
   * const record = new LogRecord({
   *   msg: "Hello, world!",
   *   args: ["foo", "bar"],
   *   level: LogLevels.INFO,
   *   loggerName: "example",
   * });
   * handler.handle(record);
   *
   * assertInstanceOf(handler, BaseHandler);
   * ```
   */
  handle(logRecord) {
    if (this.level > logRecord.level) return;
    const msg = this.format(logRecord);
    this.log(msg);
  }
  /**
   * Formats a log record.
   *
   * @param logRecord The log record to format.
   * @returns A string representation of the log record.
   *
   * @example Usage
   * ```ts
   * import { BaseHandler } from "@std/log/base-handler";
   * import { LogRecord } from "@std/log/logger";
   * import { LogLevels } from "@std/log/levels";
   * import { assertEquals } from "@std/assert/equals";
   *
   * class MyHandler extends BaseHandler {
   *   log(msg: string) {
   *     console.log(msg);
   *   }
   * }
   *
   * const handler = new MyHandler("INFO");
   * const record = new LogRecord({
   *   msg: "Hello, world!",
   *   args: ["foo", "bar"],
   *   level: LogLevels.INFO,
   *   loggerName: "example",
   * });
   * const formatted = handler.format(record);
   * assertEquals(formatted, "INFO Hello, world!");
   * ```
   */
  format(logRecord) {
    return this.formatter(logRecord);
  }
  /**
   * Initializes the handler.
   *
   * This method is called when the handler is added to a logger. It can be
   * used to perform any setup that is required by the handler.
   *
   * @example Usage
   * ```ts
   * import { BaseHandler } from "@std/log/base-handler";
   * import { assertInstanceOf } from "@std/assert/instance-of";
   *
   * class MyHandler extends BaseHandler {
   *   log(msg: string) {
   *     console.log(msg);
   *   }
   *
   *   override setup() {
   *     console.log("Handler setup!");
   *   }
   * }
   *
   * const handler = new MyHandler("INFO");
   * handler.setup(); // Prints "Handler setup!"
   *
   * assertInstanceOf(handler, BaseHandler);
   * ```
   */
  setup() {
  }
  /**
   * Destroys the handler, performing any cleanup that is required.
   *
   * This method is called when the handler is removed from a logger. It can be
   * used to perform any cleanup that is required by the handler.
   *
   * @example Usage
   * ```ts
   * import { BaseHandler } from "@std/log/base-handler";
   * import { assertInstanceOf } from "@std/assert/instance-of";
   *
   * class MyHandler extends BaseHandler {
   *   log(msg: string) {
   *     console.log(msg);
   *   }
   *
   *   override destroy() {
   *     console.log("Handler destroyed!");
   *   }
   * }
   *
   * const handler = new MyHandler("INFO");
   * handler.destroy(); // Prints "Handler destroyed!"
   * assertInstanceOf(handler, BaseHandler);
   * ```
   */
  destroy() {
  }
  /**
   * Automatically disposes of the handler when instantiated with the `using`
   * keyword by calling the {@linkcode BaseHandler.destroy} method.
   *
   * @example Usage
   * ```ts
   * import { BaseHandler } from "@std/log/base-handler";
   * import { LogRecord } from "@std/log/logger";
   * import { assertInstanceOf } from "@std/assert/instance-of";
   *
   * class MyHandler extends BaseHandler {
   *   log(msg: string) {
   *     console.log(msg);
   *   }
   * }
   *
   * using handler = new MyHandler("INFO");
   * assertInstanceOf(handler, BaseHandler);
   * ```
   */
  [_computedKey]() {
    this.destroy();
  }
};

// deno:https://jsr.io/@std/fmt/1.0.8/colors.ts
var { Deno: Deno2 } = globalThis;
var noColor = typeof Deno2?.noColor === "boolean" ? Deno2.noColor : false;
var enabled = !noColor;
function code(open, close) {
  return {
    open: `\x1B[${open.join(";")}m`,
    close: `\x1B[${close}m`,
    regexp: new RegExp(`\\x1b\\[${close}m`, "g")
  };
}
function run(str, code2) {
  return enabled ? `${code2.open}${str.replace(code2.regexp, code2.open)}${code2.close}` : str;
}
function bold(str) {
  return run(str, code([
    1
  ], 22));
}
function red(str) {
  return run(str, code([
    31
  ], 39));
}
function yellow(str) {
  return run(str, code([
    33
  ], 39));
}
function blue(str) {
  return run(str, code([
    34
  ], 39));
}
var ANSI_PATTERN = new RegExp([
  "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
  "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TXZcf-nq-uy=><~]))"
].join("|"), "g");

// deno:https://jsr.io/@std/log/0.224.14/console_handler.ts
function applyColors(msg, level) {
  switch (level) {
    case LogLevels.INFO:
      msg = blue(msg);
      break;
    case LogLevels.WARN:
      msg = yellow(msg);
      break;
    case LogLevels.ERROR:
      msg = red(msg);
      break;
    case LogLevels.CRITICAL:
      msg = bold(red(msg));
      break;
    default:
      break;
  }
  return msg;
}
var ConsoleHandler = class extends BaseHandler {
  #useColors;
  /**
   * Constructs a new instance.
   *
   * @param levelName The level name to log messages at.
   * @param options Options for the handler.
   */
  constructor(levelName, options = {}) {
    super(levelName, options);
    this.#useColors = options.useColors ?? true;
  }
  /**
   * Formats a log record into a string.
   *
   * @example Usage
   * ```ts
   * import { ConsoleHandler } from "@std/log/console-handler";
   * import { LogRecord } from "@std/log/logger";
   * import { LogLevels } from "@std/log/levels";
   * import { assertEquals } from "@std/assert/equals";
   * import { blue } from "@std/fmt/colors";
   *
   * const handler = new ConsoleHandler("INFO");
   * const logRecord = new LogRecord({
   *   msg: "Hello, world!",
   *   args: ["foo", "bar"],
   *   level: LogLevels.INFO,
   *   loggerName: "my-logger",
   * });
   * const result = handler.format(logRecord);
   *
   * assertEquals(result, blue("INFO Hello, world!"));
   * ```
   *
   * @param logRecord The log record to format.
   * @returns The formatted log record.
   */
  format(logRecord) {
    let msg = super.format(logRecord);
    if (this.#useColors) {
      msg = applyColors(msg, logRecord.level);
    }
    return msg;
  }
  /**
   * Logs a message to the console.
   *
   * @example Usage
   * ```ts no-assert
   * import { ConsoleHandler } from "@std/log/console-handler";
   *
   * const handler = new ConsoleHandler("INFO");
   * handler.log("Hello, world!"); // Prints "Hello, world!"
   * ```
   *
   * @param msg The message to log.
   */
  log(msg) {
    console.log(msg);
  }
};

// deno:https://jsr.io/@std/io/0.225.2/write_all.ts
function writeAllSync(writer, data) {
  let nwritten = 0;
  while (nwritten < data.length) {
    nwritten += writer.writeSync(data.subarray(nwritten));
  }
}

// deno:https://jsr.io/@std/log/0.224.14/_file_handler_symbols.ts
var fileSymbol = Symbol("file");
var bufSymbol = Symbol("buf");
var pointerSymbol = Symbol("pointer");
var filenameSymbol = Symbol("filename");
var modeSymbol = Symbol("mode");
var openOptionsSymbol = Symbol("openOptions");
var encoderSymbol = Symbol("encoder");

// deno:https://jsr.io/@std/log/0.224.14/file_handler.ts
var FileHandler = class extends BaseHandler {
  /** Opened file to append logs to.
   *
   * @private
   */
  [fileSymbol];
  /** Buffer used to write to file.
   *
   * @private
   */
  [bufSymbol];
  /**
   * Current position for pointer.
   *
   * @private
   */
  [pointerSymbol] = 0;
  /**
   * Filename associated with the file being logged.
   *
   * @private
   */
  [filenameSymbol];
  /**
   * Current log mode.
   *
   * @private
   */
  [modeSymbol];
  /**
   * File open options.
   *
   * @private
   */
  [openOptionsSymbol];
  /**
   * Text encoder.
   *
   * @private
   */
  [encoderSymbol] = new TextEncoder();
  #unloadCallback = (() => {
    this.destroy();
  }).bind(this);
  /**
   * Constructs a new FileHandler instance.
   *
   * @param levelName The level name to log messages at.
   * @param options Options for the handler.
   */
  constructor(levelName, options) {
    super(levelName, options);
    this[filenameSymbol] = options.filename;
    this[modeSymbol] = options.mode ?? "a";
    this[openOptionsSymbol] = {
      createNew: this[modeSymbol] === "x",
      create: this[modeSymbol] !== "x",
      append: this[modeSymbol] === "a",
      truncate: this[modeSymbol] !== "a",
      write: true
    };
    this[bufSymbol] = new Uint8Array(options.bufferSize ?? 4096);
  }
  /**
   * Sets up the file handler by opening the specified file and initializing resources.
   *
   * @example Usage
   * ```ts no-assert
   * import { FileHandler } from "@std/log/file-handler";
   *
   * const handler = new FileHandler("INFO", { filename: "./_tmp/logs.txt" });
   * handler.setup(); // Opens the file and prepares the handler for logging.
   * handler.destroy();
   * ```
   */
  setup() {
    this[fileSymbol] = Deno.openSync(this[filenameSymbol], this[openOptionsSymbol]);
    this.#resetBuffer();
    addEventListener("unload", this.#unloadCallback);
  }
  /**
   * Handles a log record and flushes the buffer if the log level is higher than error.
   *
   * @param logRecord Log record to handle.
   *
   * @example Usage
   * ```ts
   * import { FileHandler } from "@std/log/file-handler";
   * import { assertInstanceOf } from "@std/assert/instance-of";
   * import { LogLevels } from "./levels.ts";
   * import { LogRecord } from "./logger.ts";
   *
   * const handler = new FileHandler("INFO", { filename: "./_tmp/logs.txt" });
   * handler.setup();
   *
   * // Flushes the buffer immediately and logs "CRITICAL This log is very critical indeed." into the file.
   * handler.handle(
   *   new LogRecord({
   *     msg: "This log is very critical indeed.",
   *     args: [],
   *     level: LogLevels.CRITICAL,
   *     loggerName: "INFO",
   *   }),
   * );
   * handler.destroy();
   *
   * assertInstanceOf(handler, FileHandler);
   * ```
   */
  handle(logRecord) {
    super.handle(logRecord);
    if (logRecord.level > LogLevels.ERROR) {
      this.flush();
    }
  }
  /**
   * Logs a message by adding it to the buffer, with flushing as needed.
   *
   * @param msg The message to log.
   *
   * @example Usage
   * ```ts
   * import { FileHandler } from "@std/log/file-handler";
   * import { assertInstanceOf } from "@std/assert/instance-of";
   *
   * const handler = new FileHandler("INFO", { filename: "./_tmp/logs.txt" });
   * handler.setup();
   * handler.log('Hello, world!');
   * handler.flush();
   * handler.destroy();
   *
   * assertInstanceOf(handler, FileHandler);
   * ```
   */
  log(msg) {
    const bytes = this[encoderSymbol].encode(msg + "\n");
    if (bytes.byteLength > this[bufSymbol].byteLength - this[pointerSymbol]) {
      this.flush();
    }
    if (bytes.byteLength > this[bufSymbol].byteLength) {
      writeAllSync(this[fileSymbol], bytes);
    } else {
      this[bufSymbol].set(bytes, this[pointerSymbol]);
      this[pointerSymbol] += bytes.byteLength;
    }
  }
  /**
   * Immediately writes the contents of the buffer to the previously opened file.
   *
   * @example Usage
   * ```ts
   * import { FileHandler } from "@std/log/file-handler";
   * import { assertInstanceOf } from "@std/assert/instance-of";
   *
   * const handler = new FileHandler("INFO", { filename: "./_tmp/logs.txt" });
   * handler.setup();
   * handler.log('Hello, world!');
   * handler.flush(); // Writes buffered log messages to the file immediately.
   * handler.destroy();
   *
   * assertInstanceOf(handler, FileHandler);
   * ```
   */
  flush() {
    if (this[pointerSymbol] > 0 && this[fileSymbol]) {
      let written = 0;
      while (written < this[pointerSymbol]) {
        written += this[fileSymbol].writeSync(this[bufSymbol].subarray(written, this[pointerSymbol]));
      }
      this.#resetBuffer();
    }
  }
  #resetBuffer() {
    this[pointerSymbol] = 0;
  }
  /**
   * Destroys the handler, performing any cleanup that is required and closes the file handler.
   *
   * @example Usage
   * ```ts
   * import { FileHandler } from "@std/log/file-handler";
   * import { assertInstanceOf } from "@std/assert/instance-of";
   *
   * const handler = new FileHandler("INFO", { filename: "./_tmp/logs.txt" });
   * handler.setup();
   * handler.destroy();
   *
   * assertInstanceOf(handler, FileHandler);
   * ```
   */
  destroy() {
    this.flush();
    this[fileSymbol]?.close();
    this[fileSymbol] = void 0;
    removeEventListener("unload", this.#unloadCallback);
  }
};

// deno:https://jsr.io/@std/log/0.224.14/logger.ts
var LogRecord = class {
  /** The message to log.
   *
   * @example Usage
   * ```ts
   * import { LogRecord } from "@std/log/logger";
   * import { LogLevels } from "@std/log/levels";
   * import { assertEquals } from "@std/assert/equals";
   *
   * const record = new LogRecord({
   *   msg: "Hello, world!",
   *   args: ["foo", "bar"],
   *   level: LogLevels.INFO,
   *   loggerName: "example",
   * });
   *
   * assertEquals(record.msg, "Hello, world!");
   * ```
   */
  msg;
  #args;
  #datetime;
  /**
   * The numeric log level of the log record.
   *
   * @example Usage
   * ```ts
   * import { LogRecord } from "@std/log/logger";
   * import { LogLevels } from "@std/log/levels";
   * import { assertEquals } from "@std/assert/equals";
   *
   * const record = new LogRecord({
   *   msg: "Hello, world!",
   *   args: ["foo", "bar"],
   *   level: LogLevels.INFO,
   *   loggerName: "example",
   * });
   *
   * assertEquals(record.level, LogLevels.INFO);
   * ```
   */
  level;
  /**
   * The name of the log level of the log record.
   *
   * @example Usage
   * ```ts
   * import { LogRecord } from "@std/log/logger";
   * import { LogLevels } from "@std/log/levels";
   * import { assertEquals } from "@std/assert/equals";
   *
   * const record = new LogRecord({
   *   msg: "Hello, world!",
   *   args: ["foo", "bar"],
   *   level: LogLevels.INFO,
   *   loggerName: "example",
   * });
   *
   * assertEquals(record.levelName, "INFO");
   * ```
   */
  levelName;
  /**
   * The name of the logger that created the log record.
   *
   * @example Usage
   * ```ts
   * import { LogRecord } from "@std/log/logger";
   * import { LogLevels } from "@std/log/levels";
   * import { assertEquals } from "@std/assert/equals";
   *
   * const record = new LogRecord({
   *   msg: "Hello, world!",
   *   args: ["foo", "bar"],
   *   level: LogLevels.INFO,
   *   loggerName: "example",
   * });
   *
   * assertEquals(record.loggerName, "example");
   * ```
   */
  loggerName;
  /**
   * Constructs a new instance.
   *
   * @param options The options to create a new log record.
   *
   * @example Usage
   * ```ts
   * import { LogRecord } from "@std/log/logger";
   * import { LogLevels } from "@std/log/levels";
   *
   * const record = new LogRecord({
   *   msg: "Hello, world!",
   *   args: ["foo", "bar"],
   *   level: LogLevels.INFO,
   *   loggerName: "example",
   * });
   * ```
   */
  constructor(options) {
    this.msg = options.msg;
    this.#args = [
      ...options.args
    ];
    this.level = options.level;
    this.loggerName = options.loggerName;
    this.#datetime = /* @__PURE__ */ new Date();
    this.levelName = getLevelName(options.level);
  }
  /**
   * Getter for the arguments to log.
   *
   * @example Usage
   * ```ts
   * import { LogRecord } from "@std/log/logger";
   * import { LogLevels } from "@std/log/levels";
   * import { assertEquals } from "@std/assert/equals";
   *
   * const record = new LogRecord({
   *   msg: "Hello, world!",
   *   args: ["foo", "bar"],
   *   level: LogLevels.INFO,
   *   loggerName: "example",
   * });
   *
   * assertEquals(record.args, ["foo", "bar"]);
   * ```
   *
   * @returns A copy of the arguments to log.
   */
  get args() {
    return [
      ...this.#args
    ];
  }
  /**
   * Getter for the date and time the log record was created.
   *
   * @example Usage
   * ```ts
   * import { LogRecord } from "@std/log/logger";
   * import { LogLevels } from "@std/log/levels";
   * import { assertAlmostEquals } from "@std/assert/almost-equals";
   *
   * const record = new LogRecord({
   *   msg: "Hello, world!",
   *   args: ["foo", "bar"],
   *   level: LogLevels.INFO,
   *   loggerName: "example",
   * });
   *
   * assertAlmostEquals(record.datetime.getTime(), Date.now(), 1);
   * ```
   *
   * @returns The date and time the log record was created.
   */
  get datetime() {
    return new Date(this.#datetime.getTime());
  }
};
function asString(data, isProperty = false) {
  if (typeof data === "string") {
    if (isProperty) return `"${data}"`;
    return data;
  } else if (data === null || typeof data === "number" || typeof data === "bigint" || typeof data === "boolean" || typeof data === "undefined" || typeof data === "symbol") {
    return String(data);
  } else if (data instanceof Error) {
    return data.stack;
  } else if (typeof data === "object") {
    return `{${Object.entries(data).map(([k, v]) => `"${k}":${asString(v, true)}`).join(",")}}`;
  }
  return "undefined";
}
var Logger = class {
  #level;
  /**
   * The handlers to use for the logger.
   *
   * @example Usage
   * ```ts
   * import { Logger } from "@std/log/logger";
   * import { ConsoleHandler } from "@std/log/console-handler";
   * import { assertEquals } from "@std/assert/equals";
   *
   * const handler = new ConsoleHandler("INFO");
   * const logger = new Logger("example", "INFO", {
   *  handlers: [handler],
   * });
   *
   * assertEquals(logger.handlers, [handler]);
   * ```
   */
  handlers;
  #loggerName;
  /**
   * Constructs a new instance.
   *
   * @param loggerName The name of the logger.
   * @param levelName The name of the log level.
   * @param options The options to create a new logger.
   */
  constructor(loggerName, levelName, options = {}) {
    this.#loggerName = loggerName;
    this.#level = getLevelByName(levelName);
    this.handlers = options.handlers ?? [];
  }
  /**
   * Getter for the log level.
   *
   * @returns The log level.
   *
   * @example Usage
   * ```ts
   * import { Logger } from "@std/log/logger";
   * import { LogLevels } from "@std/log/levels";
   * import { assertEquals } from "@std/assert/equals";
   *
   * const logger = new Logger("example", "INFO");
   * assertEquals(logger.level, LogLevels.INFO);
   * ```
   */
  get level() {
    return this.#level;
  }
  /**
   * Setter for the log level.
   *
   * @param level The log level to set.
   *
   * @example Usage
   * ```ts
   * import { Logger } from "@std/log/logger";
   * import { LogLevels } from "@std/log/levels";
   * import { assertEquals } from "@std/assert/equals";
   *
   * const logger = new Logger("example", "INFO");
   * logger.level = LogLevels.DEBUG;
   *
   * assertEquals(logger.level, LogLevels.DEBUG);
   * ```
   */
  set level(level) {
    try {
      this.#level = getLevelByName(getLevelName(level));
    } catch (_) {
      throw new TypeError(`Invalid log level: ${level}`);
    }
  }
  /**
   * Getter for the name of the log level.
   *
   * @returns The name of the log level.
   *
   * @example Usage
   * ```ts
   * import { Logger } from "@std/log/logger";
   * import { assertEquals } from "@std/assert/equals";
   *
   * const logger = new Logger("example", "INFO");
   * assertEquals(logger.levelName, "INFO");
   * ```
   */
  get levelName() {
    return getLevelName(this.#level);
  }
  /**
   * Setter for the name of the log level.
   *
   * @param levelName The name of the log level to set.
   *
   * @example Usage
   * ```ts
   * import { Logger } from "@std/log/logger";
   * import { LogLevels } from "@std/log/levels";
   * import { assertEquals } from "@std/assert/equals";
   *
   * const logger = new Logger("example", "INFO");
   * logger.levelName = "DEBUG";
   *
   * assertEquals(logger.level, LogLevels.DEBUG);
   * ```
   */
  set levelName(levelName) {
    this.#level = getLevelByName(levelName);
  }
  /**
   * Getter for the name of the logger.
   *
   * @returns The name of the logger.
   *
   * @example Usage
   * ```ts
   * import { Logger } from "@std/log/logger";
   * import { assertEquals } from "@std/assert/equals";
   *
   * const logger = new Logger("example", "INFO");
   *
   * assertEquals(logger.loggerName, "example");
   * ```
   */
  get loggerName() {
    return this.#loggerName;
  }
  /**
   * If the level of the logger is greater than the level to log, then nothing
   * is logged, otherwise a log record is passed to each log handler.  `msg` data
   * passed in is returned.  If a function is passed in, it is only evaluated
   * if the msg will be logged and the return value will be the result of the
   * function, not the function itself, unless the function isn't called, in which
   * case undefined is returned.  All types are coerced to strings for logging.
   */
  #log(level, msg, ...args) {
    if (this.level > level) {
      return msg instanceof Function ? void 0 : msg;
    }
    let fnResult;
    let logMessage;
    if (msg instanceof Function) {
      fnResult = msg();
      logMessage = asString(fnResult);
    } else {
      logMessage = asString(msg);
    }
    const record2 = new LogRecord({
      msg: logMessage,
      args,
      level,
      loggerName: this.loggerName
    });
    this.handlers.forEach((handler) => {
      handler.handle(record2);
    });
    return msg instanceof Function ? fnResult : msg;
  }
  debug(msg, ...args) {
    return this.#log(LogLevels.DEBUG, msg, ...args);
  }
  info(msg, ...args) {
    return this.#log(LogLevels.INFO, msg, ...args);
  }
  warn(msg, ...args) {
    return this.#log(LogLevels.WARN, msg, ...args);
  }
  error(msg, ...args) {
    return this.#log(LogLevels.ERROR, msg, ...args);
  }
  critical(msg, ...args) {
    return this.#log(LogLevels.CRITICAL, msg, ...args);
  }
};

// deno:https://jsr.io/@std/log/0.224.14/_config.ts
var DEFAULT_LEVEL = "INFO";
var DEFAULT_CONFIG = {
  handlers: {
    default: new ConsoleHandler(DEFAULT_LEVEL)
  },
  loggers: {
    default: {
      level: DEFAULT_LEVEL,
      handlers: [
        "default"
      ]
    }
  }
};

// deno:https://jsr.io/@std/log/0.224.14/_state.ts
var state = {
  handlers: /* @__PURE__ */ new Map(),
  loggers: /* @__PURE__ */ new Map(),
  config: DEFAULT_CONFIG
};

// deno:https://jsr.io/@std/log/0.224.14/get_logger.ts
function getLogger(name) {
  if (!name) {
    const d = state.loggers.get("default");
    if (d === void 0) {
      throw new Error(`"default" logger must be set for getting logger without name`);
    }
    return d;
  }
  const result = state.loggers.get(name);
  if (!result) {
    const logger = new Logger(name, "NOTSET", {
      handlers: []
    });
    state.loggers.set(name, logger);
    return logger;
  }
  return result;
}

// deno:https://jsr.io/@std/log/0.224.14/setup.ts
function setup(config) {
  state.config = {
    handlers: {
      ...DEFAULT_CONFIG.handlers,
      ...config.handlers
    },
    loggers: {
      ...DEFAULT_CONFIG.loggers,
      ...config.loggers
    }
  };
  state.handlers.forEach((handler) => {
    handler.destroy();
  });
  state.handlers.clear();
  const handlers = state.config.handlers ?? {};
  for (const [handlerName, handler] of Object.entries(handlers)) {
    handler.setup();
    state.handlers.set(handlerName, handler);
  }
  state.loggers.clear();
  const loggers = state.config.loggers ?? {};
  for (const [loggerName, loggerConfig] of Object.entries(loggers)) {
    const handlerNames = loggerConfig.handlers ?? [];
    const handlers2 = [];
    handlerNames.forEach((handlerName) => {
      const handler = state.handlers.get(handlerName);
      if (handler) {
        handlers2.push(handler);
      }
    });
    const levelName = loggerConfig.level ?? DEFAULT_LEVEL;
    const logger = new Logger(loggerName, levelName, {
      handlers: handlers2
    });
    state.loggers.set(loggerName, logger);
  }
}
setup(DEFAULT_CONFIG);

// deno:https://jsr.io/@skmtc/core/0.0.964/context/StackTrail.ts
var StackTrail = class _StackTrail {
  /** Internal stack of traversal frames */
  #stack;
  constructor(stack = []) {
    this.#stack = stack;
  }
  /**
   * Creates a shallow copy of the stack trail.
   *
   * @returns A new StackTrail instance with copied frames
   *
   * @example
   * ```typescript
   * const original = new StackTrail(['components', 'schemas']);
   * const copy = original.clone();
   *
   * copy.append('User');
   * console.log(original.toString()); // 'components:schemas'
   * console.log(copy.toString());     // 'components:schemas:User'
   * ```
   */
  clone() {
    return new _StackTrail([
      ...this.#stack
    ]);
  }
  /**
   * Gets a copy of the current stack frames.
   *
   * @returns Array of stack frames in order
   *
   * @example
   * ```typescript
   * const trail = new StackTrail(['components', 'schemas', 'User']);
   * const frames = trail.stackTrail;
   * console.log(frames); // ['components', 'schemas', 'User']
   * ```
   */
  get stackTrail() {
    return this.#stack;
  }
  /**
   * Appends frame(s) to the end of the trail.
   *
   * @param frame - Single frame string or array of frames to append
   * @returns This StackTrail instance for chaining
   *
   * @throws {Error} When frame is not a string or string array
   *
   * @example Single frame
   * ```typescript
   * const trail = new StackTrail(['components']);
   * trail.append('schemas').append('User');
   * console.log(trail.toString()); // 'components:schemas:User'
   * ```
   *
   * @example Multiple frames
   * ```typescript
   * const trail = new StackTrail();
   * trail.append(['components', 'schemas', 'User']);
   * console.log(trail.toString()); // 'components:schemas:User'
   * ```
   */
  append(frame) {
    if (typeof frame === "string") {
      this.#stack.push(frame);
      return this;
    }
    if (Array.isArray(frame)) {
      frame.forEach((p) => this.append(p));
      return this;
    }
    throw new Error(`Unexpected stack frame: ${frame}`);
  }
  trace(key, fn) {
    const stackTrail = this.clone();
    stackTrail.append(key);
    try {
      const result = fn(stackTrail);
      stackTrail.remove(key);
      return result;
    } catch (error) {
      stackTrail.remove(key);
      throw error;
    }
  }
  async traceAsync(key, fn) {
    const stackTrail = this.clone();
    stackTrail.append(key);
    try {
      const result = await fn(stackTrail);
      stackTrail.remove(key);
      return result;
    } catch (error) {
      stackTrail.remove(key);
      throw error;
    }
  }
  /**
   * Converts the trail to an OpenAPI reference string if applicable.
   *
   * Only trails that represent valid OpenAPI component references
   * (starting with 'components') can be converted to reference strings.
   *
   * @returns OpenAPI reference string or undefined if not a valid reference trail
   *
   * @example Valid reference trail
   * ```typescript
   * const trail = new StackTrail(['components', 'schemas', 'User']);
   * const ref = trail.toStackRef();
   * console.log(ref); // '#/components/schemas/User'
   * ```
   *
   * @example Invalid trail
   * ```typescript
   * const trail = new StackTrail(['paths', '/users', 'get']);
   * const ref = trail.toStackRef();
   * console.log(ref); // undefined
   * ```
   */
  toStackRef() {
    const [first, second, third] = this.stackTrail;
    if (first !== "components") {
      return;
    }
    if (typeof second !== "string" || !componentsKeys.includes(second)) {
      return;
    }
    if (typeof third !== "string") {
      return;
    }
    return `#/${first}/${second}/${third}`;
  }
  /**
   * Removes frame(s) from the end of the trail.
   *
   * @param frame - Single frame string or array of frames to remove
   * @returns This StackTrail instance for chaining
   *
   * @throws {Error} When trying to remove a frame that doesn't match the last frame
   * @throws {Error} When frame is not a string or string array
   *
   * @example Single frame removal
   * ```typescript
   * const trail = new StackTrail(['components', 'schemas', 'User', 'properties']);
   * trail.remove('properties');
   * console.log(trail.toString()); // 'components:schemas:User'
   * ```
   *
   * @example Multiple frame removal
   * ```typescript
   * const trail = new StackTrail(['components', 'schemas', 'User', 'properties', 'name']);
   * trail.remove(['name', 'properties']);
   * console.log(trail.toString()); // 'components:schemas:User'
   * ```
   */
  remove(frame) {
    if (typeof frame === "string") {
      const lastItem = this.#stack.pop();
      if (lastItem !== frame) {
        throw new Error(`Expected to remove frame '${frame}' but found '${lastItem}'`);
      }
      return this;
    }
    if (Array.isArray(frame)) {
      frame.toReversed().forEach((p) => this.remove(p));
      return this;
    }
    throw new Error(`Unexpected stack frame: ${frame}`);
  }
  /**
   * Converts the trail to JSON representation.
   *
   * Used for serialization in JSON contexts. Returns the same
   * as toString() method.
   *
   * @returns String representation of the trail
   *
   * @example
   * ```typescript
   * const trail = new StackTrail(['components', 'schemas', 'User']);
   * const json = JSON.stringify({ path: trail });
   * console.log(json); // '{"path":"components:schemas:User"}'
   * ```
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Converts the trail to a colon-separated string representation.
   *
   * Colons within frame names are escaped as '%3A' to avoid conflicts
   * with the separator character.
   *
   * @returns String representation of the trail
   *
   * @example
   * ```typescript
   * const trail = new StackTrail(['components', 'schemas', 'User']);
   * console.log(trail.toString()); // 'components:schemas:User'
   *
   * // With colon in frame name
   * const trailWithColon = new StackTrail(['components', 'schemas', 'User:Type']);
   * console.log(trailWithColon.toString()); // 'components:schemas:User%3AType'
   * ```
   */
  toString() {
    return this.#stack.map((item) => {
      return typeof item === "string" ? item.replaceAll(":", "%3A") : item;
    }).join(":");
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/context/ResultsHandler.ts
var ResultsHandler = class extends BaseHandler {
  /** The CoreContext instance for capturing results */
  context;
  /** Bound callback for cleanup on process unload */
  #unloadCallback = (() => {
    this.destroy();
  }).bind(this);
  /**
   * Creates a new ResultsHandler instance.
   *
   * @param levelName - The minimum log level to handle
   * @param options - Handler configuration including CoreContext
   *
   * @example
   * ```typescript
   * const context = new CoreContext(contextOptions);
   * const handler = new ResultsHandler('WARN', {
   *   context,
   *   formatter: '[{levelName}] {msg}'
   * });
   * ```
   */
  constructor(levelName, options) {
    super(levelName, options);
    this.context = options.context;
  }
  /**
   * Sets up the handler with event listeners.
   *
   * Registers cleanup callbacks for process termination to ensure
   * proper resource cleanup and result flushing.
   *
   * @override
   */
  setup() {
    this.#resetBuffer();
    addEventListener("unload", this.#unloadCallback);
  }
  /**
   * Handles incoming log records.
   *
   * Processes log records through the base handler and triggers
   * immediate flushing for critical errors above ERROR level.
   *
   * @param logRecord - The log record to handle
   *
   * @override
   */
  handle(logRecord) {
    super.handle(logRecord);
    if (logRecord.level > LogLevels.ERROR) {
      this.flush();
    }
  }
  /**
   * Captures log messages as results in the context.
   *
   * Converts log level names to result types and captures them
   * in the associated CoreContext for later analysis.
   *
   * @param levelName - The log level name ('WARN' or 'ERROR')
   *
   * @throws {Error} When an unsupported log level is provided
   *
   * @example
   * ```typescript
   * // This is called automatically by the logging system
   * handler.log('WARN'); // Captures as 'warning' result
   * handler.log('ERROR'); // Captures as 'error' result
   * ```
   */
  log(levelName) {
    let resultType2;
    switch (levelName) {
      case "WARN":
        resultType2 = "warning";
        break;
      case "ERROR":
        resultType2 = "error";
        break;
      default:
        throw new Error(`Unexpected log level name: ${levelName}`);
    }
    this.context.captureCurrentResult(resultType2, new StackTrail([
      "SKIPPED"
    ]));
  }
  /**
   * Flushes any buffered content.
   *
   * This implementation resets the internal buffer. Override
   * this method in subclasses to implement custom flushing behavior.
   *
   * @override
   */
  flush() {
    this.#resetBuffer();
  }
  /**
   * Resets the internal buffer.
   *
   * @private
   */
  #resetBuffer() {
  }
  /**
   * Destroys the handler and cleans up resources.
   *
   * Flushes any remaining content and removes event listeners
   * to prevent memory leaks.
   *
   * @override
   *
   * @example
   * ```typescript
   * const handler = new ResultsHandler('WARN', { context });
   *
   * try {
   *   // Use handler
   *   logger.addHandler(handler);
   *   await processDocument();
   * } finally {
   *   // Always clean up
   *   handler.destroy();
   * }
   * ```
   */
  destroy() {
    this.flush();
    removeEventListener("unload", this.#unloadCallback);
  }
};

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_freeGlobal.js
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_root.js
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_Symbol.js
var Symbol2 = root_default.Symbol;
var Symbol_default = Symbol2;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_getRawTag.js
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  try {
    value[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
var getRawTag_default = getRawTag;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_objectToString.js
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
var objectToString_default = objectToString;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_baseGetTag.js
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
var baseGetTag_default = baseGetTag;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/isObject.js
function isObject2(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_default = isObject2;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/isFunction.js
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject_default(value)) {
    return false;
  }
  var tag = baseGetTag_default(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_coreJsData.js
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_isMasked.js
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_toSource.js
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var toSource_default = toSource;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_baseIsNative.js
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto2 = Function.prototype;
var objectProto3 = Object.prototype;
var funcToString2 = funcProto2.toString;
var hasOwnProperty2 = objectProto3.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(value) {
  if (!isObject_default(value) || isMasked_default(value)) {
    return false;
  }
  var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value));
}
var baseIsNative_default = baseIsNative;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_getValue.js
function getValue(object2, key) {
  return object2 == null ? void 0 : object2[key];
}
var getValue_default = getValue;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_getNative.js
function getNative(object2, key) {
  var value = getValue_default(object2, key);
  return baseIsNative_default(value) ? value : void 0;
}
var getNative_default = getNative;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_defineProperty.js
var defineProperty = function() {
  try {
    var func = getNative_default(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var defineProperty_default = defineProperty;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_baseAssignValue.js
function baseAssignValue(object2, key, value) {
  if (key == "__proto__" && defineProperty_default) {
    defineProperty_default(object2, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object2[key] = value;
  }
}
var baseAssignValue_default = baseAssignValue;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/eq.js
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_default = eq;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_assignValue.js
var objectProto4 = Object.prototype;
var hasOwnProperty3 = objectProto4.hasOwnProperty;
function assignValue(object2, key, value) {
  var objValue = object2[key];
  if (!(hasOwnProperty3.call(object2, key) && eq_default(objValue, value)) || value === void 0 && !(key in object2)) {
    baseAssignValue_default(object2, key, value);
  }
}
var assignValue_default = assignValue;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/isArray.js
var isArray = Array.isArray;
var isArray_default = isArray;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/isSymbol.js
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
}
var isSymbol_default = isSymbol;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_isKey.js
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
function isKey(value, object2) {
  if (isArray_default(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol_default(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object2 != null && value in Object(object2);
}
var isKey_default = isKey;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_nativeCreate.js
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_hashClear.js
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default = hashClear;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_hashDelete.js
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var hashDelete_default = hashDelete;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_hashGet.js
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto5 = Object.prototype;
var hasOwnProperty4 = objectProto5.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty4.call(data, key) ? data[key] : void 0;
}
var hashGet_default = hashGet;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_hashHas.js
var objectProto6 = Object.prototype;
var hasOwnProperty5 = objectProto6.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty5.call(data, key);
}
var hashHas_default = hashHas;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_hashSet.js
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
  return this;
}
var hashSet_default = hashSet;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_Hash.js
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype["delete"] = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_listCacheClear.js
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default = listCacheClear;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_assocIndexOf.js
function assocIndexOf(array2, key) {
  var length = array2.length;
  while (length--) {
    if (eq_default(array2[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var assocIndexOf_default = assocIndexOf;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_listCacheDelete.js
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var listCacheDelete_default = listCacheDelete;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_listCacheGet.js
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var listCacheGet_default = listCacheGet;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_listCacheHas.js
function listCacheHas(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default = listCacheHas;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_listCacheSet.js
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    ++this.size;
    data.push([
      key,
      value
    ]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var listCacheSet_default = listCacheSet;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_ListCache.js
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype["delete"] = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_Map.js
var Map2 = getNative_default(root_default, "Map");
var Map_default = Map2;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_mapCacheClear.js
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
var mapCacheClear_default = mapCacheClear;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_isKeyable.js
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var isKeyable_default = isKeyable;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_getMapData.js
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_mapCacheDelete.js
function mapCacheDelete(key) {
  var result = getMapData_default(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var mapCacheDelete_default = mapCacheDelete;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_mapCacheGet.js
function mapCacheGet(key) {
  return getMapData_default(this, key).get(key);
}
var mapCacheGet_default = mapCacheGet;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_mapCacheHas.js
function mapCacheHas(key) {
  return getMapData_default(this, key).has(key);
}
var mapCacheHas_default = mapCacheHas;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_mapCacheSet.js
function mapCacheSet(key, value) {
  var data = getMapData_default(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var mapCacheSet_default = mapCacheSet;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_MapCache.js
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype["delete"] = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/memoize.js
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache_default)();
  return memoized;
}
memoize.Cache = MapCache_default;
var memoize_default = memoize;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_memoizeCapped.js
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize_default(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var memoizeCapped_default = memoizeCapped;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_stringToPath.js
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped_default(function(string2) {
  var result = [];
  if (string2.charCodeAt(0) === 46) {
    result.push("");
  }
  string2.replace(rePropName, function(match, number2, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number2 || match);
  });
  return result;
});
var stringToPath_default = stringToPath;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_arrayMap.js
function arrayMap(array2, iteratee) {
  var index = -1, length = array2 == null ? 0 : array2.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array2[index], index, array2);
  }
  return result;
}
var arrayMap_default = arrayMap;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_baseToString.js
var INFINITY = 1 / 0;
var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
var symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray_default(value)) {
    return arrayMap_default(value, baseToString) + "";
  }
  if (isSymbol_default(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var baseToString_default = baseToString;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/toString.js
function toString2(value) {
  return value == null ? "" : baseToString_default(value);
}
var toString_default = toString2;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_castPath.js
function castPath(value, object2) {
  if (isArray_default(value)) {
    return value;
  }
  return isKey_default(value, object2) ? [
    value
  ] : stringToPath_default(toString_default(value));
}
var castPath_default = castPath;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_isIndex.js
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var isIndex_default = isIndex;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_toKey.js
var INFINITY2 = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol_default(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY2 ? "-0" : result;
}
var toKey_default = toKey;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_baseSet.js
function baseSet(object2, path, value, customizer) {
  if (!isObject_default(object2)) {
    return object2;
  }
  path = castPath_default(path, object2);
  var index = -1, length = path.length, lastIndex = length - 1, nested = object2;
  while (nested != null && ++index < length) {
    var key = toKey_default(path[index]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object2;
    }
    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject_default(objValue) ? objValue : isIndex_default(path[index + 1]) ? [] : {};
      }
    }
    assignValue_default(nested, key, newValue);
    nested = nested[key];
  }
  return object2;
}
var baseSet_default = baseSet;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/set.js
function set(object2, path, value) {
  return object2 == null ? object2 : baseSet_default(object2, path, value);
}
var set_default = set;

// deno:https://jsr.io/@skmtc/core/0.0.964/helpers/ResultsLog.ts
var ResultsLog = class {
  #results;
  /**
   * Creates a new ResultsLog instance.
   *
   * Initializes an empty results tracking system ready to capture
   * generation outcomes from various parts of the pipeline.
   */
  constructor() {
    this.#results = {};
  }
  /**
   * Captures a generation result for a specific stack trail path.
   *
   * This method records the outcome of a generation operation, using intelligent
   * prioritization to ensure that more severe results take precedence over less
   * severe ones. For example, an error result will not be overwritten by a
   * success result, but a success can be overwritten by an error.
   *
   * @param stackTrail - Colon-separated path identifying the operation location
   * @param result - The result type to capture (error, warning, success, etc.)
   *
   * @example
   * ```typescript
   * const resultsLog = new ResultsLog();
   *
   * // Capture various results
   * resultsLog.capture('models:User:properties:email', 'success');
   * resultsLog.capture('models:User:validation', 'warning');
   * resultsLog.capture('operations:createUser', 'error');
   * ```
   */
  capture(stackTrail, result) {
    if (this.#incomingResultIsWorse(this.#results[stackTrail], result)) {
      this.#results[stackTrail] = result;
    }
  }
  /**
   * Determines if an incoming result should replace the current result.
   *
   * This private method implements the result prioritization logic by comparing
   * the severity rankings of results. Higher-ranked (more severe) results take
   * precedence over lower-ranked ones.
   *
   * @param current - The current result at this path (may be undefined)
   * @param incoming - The new result being captured
   * @returns True if the incoming result should replace the current one
   *
   * @example Severity ranking (high to low)
   * ```
   * error (50) > warning (40) > success (30) > skipped (20) > notSupported (10)
   * ```
   */
  #incomingResultIsWorse(current, incoming) {
    if (current === void 0) {
      return true;
    }
    return resultRankings[current] < resultRankings[incoming];
  }
  /**
   * Converts the flat results structure into a hierarchical tree.
   *
   * This method transforms the internal flat storage (using colon-separated paths)
   * into a nested object structure that reflects the hierarchy of generation
   * operations. This makes it easier to understand and process results in
   * a structured way.
   *
   * @returns Nested object structure representing the results hierarchy
   *
   * @example
   * ```typescript
   * const resultsLog = new ResultsLog();
   * resultsLog.capture('api:models:User', 'success');
   * resultsLog.capture('api:operations:getUser', 'error');
   * resultsLog.capture('types:Status', 'success');
   *
   * const tree = resultsLog.toTree();
   * console.log(tree);
   * // {
   * //   api: {
   * //     models: {
   * //       User: 'success'
   * //     },
   * //     operations: {
   * //       getUser: 'error'
   * //     }
   * //   },
   * //   types: {
   * //     Status: 'success'
   * //   }
   * // }
   * ```
   */
  toTree() {
    const tree = {};
    Object.entries(this.#results).forEach(([key, value]) => {
      const keys = key.split(":");
      set_default(tree, keys, value);
    });
    return tree;
  }
};
var resultRankings = {
  error: 50,
  warning: 40,
  success: 30,
  skipped: 20,
  notSupported: 10
};

// deno:https://jsr.io/@skmtc/core/0.0.964/context/CoreContext.ts
var CoreContext = class {
  /** Logger instance for the context */
  logger;
  /** Current execution phase for pipeline tracking */
  #phase;
  /** Results log for tracking generation outcomes */
  #results;
  /** Whether to suppress console output */
  silent;
  /**
   * Creates a new CoreContext instance.
   *
   * @param args - Configuration for the context
   * @param args.spanId - Unique identifier for this transformation span
   * @param args.logsPath - Optional directory path for log files
   * @param args.silent - Whether to suppress console output
   *
   * @example
   * ```typescript
   * // Basic context with console logging
   * const context = new CoreContext({
   *   spanId: 'my-generation',
   *   silent: false
   * });
   *
   * // Context with file logging
   * const context = new CoreContext({
   *   spanId: 'batch-job-123',
   *   logsPath: './logs/generation',
   *   silent: true
   * });
   * ```
   */
  constructor({ spanId, logsPath, silent }) {
    this.#results = new ResultsLog();
    this.logger = this.#setupLogger({
      spanId,
      logsPath
    });
    this.silent = silent;
  }
  #setupLogger({ spanId, logsPath }) {
    const filename = join3(logsPath ?? "", `${spanId}.txt`);
    setup({
      handlers: {
        [`${spanId}-logs`]: new ConsoleHandler("DEBUG", {
          formatter: (logRecord) => skmtcFormatter({
            logRecord,
            stackTrail: "SKIPPED"
          }),
          useColors: false
        }),
        ...logsPath && {
          file: new FileHandler("DEBUG", {
            filename,
            // you can change format of output message using any keys in `LogRecord`.
            formatter: (logRecord) => {
              return skmtcFormatter({
                logRecord,
                stackTrail: "SKIPPED"
              });
            }
          })
        },
        [`${spanId}-results`]: new ResultsHandler("WARN", {
          formatter: ({ levelName }) => levelName,
          context: this
        })
      },
      loggers: {
        [spanId]: {
          level: "DEBUG",
          handlers: [
            `${spanId}-logs`,
            `${spanId}-results`,
            "file"
          ]
        }
      }
    });
    return getLogger(spanId);
  }
  /**
   * Parses an OpenAPI v3 document into internal OAS objects.
   *
   * This method executes only the parse phase of the pipeline, converting
   * the raw OpenAPI JSON into structured OAS objects that can be used for
   * generation or custom processing.
   *
   * @param documentObject - The OpenAPI v3 document to parse
   * @returns An object containing the parsed OAS document
   *
   * @example
   * ```typescript
   * import { CoreContext } from '@skmtc/core';
   *
   * const context = new CoreContext({
   *   spanId: 'parse-only',
   *   silent: true
   * });
   *
   * const { oasDocument } = context.parse(openApiDoc);
   *
   * // Access parsed components
   * console.log('Models:', Object.keys(oasDocument.components.schemas));
   * console.log('Paths:', Object.keys(oasDocument.paths));
   *
   * // Use for custom processing
   * const userModel = oasDocument.components.schemas['User'];
   * if (userModel && !userModel.isRef()) {
   *   console.log('User properties:', Object.keys(userModel.properties));
   * }
   * ```
   */
  parse(documentObject, stackTrail) {
    this.#phase = this.#setupParsePhase(documentObject);
    const oasDocument = this.#phase.context.parse(stackTrail);
    return {
      oasDocument
    };
  }
  /**
   * Executes the complete transformation pipeline to generate code artifacts.
   *
   * This method orchestrates all three phases:
   * 1. **Parse**: Convert OpenAPI document to OAS objects
   * 2. **Generate**: Transform OAS objects using generators
   * 3. **Render**: Format and prepare final artifacts
   *
   * The result includes both the generated code files and comprehensive metadata
   * about the generation process, including file mappings, previews, and results.
   *
   * @param args - Configuration for the artifact generation
   * @param args.documentObject - The OpenAPI v3 document to process
   * @param args.settings - Client settings for customization
   * @param args.toGeneratorConfigMap - Function returning generator configuration
   * @param args.prettier - Optional Prettier configuration for code formatting
   * @param args.silent - Whether to suppress console output during generation
   * @returns Promise resolving to rendered artifacts and metadata
   *
   * @example Complete pipeline
   * ```typescript
   * const context = new CoreContext({
   *   spanId: 'api-client-gen',
   *   silent: false
   * });
   *
   * const result = await context.toArtifacts({
   *   documentObject: openApiDoc,
   *   settings: {
   *     basePath: './src/api',
   *     skip: {
   *       models: ['Internal*'],
   *       operations: {
   *         '/health': ['get'],
   *         '/debug/**': ['*']
   *       }
   *     }
   *   },
   *   toGeneratorConfigMap: () => ({
   *     models: {
   *       generator: MyModelGenerator,
   *       settings: { includeValidation: true }
   *     },
   *     operations: {
   *       generator: MyOperationGenerator,
   *       settings: { generateTypes: true }
   *     }
   *   }),
   *   prettier: {
   *     semi: false,
   *     singleQuote: true,
   *     trailingComma: 'all'
   *   },
   *   silent: false
   * });
   *
   * // Access generated artifacts
   * console.log('Generated files:', Object.keys(result.artifacts));
   *
   * // Write to filesystem
   * for (const [path, content] of Object.entries(result.artifacts)) {
   *   await Deno.writeTextFile(path, content);
   * }
   *
   * // Access metadata
   * console.log('Generation results:', result.results);
   * console.log('File mappings:', result.files);
   * ```
   *
   * @throws Will throw an error if any phase of the pipeline fails
   */
  toArtifacts({ documentObject, settings, toGeneratorConfigMap, stackTrail, prettier }) {
    try {
      const oasDocument = stackTrail.trace("parse", (st) => {
        this.#phase = this.#setupParsePhase(documentObject);
        return this.#phase.context.parse(st);
      });
      const { files, previews, mappings } = stackTrail.trace("generate", (st) => {
        this.#phase = this.#setupGeneratePhase({
          toGeneratorConfigMap,
          oasDocument,
          settings
        });
        return this.#phase.context.toArtifacts(st);
      });
      const renderOutput = stackTrail.trace("render", (st) => {
        this.#phase = this.#setupRenderPhase({
          files,
          previews,
          mappings,
          prettier,
          basePath: settings?.basePath
        });
        return this.#phase.context.render(st);
      });
      return {
        ...renderOutput,
        results: this.#results.toTree()
      };
    } catch (error) {
      console.error(error);
      this.logger.error(error);
      return {
        artifacts: {},
        files: {},
        previews: {},
        mappings: {},
        results: this.#results.toTree()
      };
    } finally {
      this.logger.handlers.forEach((handler) => {
        if (handler instanceof FileHandler) {
          handler.flush();
        }
      });
    }
  }
  #setupParsePhase(documentObject) {
    const parseContext = new ParseContext({
      documentObject,
      logger: this.logger,
      silent: this.silent
    });
    return {
      type: "parse",
      context: parseContext
    };
  }
  #setupGeneratePhase({ oasDocument, settings, toGeneratorConfigMap }) {
    const generateContext = new GenerateContext({
      oasDocument,
      settings,
      logger: this.logger,
      captureCurrentResult: this.captureCurrentResult.bind(this),
      toGeneratorConfigMap
    });
    return {
      type: "generate",
      context: generateContext
    };
  }
  /**
   * Captures a result at the current execution position in the stack trail.
   *
   * This method records processing results (success, warning, error, etc.) at the
   * current location in the document traversal stack. Results are associated with
   * the current stack trail position, enabling detailed error reporting and
   * debugging of OpenAPI processing issues.
   *
   * @param result - The type of result to capture (success, warning, error, etc.)
   *
   * @example Capturing a warning result
   * ```typescript
   * context.captureCurrentResult('warning');
   * // Result captured at current stack position like: "components.schemas.User.properties.email"
   * ```
   *
   * @example Usage during schema processing
   * ```typescript
   * context.trace(['components', 'schemas', 'User'], () => {
   *   try {
   *     processUserSchema();
   *     context.captureCurrentResult('success');
   *   } catch (error) {
   *     context.captureCurrentResult('error');
   *   }
   * });
   * ```
   */
  captureCurrentResult(result, stackTrail) {
    this.#results.capture(stackTrail.toString(), result);
  }
  #setupRenderPhase({ files, previews, mappings, prettier, basePath }) {
    const renderContext = new RenderContext({
      files,
      previews,
      mappings,
      prettierConfig: prettier,
      basePath,
      logger: this.logger,
      captureCurrentResult: this.captureCurrentResult.bind(this)
    });
    return {
      type: "render",
      context: renderContext
    };
  }
};
function skmtcFormatter({ logRecord, stackTrail }) {
  return JSON.stringify({
    stackTrail,
    level: logRecord.levelName,
    datetime: logRecord.datetime.getTime(),
    message: logRecord.msg,
    args: flattenArgs(logRecord.args)
  });
}
function flattenArgs(args) {
  if (args.length === 1) {
    return args[0];
  } else if (args.length > 1) {
    return args;
  }
}

// deno:https://jsr.io/@skmtc/core/0.0.964/dsl/EntityType.ts
var EntityType = class {
  /** The entity type discriminator */
  type;
  /**
   * Creates a new EntityType instance.
   * 
   * @param type - The type of entity ('variable' for const declarations, 'type' for type declarations)
   * 
   * @example
   * ```typescript
   * // For generating const declarations
   * const constEntity = new EntityType('variable');
   * 
   * // For generating type declarations
   * const typeEntity = new EntityType('type');
   * ```
   */
  constructor(type) {
    this.type = type;
  }
  /**
   * Returns the appropriate TypeScript keyword for this entity type.
   * 
   * This method maps the entity type to the correct TypeScript declaration
   * keyword that should be used in generated code:
   * - 'variable' entities become 'const' declarations
   * - 'type' entities become 'type' declarations
   * 
   * @returns The TypeScript keyword string ('const' or 'type')
   * 
   * @example
   * ```typescript
   * const varEntity = new EntityType('variable');
   * console.log(varEntity.toString()); // 'const'
   * 
   * const typeEntity = new EntityType('type');
   * console.log(typeEntity.toString()); // 'type'
   * 
   * // Used in code generation:
   * const keyword = entityType.toString();
   * const declaration = `${keyword} ${identifier} = ${value};`;
   * // Results in: "const API_URL = 'https://example.com';" or
   * // Results in: "type Status = 'active' | 'inactive';"
   * ```
   */
  toString() {
    switch (this.type) {
      case "variable":
        return "const";
      case "type":
        return "type";
      default: {
        const _exhaustive = this.type;
        throw new Error(`Unhandled entity type: ${_exhaustive}`);
      }
    }
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/dsl/Identifier.ts
var Identifier = class _Identifier {
  /** The identifier name */
  name;
  /** The entity type (variable, type, etc.) */
  entityType;
  /** Optional type name for typed variables */
  typeName;
  /**
   * Creates a new Identifier instance.
   *
   * This constructor is private to enforce the use of factory methods
   * that provide better semantic clarity and type safety.
   *
   * @param args - Identifier configuration
   */
  constructor({ name, typeName, entityType }) {
    this.name = name;
    this.typeName = typeName;
    this.entityType = entityType;
  }
  /**
   * Creates a variable identifier with optional type information.
   *
   * This factory method creates an identifier for variables, constants,
   * function parameters, and other value-based entities. Optionally
   * associates type information for typed variables.
   *
   * @param name - The variable name
   * @param typeName - Optional type name for the variable
   * @returns A new variable Identifier instance
   *
   * @example Untyped variable
   * ```typescript
   * const count = Identifier.createVariable('count');
   * console.log(count.name); // 'count'
   * console.log(count.typeName); // undefined
   * ```
   *
   * @example Typed variable
   * ```typescript
   * const userId = Identifier.createVariable('userId', 'string');
   * console.log(userId.name);     // 'userId'
   * console.log(userId.typeName); // 'string'
   * ```
   *
   * @example In function generation
   * ```typescript
   * const param = Identifier.createVariable('data', 'RequestData');
   * const funcDef = `function processRequest(${param.name}: ${param.typeName}) {}`;
   * ```
   */
  static createVariable(name, typeName) {
    if (typeName) {
      return new _Identifier({
        name,
        typeName,
        entityType: new EntityType("variable")
      });
    }
    return new _Identifier({
      name,
      entityType: new EntityType("variable")
    });
  }
  /**
   * Creates a type identifier for TypeScript types.
   *
   * This factory method creates an identifier for type entities like
   * interfaces, type aliases, classes, and other type-level constructs.
   * Type identifiers don't have associated type information since they
   * represent types themselves.
   *
   * @param name - The type name
   * @returns A new type Identifier instance
   *
   * @example Interface type
   * ```typescript
   * const userInterface = Identifier.createType('User');
   * console.log(userInterface.name);                // 'User'
   * console.log(userInterface.entityType.value);   // 'type'
   * ```
   *
   * @example Type alias
   * ```typescript
   * const statusType = Identifier.createType('Status');
   * const typeDef = `type ${statusType} = 'pending' | 'complete'`;
   * ```
   *
   * @example Generic type
   * ```typescript
   * const responseType = Identifier.createType('ApiResponse');
   * const genericDef = `interface ${responseType}<T> { data: T; success: boolean; }`;
   * ```
   */
  static createType(name) {
    return new _Identifier({
      name,
      entityType: new EntityType("type")
    });
  }
  /**
   * Returns the string representation of the identifier.
   *
   * This method simply returns the identifier name, which is the most
   * common usage when generating code. The name can be used directly
   * in code generation contexts.
   *
   * @returns The identifier name as a string
   *
   * @example
   * ```typescript
   * const variable = Identifier.createVariable('userName');
   * const typeId = Identifier.createType('User');
   *
   * console.log(variable.toString()); // 'userName'
   * console.log(typeId.toString());   // 'User'
   *
   * // Can be used directly in template strings
   * const code = `const ${variable}: ${typeId} = getUserData();`;
   * ```
   */
  toString() {
    return this.name;
  }
};

// deno:https://jsr.io/@skmtc/core/0.0.964/dsl/model/ModelBase.ts
var ModelBase = class extends ContentBase {
  /** Content settings including export path and enrichment configuration */
  settings;
  /** Reference name for the model being generated */
  refName;
  /** Generator key identifying this generator type */
  generatorKey;
  /**
   * Creates a new ModelBase instance.
   *
   * @param args - Model generator configuration
   * @param args.context - The generation context providing pipeline access
   * @param args.settings - Content settings with export path and enrichments
   * @param args.generatorKey - Unique identifier for this generator type
   * @param args.refName - Reference name for the model being generated
   *
   * @example
   * ```typescript
   * const model = new ModelBase({
   *   context: generateContext,
   *   settings: {
   *     exportPath: './src/models.ts',
   *     enrichment: customEnrichments
   *   },
   *   generatorKey: 'typescript-models',
   *   refName: 'UserModel'
   * });
   * ```
   */
  constructor({ context, settings, generatorKey, refName }) {
    super({
      context
    });
    this.generatorKey = generatorKey;
    this.refName = refName;
    this.settings = settings;
  }
  /**
   * Inserts a related model with forced generation.
   *
   * This method adds a related model to the current generation context, ensuring
   * it will be generated regardless of whether it already exists. The inserted
   * model will be exported to the same destination path as this model unless
   * `noExport` is specified.
   *
   * @template V - Type of generated value returned by the insertable
   * @template EnrichmentType - Type of enrichment data for the insertable
   * @param insertable - The model generator to insert
   * @param refName - Reference name for the inserted model
   * @param options - Insertion options
   * @param options.noExport - Whether to skip exporting the inserted model
   * @returns Inserted model reference with generated value
   *
   * @example
   * ```typescript
   * class UserModel extends ModelBase {
   *   toDefinition(): Definition {
   *     // Insert an address model that's always generated
   *     const address = this.insertModel(
   *       new AddressModel({ ... }),
   *       'Address',
   *       { noExport: false }
   *     );
   *
   *     return new Definition({
   *       name: this.refName,
   *       content: `export interface ${this.refName} {
   *         address: ${address.value}
   *       }`
   *     });
   *   }
   * }
   * ```
   */
  insertModel(insertable, refName, options = {}) {
    return this.context.insertModel(insertable, refName, {
      destinationPath: this.settings.exportPath,
      noExport: options.noExport
    });
  }
  /**
   * Inserts a related model with automatic schema normalization and reference resolution.
   *
   * This method intelligently handles schema references by automatically resolving
   * them to appropriate model names. If the schema is a reference, it uses the
   * referenced name; otherwise it falls back to the provided fallback name.
   *
   * This is particularly useful when working with complex nested schemas where
   * you want to automatically generate models for referenced types.
   *
   * @template V - Type of generated value returned by the insertable
   * @template Schema - Type of OpenAPI schema (schema object, reference, or void)
   * @template EnrichmentType - Type of enrichment data for the insertable
   * @param insertable - The model generator to insert
   * @param args - Schema normalization arguments
   * @param args.schema - The OpenAPI schema to normalize (can be reference or actual schema)
   * @param args.fallbackName - Name to use if schema is not a reference
   * @param options - Insertion options
   * @param options.noExport - Whether to skip exporting the inserted model
   * @returns Inserted model reference with normalized name and generated value
   *
   * @example Handling schema references
   * ```typescript
   * class OrderModel extends ModelBase {
   *   toDefinition(): Definition {
   *     const schema = this.context.getSchema(this.refName);
   *
   *     // Handle customer property - could be reference or inline schema
   *     if (schema.properties?.customer) {
   *       const customer = this.insertNormalizedModel(
   *         new CustomerModel({ ... }),
   *         {
   *           schema: schema.properties.customer,
   *           fallbackName: 'Customer'
   *         }
   *       );
   *       // customer.refName will be 'Customer' or the referenced schema name
   *     }
   *
   *     return new Definition({ ... });
   *   }
   * }
   * ```
   *
   * @example With complex nested schemas
   * ```typescript
   * // If schema.properties.items is { $ref: '#/components/schemas/Product' }
   * // Then the inserted model will use refName 'Product'
   * const items = this.insertNormalizedModel(
   *   new ProductModel({ ... }),
   *   {
   *     schema: schema.properties.items,
   *     fallbackName: 'Item' // Won't be used since schema has $ref
   *   }
   * );
   * ```
   */
  insertNormalizedModel(insertable, { schema, fallbackName }, options = {}) {
    return this.context.insertNormalisedModel(insertable, {
      schema,
      fallbackName,
      destinationPath: this.settings.exportPath
    }, options);
  }
  /**
   * Registers a file-level artifact with the generation context.
   *
   * This method allows the model generator to register additional content
   * (like imports, exports, or file-level definitions) that should be included
   * in the generated file. The registration is automatically scoped to this
   * model's export path.
   *
   * @param args - Registration arguments
   * @param args.content - The content to register (import, export, etc.)
   * @param args.phase - When to register the content ('pre' or 'post')
   *
   * @example Registering imports
   * ```typescript
   * class ApiModel extends ModelBase {
   *   toDefinition(): Definition {
   *     // Register an import that all generated models need
   *     this.register({
   *       content: "import { BaseModel } from './base';",
   *       phase: 'pre'
   *     });
   *
   *     return new Definition({ ... });
   *   }
   * }
   * ```
   *
   * @example Registering type exports
   * ```typescript
   * class TypeModel extends ModelBase {
   *   toDefinition(): Definition {
   *     this.register({
   *       content: "export type * from './types';",
   *       phase: 'post'
   *     });
   *
   *     return new Definition({ ... });
   *   }
   * }
   * ```
   */
  register(args) {
    this.context.register({
      ...args,
      destinationPath: this.settings.exportPath
    });
  }
};

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/_baseGet.js
function baseGet(object2, path) {
  path = castPath_default(path, object2);
  var index = 0, length = path.length;
  while (object2 != null && index < length) {
    object2 = object2[toKey_default(path[index++])];
  }
  return index && index == length ? object2 : void 0;
}
var baseGet_default = baseGet;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/lodash-es/4.17.21/get.js
function get(object2, path, defaultValue) {
  var result = object2 == null ? void 0 : baseGet_default(object2, path);
  return result === void 0 ? defaultValue : result;
}
var get_default = get;

// deno:https://jsr.io/@skmtc/core/0.0.964/dsl/model/toModelBase.ts
var toModelBase = (config) => {
  return class extends ModelBase {
    static id = config.id;
    static type = "model";
    static toIdentifier = config.toIdentifier.bind(config);
    static toExportPath = config.toExportPath.bind(config);
    static toEnrichments = ({ refName, context }) => {
      const modelEnrichments = get_default(context.settings, `enrichments.${config.id}.${refName}`);
      const enrichmentSchema = config.toEnrichmentSchema?.() ?? undefined_();
      return parse(enrichmentSchema, modelEnrichments);
    };
    static isSupported = () => true;
    constructor(args) {
      super({
        ...args,
        generatorKey: toModelGeneratorKey({
          generatorId: config.id,
          refName: args.refName
        })
      });
    }
  };
};

// deno:https://jsr.io/@skmtc/core/0.0.964/dsl/model/toModelEntry.ts
var toModelEntry = ({ id, transform, toPreviewModule, toMappingModule, toEnrichmentSchema, toEnrichmentRequest }) => {
  return {
    id,
    type: "model",
    transform,
    toPreviewModule,
    toMappingModule,
    toEnrichmentSchema,
    toEnrichmentRequest
  };
};

// deno:https://jsr.io/@skmtc/core/0.0.964/helpers/strings.ts
var capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
var decapitalize = (str) => {
  return str.charAt(0).toLocaleLowerCase() + str.slice(1);
};
var camelCase = (str, { upperFirst, retainUnderscores } = {}) => {
  const startsWithDelimiter = retainUnderscores ? /^[^a-zA-Z0-9_]/.test(str) : /^[^a-zA-Z0-9]/.test(str);
  let isFirstMatch = true;
  const delimiterPattern = retainUnderscores ? /[^a-zA-Z0-9_]+([a-zA-Z0-9_]+)/g : /[^a-zA-Z0-9]+([a-zA-Z0-9]+)/g;
  const camelCased = str.replace(delimiterPattern, (_, matched) => {
    if (isFirstMatch && startsWithDelimiter && !upperFirst) {
      isFirstMatch = false;
      return matched;
    }
    isFirstMatch = false;
    return capitalize(matched);
  });
  const cleanPattern = retainUnderscores ? /[^a-zA-Z0-9_]/g : /[^a-zA-Z0-9]/g;
  const cleaned = camelCased.replace(cleanPattern, "");
  return upperFirst ? capitalize(cleaned) : cleaned;
};

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/contact/contact-types.ts
var oasContactData = object({
  oasType: literal("contact"),
  name: optional(string()),
  url: optional(string()),
  email: optional(string())
});

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/discriminator/discriminator-types.ts
var oasDiscriminatorData = object({
  oasType: literal("discriminator"),
  propertyName: string(),
  mapping: optional(record(string(), string()))
});

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/example/example-types.ts
var oasExampleData = object({
  oasType: literal("example"),
  summary: optional(string()),
  description: optional(markdown),
  value: optional(unknown())
});

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/license/license-types.ts
var oasLicenseData = object({
  oasType: literal("license"),
  name: string(),
  url: optional(string()),
  identifier: optional(string())
});

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/info/info-types.ts
var oasInfoData = object({
  oasType: literal("info"),
  title: string(),
  description: optional(markdown),
  termsOfService: optional(string()),
  contact: optional(oasContactData),
  license: optional(oasLicenseData),
  version: string()
});

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/ref/ref-types.ts
var oasSchemaRefData = object({
  oasType: literal("ref"),
  refType: literal("schema"),
  $ref: string(),
  summary: optional(string()),
  description: optional(markdown)
});
var oasResponseRefData = object({
  oasType: literal("ref"),
  refType: literal("response"),
  $ref: string(),
  summary: optional(string()),
  description: optional(markdown)
});
var oasParameterRefData = object({
  oasType: literal("ref"),
  refType: literal("parameter"),
  $ref: string(),
  summary: optional(string()),
  description: optional(markdown)
});
var oasExampleRefData = object({
  oasType: literal("ref"),
  refType: literal("example"),
  $ref: string(),
  summary: optional(string()),
  description: optional(markdown)
});
var oasRequestBodyRefData = object({
  oasType: literal("ref"),
  refType: literal("requestBody"),
  $ref: string(),
  summary: optional(string()),
  description: optional(markdown)
});
var oasHeaderRefData = object({
  oasType: literal("ref"),
  refType: literal("header"),
  $ref: string(),
  summary: optional(string()),
  description: optional(markdown)
});
var oasSecuritySchemeRefData = object({
  oasType: literal("ref"),
  refType: literal("securityScheme"),
  $ref: string()
});
var oasRefData = union([
  oasSchemaRefData,
  oasResponseRefData,
  oasParameterRefData,
  oasExampleRefData,
  oasRequestBodyRefData,
  oasHeaderRefData,
  oasSecuritySchemeRefData
]);

// deno:https://jsr.io/@skmtc/core/0.0.964/helpers/sanitizePropertyName.ts
var import_helper_validator_identifier_7_27 = __toESM(require_lib());

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/tag/tag-types.ts
var oasTagData = object({
  oasType: literal("tag"),
  name: string(),
  description: optional(markdown)
});

// deno:https://jsr.io/@skmtc/core/0.0.964/oas/unknown/unknown-types.ts
var oasUnknownData = object({
  oasType: literal("schema"),
  title: optional(string()),
  description: optional(string()),
  default: optional(unknown()),
  type: literal("unknown")
});

// deno:https://jsr.io/@skmtc/core/0.0.964/run/toArtifacts.ts
var toArtifacts = ({ traceId, spanId, documentObject, settings, prettier, toGeneratorConfigMap, logsPath, startAt, silent, stackTrail }) => {
  const context = new CoreContext({
    spanId,
    logsPath,
    silent
  });
  const { artifacts, files, previews, results, mappings } = context.toArtifacts({
    settings,
    toGeneratorConfigMap,
    prettier,
    documentObject,
    stackTrail,
    silent
  });
  const manifest = {
    files,
    previews,
    mappings,
    traceId,
    spanId,
    results,
    deploymentId: Deno.env.get("DENO_DEPLOYMENT_ID") ?? Date.now().toString(),
    region: Deno.env.get("DENO_REGION"),
    startAt,
    endAt: Date.now()
  };
  return {
    artifacts,
    manifest
  };
};

// deno:https://jsr.io/@skmtc/core/0.0.964/types/DenoJson.ts
var rootDenoJson = looseObject({
  imports: optional(record(string(), string())),
  exports: optional(record(string(), string())),
  workspace: optional(array(string()))
});
var packageDenoJson = looseObject({
  name: string(),
  version: string(),
  imports: optional(record(string(), string())),
  exports: union([
    record(string(), string()),
    string()
  ])
});

// deno:https://jsr.io/@skmtc/core/0.0.964/types/ModuleExport.ts
var moduleExport = object({
  exportName: string(),
  exportPath: string()
});

// deno:https://jsr.io/@skmtc/core/0.0.964/types/Enrichments.ts
var formFieldItem = object({
  id: string(),
  accessorPath: array(string()),
  input: moduleExport,
  label: string(),
  placeholder: optional(string())
});
var formItem = object({
  title: optional(string()),
  description: optional(string()),
  fields: optional(array(formFieldItem)),
  submitLabel: optional(string())
});
var tableColumnItem = object({
  id: string(),
  accessorPath: array(string()),
  formatter: moduleExport,
  label: string()
});
var tableItem = object({
  title: optional(string()),
  description: optional(string()),
  columns: optional(array(tableColumnItem))
});
var inputItem = object({
  id: string(),
  accessorPath: array(string()),
  formatter: moduleExport
});
var operationEnrichments = object({
  table: optional(tableItem),
  form: optional(formItem),
  input: optional(inputItem)
});
var methodEnrichments = record(string(), operationEnrichments);
var pathEnrichments = record(string(), methodEnrichments);
var generatorEnrichments = record(string(), pathEnrichments);

// deno:https://jsr.io/@skmtc/core/0.0.964/types/Results.ts
var resultType = union([
  literal("success"),
  literal("warning"),
  literal("error"),
  literal("skipped"),
  literal("notSupported")
]);
var resultsItem = record(string(), union([
  lazy(() => resultsItem),
  resultType,
  null_(),
  array(lazy(() => resultsItem))
]));

// deno:https://jsr.io/@skmtc/core/0.0.964/types/Preview.ts
var operationSource = object({
  type: literal("operation"),
  generatorId: string(),
  operationPath: string(),
  operationMethod: method
});
var modelSource = object({
  type: literal("model"),
  generatorId: string(),
  refName: string()
});
var previewGroup = picklist([
  "forms",
  "tables",
  "inputs"
]);
var previewModule = object({
  name: string(),
  exportPath: string(),
  group: previewGroup
});
var mappingModule = object({
  name: string(),
  exportPath: string(),
  group: previewGroup,
  itemType: picklist([
    "input",
    "formatter"
  ]),
  schema: string()
});
var source = variant("type", [
  operationSource,
  modelSource
]);
var preview = object({
  module: previewModule,
  source
});
var mapping = object({
  module: mappingModule,
  source
});

// deno:https://jsr.io/@skmtc/core/0.0.964/types/Manifest.ts
var manifestEntry = object({
  lines: number(),
  characters: number(),
  destinationPath: string()
});
var previewItem = object({
  name: string(),
  exportPath: string()
});
var manifestContent = object({
  deploymentId: string(),
  traceId: string(),
  spanId: string(),
  region: optional(string()),
  files: record(string(), manifestEntry),
  previews: record(string(), record(string(), preview)),
  mappings: optional(record(string(), record(string(), mapping))),
  results: resultsItem,
  startAt: number(),
  endAt: number()
});

// deno:https://jsr.io/@skmtc/core/0.0.964/types/PrettierConfig.ts
var prettierConfigType = object({
  printWidth: optional(number()),
  tabWidth: optional(number()),
  useTabs: optional(boolean()),
  semi: optional(boolean()),
  singleQuote: optional(boolean()),
  quoteProps: optional(union([
    literal("as-needed"),
    literal("consistent"),
    literal("preserve")
  ])),
  jsxSingleQuote: optional(boolean()),
  trailingComma: optional(union([
    literal("none"),
    literal("es5"),
    literal("all")
  ])),
  bracketSameLine: optional(boolean()),
  bracketSpacing: optional(boolean()),
  jsxBracketSameLine: optional(boolean()),
  arrowParens: optional(union([
    literal("avoid"),
    literal("always")
  ])),
  rangeStart: optional(number()),
  rangeEnd: optional(number()),
  requirePragma: optional(boolean()),
  insertPragma: optional(boolean()),
  proseWrap: optional(union([
    literal("always"),
    literal("never"),
    literal("preserve")
  ])),
  htmlWhitespaceSensitivity: optional(union([
    literal("css"),
    literal("strict"),
    literal("ignore")
  ])),
  vueIndentScriptAndStyle: optional(boolean()),
  endOfLine: optional(union([
    literal("auto"),
    literal("lf"),
    literal("crlf"),
    literal("cr")
  ])),
  embeddedLanguageFormatting: optional(union([
    literal("auto"),
    literal("off")
  ])),
  singleAttributePerLine: optional(boolean())
});

// deno:https://jsr.io/@skmtc/core/0.0.964/types/Settings.ts
var modulePackage = object({
  rootPath: string(),
  moduleName: optional(string())
});
var skipPaths = record(string(), array(method));
var skipOperations = record(string(), skipPaths);
var skipModels = record(string(), array(string()));
var skip = union([
  skipOperations,
  skipModels,
  string()
]);
var clientSettings = object({
  basePath: optional(string()),
  schemaSource: optional(string()),
  packages: optional(array(modulePackage)),
  enrichments: optional(generatorEnrichments),
  skip: optional(array(skip))
});
var skmtcClientConfig = object({
  serverUrl: optional(string()),
  projectKey: optional(string()),
  source: optional(string()),
  settings: clientSettings
});

// deno:https://jsr.io/@skmtc/core/0.0.964/typescript/FunctionParameter.ts
var import_helper_validator_identifier_7_272 = __toESM(require_lib());

// deno:https://jsr.io/@skmtc/core/0.0.964/typescript/identifiers.ts
var import_helper_validator_identifier_7_273 = __toESM(require_lib());

// deno:https://jsr.io/@skmtc/worker/0.0.36/mod.ts
var toWorker = (toGeneratorConfigMap) => {
  self.onmessage = async (e) => {
    const { type, payload } = e.data;
    try {
      switch (type) {
        case "GENERATE": {
          const { documentObject, clientSettings: clientSettings2 } = payload;
          const now = Date.now();
          const traceId = `trace-${now}`;
          const spanId = `span-${now}`;
          const stackTrail = new StackTrail([
            traceId,
            spanId
          ]);
          const { artifacts, manifest } = toArtifacts({
            traceId,
            spanId,
            startAt: now,
            documentObject,
            prettier: void 0,
            settings: clientSettings2,
            stackTrail,
            toGeneratorConfigMap,
            logsPath: void 0,
            silent: true
          });
          self.postMessage({
            type: "RESULT",
            artifacts,
            manifest
          });
          break;
        }
        default: {
          self.postMessage({
            type: "ERROR",
            error: `Unknown message type: ${type}`
          });
          break;
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        self.postMessage({
          type: "ERROR",
          error: error.message || String(error),
          stack: error.stack
        });
      } else {
        self.postMessage({
          type: "ERROR",
          error: String(error)
        });
      }
    }
  };
  self.postMessage({
    type: "READY",
    generatorIds: Object.keys(toGeneratorConfigMap())
  });
};
var mod_default = toWorker;

// gen-zod/src/withOptional.ts
var withOptional = (value, { required }) => {
  return required ? `${value}` : `${value}.optional()`;
};

// gen-zod/src/withNullable.ts
var withNullable = (value, { nullable }) => {
  return nullable ? `${value}.nullable()` : `${value}`;
};

// gen-zod/src/applyModifiers.ts
var applyModifiers = (content, modifiers) => {
  const postNullable = withNullable(content, modifiers);
  const postOptional = withOptional(postNullable, modifiers);
  return postOptional.toString();
};

// gen-zod/src/ZodString.ts
var ZodString = class extends ContentBase {
  type = "string";
  format;
  enums;
  modifiers;
  constructor({ context, stringSchema, generatorKey, destinationPath, modifiers }) {
    super({
      context,
      generatorKey
    });
    this.enums = stringSchema.enums;
    this.format = stringSchema.format;
    this.modifiers = modifiers;
    context.register({
      imports: {
        zod: [
          "z"
        ]
      },
      destinationPath
    });
  }
  toString() {
    const { enums } = this;
    let content;
    if (enums && Array.isArray(enums)) {
      content = enums.length === 1 ? `z.literal("${enums[0]}")` : `z.enum([${enums.map((str) => `"${str}"`).join(", ")}])`;
    } else {
      content = `z.string()`;
    }
    return applyModifiers(content, this.modifiers);
  }
};

// gen-zod/src/ZodArray.ts
var ZodArray = class extends ContentBase {
  type = "array";
  items;
  modifiers;
  constructor({ context, generatorKey, destinationPath, items, modifiers, rootRef }) {
    super({
      context,
      generatorKey
    });
    this.modifiers = modifiers;
    this.items = toZodValue({
      destinationPath,
      schema: items,
      required: true,
      context,
      rootRef
    });
    context.register({
      imports: {
        zod: [
          "z"
        ]
      },
      destinationPath
    });
  }
  toString() {
    return applyModifiers(`z.array(${this.items})`, this.modifiers);
  }
};

// gen-zod/deno.json
var deno_default = {
  name: "@skmtc/gen-zod",
  version: "0.0.45",
  exports: "./mod.ts",
  tasks: {
    test: "deno test --allow-env --allow-sys --allow-read",
    "test:coverage": "deno test --allow-env --allow-sys --allow-read --coverage=coverage",
    "coverage:report": "deno coverage coverage --lcov --output=coverage.lcov",
    "coverage:html": "deno coverage coverage --html",
    "coverage:check": "deno coverage coverage --detailed",
    publish: "deno publish --allow-slow-types --allow-dirty --token=$JSR_AUTH_TOKEN"
  }
};

// gen-zod/src/base.ts
var ZodBase = toModelBase({
  id: deno_default.name,
  toIdentifier(refName) {
    const name = decapitalize(camelCase(refName));
    return Identifier.createVariable(name);
  },
  toExportPath() {
    return join3("@", `schemas.generated.ts`);
  }
});

// gen-zod/src/ZodInsertable.ts
var ZodInsertable = class extends ZodBase {
  value;
  constructor({ context, refName, settings, destinationPath, rootRef }) {
    super({
      context,
      refName,
      settings
    });
    const schema = context.resolveSchemaRefOnce(refName, ZodBase.id);
    this.value = toZodValue({
      schema,
      required: true,
      destinationPath,
      context,
      rootRef
    });
  }
  static schemaToValueFn = (...args) => {
    return toZodValue(...args);
  };
  static createIdentifier = Identifier.createVariable;
  toString() {
    return `${this.value}`;
  }
};

// gen-zod/src/mod.ts
var zodEntry = toModelEntry({
  id: deno_default.name,
  transform({ context, refName }) {
    context.insertModel(ZodInsertable, refName);
  }
});

// gen-zod/src/ZodRef.ts
var ZodRef = class extends ContentBase {
  type = "ref";
  modifiers;
  name;
  terminal;
  constructor({ context, refName, destinationPath, modifiers, rootRef }) {
    super({
      context,
      generatorKey: toModelGeneratorKey({
        generatorId: zodEntry.id,
        refName
      })
    });
    if (context.modelDepth[`${zodEntry.id}:${refName}`] > 0) {
      const settings = context.toModelContentSettings({
        refName,
        insertable: ZodInsertable
      });
      context.register({
        imports: {
          zod: [
            "z"
          ]
        },
        destinationPath: settings.exportPath
      });
      this.name = settings.identifier.name;
      this.modifiers = modifiers;
      this.terminal = true;
    } else {
      const { settings } = new ModelDriver({
        context,
        refName,
        destinationPath,
        rootRef,
        insertable: ZodInsertable
      });
      this.name = settings.identifier.name;
      this.modifiers = modifiers;
      this.terminal = false;
    }
  }
  toString() {
    const out = applyModifiers(this.name, this.modifiers);
    return this.terminal ? `z.lazy(() => ${out})` : out;
  }
};

// gen-zod/src/ZodUnknown.ts
var ZodUnknown = class extends ContentBase {
  type = "unknown";
  constructor({ context, destinationPath, generatorKey }) {
    super({
      context,
      generatorKey
    });
    context.register({
      imports: {
        zod: [
          "z"
        ]
      },
      destinationPath
    });
  }
  toString() {
    return `z.unknown()`;
  }
};

// gen-zod/src/ZodObject.ts
var ZodObject = class extends ContentBase {
  type = "object";
  recordProperties;
  objectProperties;
  modifiers;
  constructor({ context, generatorKey, destinationPath, objectSchema, modifiers, rootRef }) {
    super({
      context,
      generatorKey
    });
    this.modifiers = modifiers;
    const { properties, required, additionalProperties } = objectSchema;
    const hasProperties = properties && !isEmpty(properties);
    this.recordProperties = additionalProperties ? new ZodRecord({
      context,
      generatorKey,
      destinationPath,
      schema: additionalProperties,
      rootRef
    }) : null;
    this.objectProperties = hasProperties ? new ZodObjectProperties({
      context,
      generatorKey,
      destinationPath,
      properties,
      required,
      modifiers,
      rootRef
    }) : null;
    context.register({
      imports: {
        zod: [
          "z"
        ]
      },
      destinationPath
    });
  }
  toString() {
    const { objectProperties, recordProperties } = this;
    if (objectProperties && recordProperties) {
      return applyModifiers(`${objectProperties}.and(${recordProperties})`, this.modifiers);
    }
    return applyModifiers(recordProperties?.toString() ?? objectProperties?.toString() ?? "z.object({})", this.modifiers);
  }
};
var ZodObjectProperties = class extends ContentBase {
  properties;
  required;
  constructor({ context, generatorKey, destinationPath, properties, required = [], rootRef }) {
    super({
      context,
      generatorKey
    });
    this.required = required;
    this.properties = Object.fromEntries(Object.entries(properties).map(([key, property]) => {
      const value = toZodValue({
        destinationPath,
        schema: property,
        required: required?.includes(key),
        context,
        rootRef
      });
      return [
        key,
        value
      ];
    }));
  }
  toString() {
    return `z.object({${Object.entries(this.properties).map(([key, value]) => {
      const needsQuotes = /[^a-zA-Z0-9_$]/.test(key) || /^\d/.test(key);
      const formattedKey = needsQuotes ? `"${key}"` : key;
      return `${formattedKey}: ${value}`;
    }).join(", ")}})`;
  }
};
var ZodRecord = class extends ContentBase {
  value;
  constructor({ context, generatorKey, destinationPath, schema, rootRef }) {
    super({
      context,
      generatorKey
    });
    if (schema === true || isEmpty(schema)) {
      this.value = new ZodUnknown({
        context,
        destinationPath,
        generatorKey
      });
    } else {
      this.value = toZodValue({
        destinationPath,
        schema,
        required: true,
        context,
        rootRef
      });
    }
  }
  toString() {
    return `z.record(z.string(), ${this.value})`;
  }
};

// gen-zod/src/ZodUnion.ts
var ZodUnion = class extends ContentBase {
  type = "union";
  members;
  discriminator;
  modifiers;
  constructor({ context, generatorKey, destinationPath, members, discriminator, modifiers, rootRef }) {
    super({
      context,
      generatorKey
    });
    this.members = members.map((member) => {
      return toZodValue({
        destinationPath,
        schema: member,
        required: true,
        context,
        rootRef
      });
    });
    this.discriminator = discriminator?.propertyName;
    this.modifiers = modifiers;
    context.register({
      imports: {
        zod: [
          "z"
        ]
      },
      destinationPath
    });
  }
  toString() {
    const members = this.members.map((member) => `${member}`).join(", ");
    const content = this.discriminator ? `z.discriminatedUnion("${this.discriminator}", [${members}])` : `z.union([${members}])`;
    return applyModifiers(content, this.modifiers);
  }
};

// gen-zod/src/ZodNumber.ts
var ZodNumber = class extends ContentBase {
  type = "number";
  modifiers;
  constructor({ context, modifiers, destinationPath, generatorKey }) {
    super({
      context,
      generatorKey
    });
    this.modifiers = modifiers;
    context.register({
      imports: {
        zod: [
          "z"
        ]
      },
      destinationPath
    });
  }
  toString() {
    return applyModifiers(`z.number()`, this.modifiers);
  }
};

// gen-zod/src/ZodInteger.ts
var ZodInteger = class extends ContentBase {
  type = "integer";
  modifiers;
  format;
  enums;
  constructor({ context, integerSchema: integerSchema2, modifiers, destinationPath, generatorKey }) {
    super({
      context,
      generatorKey
    });
    this.format = integerSchema2.format;
    this.enums = integerSchema2.enums;
    this.modifiers = modifiers;
    context.register({
      imports: {
        zod: [
          "z"
        ]
      },
      destinationPath
    });
  }
  toString() {
    const { enums } = this;
    let content;
    if (enums && Array.isArray(enums)) {
      content = enums.length === 1 ? `z.literal(${enums[0]})` : `z.union([${enums.map((e) => `z.literal(${e})`).join(", ")}])`;
    } else {
      content = `z.number().int()`;
    }
    return applyModifiers(content, this.modifiers);
  }
};

// gen-zod/src/ZodBoolean.ts
var ZodBoolean = class extends ContentBase {
  type = "boolean";
  modifiers;
  constructor({ context, modifiers, destinationPath, generatorKey }) {
    super({
      context,
      generatorKey
    });
    this.modifiers = modifiers;
    context.register({
      imports: {
        zod: [
          "z"
        ]
      },
      destinationPath
    });
  }
  toString() {
    return applyModifiers(`z.boolean()`, this.modifiers);
  }
};

// gen-zod/src/ZodVoid.ts
var ZodVoid = class extends ContentBase {
  type = "void";
  constructor({ context, generatorKey, destinationPath }) {
    super({
      context,
      generatorKey
    });
    context.register({
      imports: {
        zod: [
          "z"
        ]
      },
      destinationPath
    });
  }
  toString() {
    return `z.void()`;
  }
};

// gen-zod/src/Zod.ts
var toZodValue = ({ schema, destinationPath, required, context, rootRef }) => {
  const modifiers = {
    required,
    // description: 'description' in schema ? schema.description : undefined,
    nullable: "nullable" in schema ? schema.nullable : void 0
  };
  const generatorKey = toGeneratorOnlyKey({
    generatorId: zodEntry.id
  });
  switch (schema.type) {
    case "custom":
      return schema;
    case "ref":
      return new ZodRef({
        context,
        destinationPath,
        refName: toRefName(schema.$ref),
        modifiers,
        rootRef
      });
    case "array":
      return new ZodArray({
        context,
        destinationPath,
        modifiers,
        items: schema.items,
        generatorKey,
        rootRef
      });
    case "object":
      return new ZodObject({
        context,
        destinationPath,
        objectSchema: schema,
        modifiers,
        generatorKey,
        rootRef
      });
    case "union":
      return new ZodUnion({
        context,
        destinationPath,
        members: schema.members,
        discriminator: schema.discriminator,
        modifiers,
        generatorKey,
        rootRef
      });
    case "number":
      return new ZodNumber({
        context,
        modifiers,
        destinationPath,
        generatorKey
      });
    case "integer":
      return new ZodInteger({
        context,
        integerSchema: schema,
        modifiers,
        destinationPath,
        generatorKey
      });
    case "boolean":
      return new ZodBoolean({
        context,
        modifiers,
        destinationPath,
        generatorKey
      });
    case "void":
      return new ZodVoid({
        context,
        destinationPath,
        generatorKey
      });
    case "string":
      return new ZodString({
        context,
        stringSchema: schema,
        modifiers,
        destinationPath,
        generatorKey
      });
    case "unknown":
      return new ZodUnknown({
        context,
        destinationPath,
        generatorKey
      });
    default: {
      const _exhaustive = schema;
      throw new Error(`Unhandled schema type: ${_exhaustive.type}`);
    }
  }
};

// worker.ts
var worker_default = mod_default(() => Object.fromEntries([
  zodEntry
].map((g) => [
  g.id,
  g
])));
export {
  worker_default as default
};
