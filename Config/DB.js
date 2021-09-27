/*
 Created by jawad on 09/26/2021.
*/
/*
| DB.js Contain all configuration related to database
| Name: Name is database name.
| url : Mongodb url must end on forward slash e.g(localhost:27017/)
*/

module.exports = {
	
	/*
	|name is the name of DB.
	|Set DB name without any forward slash in it.
	*/

	name : "test_image",


	/*
	|MongoDB url no need to change that if you are going to use MongoDB
	|Avoid to remove anything in this url.
	*/

	url  : "mongodb://127.0.0.1:27017/"

}