// Write your solution in this file!

let driver = {}; 

function updateDriverWithKeyAndValue(driver, key, value){
  let driver2 = Object.assign(driver); 
  driver2.key = value; 
  return driver2; 
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value; 
  return driver; 
}

function deleteFromDriverByKey(driver, key){
  
}

function destructivelyDeleteFromDriverByKey(driver, key){
  
}