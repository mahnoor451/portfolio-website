let languageOneEl = document.getElementById("language-one");
let languageTwoEl = document.getElementById("language-two");
let languageToConvertEl = document.getElementById("language-to-convert");
let translationEl = document.getElementById("translation");

// Optional: Clear placeholder text when user clicks on textareas
languageToConvertEl.addEventListener("focus", function() {
    if (this.value === "Type here...") {
        this.value = "";
    }
});

languageToConvertEl.addEventListener("blur", function() {
    if (this.value === "") {
        this.value = "Type here...";
    }
});

translationEl.addEventListener("focus", function() {
    if (this.value === "Translation...") {
        this.value = "";
    }
});

translationEl.addEventListener("blur", function() {
    if (this.value === "") {
        this.value = "Translation...";
    }
});

function translateLanguage() {
    const fromLang = languageOneEl.value.trim();
    const toLang = languageTwoEl.value.trim();
    let textToTranslate = languageToConvertEl.value.trim();
    
    // Don't translate if it's the placeholder text
    if (textToTranslate === "Type here..." || textToTranslate === "") {
        translationEl.value = "Translation...";
        return;
    }
    
    // Don't translate if languages aren't specified
    if (!fromLang || !toLang) {
        translationEl.value = "Please enter both languages";
        return;
    }

    // Convert language names to codes
    const langCode = convertToLanguageCode(fromLang);
    const targetCode = convertToLanguageCode(toLang);
    
    if (!langCode || !targetCode) {
        translationEl.value = "Language not recognized. Try 'English', 'Spanish', etc.";
        return;
    }

    // Show loading state
    translationEl.value = "Translating...";

    // Using MyMemory Translation API
    fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(textToTranslate)}&langpair=${langCode}|${targetCode}`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Translation failed');
            }
            return res.json();
        })
        .then(data => {
            if (data.responseData && data.responseData.translatedText) {
                translationEl.value = data.responseData.translatedText;
            } else {
                translationEl.value = "Translation not available";
            }
        })
        .catch(error => {
            console.error('Error:', error);
            translationEl.value = "Translation error. Please try again.";
        });
}

// Helper function to convert language names to codes
function convertToLanguageCode(languageName) {
    const languageMap = {
        // English variations
        'english': 'en',
        'en': 'en',
        'eng': 'en',
        'ingles': 'en',
        'inglés': 'en',
        
        // Spanish
        'spanish': 'es',
        'es': 'es',
        'spa': 'es',
        'espanol': 'es',
        'español': 'es',
        
        // French
        'french': 'fr',
        'fr': 'fr',
        'fra': 'fr',
        'francais': 'fr',
        'français': 'fr',
        
        // German
        'german': 'de',
        'de': 'de',
        'ger': 'de',
        'aleman': 'de',
        'alemán': 'de',
        
        // Italian
        'italian': 'it',
        'it': 'it',
        'ita': 'it',
        'italiano': 'it',
        
        // Portuguese
        'portuguese': 'pt',
        'pt': 'pt',
        'por': 'pt',
        'portugues': 'pt',
        'português': 'pt',
        
        // Russian
        'russian': 'ru',
        'ru': 'ru',
        'rus': 'ru',
        'ruso': 'ru',
        
        // Japanese
        'japanese': 'ja',
        'ja': 'ja',
        'jpn': 'ja',
        'japones': 'ja',
        'japonés': 'ja',
        
        // Chinese
        'chinese': 'zh',
        'zh': 'zh',
        'chi': 'zh',
        'mandarin': 'zh',
        'chino': 'zh',
        
        // Arabic
        'arabic': 'ar',
        'ar': 'ar',
        'ara': 'ar',
        'arabe': 'ar',
        'árabe': 'ar',
        
        // Hindi
        'hindi': 'hi',
        'hi': 'hi',
        'hin': 'hi',
        'hind': 'hi',
        
        // Urdu
        'urdu': 'ur',
        'ur': 'ur',
        'urd': 'ur',
        
        // Korean
        'korean': 'ko',
        'ko': 'ko',
        'kor': 'ko',
        'coreano': 'ko',
        
        // Turkish
        'turkish': 'tr',
        'tr': 'tr',
        'tur': 'tr',
        'turco': 'tr',
        
        // Dutch
        'dutch': 'nl',
        'nl': 'nl',
        'nld': 'nl',
        'holandes': 'nl',
        'holandés': 'nl',
        
        // Swedish
        'swedish': 'sv',
        'sv': 'sv',
        'swe': 'sv',
        'sueco': 'sv',
        
        // Greek
        'greek': 'el',
        'el': 'el',
        'ell': 'el',
        'griego': 'el',
        
        // Polish
        'polish': 'pl',
        'pl': 'pl',
        'pol': 'pl',
        'polaco': 'pl',

        // Punjabi
        'punjabi': 'pa',

        // Pashto
        'pashto': 'ps',

        // Sindhi
        'sindhi': 'sd',

        // Balochi
        'balochi': 'bal',

        // Bengali
        'bengali':'bn',

        // Nepali
        'nepali':'ne',

    };
    
    // Convert input to lowercase and remove extra spaces
    const cleanedInput = languageName.toLowerCase().trim();
    
    // Return the language code or undefined if not found
    return languageMap[cleanedInput];
}

// Add event listeners
languageToConvertEl.addEventListener("input", translateLanguage);
languageOneEl.addEventListener("input", translateLanguage);
languageTwoEl.addEventListener("input", translateLanguage);

// Also translate when user presses Enter in language inputs
languageOneEl.addEventListener("keypress", function(e) {
    if (e.key === "Enter") translateLanguage();
});

languageTwoEl.addEventListener("keypress", function(e) {
    if (e.key === "Enter") translateLanguage();
});