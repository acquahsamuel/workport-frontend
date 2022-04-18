export class AppRoutes {
  static home = 'home';
  static dashboard = 'dashboard';

  //Dashboard routes
  static accountSetting = 'account-setting';
  static companyProfile = 'company-profile';
  static companyStatistic = 'company-statistics';
  static postJob = 'post-job';
  static profile = 'profile';

  //Admin routes
  static addJob = 'add-job';
  static addUser = 'add-user';
  static users = 'all-users';
  static addCompany = 'add-company';
  static allStatistic = 'company-statistics';
}

/**
 * Categories
 */
export const Categories = [
  { name: 'Sales & Marketing' },
  { name: 'Design & User Experience' },
  { name: 'Product Management' },
  { name: 'Customer & Community' },
  { name: 'Software Development' },
  { name: 'Operation & Finance' },
  { name: 'Quality Assurance' },
  { name: 'HR & Recruiting' },
  { name: 'Content & Copyrighting' },
  { name: 'Other' },
];

/**
 * Job Types
 */
export const JobTypes = [
  { name: 'Full Time' },
  { name: 'Part-Time' },
  { name: 'Contract' },
  { name: 'Other' },
];


/**
 * Categories List
 */
export const CategoriesList = [
  { name: 'Web Development' },
  { name: 'Design' },
  { name: 'Product' },
  { name: 'Customer Service' },
  { name: 'Data' },
  { name: 'Sales' },
  { name: 'DevOps/SysAdmin' },
  { name: 'Business' },
  { name: 'Finance' },
  { name: 'Legal' },
  { name: 'Human Resources' },
  { name: 'Medical' },
  { name: 'Teaching' },
  { name: 'Other' },
];

export const LocationsAllowed = [
  { name: 'Remote' },
  { name: 'USA' },
  { name: 'Ghana' },
  { name: 'Canada' },
  { name: 'Other' },
];
