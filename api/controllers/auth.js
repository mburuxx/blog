import { db } from "../db.js"

export const register = (req, res) => {
    
    /*
     * Check for existing user
     */
    const q = "SELECT * FROM users WHERE email=? OR username=?"
    db.query(q, [request.body.email, request.body.name])
}

export const login = (req, res) => {
    
}

export const logout = (req, res) => {
    
}