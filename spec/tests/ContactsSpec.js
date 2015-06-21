
describe("Contacts Test Suite", function(){

	//var request = require('request');
	var request = require('C:/Program Files/nodejs/node_modules/npm/node_modules/request')
	var base_url = "http://127.0.0.1:3000";
	var contacts_url = base_url + "/contacts";

	describe("hello world", function(){

		it("hello world",function(done){
		    
		    request.get(base_url, function(error, response, body){

				expect(response.statusCode).toBe(200);
				//expect(body).toBe("Hello World");

				done();
		    });
		});

	});

	describe("create update contact", function(){
		var idCreated;

		it("should create contact",function(done){

			var contact = new Object();
			contact.firstName = "jagan";
			contact.lastName = "peri";
			contact.phone = "23002300";

			//console.log(JSON.stringify(contact));
		    
		    request.post({url: contacts_url,
		    			  body: contact,
		    			  json: true
		    			}, 
		    		    function(error, response, body){

							expect(response.statusCode).toBe(200);
							//console.log(body);
							idCreated = body;
							done();
					    });
		});

		it("should retrieve contact",function(done){

			request.get({
							url: contacts_url + "/" + idCreated,
							json: true
						},
		    		    function(error, response, body){

							expect(response.statusCode).toBe(200);
							//console.log(body);
							expect(body.firstName).toBe("jagan");
							done();
					    });
		});
		it("should update contact",function(done){

			var updatedContact = new Object();
			updatedContact.firstName = "jagan-updated";
			console.log("----------------------------"+idCreated);
			request.put({
							url: contacts_url + "/" + idCreated,
							body: updatedContact,
							json: true
						},
		    		    function(error, response, body){

							expect(response.statusCode).toBe(200);
							console.log(body);
							expect(body.firstName).toBe("jagan-updated");
							expect(body.phone).toBe("23002300");
							done();
					    });
		});
	});

	//TODO: Fill out the test case below that posts a message to a contact
	// and retrieves it back.
	describe("post and get message to contact", function(){
		var idCreated = 0,len;
		it("should post message to contact", function(done){
			//TODO: Write your test case here.
			var message = new Object();
			message.msg = "Hello this is nodeJS course";
			request.post({	url: contacts_url + "/"+idCreated+"/messages",
									body:message,
									json:true
								},
								function(error,response,body){
									
									expect(response.statusCode).toBe(200);
									len = body;
									done();

			});
		});
//TODO: Write your test case here.
		it("should get message for contact", function(done){
			request.get({
							url: contacts_url +"/"+ idCreated+"/messages",
							json: true
						},
		    		    function(error, response, body){

							expect(response.statusCode).toBe(200);
							for(var i=0;i<len;i++)
								expect(body[i].msg).toBe("Hello this is nodeJS course");
			
			done();

		});

	});
	
});

});