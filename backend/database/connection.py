from pymongo import MongoClient

# Connect to MongoDB container
client = MongoClient("mongodb://mongodb:27017/")
db = client["mlops_db"]