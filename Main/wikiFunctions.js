// WikiFunctions

// Random article
function getRandomArticle() {
    // find folder "Articles"
    // access folder "Articles"
    // identify all articles (.html files) and make array (articleList)
    // store array in articleList (variable).
    // get one random item from array (articleList) and store on a new variable (randomArticle)
    // on button click, move user to the html on randomArticle.
}

// Translate article
function translateArticle(targetLang) {
    // identify current language (variable currentLanguage)
    // retrieve (array, list) available languages for the article (availableLangs)
    // check if availableLangs has targetLang
    // if yes, continue. If not, break and alert error.
        // [OBS: Site should not have an option available to user if it is not possible to do it.
        // Nonetheless, we need to prevent.]
    // retrieve html article corresponding to targetLang (targetLang_Article)
    // move user to the html on targetLang_Article.
    //on button click, execute function translateArticle(targetLang)
}

// Grow font size
function growFont() {
    // get the current font size number (currentSize)
    // add 2px to currentSize
    // currentSize must be equal or smaller than 20px
    // do not grow if currentSize is 20px
    // on button click, execute function growFont()
}

// Shrink font size
function shrinkFont() {
    // get the current font size number (currentSize)
    // subtract 2px from currentSize
    // currentSize must be equal or greater than 8px
    // do not shrink if currentSize is 8px
    // on button click, execute function shrinkFont()
}