let foodChooice = Number(prompt("enter your food number in between 1 to 5"));
switch(foodChooice) {
  case 1:
    console.log("You ordered: Masala Dosa 🥞");
    console.log("Price: ₹70");
    console.log("Tip: Served hot with chutney and sambar.");
    break;

  case 2 :
    console.log("You ordered: Chicken Biryani 🍗🍚");
    console.log("Price: ₹150");
    console.log("Note: Comes with raita and salad.");
    break;
  
  case 3 :
    console.log("You ordered: Veg Burger 🍔");
    console.log("Price: ₹80");
    console.log("Tip: Add cheese for just ₹20 more!");
    break;
  
  case 4: 
    console.log("You ordered: Paneer Pizza 🍕");
    console.log("Price: ₹120");
    console.log("Note: Contains olives, paneer, and capsicum.");
    break;
 
  case 5: 
    console.log("You ordered: Cold Coffee ☕");
    console.log("Price: ₹50");
    console.log("Tip: Add ice cream for ₹30 extra!");
    break;
  
  default :
     console.log("❌ Invalid Choice! Please select a number between 1 and 5.");
    break;

}