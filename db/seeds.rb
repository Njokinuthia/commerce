# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
  mary = User.create(username:"mary" , email:"mary@gmail.com", password:"mary") 
  joseph = User.create(username:"joseph" , email:"joseph@gmail.com", password:"joseph")  
  njoki = User.create(username:"njoki" , email:"njoki@gmail.com", password:"njoki")  

 
  sell1 = Item.create(description:"Two seater", condition:"new" , price:35000,image_url:"https://images.unsplash.com/photo-1491926626787-62db157af940?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fGZ1cm5pdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60", user_id:1,category:"sofas")
  sell2 = Item.create(description:"Eames chair", condition:"new" , price:6000,image_url:"https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZ1cm5pdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60", user_id:2,category:"chairs")
  sell3 = Item.create(description:"Bed", condition:"new" ,  price:50000,image_url:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVkfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60", user_id:1,category:"beds")
  sell4 = Item.create(description:"Bed", condition:"used for 2 months" , price:68000,image_url:"https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVkfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60", user_id:2,category:"beds")
  sell5 = Item.create(description:"Office chair", condition:"new" ,  price:15000,image_url:"https://images.unsplash.com/photo-1541558869434-2840d308329a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwY2hhaXJ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", user_id:2,category:"chairs")
  sell6 = Item.create(description:"Two Seater", condition:"new" ,  price:25000,image_url:"https://images.unsplash.com/photo-1573866926487-a1865558a9cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c29mYXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60", user_id:1,category:"beds")
  sell7 = Item.create(description:"Love seat", condition:"used for 2 months" , price:28000,image_url:"https://images.unsplash.com/photo-1549187774-b4e9b0445b41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZ1cm5pdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60", user_id:3,category:"sofas")
  sell8 = Item.create(description:"One Seater", condition:"old" ,  price:70000,image_url:"https://images.unsplash.com/photo-1567538096621-38d2284b23ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGZ1cm5pdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60", user_id:3,category:"sofas")
  sell9= Item.create(description:"Fancy seat", condition:"new" ,  price:23000,image_url:"https://images.unsplash.com/photo-1634497885778-152eb6fd543d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGZ1cm5pdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60", user_id:3,category:"sofas")





puts "✅ Done seeding!"
