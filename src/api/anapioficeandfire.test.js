/* eslint-env jest */

const apiIceAndFire = require('./anapioficeandfire')

jest.mock('./anapioficeandfire', () => {
    const originalModule = jest.requireActual('./anapioficeandfire');
    const resp = require('../__mocksData__/api.json')
    return {
        __esModule: true,
        ...originalModule,
        getListOfRestEndPoint: function () {
            return new Promise((resolve, reject) => {
                resolve({entity: resp})
            })
        },
    };
});

describe('#getBooks() using Promises', () => {
    it('should load books data', () => {
        apiIceAndFire.getListOfRestEndPoint().then((data) => {
            expect(data.entity.books).toBeDefined();
            expect(data.entity.books).toEqual(
              "https://www.anapioficeandfire.com/api/books"
            );
            expect(data.entity.houses).toBeDefined();
            expect(data.entity.houses).toEqual(
              "https://www.anapioficeandfire.com/api/houses"
            );
          });
    })
})

describe("get Hause by", () => {
    it("should load hauses data", () => {
      apiIceAndFire.getListOfRestEndPoint().then((data) => {
        expect(data.entity.houses).toBeDefined();
        expect(data.entity.houses).toEqual(
          "https://www.anapioficeandfire.com/api/houses"
        );
      });
    });
  });