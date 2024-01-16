import * as api from '../api/salary';

export const schema = {
  statistics: {
    queryKey: ['statistics'],
    queryFn: api.getStatistics
  },
  topPost: {
    queryKey: ['topPost'],
    queryFn: api.getTopPost
  },
  topCompany: {
    queryKey: ['topCompany'],
    queryFn: api.getTopCompany
  },
  postResults: {
    queryKey: ['postResults'],
    queryFn: api.getPostResults
  },
  companyTitles: {
    queryKey: ['companyTitles'],
    queryFn: api.getCompanyTitles
  },
  companySalaries: {
    queryKey: ['companySalaries'],
    queryFn: api.getCompanySalaries
  },
  topCompanyType: {
    queryKey: ['topCompanyType'],
    queryFn: api.getTopCompanyType
  },
  companyInfo: {
    queryKey: ['companyInfo'],
    queryFn: api.getCompanyInfo
  },
};
