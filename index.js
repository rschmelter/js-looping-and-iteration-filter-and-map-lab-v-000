// Code your solution here:
function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;

  });
}

function driverNamesWithRevenueOver(driver, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {
    return driver.name;
    
  });
  
}
