exports.generateCurdMethods = Model=>{
    return{
        getAll: () => Model.find(),
        getById: id => Model.findById(id),
        create: record=> Model.create(record),
        Update: (id , record)=> Model.findByIdAndUpdate(id, record, {new:true}),
        Delete: id=> Model.findByIdAndDelete(id)
    }
}