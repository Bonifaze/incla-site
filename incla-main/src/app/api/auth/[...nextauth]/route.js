import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials:{
                email: {label:"Email", type:'email'},
                password: {label:"Password", type:'password'},
            },
            async authorize(credentials){
                //replace with actual login logic
                if(credentials.email === 'admin@gmail.com' && credentials.password === 'password123'){
                    return {id:1, email:'admin@gmail.com'};
                }return null;
            },
        }),
    ],
    pages: {
        signIn: "/auth/login", //custom sign in page
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({token, user}){
            if(user){
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },
        async session({session, token}){
            session.id = token.id;
            session.email = token.email;
            return session;
        },
    },
});

export {handler as GET, handler as POST};