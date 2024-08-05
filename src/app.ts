import {Server}from './models/server';

(() => {
    main()
})()

function main() {
    new Server().start()
}