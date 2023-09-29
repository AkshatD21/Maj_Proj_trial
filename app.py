import pickle

import numpy as np
import pandas as pd
from flask import Flask, jsonify, request
from flask_cors import CORS

import predictor as predict
import preprocessor as preproc

pp = preproc.preprocessor()
model = pickle.load(open('model.pkl', 'rb'))
app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/predict', methods=['POST'])
def predict_disease():
    if request.method == 'POST':
        try:
            data = request.get_json()
            symptoms = data.get('symptoms','')  # Assuming 'symptoms' is the key in the JSON request
            symptoms = pp.forward(symptoms)
            my_prediction = model.predict([symptoms])
            my_prediction = np.array2string(my_prediction)
            return jsonify({'prediction': my_prediction})
        except Exception as e:
            return jsonify({'error': str(e)}), 400
    return jsonify({'error': 'Invalid request method'}), 405

if __name__ == '__main__':
    app.run(host="127.0.0.1", port="8080")
