# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
  mary = User.create(username:"mary" , email:"mary@gmail.com", password:"mary") 
  joseph = User.create(username:"joseph" , email:"joseph@gmail.com", password:"joseph")  
 
  sell1 = Item.create(description:"2 seater", condition:"used for 2 months" , price:20000,image_url:"", user_id:2,category:"sofa")
  sell2 = Item.create(description:"eames chair", condition:"new" ,  price:6000,image_url:"", user_id:2,category:"chairs")
  sell3 = Item.create(description:"twin bed", condition:"new" ,  price:50000,image_url:"", user_id:1,category:"beds")



puts "✅ Done seeding!"
