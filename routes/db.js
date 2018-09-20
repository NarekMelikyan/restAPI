var data = {
    mongourl : "mongodb://admin:admin159753@ds161112.mlab.com:61112/db-task",
    findDocs : function(db,col,query,callback){
        var collection = db.collection(col);
        collection.find(query).toArray(function(err,docs){
            if(err) throw err;
            callback(docs);
        })
    },
    insert : function(db, col, data){
        var collection = db.collection(col);
        collection.insert(data);
    },
    update : function(db, col, sdat, fdat, callback){
        var collection = db.collection(col);
        collection.update(sdat, fdat, function(err, docs){
            if(err) throw err;
            callback(docs);
        });
    },
    remove : function(db, col, data){
        var collection = db.collection(col);
        collection.remove(data);
    }
};
module.exports = data;
