module.exports = function (string) {
    return string.split(' ').map((s) => {
        if (s.toLowerCase().endsWith('ad')) {
            if (s.endsWith('ad')) return `${s}ge`
            else return `${s}Ge`
        } else {
            return s;
        }
    }).join(' ');
}