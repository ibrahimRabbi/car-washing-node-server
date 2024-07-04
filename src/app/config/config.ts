import env from 'dotenv'
import path from 'path'


env.config({
    path: path.join(process.cwd(), '.env')
})

const envData = {
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL
}


// console.log(process.cwd())
// console.log(__dirname)

export default envData