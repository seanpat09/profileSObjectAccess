#Profile SObject Access

Salesforce doesn't offer an easy way to view a matrix of all the fields of an SObject and the accessibility of those fields for all of the profiles. Here's a bash script you can use to quickly generate a CSV with that information.

##Dependencies
I've only tested this on Mac OSX, so you'll need to be able to run bash scripts for this to work out of the box. You'll also need:

Ant (to access to the Salesforce metadata)

	brew install ant
	
Node and the node package [xmlToJson](https://www.npmjs.com/package/xml2json)

	brew install node
	npm install xml2json
	
##How To Use
Clone this repository and add a build.properties file to the root folder to hold your credentials with the following content:

	username = YOUR_LOGIN	
	password = YOUR_PASSWORD_PLUS_SECURITY_TOKEN
	endpoint = login.salesforce.com //Use test.salesforce.com if it's a sandbox

Open the package.xml file in the src folder and replace **Account** on line 4 with the name of the SObject you want to work with. If you put more than one object in there, the resulting csv header will contain the fields all of the objects. Also, this needs some optimization because you might run into this error:

	Error: ENFILE, file table overflow

In terminal, go to the root folder of this repository and run this command:

	bash getProfileAccessToSObject.sh
	
If all went well, then a file called accessibility.csv will be in the root folder of your project!