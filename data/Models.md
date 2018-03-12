# Model descriptions

## Reposit
| Attribute     | Type        | Description  |
| ------------- | ----------- | ------------ |
| id            | number      | Record identifier |
| supplier_id   | number      | Reference of the supplier record that created this Reposit |
| address_id    | number      | Reference of the property address related to this Reposit|
| ppm           | number      | Price per month of the tenancy in pounds to the nearest whole number |
| headcount     | number      | Number of tenants on the tenancy agreement |
| start_date    | date        | Tenancy start date |
| end_date      | date        | Tenancy end date |
| created_at    | timestamp   | Date and time of when the record was created |

## RepositUser
| Attribute     | Type        | Description  |
| ------------- | ----------- | ------------ |
| id            | number      | Record identifier |
| reposit_id    | number      | Reference of related Reposit record |
| user_id       | number      | Reference of related User record |
| created_at    | timestamp   | Date and time of when the record was created |

## Address
| Attribute     | Type        | Description  |
| ------------- | ----------- | ------------ |
| id            | number      | Record identifier |
| line1         | string      | First line of the address |
| line2         | string      | Second line of the address (Not required)|
| town          | string      | UK town or city |
| postcode      | string      | UK postcode |
| created_at    | timestamp   | Date and time of when the record was created |

## Supplier
| Attribute     | Type        | Description  |
| ------------- | ----------- | ------------ |
| id            | number      | Record identifier |
| name          | string      | The name of the letting agency or organisation |
| type          | string/enum | The type of supplier i.e. "AGENCY" or "PRIVATE" |
| signed_terms  | boolean     | Whether the supplier has signed our supplier agreement |
| vat_number    | text        | The supplier's vat number. A 9 digit number with the 'GB' prefix (Not required) |
| address_id    | number      | Reference of the business address of the supplier |
| master_user   | number      | Reference of the user object associated with this supplier account |
| created_at    | timestamp   | Date and time of when the record was created |

## User
| Attribute     | Type        | Description  |
| ------------- | ----------- | ------------ |
| id            | number      | Record identifier |
| first_name    | string      | User's first name |
| last_name     | string      | User's last name |
| email         | string      | User's email address |
| date_of_birth | date        | User's date of birth |
| type          | string/enum | The type of user account i.e. "TENANT" or "SUPPLIER"|
| phone         | string      | User's UK phone number |
| created_at    | timestamp   | Date and time of when the record was created |

