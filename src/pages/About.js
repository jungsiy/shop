import React from 'react'
import { Outlet } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h2>about page</h2>
      <Outlet></Outlet>
    </div>
  )
}
