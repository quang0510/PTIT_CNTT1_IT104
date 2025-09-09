import React from 'react'
import { Link, Outlet } from 'react-router-dom';

export default function CustomLink() {
  return (
    <div>
      <h1>Đây là CustomLink</h1>

      <nav style={{ display: "flex", gap: "20px" }}>

        <Link to="home-page">Đi tới HomePage</Link>
        <Link to="not-found">Đi tới NotFound</Link>
      </nav>

      <Outlet />
    </div>
  )
}
