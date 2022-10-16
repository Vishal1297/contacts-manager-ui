export interface Contact {
  uuid?: null | undefined | string;
  fullName?: null | undefined | string;
  dateOfBirth?: null | undefined | number;
  mobileNumber?: null | undefined | string;
  address?: null | undefined | Address
}

export interface Address {
  uuid?: null | undefined | string;
  city?: null | undefined | string;
  postalCode?: null | undefined | number;
}
