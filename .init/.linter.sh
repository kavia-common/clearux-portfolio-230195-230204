#!/bin/bash
cd /home/kavia/workspace/code-generation/clearux-portfolio-230195-230204/portfolio_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

