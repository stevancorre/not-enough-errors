<h1 align="center">
    <br>
    <a href="https://stevancorre.github.io/not-enough-errors/">
        <img src="https://i.imgur.com/FtAlCQ6.png" alt="Not Enough Errors icon" width="200">
    </a>
    <br>
    Not Enough Errors
    <br>
</h1>

<h4 align="center">A little library that contains useful errors.</h4>

<p align="center">
    <a href="https://nodejs.dev">
        <img src="https://img.shields.io/badge/Node.JS-68A063?style=for-the-badge&logo=node.js&logoColor=white">
    </a>
    <a href="https://www.typescriptlang.org">
        <img src="https://img.shields.io/badge/TypeScript-007acc?style=for-the-badge&logo=typescript&logoColor=white">
    </a>
    <a href="https://www.npmjs.com/package/not-enough-errors">
        <img src="https://img.shields.io/badge/NPM-ff0000?style=for-the-badge&logo=npm&logoColor=white">
    </a>
    <a href="https://paypal.me/aiixu">
        <img src="https://img.shields.io/badge/Donate-00457C?style=for-the-badge&logo=paypal&logoColor=white">
    </a>
</p>

<p align="center">
    <a href="#installation">Installation</a> •
    <a href="#why">Why</a> •
    <a href="https://github.com/stevancorre/not-enough-errors/tree/main/examples">Examples</a> •
    <a href="https://stevancorre.github.io/not-enough-errors/">Docs</a> •
    <a href="#license">License</a> •
    <a href="#credits">Credits</a>
</p>

## Installation

```sh
$ npm install not-enough-errors
```

<br>

## Why

I really think having more descriptive errors is an important thing, and TypeScript/JavaScript is lacking meaningful errors.  
With this little & simple library, you'll not be forced to write things such as
```ts
throw new Error("This function is not implemented");
```
But
```ts
throw new NotImplementedError("funcName");

/**
 * stderr:
 * 
 * NotImplementedError: This function is not implemented
 * Function name: funcName
 */
```
With this library, you'll be able to write good error descriptions !

<br>

## License

This project is <a href="https://opensource.org/licenses/MIT">MIT</a> licensed.

<br>

## Credits

- Icon: <a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by Freepik - Flaticon</a>
- README design: <a href="https://github.com/amitmerchant1990/electron-markdownify/blob/master/README.md">github.com/amitmerchant1990</a>