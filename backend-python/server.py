from flask import Flask,jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://user:HappyBlogging@bolgapp.ersq3.mongodb.net/Project0?retryWrites=true&w=majority"
mongo = PyMongo(app)
CORS(app)

db_operations = mongo.db.posts



@app.route('/test')
def test():
    return "App is working perfectly"

@app.route('/read')
def read():
    posts = db_operations.find()
    output = [{'author':post['author'],'topic':post['topic'],'date':post['date'],'content':post['content'],'like':post['like'],'dislike':post['dislike']} for post in posts]
    return jsonify(output)
    
    

if __name__ == '__main__':
    app.run(debug=True)