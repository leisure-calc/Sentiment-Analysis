from flask import Flask, request, render_template
from transformers import pipeline

app = Flask(__name__)


classifier = pipeline(
    "text-classification",
    model="j-hartmann/emotion-english-distilroberta-base",
    return_all_scores=True
)

@app.route("/", methods=['GET','POST'])
def home():
    label = None
    score = None
    results_list = []
    message=""

    if request.method == 'POST':
        message = request.form.get('message', '')
        if message.strip():
            all_scores = classifier(message) 
            max_item = max(all_scores[0], key=lambda x: x['score'])
            label = max_item['label']
            score = max_item['score']
            results_list = all_scores[0]
    return render_template('index.html', label=label, score=score, list=results_list, message=message)

if __name__ == "__main__":
    app.run(debug=True)
