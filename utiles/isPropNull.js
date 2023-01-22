export function isPropNull(obj) {
    const rez = {};
    Object.keys(obj).forEach((el) => {
        if (obj[el]) {
            rez[el] = obj[el];
        }
    });
    return rez;
}
