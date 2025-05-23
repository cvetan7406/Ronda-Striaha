import type React from "react"
import { Camera, Eye } from "lucide-react"

interface VirtualTourProps {
  imageUrl?: string
  tourUrl?: string
}

const VirtualTour: React.FC<VirtualTourProps> = ({ imageUrl, tourUrl }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {imageUrl && (
        <div className="mb-4">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt="Virtual Tour"
            className="rounded-lg shadow-md"
            style={{ maxWidth: "300px", maxHeight: "200px" }}
          />
        </div>
      )}

      {tourUrl ? (
        <a
          href={tourUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          <Eye className="mr-2" size={20} />
          Take a Virtual Tour
        </a>
      ) : (
        <div className="text-gray-500">
          <Camera className="mr-2 inline-block" size={20} /> No virtual tour available
        </div>
      )}
    </div>
  )
}

export default VirtualTour
