const supplierData = [
  {
    id: '13da6afa-7baf-4712-b016-33f0fbbc3c2a',
    supplierId: 1,
    name: 'Johnny',
    type: 'PRIVATE',
    signedTerms: true,
    vatNumber: 'GB4758653601',
    addressId: 1,
    masterUser: 1,
    createdAt: new Date('01/08/2013'),
    updatedAt: new Date(),
  },
  {
    id: '4146d201-2467-4b6e-805e-366ad24849bf',
    supplierId: 2,
    name: 'Sally',
    type: 'AGENCY',
    signedTerms: true,
    vatNumber: 'GB1234567890',
    addressId: 2,
    masterUser: 3,
    createdAt: new Date(''),
    updatedAt: new Date(),
  },
  {
    id: '963f7fa9-8a6e-4c3f-9ebc-29494d9f2ea9',
    supplierId: 3,
    name: 'Mad Maxy',
    type: 'AGENCY',
    signedTerms: false,
    vatNumber: '',
    addressId: 6,
    masterUser: 6,
    createdAt: new Date('11/11/2018'),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('suppliers', supplierData, {}),
  down: queryInterface => queryInterface.bulkDelete('suppliers', null, {}),
};
