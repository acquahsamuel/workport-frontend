export interface ICreateJob {
    position: string;
    locationAllowed: string;
    jobStatus: string;
    jobCategory: string;
    jobTags: string[];
    minimumSalary: number;
    maximumSalary: number;
    slug: string;
    currency: string;
    salaryInterval: string;
    jobDescription: string;
    applicationURL: string;
    applyToEmail: string;
    postingDate: string;
    roles?: string[];
}


export interface IUpdateJob {
    position?: string;
    locationAllowed?: string;
    jobStatus?: string;
    jobCategory?: string;
    jobTags?: string[];
    minimumSalary?: number;
    maximumSalary?: number;
    slug?: string;
    currency?: string;
    salaryInterval: string;
    jobDescription: string;
    applicationURL: string;
    applyToEmail: string;
    postingDate: string;
}
