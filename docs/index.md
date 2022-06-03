## Table of content
- [Installation](#installation)
- [Errors](#errors)
- [License](#license)

## Installation

```sh
$ npm install not-enough-errors
```

## Errors

| Name                                                     | Description                                                                                                     |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [ArgumentError](#argument-error-)                        | Thrown when a non-null argument that is passed to a method is invalid                                           |
| [ArgumentNullError](#argument-null-error-)               | Thrown when null argument is passed to a method                                                                 |
| [ArgumentOutOfRangeError](#argument-out-of-range-error-) | Thrown when the value of an argument is outside the range of valid values                                       |
| [FileNotFoundError](#file-not-found-error-)              | Thrown when a physical file does not exist at the specified location                                            |
| [KeyNotFoundError](#key-not-found-error-)                | Thrown when the key specified for accessing an element in a collection does not match any key in the collection |
| [NotImplementedError](#not-implemented-error-)           | Thrown when a requested function is not implemented                                                             |

<br>

### Base error

The base class for all errors of this library.

```ts
abstract class BaseError extends Error
```

<br>

### Argument error [↑](#errors)

Thrown when a non-null argument that is passed to a method is invalid  
See an example [here](https://github.com/stevancorre/not-enough-errors/blob/main/examples/ArgumentError.ts)

```ts
class ArgumentError extends BaseError
```

#### Constructor

```ts
public constructor(paramName: string, message?: string)
```

| Name        | Type                 | Description                                      |
| ----------- | -------------------- | ------------------------------------------------ |
| `paramName` | `string`             | The name of the parameter that causes this error |
| `message`   | `string | undefined` | The error message                                |

<br>

### Argument null error [↑](#errors)

Thrown when null argument is passed to a method  
See an example [here](https://github.com/stevancorre/not-enough-errors/blob/main/examples/ArgumentNullError.ts)

```ts
class ArgumentNullError extends ArgumentError
```

#### Constructor

```ts
public constructor(paramName: string, message?: string)
```

| Name        | Type                 | Description                                      |
| ----------- | -------------------- | ------------------------------------------------ |
| `paramName` | `string`             | The name of the parameter that causes this error |
| `message`   | `string | undefined` | The error message                                |

<br>

### Argument out of range error [↑](#errors)

Thrown when the value of an argument is outside the range of valid values  
See an example [here](https://github.com/stevancorre/not-enough-errors/blob/main/examples/ArgumentOutOfRangeError.ts)

```ts
class ArgumentOutOfRangeError extends ArgumentError
```

#### Constructor

```ts
public constructor(paramName: string, message?: string)
```

| Name        | Type                 | Description                                      |
| ----------- | -------------------- | ------------------------------------------------ |
| `paramName` | `string`             | The name of the parameter that causes this error |
| `message`   | `string | undefined` | The error message                                |

<br>

### File not found error [↑](#errors)

Thrown when a physical file does not exist at the specified location  
See an example [here](https://github.com/stevancorre/not-enough-errors/blob/main/examples/FileNotFoundError.ts)

```ts
class FileNotFoundError extends BaseError
```

#### Constructor

```ts
public constructor(fileName: string, message?: string)
```

| Name       | Type                 | Description                        |
| ---------- | -------------------- | ---------------------------------- |
| `fileName` | `string`             | The file name that cannot be found |
| `message`  | `string | undefined` | The error message                  |

<br>

### Key not found error [↑](#errors)

Thrown when the key specified for accessing an element in a collection does not match any key in the collection  
See an example [here](https://github.com/stevancorre/not-enough-errors/blob/main/examples/KeyNotFoundError.ts)

```ts
class KeyNotFoundError extends BaseError
```

#### Constructor

```ts
public constructor(key: string, message?: string)
```

| Name      | Type                 | Description                    |
| --------- | -------------------- | ------------------------------ |
| `key`     | `string`             | The key that causes this error |
| `message` | `string | undefined` | The error message              |


<br>

### Not implemented error [↑](#errors)

Thrown when a requested function is not implemented  
See an example [here](https://github.com/stevancorre/not-enough-errors/blob/main/examples/NotImplementedError.ts)

```ts
class NotImplementedError extends BaseError
```

#### Constructor

```ts
public constructor(fileName: string, message?: string)
```

| Name       | Type                 | Description              |
| ---------- | -------------------- | ------------------------ |
| `funcName` | `string | undefined` | The name of the function |
| `message`  | `string | undefined` | The error message        |

## License

This project is <a href="https://opensource.org/licenses/MIT">MIT</a> licensed.