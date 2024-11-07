export interface user {
    
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phoneNumber: string;
    location: string;

    department: Department;
    roles: Roles;
  }
  
  export interface Department {
    id: number;
    name: string;
  }
  
  export interface Roles {
    id: number;
    name: string;
    active: string;
  }


