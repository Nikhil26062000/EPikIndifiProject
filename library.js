   // Name : NIKHIL RAJ
   // Roll : 1928041

   // Global Variables
   var i = 1;
   var variable;
   var count = 0;
   var temp;
   var cell3, cell0, newcell0;
   var user = document.querySelector("#logged-user").value;
   var row1_title = "<input type='text'  id='input_id' placeholder='Add title'>"
   var row1_author = "<input type='text'  id='author_id' placeholder='Author'>"
   var row1_button = "<input type='button'  id='button_id' value='Add Book' onclick='Add_book()'>"
   var return_button = "<input type='button'  id='Return_button_id' value='Return' onclick='Return_button_Clicked(this)'>"
   var borrow_button = "<input type='button'  id={index} value='Borrow' onclick='Borrow_button_Clicked(this)'>"
   var tab = document.getElementById("info-table").rows.length;

   // Existing Users

   var UserBox = ["UserA", "UserB", "UserC", "UserD"];
   var books = [

    {
      "id": 1,
      "name": "Book1",
      "author": "Author1",
      "lender": "UserC",
      "Borrower": "UserB",
      "Action": null

    },

    {
      "id": 2,
      "name": "Book2",
      "author": "Author2",
      "lender": "UserC",
      "Borrower": null,
      "Action": null

    },
    {
      "id": 3,
      "name": "Book3",
      "author": "Author3",
      "lender": "UserD",
      "Borrower": "UserC",
      "Action": null

    },
    {
      "id": 4,
      "name": "Book4",
      "author": "Author4",
      "lender": "UserA",
      "Borrower": null,
      "Action": null

    },
    {
      "id": 5,
      "name": "Book5",
      "author": "Author5",
      "lender": "UserA",
      "Borrower": null,
      "Action": null

    },
    {
      "id": 6,
      "name": "Book6",
      "author": "Author6",
      "lender": "UserB",
      "Borrower": "UserA",
      "Action": null

    },
   ]

   document.querySelector("#logged-in-user-name").innerHTML = "No User Logged in ";

   for (let i = 1; i <= 6; i++) {
    var table = document.getElementById("info-table");
    var row = table.insertRow(-1);
    row.className = "Row_class";
    var Static_cell0 = row.insertCell(0);
    var Static_cell1 = row.insertCell(1);
    var Static_cell2 = row.insertCell(2);
    var Static_cell3 = row.insertCell(3);
    var Static_cell4 = row.insertCell(4);
    var Static_cell5 = row.insertCell(5);

    Static_cell0.innerHTML = books[i - 1].id;
    Static_cell1.innerHTML = books[i - 1].name;
    Static_cell2.innerHTML = books[i - 1].author;
    Static_cell3.innerHTML = books[i - 1].lender;

    if (books[i - 1].Borrower === null) {

      Static_cell4.innerHTML = "-";



    } else {
      Static_cell4.innerHTML = books[i - 1].Borrower;

    }

    Static_cell5.innerHTML = "-";
   }

   // Login Fuction

   function changeLoggedInUser() {
    user = document.querySelector("#logged-user").value;
    if (UserBox.includes(user)) {

      document.querySelector("#logged-in-user-name").innerHTML = "Logged in as " + user;
      temp = user;


      if (count == 0) {
        var table = document.getElementById("info-table");
        var row = table.insertRow(books.length + 1);
        cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);


        cell0.innerHTML = tab;
        cell1.innerHTML = row1_title;
        cell2.innerHTML = row1_author;
        cell3.innerHTML = user;
        cell4.innerHTML = "-";
        cell5.innerHTML = row1_button;
        count++;

      }

      if (count > 0) {
        cell3.innerHTML = user;
        cell0.innerHTML = books.length + 1;
        tableRefresh();
      }

    } else {
      alert("Please enter valid user. \nIf you write inorrect user name then you will not able to add books.");

    }

   }

   // Addbook Fuction

   function Add_book() {
    var newUser = document.getElementById("logged-user").value
    var table = document.getElementById("info-table");
    var check = document.getElementById("logged-in-user-name").innerHTML;

    if (temp === newUser) {
      var bookTitle = document.getElementById("input_id").value.trim();
      var bookAuthor = document.getElementById("author_id").value.trim();

      if ((bookTitle.length > 0) && (bookAuthor.length > 0)) {
        var row = table.insertRow(books.length + 1);
        row.className = "Row_class";
        newcell0 = row.insertCell(0);
        var newcell1 = row.insertCell(1);
        var newcell2 = row.insertCell(2);
        var newcell3 = row.insertCell(3);
        var newcell4 = row.insertCell(4);
        var newcell5 = row.insertCell(5);

        newcell0.innerHTML = books.length + 1;
        newcell1.innerHTML = bookTitle;
        newcell2.innerHTML = bookAuthor;
        newcell3.innerHTML = newUser;
        newcell4.innerHTML = "-";
        newcell5.innerHTML = "-";


        let newBook = {
          id: books.length + 1,
          name: bookTitle,
          author: bookAuthor,
          lender: user,
          Borrower: null,
          action: null,

        };
        books.push(newBook);
      }
      cell0.innerHTML = books.length + 1;

    } else {
      alert("Please click on log in button with valid user name to Add books.");
    }
    document.getElementById("input_id").value="";
    document.getElementById("author_id").value="";

   }

   function tableRefresh() {
    for (let i = 0; i < books.length; i++) {
      if (books[i].lender !== user) {
        if (books[i].Borrower === user) {
          var tr = document.querySelectorAll(".Row_class")[i].children[5];
          tr.innerHTML = return_button;
        } else if (books[i].Borrower === null) {
          var tr = document.querySelectorAll(".Row_class")[i].children[5];
          tr.innerHTML = borrow_button;
        } else {
          var tr = document.querySelectorAll(".Row_class")[i].children[5];
          tr.innerHTML = "-";
        }
      } else {
        var tr = document.querySelectorAll(".Row_class")[i].children[5];
        tr.innerHTML = "-";
      }
    }
   }

   //Function for borrow action

   function Borrow_button_Clicked(btn) {
    if (UserBox.includes(user)) {
      var btn_row = btn.parentNode.parentNode;
      var btn_id = Number(btn_row.children[0].innerText) - 1;
      books[btn_id].Borrower = user;
      btn_row.children[4].innerHTML = user;
      var btn_cell = btn.parentNode;
      btn_cell.innerHTML = return_button;
    } else {
      alert("Please Login with correct user name");
    }
   }

   // Function for return action

   function Return_button_Clicked(btn2) {
    if (UserBox.includes(user)) {
      var btn2_row = btn2.parentNode.parentNode;
      var btn2_id = Number(btn2_row.children[0].innerText) - 1;
      books[btn2_id].Borrower = null;
      books[btn2_id].borrowed = false;
      btn2_row.children[4].innerHTML = "-";
      var btn2_cell = btn2.parentNode;
      btn2_cell.innerHTML = borrow_button;
    } else {
      alert(" Please Login with correct user name");
    }
   }