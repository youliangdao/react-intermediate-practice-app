export type User = {
  id: number;
  name: string;
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
    street: string;
    suite: string;
    zipcode: string;
  };
  company: {
    name: string;
    bs: string;
    catchPhrase: string;
  };
  email: string;
  phone: string;
  username: string;
  website: string;
};
