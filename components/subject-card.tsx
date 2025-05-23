interface SubjectCardProps {
  subject: {
    id: number
    title: string
    description: string
    icon: string
    color: string
  }
}

export default function SubjectCard({ subject }: SubjectCardProps) {
  return (
    <div className="hover-card bg-white rounded-lg shadow-md p-6">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${subject.color} mb-4`}>
        <span className="text-2xl">{subject.icon}</span>
      </div>
      <h3 className="text-lg font-bold mb-2">{subject.title}</h3>
      <p className="text-muted-foreground text-sm">{subject.description}</p>
    </div>
  )
}
