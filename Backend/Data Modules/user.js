class User {
    constructor(id, created_at, email, first_name, last_name, birthday, password, gender) {
        this.id = id
        this.email = email
        this.first_name = first_name
        this.last_name = last_name
        this.birthday = birthday
        this.password = password
        this.gender = gender
    
    }

    getDetails(){
        return{
            id: this.id,
            email: this.email,
            first_name: this.first_name,
            last_name: this.last_name,
            birthday: this.birthday,
            gender: this.gender,
        }
    }

}

export default User;


