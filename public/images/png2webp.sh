#!/usr/bin/env bash
# This script will get a list of all jpg and png files recursively
# and convert them all in place to webp files.
# cwebp options for max compression: `-m 6 -q 100 -z 9`

shopt -s globstar
for image in $PWD/**/*.png; do
  echo "File is $image"
  outfile=${image::-4}.webp
  echo "outfile is $outfile"
  C:\\Users\\hp\\Downloads\\Compressed\\libwebp-1.2.4-windows-x64\\bin\\cwebp.exe "$image" -q 90 -alpha_q 100 -m 6 -o "$outfile"
done

# Recursively replace all instances of .png with .webp. This is dumb regex, so it may break things.
for file in $(find content layouts -type f); do
  sed -E -i '' "s/\.png/\.webp/g" $file
done
