#!/bin/bash
# TrustInn macOS Startup Script - Fixes certificate parsing error

export NODE_TLS_REJECT_UNAUTHORIZED=0
export NODE_OPTIONS="--no-warnings"

npm start
