class CrudRepository {
    constructor(model){
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud-repo");
            throw error;
        }
    }

    async destroy(id){
        try {
            const response = await this.model.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in crud-repo");
            throw error;
        }
    }

    async get(id){
        try {
            const result = await this.model.findById(id);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud-repo");
            throw error;
        }
    }

    async getAll(){
        try {
            const response = await this.model.find({});
            return response; 
        } catch (error) { 
            console.log("Something went wrong in crud-repo");
            throw error;
        }
    }

    async update(id, data){
        try {
            const result = await this.model.findByIdAndUpdate(id, data, {new: true});
            return result;
        } catch (error) {
            console.log("Something went wrong in crud-repo");
            throw error;
        }
    }
}

export default CrudRepository;