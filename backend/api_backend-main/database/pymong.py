from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import base64
import json 
import certifi

ca = certifi.where()
uri = "mongodb+srv://nitisarath:plus180314@cluster0.dqaakyr.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri,  tlsCAFile=ca)

try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)


def db_vin_check(prompay):
    db = client.get_database('vincheck')
    records = db.vinname
    return records.find_one({'prompay' : prompay}, {'_id': 0})

def db_news(a):
    db = client.get_database('news')
    records = db.news
    a = a.split(',')
    c =[]
    for i in records.find({},{'fac' : a[0],'year' :int(a[1])}):
        c.append(i)
    b = []
    for j in c:
        b.append(records.find_one({'_id' : j['_id']}, {'_id': 0})) 
    return b

def encode_image(path):
    with open(path, "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read())

def add_vin(data):
    db = client.get_database('vin')
    records = db.news
    records.insert_one(data)
    print('done')


def extension_get():
    db = client.get_database('extension')
    records = db.a
    o =[]
    for i in records.find({}, {'_id': 0}):
        o.append(i)
    return o 

def add_extension(items):
    db = client.get_database('extension')
    records = db.a
    records.insert_one(items)
    return True 