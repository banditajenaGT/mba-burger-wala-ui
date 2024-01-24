import {createReducer} from '@reduxjs/toolkit'

export const authReducer=createReducer({},{
    loadUserRequest:(state)=>{
        state.loading=true
    },
    loadUserSuccess:(state,action)=>{
        state.loading=false
        state.isAuthenticated=true
        state.user=action.payload
    },
    loadUserFailed:(state,action)=>{
        state.loading=false
        state.isAuthenticated=false
        state.error=action.payload
    },
    
    logoutUserRequest:(state)=>{
        state.loading=true
    },
    logoutUserSuccess:(state,action)=>{
        state.loading=false
        state.isAuthenticated=false
        state.user=null
        state.message=action.payload
    },
    logoutUserFailed:(state,action)=>{
        state.loading=false
        state.isAuthenticated=true
        state.error=action.payload
    },
    
    contactRequest:(state)=>{
        state.loading=true
    },
    contactSuccess:(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    contactFailed:(state,action)=>{
        state.loading=false
        state.error=action.payload
    },
    
    clearError:(state)=>{
        state.error=null
    },
    clearMessage:(state)=>{
        state.message=null
    }
})