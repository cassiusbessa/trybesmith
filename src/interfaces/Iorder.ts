interface Iorder {
  id: number,
  userId: number,
  productsIds: Array<number>,
}

interface IoriginalOrder {
  id: number,
  userId: number,
  productsIds: number,

}

export {
  Iorder, 
  IoriginalOrder, 
};