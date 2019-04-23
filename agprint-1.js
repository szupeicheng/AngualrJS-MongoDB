db = db.getSiblingDB('goa')

printjson(db["phones"].aggregate([{ $group: { "_id": "$tags" , "count": { $sum: 1 } } } ]).toArray())


