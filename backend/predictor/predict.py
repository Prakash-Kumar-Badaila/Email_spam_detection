import joblib
import nltk
import string

from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
from nltk.tokenize import word_tokenize

nltk.download("punkt")
nltk.download("stopwords")
nltk.download("punkt_tab")

ps = PorterStemmer()

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

model = joblib.load("models/spam_model.pkl")
vectorizer = joblib.load("models/vectorizer.pkl")
encoder = joblib.load("models/label_encoder.pkl")
def predict_email(email):
    cleaned = transform_text(email)
    vector = vectorizer.transform([cleaned])

    prediction = model.predict(vector)[0]
    probability = model.predict_proba(vector)[0]

    if prediction == 1:
        label = "Spam"
        confidence = probability[1]
    else:
        label = "Ham"
        confidence = probability[0]

    return label, confidence
sample = """
Congratulations!

You won an iPhone.

Claim your reward now.
"""

prediction, probability = predict_email(sample)

print(prediction)
print(probability)