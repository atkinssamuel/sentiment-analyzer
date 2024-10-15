import torch

from flask import Flask, request
from transformers import (
    BertForSequenceClassification,
    BertTokenizer,
)

app = Flask(__name__)

max_length = 200
m_trained = BertForSequenceClassification.from_pretrained("./sentiment_model")
t_trained = BertTokenizer.from_pretrained("./sentiment_model")


def infer(joint_sentences: str):
    with torch.no_grad():
        inputs = t_trained(
            joint_sentences,
            padding=True,
            truncation=True,
            return_tensors="pt",
            max_length=max_length,
        )
        outputs = m_trained(**inputs)
    return outputs.logits


@app.route("/", methods=["POST"])
def result():
    data = request.get_json()

    if "message" not in data:
        return {"error": "No message provided"}, 400

    try:
        result = infer(data["message"])
        return {"result": result.tolist()[0]}, 200

    except Exception as e:
        return {"error": str(e)}, 500
