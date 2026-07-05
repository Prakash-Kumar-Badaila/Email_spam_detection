import string
import nltk

from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
from nltk.tokenize import word_tokenize

ps = PorterStemmer()

# Download once
nltk.download("punkt", quiet=True)
nltk.download("stopwords", quiet=True)
nltk.download("punkt_tab", quiet=True)

def transform_text(text):
    text = text.lower()

    words = word_tokenize(text)

    words = [word for word in words if word.isalnum()]

    words = [
        word for word in words
        if word not in stopwords.words("english")
        and word not in string.punctuation
    ]

    words = [ps.stem(word) for word in words]

    return " ".join(words)