for path in src/profiles/*;
do
    filename=$(basename "$path")
    jsonFile=${filename%.profile}

    echo "Converting $filename to JSON..."
    xml2json < "$path" > "JSONProfiles/$jsonFile.json"
done