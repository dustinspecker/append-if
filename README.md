# append-if
[![NPM version](https://badge.fury.io/js/append-if.svg)](https://badge.fury.io/js/append-if) [![Build Status](https://travis-ci.org/dustinspecker/append-if.svg)](https://travis-ci.org/dustinspecker/append-if) [![Coverage Status](https://img.shields.io/coveralls/dustinspecker/append-if.svg)](https://coveralls.io/r/dustinspecker/append-if?branch=master)

[![Code Climate](https://codeclimate.com/github/dustinspecker/append-if/badges/gpa.svg)](https://codeclimate.com/github/dustinspecker/append-if) [![Dependencies](https://david-dm.org/dustinspecker/append-if.svg)](https://david-dm.org/dustinspecker/append-if/#info=dependencies&view=table) [![DevDependencies](https://david-dm.org/dustinspecker/append-if/dev-status.svg)](https://david-dm.org/dustinspecker/append-if/#info=devDependencies&view=table)

> Append a string, conditionally

## Install
```
npm install --save append-if
```

## Usage
### ES2015
```javascript
import appendIf from 'append-if';

appendIf('hello', ' world');
// => 'hello world'

appendIf('hello', 'lo');
// => 'hello'

appendIf('hello', ' world', true);
// => 'hello world'

appendIf('hello', ' world', false);
// => 'hello'

function customCondition(string, appendString) {
  return string.length > appendString.length;
}

appendIf('longer', 'short', customCondition);
// => 'longershort'

appendIf('short', 'longer', customCondition);
// => 'short'
```

### ES5
```javascript
import appendIf from 'append-if';

appendIf('hello', ' world');
// => 'hello world'

appendIf('hello', 'lo');
// => 'hello'

appendIf('hello', ' world', true);
// => 'hello world'

appendIf('hello', ' world', false);
// => 'hello'

function customCondition(string, appendString) {
  return string.length > appendString.length;
}

appendIf('longer', 'short', customCondition);
// => 'longershort'

appendIf('short', 'longer', customCondition);
// => 'short'
```

## API

### appendIf(string, appendString[, condition])

#### string

Type: `string`

String to append if condition is true.

#### appendString

Type: `string`

String to append to string if condition is true.

#### condition

Type: `function` || `boolean`

Function to evaluate to determine if string should be appended with appendString. condition is given string and appendString as parameters. `Default` condition checks if string starts with appendString. If not, appendString is appended to string.

Condition may also be a `boolean`. If `true`, string is appended with appendString, otherwise it is not.

## Related
- [prepend-if](https://github.com/dustinspecker/prepend-if)

## LICENSE
MIT © [Dustin Specker](https://github.com/dustinspecker)