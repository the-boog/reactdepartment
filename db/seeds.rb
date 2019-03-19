10.times do
  Department.create(
    name: Faker::Commerce.department,
  )

    20.times do
      Item.create(
        name: Faker::Commerce.product_name,
        description: Faker::Hipster.sentence,
        price: Faker::Commerce.price,
        department_id: rand(1..10),
      )
    end
  end
  puts "You did it!"
