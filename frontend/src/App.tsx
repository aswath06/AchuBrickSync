import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface Vehicle {
  slNo: number
  vehicleNumber: string
  fitness: string
  rc: string
  pollution: string
  insurance: string
  createdAt: string
  updatedAt: string
}

function App() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await fetch('http://localhost:5054/api/vehicles')
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        const data: Vehicle[] = await res.json()
        setVehicles(data)
      } catch (err: any) {
        setError(err.message || 'Something went wrong')
      } finally {
        setLoading(false)
      }
    }

    fetchVehicles()
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        {loading && <p>Loading vehicles...</p>}

        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        {!loading && !error && vehicles.length === 0 && <p>No vehicles found</p>}

        {!loading && !error && vehicles.length > 0 && (
          <ul>
            {vehicles.map((v) => (
              <li key={v.slNo}>
                {v.vehicleNumber} | Fitness: {v.fitness} | RC: {v.rc} | Pollution: {v.pollution} | Insurance: {v.insurance}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default App
