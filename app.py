from flask import Flask, request, jsonify, render_template
import tensorflow as tf
import numpy as np
import pickle
from PIL import Image
import io

app = Flask(__name__)

# Load the trained model
model = tf.keras.models.load_model("plant_disease.h5")
# Load class indices
with open("class_indices.pkl", "rb") as f:
    class_indices = pickle.load(f)
class_labels = {v: k for k, v in class_indices.items()}  # Reverse mapping

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"})

    file = request.files["file"]
    image = Image.open(io.BytesIO(file.read())).resize((256, 256))  # Resize

    img_array = np.array(image) / 255.0  # Normalize
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension

    # Predict
    prediction = model.predict(img_array)
    predicted_class = np.argmax(prediction)
    predicted_label = class_labels[predicted_class]

    return jsonify({"disease": predicted_label})

if __name__ == "__main__":
    app.run(debug=True)
