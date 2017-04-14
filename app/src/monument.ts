/**
 * monuments
 */

export interface Monument {
    name: string;
    height: number;
}

export function compareMonument(a: Monument, b: Monument) {
    if (a.height > b.height) {
        return -1;
    }
    if (a.height < b.height) {
        return 1;
    }
    return 0;
}
