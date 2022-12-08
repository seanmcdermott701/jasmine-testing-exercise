
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 10000, years: 10, rate: 4.5})).toEqual('103.64');
});


it("should return a result with 2 decimal places", function() {
  let vals = {
    amount: 20000,
    years: 15,
    rate: 50
  }
  expect(calculateMonthlyPayment(vals)).toEqual('833.87')
});