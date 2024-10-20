const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://yhnhecvvetphydwjisvi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlobmhlY3Z2ZXRwaHlkd2ppc3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgyMzE1NjIsImV4cCI6MjA0MzgwNzU2Mn0.XS0okew_BZeB224XDsNsCqvrC6OusdNejV3TS_5lGeQ';
const supabase = createClient(supabaseURL, supabaseKey);

module.exports = supabase;

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


