@echo off
REM TrustInn Development Mode - Windows
REM Fixes certificate issues and starts app

setlocal enabledelayedexpansion

echo Starting TrustInn Desktop...
echo.

REM Set environment variables to bypass SSL issues in development
set NODE_TLS_REJECT_UNAUTHORIZED=0
set NODE_OPTIONS=--no-warnings

REM Start the app
npm start

pause
