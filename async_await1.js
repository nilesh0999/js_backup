function test1(location) {
  return new Promise((resolve, reject) => {
    if (location == "google") {
      resolve("google say hi");
    } else {
      reject("we can only talk with google");
    }
  });
}

function test2(responce) {
  return new Promise((resolve, reject) => {
    if (responce == 10) {
      resolve(`extra information ${responce}`);
    } else {
      reject("responce is reject");
    }
  });
}

async function test3() {
    console.log('log..3')

  try {
    const responce = await test1("google");
    console.log(responce);
  }
  catch (err) {
    console.log(err);
  }

  console.log('log..4')

  try {
    const responce1 = await test2(10);
    console.log(responce1);
  } 
  catch (error) {
    console.log(error);
  }
}
console.log('log..1')

test3();

console.log('log..2')


