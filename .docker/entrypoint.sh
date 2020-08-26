#!/usr/bin/env bash
#
# ---------------------------------------------------------------- #
# Script Name:   entrypoint.sh
# Description:   initial config docker node.
# Github         https://github.com/alemaocastro1986
# Written by:    Andrius Cunha Castro
# Maintenance:   Andrius Cunha Castro
# ---------------------------------------------------------------- #
# Usage:         
#       $ ./entrypoint.sh
# ---------------------------------------------------------------- #
# History:       v1.0 26/08/2020, Andrius Cunha Castro:
#                - Start de program
#                
#                
#                
#                
#                
# -----------------------------------------------------------------#

cd /home/node/app
npm install
npm run start:dev