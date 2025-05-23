import Image from "next/image"

interface AgeGroupCardProps {
  group: {
    id: number
    title: string
    description: string
    image: string
    ageRange: string
  }
}

export default function AgeGroupCard({ group }: AgeGroupCardProps) {
  return (
    <div className="hover-card bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={group.image || "/placeholder.svg"}
          alt={group.title}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
          {group.ageRange}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{group.title}</h3>
        <p className="text-muted-foreground">{group.description}</p>
      </div>
    </div>
  )
}
