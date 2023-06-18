export type ErrorResponse = {
    error: string
}

export const makeErrorResponse = (e: any): ErrorResponse => {
    if(e.message) return { error: e.message }
    if(e instanceof Error) return {
        error: `Name : ${e.name}
        Cause: ${e.cause}
        Message: ${e.message}
        Stack: ${e.stack}`
    }
    if(typeof e === 'object') return { error: e.toString()}
    return { error: `${e}` }
}

const jwtSecret = process.env.JWT_SECRET!
const db = process.env.POSTGRES_DB!
const host = process.env.POSTGRES_HOST!
const port = process.env.POSTGRES_PORT!
const user = process.env.POSTGRES_USER!
const dbPassword = process.env.POSTGRES_PASSWORD!
const jwtType = process.env.JWT_TYPE!
const graphQlUrl = process.env.NEXT_PUBLIC_GRAPHQL_URL!
const nodeEnv = process.env.NODE_ENV!

interface ServerConfig {
    jwtSecret: string,
    db: string,
    host: string,
    port: string,
    user: string,
    dbPassword: string,
    jwtType: string,
    graphQlUrl: string
    production: boolean
    [prop: string]: any
}
export const config = <ServerConfig> {
    jwtSecret,
    db,
    host,
    port,
    user,
    dbPassword,
    graphQlUrl,
    jwtType,
    production: nodeEnv.toLowerCase() === 'production'
}

export const setConfig = (data: {[prop: string]:any}): void => {
    Object.keys(data).forEach(prop => config[prop] = data[prop])
}

