"use strict";

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

function generateKey(length, characters) {
 let keyStr = '';
 const charactersLght = characters.length;
 for(let i = 0; i < length; i++){
  let random = Math.floor(Math.random() * charactersLght);
  keyStr += characters[random];
 };
 return keyStr;
};

const key = generateKey(16, characters);
console.log(key);


