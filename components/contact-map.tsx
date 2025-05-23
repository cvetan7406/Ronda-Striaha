"use client"

export default function ContactMap() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-96">
      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 relative">
        {/* Simulated map */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center opacity-30"></div>

        {/* Map marker */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-6 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-2 rounded shadow-lg text-sm font-medium whitespace-nowrap">
            Rodna Striha School
          </div>
        </div>

        {/* Map controls */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <button className="bg-white p-2 rounded shadow hover:bg-gray-50 transition-colors">
            <span className="text-lg font-bold">+</span>
          </button>
          <button className="bg-white p-2 rounded shadow hover:bg-gray-50 transition-colors">
            <span className="text-lg font-bold">−</span>
          </button>
        </div>

        {/* Directions link */}
        <div className="absolute bottom-4 left-4">
          <a
            href="https://maps.google.com/?q=Epaminonda+7,+Nicosia+1076,+Cyprus"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-4 py-2 rounded text-sm hover:bg-primary/90 transition-colors"
          >
            Get Directions
          </a>
        </div>
      </div>
    </div>
  )
}
