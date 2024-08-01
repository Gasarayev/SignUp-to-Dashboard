


export async function login({email, password}: {email: string, password: string}) {
    
    
    return new Promise((resolve, reject) => {

        if (!email || !password) {
            reject("Provide credentials!")
        }
        else if (password !== 'helloadmin') {
            reject("Invalid password!")
        }

        setTimeout(() => {
            resolve({
                token: email + password + 'verysecuresalt',
                expire: 1000 * 60 * 10
            })
        }, 3000)

    })
}