module.exports = {
  getLyrics: function(docs){
    var dump = [];
    for (var i = 0; i < docs.length; i++){
      if (docs[i] === null || docs[i].length === 1 || typeof docs[i] === 'string'){
        continue;
      }
      else {
        dump.push(docs[i]);
      }
    }
    return dump;
  },
  getWords: function(docs){
    var dump = [];
    for (var i = 0; i < docs.length; i++){
      if (docs[i] === null || docs[i].length === 1 || typeof docs[i] === 'string'){
        continue;
      }
      else {
        dump.push("Number of words in "+ docs[i][0] + " is " + docs[i][1].replace(/\n/,"").split(" ").length);
      }
    }
    return dump;
  },
  getWordsPerDuration: function(){

  }
};
