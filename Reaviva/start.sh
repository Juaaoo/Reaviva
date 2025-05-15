#!/bin/bash
cd server && npm install &
cd ../client && npm install &
wait
echo "✅ Projeto Reaviva instalado"
