@echo off
title AR Mini Museum Server
cd /d "%~dp0"
echo ========================================================
echo        AR MINI MUSEUM - LOCAL SERVER LAUNCHER
echo ========================================================
echo.
echo Starting local web server at http://localhost:8000 ...
echo Opening your default browser...
echo.
echo [!] Keep this command window open while exploring the museum.
echo [!] Press Ctrl+C to stop the server when finished.
echo.

start http://localhost:8000
node server.js
pause
