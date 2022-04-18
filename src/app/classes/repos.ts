export class Repos {
	constructor(
        public name: string,  
        public description: string, 
        public created_at:Date,
        public updated_at:Date, 
        public html_url: string, 
        public clone_url: string, 
        public language: string,
        public stargazers_count:number){}
    }
