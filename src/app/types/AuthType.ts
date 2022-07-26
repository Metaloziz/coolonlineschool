export type RequestSMS = { phone: string };
export type RequestLogin = { phone: string; smsCode: number };

export type ResponseMe = {
  id: string;
  email: string;
  phone: string;
  role: string;
};

export type ResponseLogin = {
  result: {
    response: string;
  };
  data: {
    token: string;
    id: string;
  };
};

export type ResponseSMS = { code: number };
