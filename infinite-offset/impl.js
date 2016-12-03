function infiniteOffset(input, diff, max) {
    const next = input + diff;
    return (next % max + max) % max;
}

module.exports = infiniteOffset;
