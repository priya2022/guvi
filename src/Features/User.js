import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name:"user",
    initialState:{
        value:{
            name:'',
            email:'',
            password:'',
            confirmPassword:'',
            age:'',
            gender:'',
            dob:'',
            mobile:''
        }
    },
    reducers:{
        signup:(state,action)=>{
            const { name, email, password ,confirmPassword} = action.payload;
            state.value.name = name;
            state.value.email = email;
            state.value.password = password;
            state.value.confirmPassword= confirmPassword
        },
        login:(state,action)=>{
            const{ email, password }= action.payload;
            state.value.email = email;
            state.value.password=password

        },
        further:(state,action)=>{
            const {age,gender,dob,mobile}=action.payload
            state.value.age= age;
            state.value.gender=gender;
            state.value.dob= dob;
            state.value.mobile= mobile
        }

    }
})
export const {login,signup,further} = UserSlice.actions
export default UserSlice.reducer