// note: scales above peta (exa, zetta, yotta, etc) exceed Number.MAX_SAFE_INTEGER and are not accounted for

module.exports = {
    short: (value) => {
        if (value > 999999999999999) {
            return 'Quadrillion'
        }
        if (value > 999999999999) {
            return 'Trillion'
        }
        if (value > 999999999) {
            return 'Billion'
        }
        if (value > 999999) {
            return 'Million'
        }
        if (value > 999) {
            return 'Thousand'
        }
        return null
    },
    long: (value) => {
        if (value > 999999999999999) {
            return 'Thousand Billion'
        }
        if (value > 999999999999) {
            return 'Billion'
        }
        if (value > 999999999) {
            return 'Thousand Million'
        }
        if (value > 999999) {
            return 'Million'
        }
        if (value > 999) {
            return 'Thousand'
        }
        return null
    },
    metric: (value, symbol=false) => {
        if (value > 999999999999999) {
            return (symbol ? 'P' : 'peta')
        }
        if (value > 999999999999) {
            return (symbol ? 'T' : 'tera')
        }
        if (value > 999999999) {
            return (symbol ? 'G' : 'giga')
        }
        if (value > 999999) {
            return (symbol ? 'M' : 'mega')
        }
        if (value > 999) {
            return (symbol ? 'k' : 'kilo')
        }
        return null
    },
    value: (symbol, long=false) => {
        if (typeof symbol === 'undefined' || !symbol) {
            return null
        }
        if (typeof symbol !== 'string') {
            symbol = symbol.toString()
        }
        switch (symbol.toLowerCase()) {
            case (long ? 'thousand billion' : 'quadrillion'):
            case 'peta':
            case 'p':
                return 1000000000000000
            case (long ? 'billion' : 'trillion'):
            case 'tera':
            case 't':
                return 1000000000000
            case (long ? 'thousand million' : 'billion'):
            case 'giga':
            case 'g':
                return 1000000000
            case 'million':
            case 'mega':
            case 'm':
                return 1000000
            case 'thousand':
            case 'kilo':
            case 'k':
                return 1000
            default:
                return 1
        }
    },
}
