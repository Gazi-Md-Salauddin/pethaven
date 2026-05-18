import React from 'react'

const FeaturedPets = () => {
  return (
    <section className="px-[5%] py-24">
      <div className="text-center mb-16">
        <p className="uppercase tracking-[0.2em] text-amber-400 text-sm mb-3">
          Our Furry Friends
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Meet Pets Ready for Adoption
        </h2>

        <p className="text-muted max-w-2xl mx-auto">
          Each one is waiting for a loving home.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <h2>All pets</h2>
      </div>
    </section>
  )
}

export default FeaturedPets