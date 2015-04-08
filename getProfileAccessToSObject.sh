mkDir JSONProfiles
ant retrieve
bash xmlToJson.sh
node accessbuilder.js
rm -rf JSONProfiles