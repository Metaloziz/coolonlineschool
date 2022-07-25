export type RequestLogin = {
  email: string;
  phone: string;
};

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
