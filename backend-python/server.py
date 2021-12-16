import numpy as np
import textblob
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

@app.route('/read/<topic>')
def read(topic):
    posts = db_operations.find({"topic":topic})
    sent_polar = 0
    p = 0
    n = 0
    male_positive = 0
    male_negative = 0
    age_positive = []
    age_negative = []
    for post in posts:
        my_analysis = textblob.TextBlob(post['content'])
        pol = my_analysis.sentiment.polarity
        sent_polar += pol
        if pol > 0 :
            p += 1
            age_positive += [post['age']]
            if post['sex'] == 'male':
                male_positive += 1
        else :
            n += 1
            age_negative += [post['age']]
            if post['sex'] == 'male':
                male_negative += 1

    #output = [{'author':post['author'],'topic':post['topic'],'date':post['date'],'content':post['content'],'like':post['like'],'dislike':post['dislike']} for post in posts]
    output = [{'positive':p,'negative':n,'total':sent_polar,'male_positive':male_positive,
                'male_negative':male_negative,'age_positive':age_positive,'age_negative':age_negative}]
    return jsonify(output)
    
    

if __name__ == '__main__':
    app.run(debug=True)