
const localAPI = {
    localStorage: [
        {
            userType: "default",
            userId: "default"
        }
    ],
    all: function() {return this.localStorage},
    set: function(type,id){
        this.localStorage.userType = type;
        this.localStorage.userId = id;
    }
}

export default localAPI