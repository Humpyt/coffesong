"use client"

import { useState, useEffect, useRef } from "react"
import { MapPin, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

declare global {
  interface Window {
    google: any
  }
}

export default function StoreLocator() {
  const [zipCode, setZipCode] = useState("")
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`
    script.async = true
    script.defer = true
    document.head.appendChild(script)

    window.initMap = () => {
      if (mapRef.current) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 39.8283, lng: -98.5795 },
          zoom: 4,
        })
        setMap(map)
      }
    }

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search functionality here
    console.log("Searching for:", zipCode)
  }

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("Location:", position.coords)
        if (map) {
          map.setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
          map.setZoom(12)
        }
      })
    }
  }

  return (
    <div className="grid md:grid-cols-[400px_1fr]">
      {/* Search Panel */}
      <div className="p-8 bg-[#F5F1EA]">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold mb-4">FIND A COFFEE SONG NEAR YOU</h1>
          <p className="text-gray-600 mb-8">
            The freshest coffee is just a click away. Find a location, order ahead, and earn points.
          </p>

          <form onSubmit={handleSearch} className="space-y-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search by Zip Code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="w-full pl-3 pr-10 py-2"
              />
              <Button type="submit" className="absolute right-0 top-0 h-full px-3 bg-[#8B6834] hover:bg-[#725628]">
                <Search className="w-4 h-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>

            <div className="text-center">OR</div>

            <Button
              type="button"
              variant="outline"
              className="w-full flex items-center justify-center gap-2 border-[#8B6834] text-[#8B6834] hover:bg-[#8B6834] hover:text-white"
              onClick={handleUseCurrentLocation}
            >
              <MapPin className="w-4 h-4" />
              USE MY CURRENT LOCATION
            </Button>
          </form>

          <div className="mt-8 space-y-4">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#8B6834] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold">Coffee Song Original Store</h3>
                  <p className="text-sm text-gray-600">123 Main Street</p>
                  <p className="text-sm text-gray-600">Anytown, USA 12345</p>
                  <div className="mt-2">
                    <Button variant="link" className="text-[#8B6834] hover:text-[#725628] p-0 h-auto text-sm">
                      Get Directions →
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Area */}
      <div ref={mapRef} className="h-[calc(100vh-64px)] min-h-[600px]" />
    </div>
  )
}

