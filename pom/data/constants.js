import dotenv from 'dotenv'
dotenv.config();

export const URLS = {
    URL: process.env.INTERVIEWURL
}

export const CREDENTIALS = {
    USR: process.env.INTERVIEWUSER,
    PSW: process.env.INTERVIEWPASS,
    WRONGUSR: 'wrong user'
}

export const MESSAGES = {
    WRONGUSRMESSAGE: 'Epic sadface: Username and password do not match any user in this service'
}