import { User } from '@/types/user';
import { Post as Info } from '@/types/salary';

export type UniformNumbers = {
  companyName: string;
  isExist: boolean;
};

export type UserType = {
  data: {
    user: User;
  };
};

export type TransactionID = {
  data: {
    transactionId: string;
  };
};

export type Payment = {
  data: {
    paymentUrl: string;
  };
};

export type Salary = {
  data: {
    title: string;
    companyName: string;
    point: number;
  };
};

export type SalaryPermission = {
  result: {
    isLocked: boolean;
    postId: string;
  };
};

export type Statistics = {
  data: {
    registeredUsers: number;
    publishedPosts: number;
  };
};

export type Post = {
  postId: string;
  title: string;
  companyName: string;
  overtime: string;
  feeling: string;
};

export type TopPost = {
  data: {
    popularPost: Post[];
    latestPost: Post[];
  };
};

export type Order = {
  result: {
    _id: string;
    orderDetails: {
      amount: number;
      packages: [
        {
          products: [
            {
              name: string;
            },
          ];
        },
      ];
    };
    createdAt: Date;
  }[];
};

export type SalaryInfo = {
  status: string;
  data: Info;
};
