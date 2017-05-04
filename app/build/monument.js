"use strict";
/**
 * monuments
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
