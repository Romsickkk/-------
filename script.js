const btn = document.querySelector('.btn-open')
const form = document.querySelector('.fact-form')


// Toggle form visibility
btn.addEventListener("click", function () {
    if (form.classList.contains("hidden")) {
      form.classList.remove("hidden");
      btn.textContent = "Close";
    } else {
      form.classList.add("hidden");
      btn.textContent = "Share a fact";
    }
  });


  let x = 100
  //                                      JS Practise
  // const obj = {
  //   name: 'Roma',
  //   age: 24,
  //   isMaried: false,
  //   func: function () {
  //     return `My name is ${this.name} and i am ${this.age} year old and i am ${this.isMaried ? 'Married': 'Not married'}`; 
  //   }
  // }

  // const{name,age,isMaried,func} = obj
  // console.log(obj.func());

  // [2,4,6,8].forEach(function (x) {
  //   console.log(x);
  // })

  // const arr = [2,4,6,8].map(function(x){
  //   return x * 10
  // })

  // const arr = [2,4,6,8].map((x) => x * 10)
  // console.log(arr);

  //=============================================
  // const CATEGORIES = [
  //   { name: "technology", color: "#3b82f6" },
  //   { name: "science", color: "#16a34a" },
  //   { name: "finance", color: "#ef4444" },
  //   { name: "society", color: "#eab308" },
  //   { name: "entertainment", color: "#db2777" },
  //   { name: "health", color: "#14b8a6" },
  //   { name: "history", color: "#f97316" },
  //   { name: "news", color: "#8b5cf6" },
  // ];
  // let y = 0


  // CATEGORIES.map((x) => {
    
  //   if (x.name == 'history'){
  //     console.log(`We have it in ${y+1} line `);
  //     y++
  //   }else {
  //     y++
  //     return'Have no here history'; 
  //   }
  // })