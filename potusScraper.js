//Grab the entire HTML DOC from the website 


// const rp = require('request-promise');
// const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

// rp(url)
//   .then(function (html) {
//     //success!
//     console.log(html);
//   })
//   .catch(function (err) {
//     //handle error
//   });


//Grab all of the a-tags from inside of the big tags

// const rp = require('request-promise');
// const $ = require('cheerio');
// const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

// rp(url)
//   .then(function (html) {
//     //success!
//     console.log($('big > a', html).length);
//     console.log($('big > a', html));
//   })
//   .catch(function (err) {
//     //handle error
//   });
// }


const rp = require('request-promise');
const $ = require('cheerio');
const url = "https://learning.blogs.nytimes.com/2014/11/13/500-prompts-for-narrative-and-personal-writing/";

rp(url)
  .then(function (html) {
    //success!
    const wikiUrls = [];
    for (let i = 0; i < 45; i++) {
      wikiUrls.push($('li > a', html)[i].attribs.href);
    }
    console.log(wikiUrls);
  })
  .catch(function (err) {
    //handle error
  });
