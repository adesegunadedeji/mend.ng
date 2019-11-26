# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
5.times do
    Mend.create(
        make: Faker::Vehicle.make,
        model:Faker::Vehicle.model,
        year: Faker::Vehicle.year,
        description: Faker::Vehicle.standard_specs,
        service: Faker::Subscription.plan 
    )
end
