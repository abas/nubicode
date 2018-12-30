// ##    #  #######  ######   ######    ##### ######
// # #   #  ##    #  ##    #  ##           ## ##
// #  #  #  ##    #  ##    #  ######       ## ######
// #   # #  ##    #  ##    #  ##       ##  ##     ##
// #    ##  #######  ######   ######    ##### ######

// ################################---------- kankuu

import { Dream } from "dream"
import { Life } from "life"

let me = {
  _makeADream: function (helper,callback) {
    if (helper.includes('you')) {
      Dream.new('our dream')
      console.log('i\'ll be w/ you.')
      Life._isPerfect(true)
      return 'happy ever after' || true
    }else{
      // i'll be waiting 4 ya
      Dream.waiting(helper); 
      callback(helper) 
    }
  }
}; module.exports = me


