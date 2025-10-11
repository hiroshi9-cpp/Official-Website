#!/bin/bash
echo "🚀 Setting up Cybersecurity Portfolio dependencies..."

npm install -D tailwindcss postcss autoprefixer

npm install \
  framer-motion \
  three \
  @react-three/fiber \
  @react-three/drei \
  react-simple-typewriter \
  react-scroll \
  @emailjs/browser

npx tailwindcss init -p

echo "✅ All dependencies installed successfully!"
