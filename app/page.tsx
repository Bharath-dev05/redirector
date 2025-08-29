"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function Home() {
  const handleRedirect = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Quick Navigation
          </h1>
          <p className="text-gray-600 text-lg">
            Choose your destination below
          </p>
        </div>
        
        <div className="space-y-4">
          <Button
            onClick={() => handleRedirect('https://collab-code-editer.onrender.com/')}
            className="w-full h-16 text-lg font-semibold bg-blue-600 hover:bg-blue-700 transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            size="lg"
          >
            <ExternalLink className="mr-3 h-5 w-5" />
            Try Peer code
          </Button>
          
          <Button
            onClick={() => handleRedirect('https://github.com/Bharath-dev05')}
            className="w-full h-16 text-lg font-semibold bg-gray-800 hover:bg-gray-900 transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            size="lg"
          >
            <ExternalLink className="mr-3 h-5 w-5" />
            Visit GitHub
          </Button>
        </div>

        <div className="pt-8">
          <p className="text-sm text-gray-500">
            Links will open in a new tab
          </p>
        </div>
      </div>
    </div>
  )
}
