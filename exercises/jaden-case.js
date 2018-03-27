'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */


function jadenCase(word){
    let phrase = word.toLowerCase(); 
    let tableau = phrase.split(' ');
    let temp ="";
    for(let i = 0; i < tableau.length; i++){
    tableau[i] = tableau[i][0].toUpperCase() + tableau[i].slice(1);
    temp = tableau.join(' ');
    }
    return temp
    }
    
    
    //* Begin of tests
    const assert = require('assert')
    jadenCase("BonJour Je sUIS");
    assert.strictEqual(jadenCase("BonJour wilder"), "Bonjour Wilder")
    // assert.fail('You must write your own tests')
    // End of tests */