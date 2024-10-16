from flask import Flask, request
from flask_cors import CORS
from transformers import pipeline

app = Flask(__name__)
CORS(
    app,
    resources={r"/*": {"origins": ["http://localhost:3000", "http://34.69.104.228"]}},
)

sentiment_pipeline = pipeline("sentiment-analysis")


def infer(joint_sentences: str):
    return sentiment_pipeline(joint_sentences)


@app.route("/", methods=["POST"])
def result():
    data = request.get_json()

    if "message" not in data:
        return {"error": "No message provided"}, 400

    try:
        result = infer(data["message"])[0]

        if result["score"] < 0.9:
            return {"result": 1}, 200
        return {"result": (result["label"] == "POSITIVE") * 2}, 200

    except Exception as e:
        print(e)
        return {"error": str(e)}, 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
