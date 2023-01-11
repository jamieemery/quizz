import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homepage from './Views/Homepage'

const container = document.getElementById('app-root')!
const root = createRoot(container)
root.render(<Homepage/>)