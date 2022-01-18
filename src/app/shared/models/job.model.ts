export class MJob {
    position: string;
    locationAllowed: string;
    jobStatus: string;
    jobCategory: string;
    jobTags: [string];
    slug: string;
    currency: string;
    salaryInterval: string;
    jobDescription: string;
    applicationURL: string;
    applyToEmail: string;
    postingDate: string;

    //make reference to companyInterface
    //make reference to userInferace
}

export class MCreateJob extends MJob { }

export class MUpdateJob extends MJob { }

