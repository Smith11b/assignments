function sum(x, y){
    if (typeof x !== "number" || typeof y !== "number"){
        throw new Error("Arguments must be a number");
    } else{

        return x + y;
    }
  }

  try {
      console.log(sum("1 + 2"));
  } catch (err) {
      console.log(err.message);
  }

  var user = {username: "sam", password: "123abc"};
function login(username, password){
    if(username !== user.username || password !== user.password){
        throw new Error("That doesn't match what we have in our system");
    } else {
        console.log("Access Granted");
    }
}


    try { 
        login("sam", "123abc");
    } catch(err){
        console.log(err.message);
    }
    try { 
        login("mark", "123abc");
    } catch(err){
        console.log(err.message);
    }
    