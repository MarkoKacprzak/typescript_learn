/**
 * monuments
 */
"use strict";
exports.__esModule = true;
function compareMonument(a, b) {
    if (a.height > b.height) {
        return -1;
    }
    if (a.height < b.height) {
        return 1;
    }
    return 0;
}
exports.compareMonument = compareMonument;
