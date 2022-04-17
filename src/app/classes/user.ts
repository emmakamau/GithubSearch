export class User {
    constructor(
        public url:string, 
        public login:string, 
        public html_url:string,  
        public location:string, 
        public public_repos:number, 
        public followers:number, 
        public following:number, 
        public avatar_url:string, 
        public created_at:Date 
    ){}
}
