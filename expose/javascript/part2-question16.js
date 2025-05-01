const statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
};

for (let prop in statistics) {
  const value = statistics[prop];
  // print value if property name starts with 'r' OR value is odd
  if (prop.startsWith('r') || value % 2 !== 0) {
    console.log(value);
  }
}
